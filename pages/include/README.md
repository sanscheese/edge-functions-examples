![Netlify examples](https://user-images.githubusercontent.com/5865/159468750-df1c2783-39b2-40da-9c0f-971f72a7ea3f.png)

# Edge Includes with Netlify Edge Functions

The ability to transform the content of an HTTP response with Edge Functions enables you to substitute content into
templates as you would with Edge Includes.

In this example, we look for an <code>{{INCLUDE_PRICE_INFO}}</code> placeholder in our response, and replace it with
some other content.

## Code example

Edge Functions are files held in the `netlify/edge-functions` directory.

- [Explore the code for this Edge Function](../../netlify/edge-functions/includes.js)

## View this example on the web

- https://edge-functions-examples.netlify.app/example/includes

## Deploy to Netlify

You can deploy this and all the other examples in this repo as a site of your own to explore and experiment with, by
clicking this button.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/netlify/edge-functions-examples)