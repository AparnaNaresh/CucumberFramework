$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/formatoption.feature");
formatter.feature({
  "line": 1,
  "name": "login",
  "description": "",
  "id": "login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "logintoapp",
  "description": "",
  "id": "login;logintoapp",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enters credentials",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user sign in success",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});