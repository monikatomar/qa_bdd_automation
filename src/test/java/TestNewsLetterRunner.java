package test.java;

import org.junit.runner.RunWith;

import cucumber.api.junit.Cucumber;
import cucumber.api.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(format={"pretty","html:reports/test-report"},
glue="main.java",
features = {"src/test/features"},
tags= "@newsLetterSubscribe")
public class TestNewsLetterRunner {
	
}
