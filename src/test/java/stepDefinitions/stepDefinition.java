package stepDefinitions;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
public class stepDefinition {

	@Given("^user is on login page$")
	public void user_is_on_login_page() throws Throwable {
	    // Express the Regexp above with the code you wish you had
	    System.out.println("a");
	}

	@When("^user enters credentials$")
	public void user_enters_credentials() throws Throwable {
	    // Express the Regexp above with the code you wish you had
		System.out.println("ab");
	}

	@Then("^user signing$")
	public void user_signing() throws Throwable {
	    // Express the Regexp above with the code you wish you had
		System.out.println("abc");
	}


}