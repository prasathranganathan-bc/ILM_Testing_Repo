$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/login2.feature");
formatter.feature({
  "name": "First feature to test login functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@AAA"
    }
  ]
});
formatter.scenarioOutline({
  "name": "To check login is successful with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "user has logged",
  "keyword": "Given "
});
formatter.step({
  "name": "user enters \u003cuname\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "clicks the login button",
  "keyword": "And "
});
formatter.step({
  "name": "user is launched to the home page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "uname"
      ]
    },
    {
      "cells": [
        "User1"
      ]
    },
    {
      "cells": [
        "User2"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To check login is successful with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@AAA"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "user has logged",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ALoginSteps2.user_is_on_login_page_1()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "error_message": "java.lang.NullPointerException: Cannot invoke \"org.openqa.selenium.TakesScreenshot.getScreenshotAs(org.openqa.selenium.OutputType)\" because \"ts\" is null\r\n\tat stepDefinitions.ScreenShotStepDefinition.afterSite(ScreenShotStepDefinition.java:34)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user enters User1",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ALoginSteps2.user_enters_User1(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.afterstep({
  "status": "skipped"
});
formatter.step({
  "name": "clicks the login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ALoginSteps2.clicks_on_login_button_1()"
});
formatter.result({
  "status": "skipped"
});
formatter.afterstep({
  "status": "skipped"
});
formatter.step({
  "name": "user is launched to the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ALoginSteps2.user_is_navigated_to_the_home_page_1()"
});
formatter.result({
  "status": "skipped"
});
formatter.afterstep({
  "status": "skipped"
});
formatter.scenario({
  "name": "To check login is successful with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@AAA"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "user has logged",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ALoginSteps2.user_is_on_login_page_1()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "error_message": "java.lang.NullPointerException: Cannot invoke \"org.openqa.selenium.TakesScreenshot.getScreenshotAs(org.openqa.selenium.OutputType)\" because \"ts\" is null\r\n\tat stepDefinitions.ScreenShotStepDefinition.afterSite(ScreenShotStepDefinition.java:34)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user enters User2",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ALoginSteps2.user_enters_User1(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.afterstep({
  "status": "skipped"
});
formatter.step({
  "name": "clicks the login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ALoginSteps2.clicks_on_login_button_1()"
});
formatter.result({
  "status": "skipped"
});
formatter.afterstep({
  "status": "skipped"
});
formatter.step({
  "name": "user is launched to the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ALoginSteps2.user_is_navigated_to_the_home_page_1()"
});
formatter.result({
  "status": "skipped"
});
formatter.afterstep({
  "status": "skipped"
});
});