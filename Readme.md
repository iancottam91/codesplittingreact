# Code Splitting with React, Webpack and Babel

Modern JavaScript tools such as React and Webpack enable developers to write interactive application at big scale, but with big scale comes a big bundle file. Often a user will only use a small percentage of the code they download, but there is a simple fix!

With React 16.6 we can now splice up our JavaScript application bundles into multiple files 🎉

## Demo

* To see this in action run:

```
yarn
yarn build && yarn start
```

* You'll see 3 bundle files in /dist. This is due to the use of 'React.lazy' in /src/app.jsx

* Open a network tab and load up the application. You'll see only `bundle.js` is loaded initially.

* Click one of the toggle buttons. You'll notice another bundle is loaded in
