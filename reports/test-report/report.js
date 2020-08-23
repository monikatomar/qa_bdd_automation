$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ContactForm.feature");
formatter.feature({
  "line": 2,
  "name": "Contact link feature",
  "description": "",
  "id": "contact-link-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@contactForm"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Customer wants to validate the contact link for sending query by Contact form",
  "description": "",
  "id": "contact-link-feature;customer-wants-to-validate-the-contact-link-for-sending-query-by-contact-form",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "User has opened the Trivago Magzine site url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User clicks on contact link at footer on Magzine site",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User moves to contact page and sees appropiate fields",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User provides the details as \u003ctextArea\u003e,\u003cfullname\u003e,\u003cemail\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks on confirm check box button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User clicks on Submit button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User verifies the success message as \u003cmessage\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "contact-link-feature;customer-wants-to-validate-the-contact-link-for-sending-query-by-contact-form;",
  "rows": [
    {
      "cells": [
        "textArea",
        "fullname",
        "email",
        "message"
      ],
      "line": 16,
      "id": "contact-link-feature;customer-wants-to-validate-the-contact-link-for-sending-query-by-contact-form;;1"
    },
    {
      "cells": [
        "This is a test message",
        "Monika Tomar",
        "monikatomar09@yahoo.com",
        "Message Sent Successfully!"
      ],
      "line": 17,
      "id": "contact-link-feature;customer-wants-to-validate-the-contact-link-for-sending-query-by-contact-form;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "Customer wants to validate the contact link for sending query by Contact form",
  "description": "",
  "id": "contact-link-feature;customer-wants-to-validate-the-contact-link-for-sending-query-by-contact-form;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@contactForm"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User has opened the Trivago Magzine site url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User clicks on contact link at footer on Magzine site",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User moves to contact page and sees appropiate fields",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User provides the details as This is a test message,Monika Tomar,monikatomar09@yahoo.com",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks on confirm check box button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User clicks on Submit button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User verifies the success message as Message Sent Successfully!",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ContactFormValidate.openMagzineURL()"
});
formatter.result({
  "duration": 24564457500,
  "status": "passed"
});
formatter.match({
  "location": "ContactFormValidate.clickOnContact()"
});
formatter.result({
  "duration": 6976799300,
  "status": "passed"
});
formatter.match({
  "location": "ContactFormValidate.verifyFields()"
});
formatter.result({
  "duration": 304885100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "This is a test message",
      "offset": 29
    },
    {
      "val": "Monika Tomar",
      "offset": 52
    },
    {
      "val": "monikatomar09@yahoo.com",
      "offset": 65
    }
  ],
  "location": "ContactFormValidate.enterUserData(String,String,String)"
});
formatter.result({
  "duration": 25708800600,
  "status": "passed"
});
formatter.match({
  "location": "ContactFormValidate.clickOnConfirmCheckBox()"
});
formatter.result({
  "duration": 6644136900,
  "status": "passed"
});
formatter.match({
  "location": "ContactFormValidate.clickOnSubmit()"
});
formatter.result({
  "duration": 6732920500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Message Sent Successfully!",
      "offset": 37
    }
  ],
  "location": "ContactFormValidate.verifyMessage(String)"
});
formatter.result({
  "duration": 9816868200,
  "status": "passed"
});
formatter.uri("LocationSearch.feature");
formatter.feature({
  "line": 2,
  "name": "Location search on Trivago Magzine",
  "description": "",
  "id": "location-search-on-trivago-magzine",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@searchLocation"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Customer wants to search location by using search bar",
  "description": "",
  "id": "location-search-on-trivago-magzine;customer-wants-to-search-location-by-using-search-bar",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User has launched the Trivago Magzine site",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User clicks on the search icon",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User sees the search page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User enters the location as \u003clocation\u003e in the search field",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User clicks on search",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User verifies the location search results",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "location-search-on-trivago-magzine;customer-wants-to-search-location-by-using-search-bar;",
  "rows": [
    {
      "cells": [
        "location"
      ],
      "line": 13,
      "id": "location-search-on-trivago-magzine;customer-wants-to-search-location-by-using-search-bar;;1"
    },
    {
      "cells": [
        "Germany"
      ],
      "line": 14,
      "id": "location-search-on-trivago-magzine;customer-wants-to-search-location-by-using-search-bar;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "Customer wants to search location by using search bar",
  "description": "",
  "id": "location-search-on-trivago-magzine;customer-wants-to-search-location-by-using-search-bar;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@searchLocation"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User has launched the Trivago Magzine site",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User clicks on the search icon",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User sees the search page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User enters the location as Germany in the search field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User clicks on search",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User verifies the location search results",
  "keyword": "Then "
});
formatter.match({
  "location": "LocationSearch.openMagzineUrl()"
});
formatter.result({
  "duration": 22074838300,
  "status": "passed"
});
formatter.match({
  "location": "LocationSearch.clickSearchIcon()"
});
formatter.result({
  "duration": 7666005100,
  "status": "passed"
});
formatter.match({
  "location": "LocationSearch.searchEnabled()"
});
formatter.result({
  "duration": 2555187000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Germany",
      "offset": 28
    }
  ],
  "location": "LocationSearch.enterDataSearch(String)"
});
formatter.result({
  "duration": 6936352000,
  "status": "passed"
});
formatter.match({
  "location": "LocationSearch.clickSearch()"
});
formatter.result({
  "duration": 155094400,
  "status": "passed"
});
formatter.match({
  "location": "LocationSearch.validateResults()"
});
formatter.result({
  "duration": 1204202600,
  "status": "passed"
});
formatter.uri("NewsLetterSubscription.feature");
formatter.feature({
  "line": 2,
  "name": "NewsLetter Subcription by Customer",
  "description": "",
  "id": "newsletter-subcription-by-customer",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@newsLetterSubscribe"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Customer wants to test the NewsLetter Subscription for Trivago Magzine",
  "description": "",
  "id": "newsletter-subcription-by-customer;customer-wants-to-test-the-newsletter-subscription-for-trivago-magzine",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "User has opened the Trivago Magzine site",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User sees the newsletter subscribe field",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User provides the email Address as \"\u003cemail_ID\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User clicks on Inspire me button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User sees the successful \u003cmessage\u003e message",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "newsletter-subcription-by-customer;customer-wants-to-test-the-newsletter-subscription-for-trivago-magzine;",
  "rows": [
    {
      "cells": [
        "email_ID",
        "message"
      ],
      "line": 13,
      "id": "newsletter-subcription-by-customer;customer-wants-to-test-the-newsletter-subscription-for-trivago-magzine;;1"
    },
    {
      "cells": [
        "monikasinghtomar@gmail.com",
        "You are now checked-in!"
      ],
      "line": 14,
      "id": "newsletter-subcription-by-customer;customer-wants-to-test-the-newsletter-subscription-for-trivago-magzine;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "Customer wants to test the NewsLetter Subscription for Trivago Magzine",
  "description": "",
  "id": "newsletter-subcription-by-customer;customer-wants-to-test-the-newsletter-subscription-for-trivago-magzine;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@newsLetterSubscribe"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User has opened the Trivago Magzine site",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User sees the newsletter subscribe field",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User provides the email Address as \"monikasinghtomar@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User clicks on Inspire me button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User sees the successful You are now checked-in! message",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "NewsLetterSubsription.openMagzineUrl()"
});
formatter.result({
  "duration": 30746173900,
  "status": "passed"
});
formatter.match({
  "location": "NewsLetterSubsription.verifyField()"
});
formatter.result({
  "duration": 7760031000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "monikasinghtomar@gmail.com",
      "offset": 36
    }
  ],
  "location": "NewsLetterSubsription.enterEmailAddress(String)"
});
formatter.result({
  "duration": 1037800500,
  "status": "passed"
});
formatter.match({
  "location": "NewsLetterSubsription.clickOnSubmit()"
});
formatter.result({
  "duration": 6662707800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "You are now checked-in!",
      "offset": 25
    }
  ],
  "location": "NewsLetterSubsription.verifyMessage(String)"
});
formatter.result({
  "duration": 6866922400,
  "status": "passed"
});
});