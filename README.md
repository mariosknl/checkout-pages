# Checkout Pages

This is my version of the checkout pages. The User should enter his/her contact information, the shipping address for the product, the billing information for the invoice, and lastly, his/her credit card information. After submitting the form and since there are no errors, you should check the console and see the information that is sent to the backend such as the contact information, shipping address, billing information, credit card details, and the cart items. I deployed the website to Netlify so I can ensure that everything is working perfectly in production mode and also to be sure to check it out in different screen sizes. Below you can find the live link.

## BUILD WITH

- ReactJS
- Redux
- Storybook
- Cypress Testing Framework
- React-Redux
- Formik
- Yup
- React Hooks
- Redux/Toolkit
- Styled Components
- Card/Validator
- Perfect-Scrollbar

## Live Link

[Checkout Pages](https://clever-brahmagupta-505fa5.netlify.app/)

## Usage

git clone `git@github.com:mariosknl/checkout-pages.git`

`npm install`

`git checkout development`

`npm start`

## Storybook

`npm run storybook`

A new tab on the browser will open at `localhost:6006`. At the sidebar, you can see all the elements used in the project in categories. There is a <b>Form</b> story that includes at least one of the components inside. There is also a <b>Forms</b> story folder which includes 3 different forms used individually in the main project form.

If we want to publish the storybook and share it with users that don't have the permission to see this repository and run the above command, we have to do something different. Please submit an issue so I can give you the proper instruction on how this can be done.

## Run Tests

`npx cypress open`

Choose an integration test file from the browser window to see the test execution live in the new window.

## AUTHOR

- Github: [@mariosknl](https://github.com/mariosknl)
- Twitter: [@mariosknl](https://twitter.com/MariosKnl)
- Linkedln: [marios-kanellopoulos](https://www.linkedin.com/in/marios-kanellopoulos)
- Portfolio: [marios-kanellopoulos](https://marioskanellopoulos.com/)
