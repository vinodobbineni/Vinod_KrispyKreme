package step_Definitions;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.WebDriverWait;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

import page_Objects.RegistrationPage;

public class CreateAccountSteps {
	WebDriverWait wait;
	// private SignUpPage snpage;
	public static WebDriver driver;

	public CreateAccountSteps() {
		this.driver = Hooks.getDriver();
		PageFactory.initElements(driver, this);
		wait = new WebDriverWait(driver, 60);

	}

	RegistrationPage createAPage = new RegistrationPage();

	@Given("Open the browser with url")
	public void open_the_browser_with_url() throws InterruptedException {
		createAPage.dwait();
		createAPage.acceptcookies();

	}

	@Given("user clicks on the My Account Icon")
	public void user_clicks_on_the_My_Account_Icon() {
		createAPage.myaccountIcon();
	}

	@And("user clicks on create account link")
	public void user_clicks_on_create_account_link() {
		createAPage.createaccountlink();
	}

	@And("^user enter (.*),(.*) and (.*)$")
	public void user_enters(String fname, String lname, String email) {
		createAPage.firstname(fname);
		createAPage.lastname(lname);
		createAPage.email(email);
	}

	@And("^user enters (.*) and (.*)$")
	public void user_enters(String password, String cpassword) {
		createAPage.password(password);
		createAPage.cnfpassword(cpassword);
	}

	@And("user clicks on privacy checkbox")
	public void user_clicks_on_privacy_checkbox() {
		createAPage.privacybox();
	}

	@When("user clicks on create account button")
	public void user_clicks_on_create_account_button() {
		createAPage.createaccountBtn();
	}

	@Then("user should be get the successful message")
	public void user_should_be_get_the_successful_message() throws InterruptedException {
		createAPage.dwait();
		String message =createAPage.succesfulmsg();
		System.out.println(message);
	}

}
