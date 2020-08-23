package main.java;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import common.BaseDriver;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

/**
 * This class is used to subscribe newsletter functionality on Trivago Magzine Site
 * @author MONIKATOMAR
 *
 */
public class NewsLetterSubsription extends BaseDriver {
	
	private WebDriver driver;
    public WebElement email;
    public WebElement submit;
    public WebElement feedbackMsg = null;
    private static String submitXPATH = "//*[@class='newsletter-submit']/button[@class='submit']";
    private static String feedBackXPATH = "//*[@class='submitted h1']";
    
    
    // Initialize the driver in constructor
    public NewsLetterSubsription(){
    	driver = getDriver();
    }

	
	@Given("^User has opened the Trivago Magzine site$")
	public void openMagzineUrl() throws Throwable {
		setDriverURL(driver);
	}
	
	@And("^User sees the newsletter subscribe field$")
	public void verifyField() throws Throwable {
		email = driver.findElement(By.name("email"));
		scrollintoviewElement(driver, email);
	}

	@When("^User provides the email Address as \"([^\"]*)\"$")
	public void enterEmailAddress(String email_ID) throws Throwable {
		email.sendKeys(email_ID);
	}

	@And("^User clicks on Inspire me button$")
	public void clickOnSubmit() throws Throwable {
		submit = driver.findElement(By.xpath(submitXPATH));
		scrollintoviewAndClickElement(driver,submit);
	}

	
	@Then("^User sees the successful (.+) message$")
	public void verifyMessage(String message) throws Throwable {
		JavascriptExecutor executor = (JavascriptExecutor) driver;
		feedbackMsg = driver.findElement(By.xpath(feedBackXPATH));
		executor.executeScript("window.scrollBy(0,-700)", "");		
		scrollintoviewElement(driver, feedbackMsg);
		
		if(feedbackMsg.getText().toUpperCase().trim().equals(message.toUpperCase().trim())){
			System.out.println("successs message:");
		}else{
			System.out.println("failed message:");
		}
	}
}
