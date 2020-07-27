# Node & Express

A simple node app from the 'Introduction to Node and Express' course from ericelliottjs.com.

## Installation

Run `npm i` to install the project dependencies.

## Starting the app

Run `npm start` to start the Node server.

### Accessing the app

With the app started, in the command line, run `curl localhost:3000/hello && curl localhost:3000/goodbye`.

If all is working, you should see the following:

```
Hello, world!
Goodbye, and thanks for the mushrooms!
```

### Changing the port where the app is running

To change the port where the app is running, run `cp .env.example .env`, and change the port value in the just created `.env` file.

Restart the server and test it out with the app running on a different port.

## Testing the app routes

Run `npm t` to run the automated tests.

___

Made with 💚 by [Walmyr Filho](https://walmyr.dev).
