package step_Definitions;

import helpers.CommonUtils;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import junit.framework.Assert;
import page_Objects.LoginPage;
import page_Objects.RegistrationPage;

public class LoginSteps extends CommonUtils {
	LoginPage lp = new LoginPage();
	RegistrationPage createAPage = new RegistrationPage();


	@When("^user clicks on Signin button with (.*) and (.*)$")
	public void user_clicks_on_signin_button_with(String email, String password) {

		lp.emailfield(email);
		lp.nextbtn();
		lp.passwordfield(password);
		lp.signinbtn();
	}

	@Then("^user should navigate to home page (.*)$")
	public void user_should_navigate_to_home_page(String status) {
		if (status.equals("passed")) {
		String title = createAPage.pagetitle();
		System.out.println(title);
		Assert.assertEquals(lp.homePtitle, title);
		}else {
			String errortxt = lp.erroemessage();
			System.out.println(errortxt);
			Assert.assertEquals(lp.erroemessage, errortxt);
		}
		

	}
}
