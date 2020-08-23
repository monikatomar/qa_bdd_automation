@newsLetterSubscribe
Feature: NewsLetter Subcription by Customer

Scenario Outline: Customer wants to test the NewsLetter Subscription for Trivago Magzine

Given User has opened the Trivago Magzine site
And User sees the newsletter subscribe field
When User provides the email Address as "<email_ID>"
And  User clicks on Inspire me button
Then User sees the successful <message> message

Examples:
|email_ID | message|
|monikasinghtomar@gmail.com |You are now checked-in!|