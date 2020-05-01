package cucumberOptions;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions
(
		features="src/test/java/features", glue="stepDefinitions",format= {"pretty","html:target"},dryRun=false, monochrome=true)

//dryRun-- to check for every step in feature there exists respective annotation in stepDefinition File
//set it to True and Run in console it will show which stepDefinition annotation is missed
// if it is false it will run our test cases



//monochrome= true display the console in readable format
public class TestRunner {
	
	

}
