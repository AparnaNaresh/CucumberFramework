package cucumberOptions;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions
(
		features="src/test/java/features/Tags.feature",
		glue="stepDefinitions",
		format= {"pretty","html:target","json:target/jsons"},// format- to generate different types of reports
		dryRun=false,
		monochrome=true,//monochrome= true display the console in readable format
		strict=true // strict = true means if step definition is pending/not present the test execution will be failed
		,tags={"@Smoke , @Sanity , @Regression"}
		
		)

//dryRun-- to check for every step in feature there exists respective annotation in stepDefinition File
//set it to True and Run in console it will show which stepDefinition annotation is missed
// if it is false it will run our test cases


//tags OR is represented by ,strings separated by , in only 1 double quotes
// tags AND, {"@Smoke","@Sanity"}\\

//ignore or skip tags --- ~ before tags 

// hooks are for defining pre & post conditions



public class TestRunner {
	
	

}
