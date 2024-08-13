---
permalink: /web/mws
title: Manage Web Service - Web
---

<div prefix="vann: http://purl.org/vocab/vann/">

Vocabulary use by the Manage Web Service at Service Canada by Principal Publisher.


<section id="program" resource="#program" typeof="rdf:Property">
  <h4>Program (Property)</h4>
  <p>(<strong>State:</strong> <em>Stable</em>)</p>
  <p>Property - Represent a program under the page creator (<a href="https://www.dublincore.org/specifications/dublin-core/dcmi-terms/#http://purl.org/dc/terms/creator"><code>dcterms:creator</code></a>) that is the internal subject matter expert.</p>
  <dl>
	<dt>Resource id</dt>
	<dd><code>#program</code></dd>
	<dt>Type of</dt>
	<dd><code>rdf:Property</code></dd>
	<dt>Subclass of</dt>
	<dd>
		<code>dcterms.creator</code>
		<meta property="rdfs:subPropertyOf" value="dcterms.creator" />
	</dd>
	<dt>English label</dt>
	<dd property="rdfs:label">Program</dd>
	<dt>French label</dt>
	<dd property="rdfs:label" lang="fr">Programme</dd>
	<dt>Expected use of <code>https://vocab.canada.ca/web/mws#program</code> property</dt>
	<dd>Recommended practice is to use a controlled vocabulary where available as its value.</dd>  
	<dt>Usage note</dt>
	<dd property="vann:usageNote">Use on Canada.ca to identify program, the controlled vocabulary is managed in the web content management system, the value basepath are <code>[[ Department ]]/[[ branch ]]/[[ program ]]</code>. Recommended practice is to identify the program creator with a URI. If this is not possible or feasible, a literal value that identifies the program creator may be provided.</dd>
	<dt>Template in HTML</dt>
	<dd><pre><code>&lt;meta property="https://vocab.canada.ca/web/mws#program" content="[[ Department ]]/[[ branch ]]/[[ program ]]"></code></pre></dd>
	<dt>Example in HTML</dt>
	<dd>
		<p>With one single program</p>
		<pre><code>&lt;meta property="https://vocab.canada.ca/web/mws#program" content="esdc/bibs/canada-training-benefit"></code></pre>
		<p>With multiple program</p>
		<pre><code>&lt;meta property="https://vocab.canada.ca/web/mws#program" content="esdc/bibs/canada-training-benefit">
&lt;meta property="https://vocab.canada.ca/web/mws#program" content="esdc/bibs/another-program"></code></pre>
	</dd>
  </dl>
</section>

</div>
