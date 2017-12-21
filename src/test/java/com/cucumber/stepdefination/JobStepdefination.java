package com.cucumber.stepdefination;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class JobStepdefination {

	WebDriver driver;
	@Given("^I go to \"([^\"]*)\" on \"([^\"]*)\"$")
	public void I_go_to_on(String arg1, String browser) throws Throwable {
		if(browser.equals("firefox"))
			driver=new FirefoxDriver();
		else if(browser.equals("chrome")){
			System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir")+"\\src\\test\\java\\com\\cucumber\\drivers\\chromedriver.exe");
			driver=new ChromeDriver();
		}
		driver.get("https://www.jobserve.com/");
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
	}

	@Then("^enter the value of keywords$")
	public void enter_the_value_of_keywords() throws Throwable {
	    driver.findElement(By.xpath("//input[@id='txtKey']")).sendKeys("Selenium");
	}

	@Then("^enter the value of locations$")
	public void enter_the_value_of_locations() throws Throwable {
		 driver.findElement(By.xpath("//input[@id='txtLoc']")).sendKeys("Chennai");
	}

	@Then("^click search button$")
	public void click_search_button() throws Throwable {
	  driver.findElement(By.xpath("//input[@id='btnSearch']")).click();
	}

	@Then("^close the Browser$")
	public void close_the_Browser() throws Throwable {
		driver.close();
	   
	}

}
