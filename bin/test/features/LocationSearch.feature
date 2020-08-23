@searchLocation
Feature: Location search on Trivago Magzine

  Scenario Outline: Customer wants to search location by using search bar
     Given User has launched the Trivago Magzine site
     When User clicks on the search icon
     Then User sees the search page
     When User enters the location as <location> in the search field
     And  User clicks on search
     Then User verifies the location search results

   Examples:
    | location |
    | Germany |

