const { Given, Then } = require("cucumber");

Given("I visit the site") do
  return await this.openHomePage();
end

When("I click the {string} button") do |string|
  pending
end

When("I fill in {string} in the {string} field") do |string, string2|
  pending 
end

Then("I should see {string}") do |string|
  pending 
end