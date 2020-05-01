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
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinition.user_enters_credentials()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinition.user_signing()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 21,
  "name": "",
  "description": "",
  "id": "application-login;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "user enters \"user1\" and \"pwd1\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "user signing",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.user_is_on_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 13
    },
    {
      "val": "pwd1",
      "offset": 25
    }
  ],
  "location": "stepDefinition.user_enters_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinition.user_signing()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 22,
  "name": "",
  "description": "",
  "id": "application-login;;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "user enters \"user2\" and \"pwd2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "user signing",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.user_is_on_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "user2",
      "offset": 13
    },
    {
      "val": "pwd2",
      "offset": 25
    }
  ],
  "location": "stepDefinition.user_enters_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinition.user_signing()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 23,
  "name": "",
  "description": "",
  "id": "application-login;;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "user enters \"user3\" and \"pwd3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "user signing",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.user_is_on_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "user3",
      "offset": 13
    },
    {
      "val": "pwd3",
      "offset": 25
    }
  ],
  "location": "stepDefinition.user_enters_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinition.user_signing()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "comments": [
    {
      "line": 26,
      "value": "#Table - using DataTable, here no headers"
    }
  ],
  "line": 28,
  "name": "",
  "description": "",
  "id": "application-login;",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 29,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "user enters user credentials",
  "rows": [
    {
      "cells": [
        "user1",
        "pwd1"
      ],
      "line": 31
    },
    {
      "cells": [
        "user2",
        "pwd2"
      ],
      "line": 32
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "user signing",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.user_is_on_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinition.user_enters_user_credentials(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinition.user_signing()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "comments": [
    {
      "line": 36,
      "value": "# Table example by passing headers"
    }
  ],
  "line": 38,
  "name": "",
  "description": "",
  "id": "application-login;",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 39,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 40,
  "name": "user entering user credentials",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 41
    },
    {
      "cells": [
        "user1",
        "pwd1"
      ],
      "line": 42
    },
    {
      "cells": [
        "user2",
        "pwd2"
      ],
      "line": 43
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "user signing",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.user_is_on_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinition.user_entering_user_credentials(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinition.user_signing()"
});
formatter.result({
  "status": "skipped"
});
});