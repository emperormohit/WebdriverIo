//import Page from './page'
//var Page = require('./page');

//class MainPage extends Page {
  class MainPage{
    /**
    * define elements
    */

    get cityNameInput()   { return browser.element('//*[@id="q"]'); }
    get SearchButton()   { return browser.element('//*[@id="searchform"]/button'); }
    get currentLocationLink ()     { return browser.element('//*[@id="searchform"]/span/button'); } 
    get weatherLink()     { return browser.element('//*[@id="undefined-sticky-wrapper"]/div/div/div/div[2]/ul/li[3]/a'); }
    get mapsLink()     { return browser.element('//*[@id="undefined-sticky-wrapper"]/div/div/div/div[2]/ul/li[4]/a'); }
    get guidesLink()     { return browser.element('//*[@id="undefined-sticky-wrapper"]/div/div/div/div[2]/ul/li[5]/a'); }
    get apiLink()     { return browser.element('//*[@id="undefined-sticky-wrapper"]/div/div/div/div[2]/ul/li[6]/a'); }
    get priceLink()     { return browser.element('//*[@id="undefined-sticky-wrapper"]/div/div/div/div[2]/ul/li[7]/a'); }
    get partnersLink()     { return browser.element('//*[@id="undefined-sticky-wrapper"]/div/div/div/div[2]/ul/li[8]/a'); }
    get stationLink()     { return browser.element('//*[@id="undefined-sticky-wrapper"]/div/div/div/div[2]/ul/li[9]/a'); }
    get widgetsLink()     { return browser.element('///*[@id="undefined-sticky-wrapper"]/div/div/div/div[2]/ul/li[10]/a'); }
    get blogLink()     { return browser.element('//*[@id="undefined-sticky-wrapper"]/div/div/div/div[2]/ul/li[11]/a'); }
    get validresult()  { return browser.element('//*[@id="forecast_list_ul"]/table/tbody/tr/td[2]/b[1]/a'); }
    get resultnotfound()     { return browser.element('//*[@id="forecast_list_ul"]/div'); }

    /**
     * define or overwrite page methods
     */
    open () {
        //super.open('https://openweathermap.org/') 
              //this will append `login` to the baseUrl to form complete URL
              //browser.open('https://openweathermap.org/');
              browser.url('https://openweathermap.org/');
        browser.pause(1000);
    }
    /**
     * your page specific methods
     */

    waitFormainpageToLoad () {
      if(!this.cityNameInput.isVisible()){
        this.cityNameInput.waitForVisible(5000);
      }
    }

    verifywebelementsvisibility () {
      console.log('cityNameInput', cityNameInput.isVisible());
      console.log('SearchButton', SearchButton.isVisible());
      console.log('currentLocationLink ', currentLocationLink.isVisible());
      console.log('weatherLink', weatherLink.isVisible());
      console.log('mapsLink', mapsLink.isVisible());
      console.log('guidesLink', guidesLink.isVisible());
      console.log('apiLink', apiLink.isVisible());
      console.log('priceLink', priceLink.isVisible());
      console.log('partnersLink', partnersLink.isVisible());
      console.log('stationLink', stationLink.isVisible());
      console.log('widgetsLink', widgetsLink.isVisible());
      console.log('blogLink', blogLink.isVisible());
      browser.pause(2000);
    }

    citysearchset (cityname) {
      this.waitFormainpageToLoad();
      this.cityNameInput.setValue(cityname); 
    }

    citysearchexecute () {
      this.SearchButton.click();
      browser.pause(2000);
    }
    getinvalidresultinfo (){
      return this.resultnotfound.getText();
    }

    getvalidresultinfo (){
      return this.validresult.getText();
    }
}

//export default new MainPage();
