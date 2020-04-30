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
        System.out.println("user is no login page");
    }
    @When("^user enters username \"([^\"]*)\", password \"([^\"]*)\"and clicks on login button$")
    public void user_enters_username_password_and_clicks_on_login_button(String arg1, String arg2) throws Throwable {
        // Express the Regexp above with the code you wish you had
      System.out.println(arg1);
      System.out.println(arg2);
    }

    @Then("^home page should be displayed$")
    public void home_page_should_be_displayed() throws Throwable {
       System.out.println("home page is displayed");
      
    }

    @Then("^cards page should be displayed is \"([^\"]*)\"$")
    public void cards_page_should_be_displayed_is(String arg1) throws Throwable {
        // Express the Regexp above with the code you wish you had
       System.out.println(arg1);
    }


}