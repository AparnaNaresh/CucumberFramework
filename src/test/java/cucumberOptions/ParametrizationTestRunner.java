package cucumberOptions;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions
(
		features="src/test/java/features/parametrization.feature", glue="stepDefinitions/Parametrization")

public class ParametrizationTestRunner {
	
	

}
