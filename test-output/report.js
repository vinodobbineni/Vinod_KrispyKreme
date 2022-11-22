$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:features/createAccount.feature");
formatter.feature({
  "name": "Create Account functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@createAccount"
    }
  ]
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
  "name": "user should be get the \u003cstatus\u003e message",
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
        "confirm password",
        "status"
      ]
    },
    {
      "cells": [
        "kaim",
        "ja",
        "jewn@gmail.com",
        "Test01@12345",
        "Test01@12345",
        "Not Created"
      ]
    },
    {
      "cells": [
        "kuim",
        "ja",
        "jwn@gmail.com",
        "Test02@12345",
        "Test01@12345",
        "Created"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Open the browser with url",
  "keyword": "Given "
});
formatter.match({
  "location": "step_Definitions.CreateAccountSteps.open_the_browser_with_url()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify the user able to create new account",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@createAccount"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "user clicks on the My Account Icon",
  "keyword": "Given "
});
formatter.match({
  "location": "step_Definitions.CreateAccountSteps.user_clicks_on_the_My_Account_Icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on create account link",
  "keyword": "And "
});
formatter.match({
  "location": "step_Definitions.CreateAccountSteps.user_clicks_on_create_account_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter kaim, ja and jewn@gmail.com",
  "keyword": "And "
});
formatter.match({
  "location": "step_Definitions.CreateAccountSteps.user_enters(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters Test01@12345 and Test01@12345",
  "keyword": "And "
});
formatter.match({
  "location": "step_Definitions.CreateAccountSteps.user_enters(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on privacy checkbox",
  "keyword": "And "
});
formatter.match({
  "location": "step_Definitions.CreateAccountSteps.user_clicks_on_privacy_checkbox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on create account button",
  "keyword": "When "
});
formatter.match({
  "location": "step_Definitions.CreateAccountSteps.user_clicks_on_create_account_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be get the Not Created message",
  "keyword": "Then "
});
formatter.match({
  "location": "step_Definitions.CreateAccountSteps.user_should_be_get_the_successful_message(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Open the browser with url",
  "keyword": "Given "
});
formatter.match({
  "location": "step_Definitions.CreateAccountSteps.open_the_browser_with_url()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify the user able to create new account",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@createAccount"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "user clicks on the My Account Icon",
  "keyword": "Given "
});
formatter.match({
  "location": "step_Definitions.CreateAccountSteps.user_clicks_on_the_My_Account_Icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on create account link",
  "keyword": "And "
});
formatter.match({
  "location": "step_Definitions.CreateAccountSteps.user_clicks_on_create_account_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter kuim, ja and jwn@gmail.com",
  "keyword": "And "
});
formatter.match({
  "location": "step_Definitions.CreateAccountSteps.user_enters(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters Test02@12345 and Test01@12345",
  "keyword": "And "
});
formatter.match({
  "location": "step_Definitions.CreateAccountSteps.user_enters(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on privacy checkbox",
  "keyword": "And "
});
formatter.match({
  "location": "step_Definitions.CreateAccountSteps.user_clicks_on_privacy_checkbox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on create account button",
  "keyword": "When "
});
formatter.match({
  "location": "step_Definitions.CreateAccountSteps.user_clicks_on_create_account_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be get the Created message",
  "keyword": "Then "
});
formatter.match({
  "location": "step_Definitions.CreateAccountSteps.user_should_be_get_the_successful_message(java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"div[data-bind\u003d\u0027html: message.text\u0027]\"}\n  (Session info: chrome\u003d107.0.5304.107)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0-alpha-6\u0027, revision: \u00275f43a29cfc\u0027\nSystem info: host: \u0027LAPTOP-UQQABM88\u0027, ip: \u0027192.168.0.37\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.4.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 107.0.5304.107, chrome: {chromedriverVersion: 107.0.5304.62 (1eec40d3a576..., userDataDir: C:\\Users\\vinku\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:61899}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 030543bdbd8d7300d167d33b0eaed892\n*** Element info: {Using\u003dcss selector, value\u003ddiv[data-bind\u003d\u0027html: message.text\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:196)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:129)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:160)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:582)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:333)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:441)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:494)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:325)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy23.getText(Unknown Source)\r\n\tat page_Objects.RegistrationPage.failmsg(RegistrationPage.java:114)\r\n\tat step_Definitions.CreateAccountSteps.user_should_be_get_the_successful_message(CreateAccountSteps.java:77)\r\n\tat ✽.user should be get the Created message(file:///C:/Users/vinku/eclipse-workspace/KrispyKreme/features/createAccount.feature:15)\r\n",
  "status": "failed"
});
formatter.write("this is my failure message");
formatter.embedding("image/png", "embedded0.png", "Verify_the_user_able_to_create_new_account");
formatter.after({
  "status": "passed"
});
formatter.uri("file:features/signin.feature");
formatter.feature({
  "name": "Login Functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Verify the user is able to login with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    },
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
  "name": "user clicks on Signin button with \u003cemail\u003e and \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "user should navigate to home page \u003clogin status\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "password",
        "login status"
      ]
    },
    {
      "cells": [
        "vin.kumar097@gmail.com",
        "Vinod@2895",
        "passed"
      ]
    },
    {
      "cells": [
        "vin@gmail.com",
        "Vinod@2895",
        "falied"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Open the browser with url",
  "keyword": "Given "
});
formatter.match({
  "location": "step_Definitions.CreateAccountSteps.open_the_browser_with_url()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify the user is able to login with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@smoke"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "user clicks on the My Account Icon",
  "keyword": "Given "
});
formatter.match({
  "location": "step_Definitions.CreateAccountSteps.user_clicks_on_the_My_Account_Icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Signin button with vin.kumar097@gmail.com and Vinod@2895",
  "keyword": "When "
});
formatter.match({
  "location": "step_Definitions.LoginSteps.user_clicks_on_signin_button_with(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should navigate to home page passed",
  "keyword": "Then "
});
formatter.match({
  "location": "step_Definitions.LoginSteps.user_should_navigate_to_home_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Open the browser with url",
  "keyword": "Given "
});
formatter.match({
  "location": "step_Definitions.CreateAccountSteps.open_the_browser_with_url()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify the user is able to login with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@smoke"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "user clicks on the My Account Icon",
  "keyword": "Given "
});
formatter.match({
  "location": "step_Definitions.CreateAccountSteps.user_clicks_on_the_My_Account_Icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Signin button with vin@gmail.com and Vinod@2895",
  "keyword": "When "
});
formatter.match({
  "location": "step_Definitions.LoginSteps.user_clicks_on_signin_button_with(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should navigate to home page falied",
  "keyword": "Then "
});
formatter.match({
  "location": "step_Definitions.LoginSteps.user_should_navigate_to_home_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});