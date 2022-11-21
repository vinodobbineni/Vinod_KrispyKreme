
package page_Objects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.WebDriverWait;

import step_Definitions.Hooks;

public class LoginPage {
	WebDriverWait wait;

	public static WebDriver driver;

	public LoginPage() {
		this.driver = Hooks.getDriver();
		PageFactory.initElements(driver, this);
		wait = new WebDriverWait(driver, 60);

	}
	public String homePtitle = "Fresh Doughnuts Delivered To You | Krispy Kreme";
	public String erroemessage = "Invalid login or password.";

	@FindBy(css = "input[placeholder='Your Email *']")
	WebElement emailfield;
	@FindBy(css = ".two-part-login-action.action.primary")
	WebElement nxtBtn;
	@FindBy(css = "input[placeholder='Your Password *']")
	WebElement passwordfield;
	@FindBy(css = ".two-part-login-action.action.primary")
	WebElement signinBtn;
	@FindBy(css ="p[data-bind='html: errorMessage']")
	WebElement errormsg;

	public void emailfield(String email) {
		emailfield.sendKeys(email);
	}

	public void nextbtn() {
		nxtBtn.click();
	}

	public void passwordfield(String pwd) {
		passwordfield.sendKeys(pwd);
	}

	public void signinbtn() {
		signinBtn.click();
	}
	public String erroemessage() {
		return errormsg.getText();
	}

}
