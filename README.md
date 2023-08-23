# Bandolero-Shop

https://bandolero-shop-client.vercel.app/

## Introduction

I have created a fully functional e-commerce website in this project, addressing almost all the necessary aspects for a seamless shopping experience. While a inventory control system is yet to be implemented, the site enables users to add products to both their wishlist and their shopping cart. Subsequently, they can proceed through the checkout process, which is connected to Stripe on the backend.

The interface is highly adaptable, ensuring a consistent user experience across a wide range of devices. I utilized Next.js 13 for the frontend, and for the backend, I leveraged Strapi, which also serves as an administration panel allowing administrators to easily manage products and other system aspects. TypeScript was adopted to provide the code with greater coherence and security, while styles were implemented using Tailwind CSS.

For form management, I utilized the Zod library. In summary, this project offers a complete online shopping experience, enhanced by the ability to search for products by name, a robust payment integration with Stripe, and a user menu where they can add or modify their addresses, view order history with details, update personal information, and manage their wishlist.


## Endpoints we are going to use

Theres are the endpoints that we are going to use in our proyect:

| URL                       | DESCRIPTION                                                               | PROTECTED |
| ------------------------- | ------------------------------------------------------------------------- | --------- |
| /                         | Index page where users will see the products                              |           |
| /products/:category       | Search products by categories                                             |           |
| /:product_slug            | See products details                                                      |           |
| /search?s=:product_name   | Search product by name                                                    |           |
| /profile                  | Profile page                                                              | ✅         |
| /cart?step=1              | Step one for payment                                                      | ✅         |
| /cart?step=2              | Step two for payment                                                      | ✅         |
| /cart?step=3              | Step three for payment                                                    | ✅         |
