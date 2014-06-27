## Employee Directory ##

### Sample Mobile/PhoneGap Application built with Backbone.js, RequireJS and Topcoat ###

"Backbone Directory" is a simple Employee Directory application built with [Backbone.js](http://backbonejs.org), [RequireJS](http://requirejs.org/), and [Topcoat] (http://topcoat.io).

Refer to [this blog](http://coenraets.org) for more information about the application.


The application runs out-of-the-box with an in-memory data store.

If you want to experiment the application with other persistence layers, download the REST services in the following repositories:

- [directory-rest-nodejs](https://github.com/ccoenraets/directory-rest-nodejs) (Node.js/MongoDB implementation)
- [directory-rest-php](https://github.com/ccoenraets/directory-rest-php) (PHP implementation)

## To run a browser locally for development ##

Included is a package.json, only needed if you wish
to debug part of your app via a browser
(ie: using Dev Tools).

However, if you only wish to use an emulator or mobile
device for development, the package.json file can
be ignored.

To install local-web-server
```
npm install
```
To run local-web-server
```
npm start
```
Then point your browser to
```
http://localhost:8000
```

You do not need to restart the server for most changes,
just refresh the page.

More information on how to use local-web-server is
included it the project's README:
    https://github.com/75lb/local-web-server
