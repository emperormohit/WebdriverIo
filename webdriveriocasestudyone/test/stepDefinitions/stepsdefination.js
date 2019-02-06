const expect = require('chai').expect;
const { Given, When, Then } = require('cucumber');
require('chai').expect;


Given(/^User has navigated to Openweathermap site$/, function () {
  browser.url("https://openweathermap.org/");
  browser.maximizeWindow();
 browser.pause(10000);
});



  Then(/^User should able to see all the expected web objects$/, function () {
 
  let elem = $('#q');
    let isDisplayed = elem.isDisplayed();
    console.log('The result for search box display', isDisplayed);
    console.log(isDisplayed); 

    let elem = $('#//*[@id="searchform"]/button');
    let isDisplayed = elem.isDisplayed();
    console.log('The result for SearchButton display', isDisplayed);
    console.log(isDisplayed); 

    let elem = $('//*[@id="searchform"]/span/button');
    let isDisplayed = elem.isDisplayed();
    console.log('The result for currentLocationLink display', isDisplayed);
    console.log(isDisplayed); 

    let elem = $('//*[@id="undefined-sticky-wrapper"]/div/div/div/div[2]/ul/li[3]/a');
    let isDisplayed = elem.isDisplayed();
    console.log('The result for weatherLink display', isDisplayed);
    console.log(isDisplayed); 

    let elem = $('//*[@id="undefined-sticky-wrapper"]/div/div/div/div[2]/ul/li[4]/a');
    let isDisplayed = elem.isDisplayed();
    console.log('The result for mapslink display', isDisplayed);
    console.log(isDisplayed); 

    let elem = $('//*[@id="undefined-sticky-wrapper"]/div/div/div/div[2]/ul/li[5]/a');
    let isDisplayed = elem.isDisplayed();
    console.log('The result for guideslink display', isDisplayed);
    console.log(isDisplayed); 

    let elem = $('//*[@id="undefined-sticky-wrapper"]/div/div/div/div[2]/ul/li[6]/a');
    let isDisplayed = elem.isDisplayed();
    console.log('The result for apilink display', isDisplayed);
    console.log(isDisplayed); 

    let elem = $('//*[@id="undefined-sticky-wrapper"]/div/div/div/div[2]/ul/li[7]/a');
    let isDisplayed = elem.isDisplayed();
    console.log('The result for Price link display', isDisplayed);
    console.log(isDisplayed); 

    let elem = $('//*[@id="undefined-sticky-wrapper"]/div/div/div/div[2]/ul/li[8]/a');
    let isDisplayed = elem.isDisplayed();
    console.log('The result for Partners link display', isDisplayed);
    console.log(isDisplayed); 

    let elem = $('//*[@id="undefined-sticky-wrapper"]/div/div/div/div[2]/ul/li[9]/a');
    let isDisplayed = elem.isDisplayed();
    console.log('The result for Station Link display', isDisplayed);
    console.log(isDisplayed); 

    let elem = $('//*[@id="undefined-sticky-wrapper"]/div/div/div/div[2]/ul/li[10]/a');
    let isDisplayed = elem.isDisplayed();
    console.log('The result for widgets link display', isDisplayed);
    console.log(isDisplayed); 

    let elem = $('//*[@id="undefined-sticky-wrapper"]/div/div/div/div[2]/ul/li[11]/a');
    let isDisplayed = elem.isDisplayed();
    console.log('The result for blog link display', isDisplayed);
    console.log(isDisplayed); 

});


//The user enters invalid city "wrongcity" into the search box
When(/^The user enters invalid city "([^"]*)" into the search box$/, function(arg1) {
  browser.pause(10000);
  const input = $('//*[@id="q"]');
  input.addValue(arg1);
  console.log(input.getValue());
});

When(/^The User clicks on the search button$/, function() {
  browser.click('#searchform > button');
});

Then(/^The website suggests city is "([^"]*)"$/, function (message) {
  
  var text = browser.getText('#forecast_list_ul > div');
  message.should.equal(text);
  
});




//The user enters valid city "Mumbai" into the search box
When(/^The user enters valid city "([^"]*)" into the search box$/, function(arg1) {
  browser.pause(10000);
  const input = $('//*[@id="q"]');
  input.addValue(arg1);
  console.log(input.getValue());
});


//The website displays appropiate search results as
Then(/^The website displays appropiate search results as "([^"]*)"$/, function (message) {
  var text = browser.getText('//*[@id="forecast_list_ul"]/table/tbody/tr/td[2]/b[1]/a');
  message.should.equal(text);
});

Then(/^The website displays appropiate title as "([^"]*)"$/, function (message) {
  browser.getTitle().should.equal(message);
});
