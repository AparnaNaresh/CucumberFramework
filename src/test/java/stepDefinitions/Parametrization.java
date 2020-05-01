package stepDefinitions;

import org.junit.runner.RunWith;
import cucumber.api.junit.Cucumber;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

@RunWith(Cucumber.class)
public class Parametrization {
	
	@Given("^user navigated to \"([^\"]*)\"$")
	public void user_navigated_to(String arg1) throws Throwable {
	    // Express the Regexp above with the code you wish you had
	   System.out.println(arg1);
	}

	@When("^user enters user(\\d+)@gmail.com and pwd(\\d+)$")
	public void user_enters_user_gmail_com_and_pwd(int arg1, int arg2) throws Throwable {
	    // Express the Regexp above with the code you wish you had
	    System.out.println(arg1);
	    System.out.println(arg2);
	}

	@Then("^Home Page should be displayed$")
	public void Home_Page_should_be_displayed() throws Throwable {
	    // Express the Regexp above with the code you wish you had
	    System.out.println("homepage");
	}

}
