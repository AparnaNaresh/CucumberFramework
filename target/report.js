$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Application Login",
  "description": "",
  "id": "application-login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Login to application with username and password",
  "description": "",
  "id": "application-login;login-to-application-with-username-and-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enters credentials",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user signing",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.user_is_on_login_page()"
});
formatter.result({
  "duration": 577401000,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.user_enters_credentials()"
});
formatter.result({
  "duration": 123700,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.user_signing()"
});
formatter.result({
  "duration": 118200,
  "status": "passed"
});
});