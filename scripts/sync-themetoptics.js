import fs from 'fs';
import process from 'node:process';

// Load config
process.loadEnvFile();
const fetchURL = process.env.MWS_FETCH_URL_THEMES_TOPICS;
const mwsUsername = process.env.MWS_USERNAME;
const mwsPassword = process.env.MWS_PASSWORD;
const outputPath = process.env.THEMES_TOPICS_HTML_PATH || "../src/themes-topics/index.html";
const today = new Date().toISOString().split('T')[0];

if ( !fetchURL || !mwsUsername || !mwsPassword || !outputPath ) {
	console.log( "ERR: Fetch URL and credentials must be provided for sync" );
	process.exit(1);
}


// Fetch all the themes and topic in JSON format from MWS
// Example of fetch URL: /content/cq%3Atags/gc/themes-and-topics.3.json
const response = await fetch( fetchURL, {
	headers: {
		Authorization: `Basic ${Buffer.from(
			`${mwsUsername}:${mwsPassword}`
		).toString('base64')}`
	}
});
const rawData = await response.json();


/**
 * Recursively processes the JCR tree structure into flat semantic HTML tags.
 * @param {Object} nodeObj - The current node object in the JSON
 * @param {number} depth - Current nesting depth (1 = h2, 2 = h3, etc.)
 * @param {Array} pathArray - Array of parent keys to construct the path id
 */
function processNode(nodeObj, depth = 1, pathArray = []) {
    let html = '';

    for (const key in nodeObj) {
        // Skip metadata keys. We only want to process child tag objects.
        if (
            key.startsWith('jcr:') || 
            key.startsWith('cq:') || 
            key.startsWith('sling:') || 
            typeof nodeObj[key] !== 'object'
        ) {
            continue;
        }

        const childNode = nodeObj[key];
		const parentPathArray = [...pathArray];
        const currentPath = [...pathArray, key];
        
        // Construct the slash-separated id attribute (e.g., "benefits/benefits-by-audience")
        const idPath = currentPath.join('/');
		const parentPath = parentPathArray.join('/');
        
        // Extract English and French titles
        const titleEn = childNode["jcr:title.en"] || childNode["jcr:title"] || key;
        const titleFr = childNode["jcr:title.fr"] || childNode["jcr:title"] || key;

        // Determine heading tag based on depth (Level 1 = h2, Level 2 = h3, Level 3 = h4, etc.)
        const headingTag = `h${depth + 1}`;

		// Is there a broader concept
		const broader = parentPath ? `<meta property="skos:broader" content="${parentPath}">`: ""
		
        // Append the formatted heading element
        html += `
<div id="${idPath}" resource="#${idPath}" typeof="skos:Concept">
	<${headingTag}><span lang="en">${titleEn}</span> | <span lang="fr">${titleFr}</span></${headingTag}>
	${broader}
	<meta property="skos:inScheme" content="#theme-topics">
	<dl>
		<dt>Resource id</dt><dd><code>${idPath}</code></dd>
		<dt lang="en">English label</dt><dd lang="en" property="skos:prefLabel">${titleEn}</dd>
		<dt lang="fr">Étiquette française</dt><dd lang="fr" property="skos:prefLabel">${titleFr}</dd>
	</dl>
</div>
`;

        // Recursively descend into children nodes, increasing the depth level
        html += processNode(childNode, depth + 1, currentPath);
    }

    return html;
}

// Generate the complete HTML boilerplate with the flattened tags
function generateTemplate(data) {
    const mainContent = processNode(data);

    return `---
permalink: /themes-topics
---
<!DOCTYPE html>
<html dir="ltr" lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  
  <title>Theme and topics | Thèmes et sujets</title>
  <meta name="description" content="Vocabulary of the themes and topics used on Canada.ca pages" />

  <link rel="stylesheet" href="https://cdn.design-system.canada.ca/@gcds-core/css-shortcuts@1.2.0/dist/gcds-css-shortcuts.min.css" />
  <link rel="stylesheet" href="https://cdn.design-system.canada.ca/@gcds-core/components@1.5.0/dist/gcds/gcds.css" />
  <script type="module" src="https://cdn.design-system.canada.ca/@gcds-core/components@1.5.0/dist/gcds/gcds.esm.js"></script>
</head>
<body>
<gcds-header skip-to-href="#main-content">
</gcds-header>

<gcds-container id="main-content" layout="page" tag="main">

	<h1><span lang="en"><span property="dct:title">Theme and topics</span> vocabulary</span> | <span lang="fr">Vocabulaire des <span property="dct:title">thèmes et sujets</span></span></h1>
	<meta property="dct:creator" content="Service Canada">
	<meta property="skos:hasTopConcept" content="#benefits">
	<meta property="skos:hasTopConcept" content="#business-and-industry">
	<meta property="skos:hasTopConcept" content="#canada-and-the-world">
	<meta property="skos:hasTopConcept" content="#culture-history-and-sport">
	<meta property="skos:hasTopConcept" content="#environment-and-natural-resources">
	<meta property="skos:hasTopConcept" content="#health">
	<meta property="skos:hasTopConcept" content="#how-government-works">
	<meta property="skos:hasTopConcept" content="#immigration-and-citizenship">
	<meta property="skos:hasTopConcept" content="#jobs-and-the-workplace">
	<meta property="skos:hasTopConcept" content="#money-and-finances">
	<meta property="skos:hasTopConcept" content="#national-security-and-defence">
	<meta property="skos:hasTopConcept" content="#policing-justice-and-emergencies">
	<meta property="skos:hasTopConcept" content="#public-service-and-military">
	<meta property="skos:hasTopConcept" content="#taxes">
	<meta property="skos:hasTopConcept" content="#transport-and-infrastructure">
	<meta property="skos:hasTopConcept" content="#travel-and-tourism">
	<meta property="skos:hasTopConcept" content="#science-and-innovation">
	
	<p lang="en">Vocabulary of the themes and topics used on Canada.ca pages</p>
	<p lang="fr">Vocabulaire des thèmes et sujets utilisé sur les pages de Canada.ca</p>
</div>

${mainContent}

  <gcds-date-modified>${today}</gcds-date-modified>
</gcds-container>

<gcds-footer display="full"></gcds-footer>
</body>
</html>`;
}

// Save the HTML file
const finalHtml = generateTemplate(rawData);
fs.writeFileSync( outputPath, finalHtml, 'utf8');

console.log('Successfully generated: ' + outputPath );
