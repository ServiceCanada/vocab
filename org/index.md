# GoC institution vocabulary

List of Governement of Canada organizations based on the Finanial Administration Act Schedule I, Schedule I.1 and Schedule II.

* [Overview of federal organizations and interests](https://www.canada.ca/en/treasury-board-secretariat/services/reporting-government-spending/inventory-government-organizations/overview-institutional-forms-definitions.html)

## Namespaces

|Prefix|Namespace|Reference|
|------|---------|---------|
|gc-org:|http://vocab.canada.ca/org#|*This document*|
|skos:|http://www.w3.org/2004/02/skos/core#|[Simple Knowledge Organization System](https://www.w3.org/TR/skos-reference/)|
|rdf:|http://www.w3.org/1999/02/22-rdf-syntax-ns#|[Resource Description Framework](https://www.w3.org/TR/rdf11-primer/)|
|rdfs:|http://www.w3.org/2000/01/rdf-schema#|[RDF Schema](https://www.w3.org/TR/2014/REC-rdf-schema-20140225/)|
|owl:|http://www.w3.org/2002/07/owl#|[Web Ontology Language](https://www.w3.org/TR/owl2-overview/)|
|dct:|http://purl.org/dc/terms/|[Dublin Core - DCMI Metadata Term](http://www.dublincore.org/specifications/dublin-core/dcmi-terms/)
|schema:|http://schema.org|[Schema.org](https://schema.org/)
|pav:|http://purl.org/pav/|[PAV - Provenance, Authoring and Versioning](https://pav-ontology.github.io/pav/)

## Ministerial departments {#ministere}

Ministerial departments are established through legislation and included under Schedule I of the FAA.


```
gc-org:ministere
	a skos:Collection ;
	owl:sameAs gc-org:ministerial ;
	skos:member
		gc-org:fegc-wage, gc-org:aac-aafc, gc-org:pch ;
	rdfs:label "Ministères"@fr ;
	rdfs:label "Ministerial departments"@en ;
	skos:scopeNote "Créés par voie législative et figurent à l'annexe I de la LGFP"@fr .
```



### Term name: ```#fegc-wage``` or ```#wage-fegc``` {#fegc-wage}

* **URI:** http://vocab.canada.ca/org/#fegc-wage
* **Alternate URI:** http://vocab.canada.ca/org/#wage-fegc
* **Preferred label (fr):** Femmes et Égalité des genres Canada
* **Preferred label (en):** Women and Gender Equality Canada

<details>
<summary>View all details in Turtle notation</summary>

<pre><code>
gc-org:fegc-wage
	a skos:Concept ;
	owl:sameAs gc-org:wage-fegc ;
	dct:identifier http://vocab.canada.ca/org/his.html#1 ;
	rdfs:label "Ministère des Femmes et de l’Égalité des genres"@fr ;
	rdfs:label "Department for Women and Gender Equality"@en ;
	skos:prefLabel "Femmes et Égalité des genres Canada"@fr ;
	skos:prefLabel "Women and Gender Equality Canada"@en ;
	foaf:homepage "https://cfc-swc.gc.ca" .

</code></pre>

</details>



### Term name: ```#aac-aafc``` or ```#aafc-aac``` {#aac-aafc}

* **URI:** http://vocab.canada.ca/org/#aac-aafc
* **Alternate URI:** http://vocab.canada.ca/org/#aafc-aac
* **Preferred label (fr):** Agriculture et Agroalimentaire Canada
* **Preferred label (en):** Agriculture and Agri-Food Canada

<details>
<summary>View all details in Turtle notation</summary>

<pre><code>
gc-org:aac-aafc
	a skos:Concept ;
	owl:sameAs gc-org:aafc-aac ;
	dct:identifier http://vocab.canada.ca/org/his.html#2 ;
	rdfs:label "Ministère de l’Agriculture et de l’Agroalimentaire"@fr ;
	rdfs:label "Department of Agriculture and Agri-Food"@en ;
	skos:prefLabel "Agriculture et Agroalimentaire Canada"@fr ;
	skos:prefLabel "Agriculture and Agri-Food Canada"@en .
</code></pre>

</details>


### Term name: ```#pch``` {#pch}

* **URI:** http://vocab.canada.ca/org/#pch
* **Preferred label (fr):** Patrimoine canadien
* **Preferred label (en):** Canadian Heritage

<details>
<summary>View all details in Turtle notation</summary>

<pre><code>
gc-org:pch
	a skos:Concept, schema:GovernmentOrganization ;
	pav:hasCurrentVersion http://vocab.canada.ca/org/his/#3 ;
	rdfs:label "Ministère du Patrimoine canadien"@fr ;
	rdfs:label "Department of Canadian Heritage"@en ;
	skos:prefLabel "Patrimoine canadien"@fr ;
	skos:prefLabel "Canadian Heritage"@en ;
	skos:altLabel "pch" ;
	pav:version "1.0.0" .
</code></pre>

</details>


## To be continued...

Helper document: https://docs.google.com/spreadsheets/d/1-MR5M1tPsRjDdMxY3fMayuVT2N1PiiGX-lfY6JxkqBA/edit#gid=1344881190

Need to define the case when a naming/reference changes or get deprecated
Need to define how to manage naming collision/ambiguity - https://www.w3.org/2002/12/rdf-identifiers/, dcterms:hasVersion, dcterm:identifier, dcterm:isReplacedBy, pav:hasCurrentVersion, pav:version

Department of Citizenship and Immigration
Ministère de la Citoyenneté et de l’Immigration

Department of Employment and Social Development
Ministère de l’Emploi et du Développement social

Department of Finance
Ministère des Finances

Department of Fisheries and Oceans
Ministère des Pêches et des Océans

Department of Foreign Affairs, Trade and Development
Ministère des Affaires étrangères, du Commerce et du Développement

Department of Health
Ministère de la Santé

Department of Indian Affairs and Northern Development
Ministère des Affaires indiennes et du Nord canadien

Department of Industry
Ministère de l’Industrie

Department of Justice
Ministère de la Justice

Department of National Defence
Ministère de la Défense nationale

Department of Natural Resources
Ministère des Ressources naturelles

Department of Public Safety and Emergency Preparedness
Ministère de la Sécurité publique et de la Protection civile

Department of Public Works and Government Services
Ministère des Travaux publics et des Services gouvernementaux

Department of the Environment
Ministère de l’Environnement

Department of Transport
Ministère des Transports

Treasury Board
Conseil du Trésor

Department of Veterans Affairs
Ministère des Anciens Combattants

Department of Western Economic Diversification
Ministère de la Diversification de l’économie de l’Ouest canadien
