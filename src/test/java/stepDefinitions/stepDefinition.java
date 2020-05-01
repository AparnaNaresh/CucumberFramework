package stepDefinitions;

import cucumber.api.DataTable;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.junit.Cucumber;

import java.util.List;
import java.util.Map;

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
	
	// Scenario Outline and Examples for Data Driven Testing
	@When("^user enters \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_and(String arg1, String arg2) throws Throwable {
	    // Express the Regexp above with the code you wish you had
	   System.out.println(arg1);
	   System.out.println(arg2);
	}
	
	// DataTable
	@When("^user enters user credentials$")
	public void user_enters_user_credentials(DataTable arg1) throws Throwable {
	List<List<String>>	list=arg1.raw();
	int row = list.size();
	System.out.println(row);
	for (int i=0; i<row;i++)
	{
		System.out.println(list.get(i).get(0));
		System.out.println(list.get(i).get(1));
	}
			
	System.out.println(list.get(0));
	    
	}

	// when passing headers
	@When("^user entering user credentials$")
	public void user_entering_user_credentials(DataTable arg1) throws Throwable {
	    
//		Map<String,String> data=(Map<String, String>) arg1.asMaps();
		
		for(Map<String,String> data: arg1.asMaps())
		{
			System.out.println(data.get("username"));
			System.out.println(data.get("password"));
		}
	}




}