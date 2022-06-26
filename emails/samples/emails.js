/** @format */
const moment = require("moment");

function welcomeEmail(firstName) {
  return `
  <html lang="en">
  <head>
    <meta charset="UTF-8" />

    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Welcome Email</title>
    <style>
      body {
        font-size: 20px;
        background-color: #ddd;
        margin: 0;
      }
      .email-box {
        width: 60%;
        margin: auto;
        background-color: #fff;
        padding: 20px;
        border-radius: 5px;
        box-sizing: border-box;
        margin-top: 20px;
      }
      .xx-small {
        font-size: 14px;
      }
      @media screen and (max-width: 900px) {
        .email-box {
          width: 100%;
          margin: auto;
        }
      }
    </style>
  </head>
  <body>
    <div class="email-box">
      <main class="">
      <h3>Hi ${firstName || "Ripple lover😊💦"},</h3>
        <p>Welcome to Ripples! - We’re thrilled to have you here.</p>
        <p>
          We believe Ripples will help you get your product to your customers
          across the world and provide you with analytics to take your business
          to the next level. Ripples also takes away the stress of getting your
          products to customers.
        </p>
        <h4>Get started</h4>
        <p>Add products to your store and start receiving orders.</p>
        <a href="https://useripples.com/mystore">Add a Product</a>
        <div>
          <h4><small>We are here to help</small></h4>
          <div>
            <small>
              Have any questions or need more information? Just shoot us an
              <a href="mailto:contact@useripples.com">email</a>! We’re always here to
              help. Feel free to hit us up on
              <a href="https://web.facebook.com/Monaly-101778559047541"
                >Facebook</a
              >
              or <a href="https://twitter.com/usemonaly?s=11">Twitter</a>, if
              you want a fast response, too.
            </small>
          </div>
        </div>
      </main>
      <hr />
      <footer class="xx-small">
        <small> Ripples Inc. </small>
      </footer>
    </div>
  </body>
</html>
  
  `;
}
function subscriberEmail(firstName) {
  return `
  <html lang="en">
  <head>
    <meta charset="UTF-8" />

    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Welcome Email</title>
    <style>
      body {
        font-size: 20px;
        background-color: #ddd;
        margin: 0;
      }
      .email-box {
        width: 60%;
        margin: auto;
        background-color: #fff;
        padding: 20px;
        border-radius: 5px;
        box-sizing: border-box;
        margin-top: 20px;
      }
      .xx-small {
        font-size: 14px;
      }
      @media screen and (max-width: 900px) {
        .email-box {
          width: 100%;
          margin: auto;
        }
      }
    </style>
  </head>
  <body>
    <div class="email-box">
      <main class="">
      <h3>Hi ${firstName || "Ripple lover😊💦"},</h3>
        <p>We’re thrilled to have you here.</p>
        <p>
          Now that you’re an official subscriber, you’ll get exclusive content,
          early access to deals, and helpful tips.
        </p>

        <p>
          We’ll be sending a weekly round-up of things you may have missed, a monthly newsletter, daily tips for the next few weeks, etc.
        </p>
        <p>Feel free to drop us an email if you have any questions!</p>
        <div>
          <h4><small>We are here to help</small></h4>
          <div>
            <small>
              Have any questions or need more information? Just shoot us an
              <a href="mailto:contact@useripples.com">email</a>! We’re always here to
              help. Feel free to hit us up on
              <a href="https://web.facebook.com/Monaly-101778559047541"
                >Facebook</a
              >
              or <a href="https://twitter.com/usemonaly?s=11">Twitter</a>, if
              you want a fast response, too.
            </small>
          </div>
        </div>
      </main>
      <hr />
      <footer class="xx-small">
        <small> Ripples Inc. </small>
      </footer>
    </div>
  </body>
</html>
  `;
}

function resetPasswordEmail(link) {
  return `
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />
    <link
      href="//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/css/bootstrap-combined.no-icons.min.css"
      rel="stylesheet"
    />
    <link
      href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css"
      rel="stylesheet"
    />
    <link
      rel="stylesheet"
      href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
      integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
      crossorigin="anonymous"
    />

    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Reset Code Email</title>
    <style>
      body {
        font-size: 18px;
      }
      .xx-small {
        font-size: 14px;
      }
    </style>
  </head>
  <body class="container">
    <main>
      <div class="my-3">
        <p>You requested to change your password</p>
        <p>
          Click <a href="${link}">here</a> to reset
          your password or go to the link below
          <a href="${link}"
            >${link}</a
          >
        </p>

        <div class="bg-warning p-4 mt-5">
          <p>
            If you did not initiate this request, please
            <a href="mailto:contact@useripples.com">reach out to us</a>
          </p>
        </div>
      </div>
    </main>
    <footer class="p-2 text-center bg-light mt-5 xx-small">
      <small class="text-secondary"> Ripples Inc. </small>
    </footer>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
      crossorigin="anonymous"
    ></script>
  </body>
</html>
  `;
}

function sendNewOrderEmailToSeller(order) {
  let subTotal = 0;
  order.products?.forEach((product) => {
    subTotal += product.product.price * product.quantity;
  });

  let total = subTotal + order.shippingFee;
  let time = `at ${new Date(
    order.createdAt
  ).toLocaleTimeString()} on ${new Date(order.createdAt).toDateString()}`;
  return `
  <html lang="en">
  <head>
    <meta charset="UTF-8" />

    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>New Order Email for Buyer</title>
    <style>
      body {
        font-size: 16px;
        background-color: #ddd;
        margin: 0;
        font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
          sans-serif;
      }
      .email-box {
        width: 60%;
        margin: auto;
        background-color: #fff;
        padding: 20px;
        border-radius: 5px;
        box-sizing: border-box;
        margin-top: 20px;
      }
      .xx-small {
        font-size: 14px;
      }
      .card {
        border: 1px solid #ddd;
        border-radius: 5px;
      }
      .card-body {
        padding: 10px;
      }
      .card-header {
        padding: 10px;
        background: #ddd;
      }
      .row {
        display: flex;
        /* align-items: center; */
      }
      .justify-content-between {
        justify-content: space-between;
        width: 100%;
      }
      .col-6 {
        flex: 50% 0 1;
      }
      .ml-3 {
        margin-left: 1rem;
      }
      .mr-3 {
        margin-right: 1rem;
      }
      .mb-2 {
        margin-bottom: 1rem;
      }
      .mt-2 {
        margin-top: 1rem;
      }
      .p-2 {
        padding: 1rem;
      }
      .image {
        width: 40px;
        height: 40px;
        background-color: #ddd;
        border-radius: 5px;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
      }
      table {
        width: 100%;
        margin-bottom: 10px;
      }
      @media screen and (max-width: 900px) {
        .row {
          flex-wrap: wrap;
        }
        .email-box {
          width: 100%;
          margin: auto;
        }
        .col-6 {
          flex: 100% 0 1;
        }
        .ml-md-0 {
          margin-left: 0px;
        }
      }
    </style>
  </head>
  <body>
    <div class="email-box">
      <main>
        <div class="my-3">
          <div style="text-align: center">
            <img
              src="https://ripples-assets.s3.eu-west-2.amazonaws.com/logo.png"
              alt="Ripples Logo"
            />
          </div>
          <p>An order for your products has been confirmed succesfully</p>
          <p>
          After packing the item(s), click the link below to call for dispatch for door delivery or make it available for collection at the Pick-up station. A fast and good packaging leaves a lasting impression on customers.
          </p>
          <br />
          <a href="https://www.useripples.com/dashboard/orders/${
            order._id
          }">Call Dispatch</a>
          <br />
          <br />
        </div>
        ${
          order.note &&
          `<div class="card">
          <div class="card-header">Buyer's note to you</div>
          <div class="card-body">
            ${order.note}
          </div>
        </div>`
        }
        <div class="row">
          <div class="col-6 mt-2">
            <div class="card">
              <div class="card-header">Estimated delivery date(s)</div>
              <div class="card-body">${moment(order.eta).calendar()}</div>
            </div>
          </div>
          <div class="col-6 ml-3 ml-md-0 mt-2">
            <div class="card">
              <div class="card-header">Delivery method</div>
              <div class="card-body">${
                order.deliveryMethod === "pickUp"
                  ? "Collection from our Pickup Station"
                  : "Door Delivery"
              }</div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-6 mt-2">
            <div class="card">
              <div class="card-header">Recipient details</div>
              <div class="card-body">
                ${order.destinationName} ${order.destinationPhone}
              </div>
            </div>
          </div>
          <div class="col-6 ml-3 ml-md-0 mt-2">
            <div class="card">
              <div class="card-header">Delivery address</div>
              <div class="card-body">
              ${order.destinationStreet} ${order.destinationCity}
              ${order.destinationState} ${order.destinationCountry}
              </div>
            </div>
          </div>
        </div>
        <h4>Order details:</h4>
        <table class="card">
          <thead style="background-color: #ddd">
            <tr>
              <th scope="col"></th>
              <th scope="col">Item</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            ${order.products.map(
              (product) =>
                `<tr>
                  <th>
                    ${
                      product.product.images.length > 0 &&
                      `<div
                      style="background-image: url('${product.product.images[0].image}')"
                      class="image mr-3"
                    ></div>`
                    }
                  </th>
                  <td>
                  ${product.product.title}
                  </td>
                  <th>${product.quantity}</th>
                  <td>&#8358; ${product.product.price}</td>
                </tr>
              `
            )}
          </tbody>
        </table>
        <div class="card p-2">
          <div class="row justify-content-between mb-2">
            <span colspan="3">Sub-total</span>
            <span colspan="2">&#8358; ${subTotal}</span>
          </div>
          <div class="row justify-content-between mb-2">
            <span colspan="3">Shipping</span>
            <span colspan="2">&#8358; ${order.shippingFee}</span>
          </div>
          <div class="row justify-content-between mb-2">
            <span colspan="3">Total</span>
            <span colspan="2">&#8358; ${total}</span>
          </div>
          <div class="row justify-content-between mb-2">
            <span colspan="3">PAYMENT METHOD </span>
            <span colspan="2">Prepaid</span>
          </div>
        </div>
        <div>
          <h4><small>We are here to help</small></h4>
          <div>
            <small>
              Have any questions or need more information? Just shoot us an
              <a href="mailto:contact@useripples.com">email</a>! We’re always here to
              help. Feel free to hit us up on
              <a href="https://web.facebook.com/Monaly-101778559047541"
                >Facebook</a
              >
              or <a href="https://twitter.com/usemonaly?s=11">Twitter</a>, if
              you want a fast response, too.
            </small>
          </div>
        </div>
      </main>
      <footer class="p-2 text-center bg-light mt-5 xx-small">
        <small class="text-secondary"> Ripples Inc. </small>
      </footer>
    </div>
  </body>
</html>
  `;
}
function sendNewOrderEmailToBuyer(order) {
  let subTotal = 0;
  order.products?.forEach((product) => {
    subTotal += product.product.price * product.quantity;
  });

  let total = subTotal + order.shippingFee;
  let time = `at ${new Date(
    order.createdAt
  ).toLocaleTimeString()} on ${new Date(order.createdAt).toDateString()}`;

  return `
  <html lang="en">
  <head>
    <meta charset="UTF-8" />

    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>New Order Email for Buyer</title>
    <style>
      body {
        font-size: 16px;
        background-color: #ddd;
        margin: 0;
        font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
          sans-serif;
      }
      .email-box {
        width: 60%;
        margin: auto;
        background-color: #fff;
        padding: 20px;
        border-radius: 5px;
        box-sizing: border-box;
        margin-top: 20px;
      }
      .xx-small {
        font-size: 14px;
      }
      .card {
        border: 1px solid #ddd;
        border-radius: 5px;
      }
      .card-body {
        padding: 10px;
      }
      .card-header {
        padding: 10px;
        background: #ddd;
      }
      .row {
        display: flex;
        /* align-items: center; */
      }
      .justify-content-between {
        justify-content: space-between;
        width: 100%;
      }
      .col-6 {
        flex: 50% 0 1;
      }
      .ml-3 {
        margin-left: 1rem;
      }
      .mr-3 {
        margin-right: 1rem;
      }
      .mb-2 {
        margin-bottom: 1rem;
      }
      .mt-2 {
        margin-top: 1rem;
      }
      .p-2 {
        padding: 1rem;
      }
      .image {
        width: 40px;
        height: 40px;
        background-color: #ddd;
        border-radius: 5px;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
      }
      table {
        width: 100%;
        margin-bottom: 10px;
      }
      @media screen and (max-device-width: 900px) {
        .row {
          flex-wrap: wrap;
        }
        .email-box {
          width: 100%;
          margin: auto;
        }
        .col-6 {
          flex: 100% 0 1;
        }
        .ml-md-0 {
          margin-left: 0px;
        }
      }
    </style>
  </head>
  <body>
    <div class="email-box">
      <main>
        <div class="my-3">
          <div style="text-align: center">
            <img
              src="https://ripples-assets.s3.eu-west-2.amazonaws.com/logo.png"
              alt="Ripples Logo"
            />
          </div>
          <p>Dear ${order.buyer.firstName},</p>
          <p>Thank you for shopping on Ripples!</p>
          <p>Your order ${order._id} has been confirmed successfully.</p>
          <p>
            It will be packed and shipped as soon as possible.You will receive a
            notification from us once the item (s) are available for door
            delivery or collection from your selected Pick-up station.
          </p>
        </div>
        ${
          order.note
            ? `<div class="card">
          <div class="card-header">Your Note to Seller</div>
          <div class="card-body">
            ${order.note}
          </div>
        </div>`
            : ""
        }
        <div class="row">
          <div class="col-6 mt-2">
            <div class="card">
              <div class="card-header">Estimated delivery date(s)</div>
              <div class="card-body">${moment(order.eta).calendar()}</div>
            </div>
          </div>
          <div class="col-6 ml-3 ml-md-0 mt-2">
            <div class="card">
              <div class="card-header">Delivery method</div>
              <div class="card-body">${
                order.deliveryMethod === "pickUp"
                  ? "Collection from our Pickup Station"
                  : "Door Delivery"
              }</div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-6 mt-2">
            <div class="card">
              <div class="card-header">Recipient details</div>
              <div class="card-body">
                ${order.destinationName} ${order.destinationPhone}
              </div>
            </div>
          </div>
          <div class="col-6 ml-3 ml-md-0 mt-2">
            <div class="card">
              <div class="card-header">Delivery address</div>
              <div class="card-body">
              ${order.destinationStreet} ${order.destinationCity}
              ${order.destinationState} ${order.destinationCountry}
              </div>
            </div>
          </div>
        </div>
        <h4>You ordered for:</h4>
        <table class="card">
          <thead style="background-color: #ddd">
            <tr>
              <th scope="col"></th>
              <th scope="col">Item</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            ${order.products.map(
              (product) =>
                `<tr>
                  <th>
                    ${
                      product.product.images &&
                      product.product.images.length > 0 &&
                      `<div
                      style="background-image: url('${product.product.images[0].image}')"
                      class="image mr-3"
                    ></div>`
                    }
                  </th>
                  <td>
                  ${product.product.title}
                  </td>
                  <th>${product.quantity}</th>
                  <td>&#8358; ${product.product.price}</td>
                </tr>
              `
            )}
          </tbody>
        </table>
        <div class="card p-2">
          <div class="row justify-content-between mb-2">
            <span colspan="3">Sub-total</span>
            <span colspan="2">&#8358; ${subTotal}</span>
          </div>
          <div class="row justify-content-between mb-2">
            <span colspan="3">Shipping</span>
            <span colspan="2">&#8358; ${order.shippingFee}</span>
          </div>
          <div class="row justify-content-between mb-2">
            <span colspan="3">Total</span>
            <span colspan="2">&#8358; ${total}</span>
          </div>
          <div class="row justify-content-between mb-2">
            <span colspan="3">PAYMENT METHOD </span>
            <span colspan="2">Prepaid</span>
          </div>
        </div>
        <div>
          <h4><small>We are here to help</small></h4>
          <div>
            <small>
              Have any questions or need more information? Just shoot us an
              <a href="mailto:contact@useripples.com">email</a>! We’re always here to
              help. Feel free to hit us up on
              <a href="https://web.facebook.com/Monaly-101778559047541"
                >Facebook</a
              >
              or <a href="https://twitter.com/usemonaly?s=11">Twitter</a>, if
              you want a fast response, too.
            </small>
          </div>
        </div>
      </main>
      <footer class="p-2 text-center bg-light mt-5 xx-small">
        <small class="text-secondary"> Ripples Inc. </small>
      </footer>
    </div>
  </body>
</html>
  `;
}

module.exports = {
  resetPasswordEmail,
  sendNewOrderEmailToBuyer,
  sendNewOrderEmailToSeller,
  subscriberEmail,
  welcomeEmail,
};
