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
 * This class is used to validate the Contact functionality on Trivago Magzine Site
 * @author MONIKATOMAR
 *
 */
public class ContactFormValidate extends BaseDriver{

	private WebDriver driver;
	public WebElement contact;
	public WebElement contactTextArea;
	public WebElement fullName;
	public WebElement email;
	public WebElement confirm;
	public WebElement submit;
	public WebElement feedBack;

	private static String contactXPATH = "//*[text()='Contact']";
	private static String contactTextAreaXPATH = "//textarea[@class='contact-msg']";
	private static String fullNameXPATH = "//*[@class='contact-input']";
	private static String email_PATH = "contact-email";
	private static String confirm_PATH = "confirm";
	private static String submitXPATH = "//*[text()='Submit']";
	private static String feedBackPATH = "//*[@class='feedback']";
	private static String submitClassPath = "contact-submit";

	// Constructor is used to define the driver class
	public ContactFormValidate(){
		driver = getDriver();
	}

	@Given("^User has opened the Trivago Magzine site url$")
	public void openMagzineURL() throws Throwable {
		setDriverURL(driver);
	}

	@When("^User clicks on contact link at footer on Magzine site$")
	public void clickOnContact() throws Throwable {
		contact = driver.findElement(By.xpath(contactXPATH));
		// scroll and click on contact link
		scrollintoviewAndClickElement(driver, contact);
		}
	
	@Then("^User moves to contact page and sees appropiate fields$")
	public void verifyFields() throws Throwable {
		//Switch to the new Contact page
		switchWindow(driver);
	}

	@When("^User provides the details as (.+),(.+),(.+)$")
	public void enterUserData(String message,
					String fullname,
					String mailID) throws Throwable {

		contactTextArea = driver.findElement(By.xpath(contactTextAreaXPATH));
		scrollintoviewElement(driver, contactTextArea);

		//Clear the field and enter text query message
		contactTextArea.clear();
		contactTextArea.sendKeys(message);

		//Clear and provide Fullname
		fullName = driver.findElement(By.xpath(fullNameXPATH));
		scrollintoviewElement(driver, fullName);
		fullName.clear();
		fullName.sendKeys(fullname);

		//Clear and provide email
		email = driver.findElement(By.id(email_PATH));
		scrollintoviewElement(driver, email);
		email.clear();
		email.sendKeys(mailID);
	}

	@And("^User clicks on confirm check box button$")
	public void clickOnConfirmCheckBox() throws Throwable {
		confirm = driver.findElement(By.id(confirm_PATH));
		// scroll and click on confirm check box
		scrollintoviewAndClickElement(driver, confirm);
	}

	@And("^User clicks on Submit button$")
	public void clickOnSubmit() throws Throwable {
		submit = driver.findElement(By.className(submitClassPath));
		// scroll and click on Submit button
		scrollintoviewAndClickElement(driver, submit);
	}

	@Then("^User verifies the success message as (.+)$")
	public void verifyMessage(String message) throws Throwable {
		JavascriptExecutor executor = (JavascriptExecutor) driver;
		feedBack = driver.findElement(By.xpath(feedBackPATH));
		executor.executeScript("window.scrollBy(0,-250)", "");
		// scroll where feedback messak message is displayed
		scrollintoviewElement(driver, feedBack);
		if(feedBack.getText().toUpperCase().trim().equals(message.toUpperCase().trim())){
			System.out.println("User verify the success message :PASSED");
		}else{
			System.out.println("User unable to verify the success message :FAILED");
		}
	}
}

