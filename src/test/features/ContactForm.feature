@contactForm
Feature: Contact link feature


Scenario Outline: Customer wants to validate the contact link for sending query by Contact form

Given User has opened the Trivago Magzine site url
When User clicks on contact link at footer on Magzine site
Then User moves to contact page and sees appropiate fields
When User provides the details as <textArea>,<fullname>,<email>
And  User clicks on confirm check box button
And  User clicks on Submit button
Then User verifies the success message as <message>

 Examples:
 | textArea | fullname | email | message |
 | This is a test message | Monika Tomar | monikatomar09@yahoo.com | Message Sent Successfully! |