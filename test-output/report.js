$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:features/createAccount.feature");
formatter.feature({
  "name": "Create Account functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify the user able to create new account",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "user clicks on the My Account Icon",
  "keyword": "Given "
});
formatter.step({
  "name": "user clicks on create account link",
  "keyword": "And "
});
formatter.step({
  "name": "user enter \u003cfirst name\u003e, \u003clast name\u003e and \u003cemail\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "user enters \u003cpassword\u003e and \u003cconfirm password\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on privacy checkbox",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on create account button",
  "keyword": "When "
});
formatter.step({
  "name": "user should be get the successful message",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "first name",
        "last name",
        "email",
        "password",
        "confirm password"
      ]
    },
    {
      "cells": [
        "kaim",
        "ja",
        "jewn@gmail.com",
        "Test01@12345",
        "Test01@12345"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Open the browser with url",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Verify the user able to create new account",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "user clicks on the My Account Icon",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user clicks on create account link",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user enter kaim, ja and jewn@gmail.com",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user enters Test01@12345 and Test01@12345",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user clicks on privacy checkbox",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user clicks on create account button",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user should be get the successful message",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});