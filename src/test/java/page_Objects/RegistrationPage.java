package page_Objects;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.WebDriverWait;

import step_Definitions.Hooks;

public class RegistrationPage {
	WebDriverWait wait;

	public static WebDriver driver;

	public RegistrationPage() {
		this.driver = Hooks.getDriver();
		PageFactory.initElements(driver, this);
		wait = new WebDriverWait(driver, 60);

	}
	
	public String homepagetitle ="Fresh Doughnuts Delivered To You | Krispy Kreme";
	public String caPagetitle= "Create New Customer Account | Krispy Kreme";
	public String adrspagetitle = "Add New Address | Krispy Kreme";
	
	@FindBy (xpath = "//button[@id='onetrust-accept-btn-handler']")
	WebElement acceptcookies;
	@FindBy (css ="button[title='My Account']")
	WebElement myaccountIcon;
	@FindBy (css ="a[data-bind=\"attr: { href: registerUrl }, i18n: 'Create account'\"]")
	WebElement createaccountlink;
	@FindBy (css="#firstname")
	WebElement firstnamefield;
	@FindBy (css="#lastname")
	WebElement lastnamefield;
	@FindBy (css ="#email_address")
	WebElement emailfield;
	@FindBy (css = "#password")
	WebElement passwordfield;
	@FindBy (css = "#password-confirmation")
	WebElement confirmpasswordfield;
	@FindBy (css = "#scommerce_gdpr_privacy_consent")
	WebElement privacycheckbox;
	@FindBy(css = "#enrol_in_loyalty")
	WebElement rewardcheckbox;
	@FindBy(css = "button[title='Create an Account'] span")
	WebElement createaccountbtn;
	@FindBy(css = "a[class='action back'] span")
	WebElement backlink;
	@FindBy(css="div[data-bind='html: message.text']")
	WebElement succesfulmessage;
	
	public void acceptcookies() {
		acceptcookies.click();
	}
	public void myaccountIcon() {
		myaccountIcon.click();
	}
	public void createaccountlink() {
		createaccountlink.click();
	}
	public void firstname(String fname) {
		firstnamefield.sendKeys(fname);
	}
	public void lastname(String lname) {
		lastnamefield.sendKeys(lname);
	}
	public void email(String email) {
		emailfield.sendKeys(email);
	}
	public void password(String pwd) {
		passwordfield.sendKeys(pwd);
	}
	public void cnfpassword(String cpwd) {
		confirmpasswordfield.sendKeys(cpwd);
	}
	public void privacybox() {
		privacycheckbox.click();
	}
	public void rewardmemberbox() {
		rewardcheckbox.click();
	}
	public void createaccountBtn() {
		createaccountbtn.click();
	}
	public void backbtn() {
		backlink.click();
	}
	public String succesfulmsg() {
		return succesfulmessage.getText();
		
	}
	public void dwait() throws InterruptedException {
		Thread.sleep(4000);
	}
	public String pagetitle() {
		return driver.getTitle();
	}
}