package main.java;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import common.BaseDriver;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

/**
 * This class is used to search location functionality on Trivago Magzine Site
 * @author MONIKATOMAR
 *
 */
public class LocationSearch extends BaseDriver{
    private WebDriver driver;
    private WebElement search;
    private WebElement searchData;
    private WebElement searchResults;
    
    private static  String searchXPATH =  "//*[@class='search-icon']";
    private static  String searchDataXPATH =  "//*[@class='input search-input']";
    private static  String searchResultsXPATH =  "//*[@class='search-results']";
    private static  String searchTitleXPATH ="//*[@class='section-title']";

    //Constructor
    public LocationSearch() {
        driver = getDriver();
    }
    
    @Given("^User has launched the Trivago Magzine site$")
	public void openMagzineUrl() throws Throwable {
		System.out.println("User has opened the Trivago Magzine site");
		setDriverURL(driver);
	}
    
    @When("^User clicks on the search icon$")
    public void clickSearchIcon() throws Exception {
        search = driver.findElement(By.xpath(searchXPATH));
        scrollintoviewAndClickElement(driver,search);
    }
    
    @Then("^User sees the search page$")
    public void searchEnabled() throws Exception {
        System.out.println("searchEnabled inside");
    	searchData = driver.findElement(By.xpath(searchDataXPATH));
    }
    
    @Given("^User enters the location as (.+) in the search field$")
    public void enterDataSearch(String data) throws Exception {
        searchData = driver.findElement(By.xpath(searchDataXPATH));
    	scrollintoviewElement(driver, searchData);
        searchData.clear();
        searchData.sendKeys(data);
    }
    @And("^User clicks on search$")
    public void clickSearch() {
        searchData.sendKeys(Keys.RETURN);
    }
    @Then("^User verifies the location search results$")
    public void validateResults() {        
    	searchResults = driver.findElement(By.xpath(searchResultsXPATH));
        String searchTitle = searchResults.findElement(By.xpath(searchTitleXPATH)).getText().trim();        
        if(searchTitle.contains("Search Results")){
        	System.out.println("Results found: PASSED");
        }else  if(searchTitle.contains("No results")){
        	System.out.println("No Results found: PASSED");
        }
      }
    }