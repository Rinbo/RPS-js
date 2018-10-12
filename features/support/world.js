const { setWorldConstructor } = require('cucumber');
const { expect } = require('chai');
const puppeteer = require('puppeteer');

const HOME_PAGE = 'http://localhost:3000'

class RPSWorld {
  constructor() {}

  async openHomePage() {
      this.browser = await puppeteer.launch();
      this.page = await this.browser.newPage();
      await this.page.goto(HOME_PAGE);
  }
  async closeHomePage() {
      await this.browser.close()
  }
  async pageHasTextContent(expectedContent) {
      const pageContent = await this.page.content()
      const actualContent = pageContent.match(expectedContent)[0]
      expect(actualContent).to.be.eq(expectedContent)
  }

  async clickOnButton(btnName) {      
      await this.page.evaluate((btnName) => {
          document.getElementById(btnName).click();
          }, btnName);  
  }

  async fillFormField(content) {
      const inputSelector = "#input-field"
      await this.page.waitForSelector(inputSelector)
      this.inputElement = await this.page.$(inputSelector)
      await this.inputElement.type(content)          
  }
}

setWorldConstructor(RPSWorld);