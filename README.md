This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## [Fashion Store](fashion-store-nine-ebon.vercel.app/)

Fashion store website listing products for clients and admin pages for management.

# features

## [Shop Page](fashion-store-nine-ebon.vercel.app/)
* Shopping cart
  Users can browse and add or remove items from the shopping cart.
* Server side Product List
  Products are listed from the server, allowing them to be indexable and found by search engines.
  
## [Admin Login Page](fashion-store-nine-ebon.vercel.app/login)
* Login and register Admin functions
  Admins can register and login to manage the products list.
* Admin Management
  logged administrators can add edit or remove items from the shop.

# considerations

* When adding products, only image urls hosted on these websites are allowed:
* [Google drive](https://catbox.moe/drive.google.com)
* [Cloudinary](https://catbox.moe/cloudinary.com)
* [Catbox](https://catbox.moe/catbox.moe)

* website uses a "fake" API and it is not always active
  if a function isn't working, try reloading the page, you can also check this link, if the page returns {}, it means the API is "awoken".
  [Awake the API!](https://fashion-store-api-svnoliveira.onrender.com/)
  it's recomended to awake the API before browsing for the best experience!

* Database is periodicaly reset
  The "fake" API is hosted on a free server, and it periodically resets all data, if that happens, you may have to register an account again to access Admin functions. Also, products will reset to the base 4 when the API resets the data
  
* Admin registration is publicly open for testing purposes
  it's possible to find deleted items or edited products.

* Products added from the Admin page may take a while to appear in the shop
  Being a server side function, the main page list will only be updated when the server makes a revalidation, it's setup to every 60 seconds but sometimes it can take a little longer.
  the list will be instantly accurate in the admin/products page.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
