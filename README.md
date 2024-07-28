# Cypress E2E Testing Project

Welcome to our Cypress E2E Testing Project! This project is designed to test the functionality of login, adding products to the cart, and completing the purchase on [Sauce Demo](https://www.saucedemo.com/).

## Table of Contents

- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Scenario](#scenario)
- [References](#references)

## Getting Started

To get started with this project, you'll need to clone the repository and install the necessary dependencies. Follow the steps below to set up the project on your local machine.

### Clone the Repository

First, clone the repository using the following command:

```bash
git clone https://github.com/Daniloeng/saucedemo-cypress.git
```

## Installation

Navigate to the project directory and install the dependencies using npm:

```bash
cd saucedemo-cypress
npm install
```

This will install all the required packages, including Cypress, for running the tests.

## Usage

To open the Cypress Test Runner, use the following command:

```bash
npx cypress open
```

This will launch the Cypress interface where you can run the tests interactively.

To run the tests in headless mode, use:

```bash
npx cypress run
```

## Scenario
This project includes a comprehensive test scenario covering login, adding products to the cart, and completing the purchase.

### Scenario: Test the functionality of login, adding products to the cart, and completing the purchase
1. Login with Valid Credentials:

* Visit the page: https://www.saucedemo.com/
* Enter a valid username and password (standard_user / secret_sauce).
* Verify that the login was successful and the products page is displayed.

2. Adding Products to Cart:

* Add two products to the cart.
* Verify that the products were added correctly to the cart.

3. Complete the Purchase:

* Complete the purchase by filling in the necessary information.
* Verify that the purchase was successfully completed.

## References
For more information about Cypress and Faker.js, you can refer to the following documentation:

* [Cypress](https://docs.cypress.io/)
* [Faker.js](https://fakerjs.dev/api/faker.html)

### Contributing
If you'd like to contribute to this project, please fork the repository and use a feature branch. Pull requests are warmly welcome.

### License
This project is licensed under the MIT License - see the LICENSE.md file for details.

Happy Testing! 🎉