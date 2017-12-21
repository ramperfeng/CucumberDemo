package com.cucumber.Runner;

import org.junit.runner.RunWith;

import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@Cucumber.Options(features="src\\test\\java\\com\\cucumber\\OR\\jobportal.feature",
glue="com.cucumber.stepdefination",
format={"pretty","html:test-output"}
		
)






public class JoportalRunner {

}
