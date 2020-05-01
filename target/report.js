$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/Tags.feature");
formatter.feature({
  "line": 1,
  "name": "Tags",
  "description": "",
  "id": "tags",
  "keyword": "Feature"
});
formatter.before({
  "duration": 915800,
  "status": "passed"
});
formatter.before({
  "duration": 953900,
  "status": "passed"
});
formatter.before({
  "duration": 279900,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "smoke",
  "description": "",
  "id": "tags;smoke",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "smoke",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinition.smoke()"
});
formatter.result({
  "duration": 593528200,
  "status": "passed"
});
formatter.after({
  "duration": 448400,
  "status": "passed"
});
formatter.after({
  "duration": 308300,
  "status": "passed"
});
formatter.after({
  "duration": 261500,
  "status": "passed"
});
formatter.before({
  "duration": 297800,
  "status": "passed"
});
formatter.before({
  "duration": 252700,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "regression",
  "description": "",
  "id": "tags;regression",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "regression",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinition.regression()"
});
formatter.result({
  "duration": 252400,
  "status": "passed"
});
formatter.after({
  "duration": 286500,
  "status": "passed"
});
formatter.after({
  "duration": 832800,
  "status": "passed"
});
formatter.before({
  "duration": 127800,
  "status": "passed"
});
formatter.before({
  "duration": 238800,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "sanity",
  "description": "",
  "id": "tags;sanity",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "sanity",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinition.sanity()"
});
formatter.result({
  "duration": 150000,
  "status": "passed"
});
formatter.after({
  "duration": 85600,
  "status": "passed"
});
formatter.after({
  "duration": 113900,
  "status": "passed"
});
});