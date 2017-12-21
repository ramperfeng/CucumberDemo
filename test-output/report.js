$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src\\test\\java\\com\\cucumber\\OR\\jobportal.feature");
formatter.feature({
  "line": 1,
  "name": "SearchJobs",
  "description": "",
  "id": "searchjobs",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 13,
  "name": "jobsearch_different_location",
  "description": "",
  "id": "searchjobs;jobsearch-different-location;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I go to \"\u003curl\u003e\" on \"firefox\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "enter the value of keywords",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "enter the value of locations",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "click search button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "close the Browser",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "\u003curl\u003e",
      "offset": 9
    },
    {
      "val": "firefox",
      "offset": 20
    }
  ],
  "location": "JobStepdefination.I_go_to_on(String,String)"
});
formatter.result({
  "duration": 12802141182,
  "status": "passed"
});
formatter.match({
  "location": "JobStepdefination.enter_the_value_of_keywords()"
});
formatter.result({
  "duration": 136217483,
  "status": "passed"
});
formatter.match({
  "location": "JobStepdefination.enter_the_value_of_locations()"
});
formatter.result({
  "duration": 333509262,
  "status": "passed"
});
formatter.match({
  "location": "JobStepdefination.click_search_button()"
});
formatter.result({
  "duration": 1008967672,
  "status": "passed"
});
formatter.match({
  "location": "JobStepdefination.close_the_Browser()"
});
formatter.result({
  "duration": 12748789,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "jobsearch_different_location",
  "description": "",
  "id": "searchjobs;jobsearch-different-location;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I go to \"\u003curl\u003e\" on \"chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "enter the value of keywords",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "enter the value of locations",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "click search button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "close the Browser",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "\u003curl\u003e",
      "offset": 9
    },
    {
      "val": "chrome",
      "offset": 20
    }
  ],
  "location": "JobStepdefination.I_go_to_on(String,String)"
});
formatter.result({
  "duration": 14190548317,
  "status": "passed"
});
formatter.match({
  "location": "JobStepdefination.enter_the_value_of_keywords()"
});
formatter.result({
  "duration": 272303981,
  "status": "passed"
});
formatter.match({
  "location": "JobStepdefination.enter_the_value_of_locations()"
});
formatter.result({
  "duration": 113445023,
  "status": "passed"
});
formatter.match({
  "location": "JobStepdefination.click_search_button()"
});
formatter.result({
  "duration": 3431689872,
  "status": "passed"
});
formatter.match({
  "location": "JobStepdefination.close_the_Browser()"
});
formatter.result({
  "duration": 333529316,
  "status": "passed"
});
});