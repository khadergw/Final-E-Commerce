## IT Source - E-Commerce Website

## Website Features

IT Source is a fully functional e-commerce website that allows registered users to shop online. The website lists the products in the landing page, clicking on one of the products will take you to the product-details page which contains an image, description, product status, price, and rating, and it allows you to specify the quantity you want to add to the cart. The website allows users to enter their shipping address and to choose their prefered method of payment, it also calculates the total price of your purchase before and after tax.Once you place an order, a unique order number will be generated, and processing a payment will change the status of the payment to "paid" and wil list the purchased product in the orders history page. The website allows users to regiser and to login.


## Website Demo

!["Website Demo - Home Page"](https://github.com/khadergw/Final-E-Commerce/blob/master/screenshots/homepage.png)
!["Website Demo - Product Details Page"](https://github.com/khadergw/Final-E-Commerce/blob/master/screenshots/productpage.png)
!["Website Demo - Cart Page"](https://github.com/khadergw/Final-E-Commerce/blob/master/screenshots/shoppingcart.png)
!["Website Demo - Shipping Page"](https://github.com/khadergw/Final-E-Commerce/blob/master/screenshots/shippingpage.png)
!["Website Demo - Place Order Page"](https://github.com/khadergw/Final-E-Commerce/blob/master/screenshots/orderpage1.png)
!["Website Demo - Order Summary Page"](https://github.com/khadergw/Final-E-Commerce/blob/master/screenshots/orderpage.png)
!["Website Demo - Order History Page"](https://github.com/khadergw/Final-E-Commerce/blob/master/screenshots/orderhistory.png)
!["Website Demo - Sign in Page"](https://github.com/khadergw/Final-E-Commerce/blob/master/screenshots/signinpage.png)



## Run the website on your local machine

1- Clone repo - git@github.com:khadergw/Final-E-Commerce.git

2- $cd Final-E-Commerce

3- Install MongoDB

4- Create .env file in the root folder and set MONGODB_URL=mongodb://localhost/amazona

5- Run backend - in the root folder $npm install then $npm start

6- Run frontend - $cd frontend then $npm install and then $npm start

7- Seed users by running (http://localhost:5000/api/users/seed) in the browser

8- Seed products by running (http://localhost:5000/api/products/seed) in the browser

## Tech Stack

- React
- Redux
- Node.js
- MongoDB
- Express
