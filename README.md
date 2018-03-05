# simple-header
Simple responsive header using react+redux.
Using React + React-router + Redux is a complete overkill for a header that simple but the idea is to leave a base an app that can grow from in the future.

### To run

* You'll need to have [git](https://git-scm.com/), installed in your system as well as node

* Fork and clone the project:
```
> $ git clone https://github.com/davidbaiguini/simple-header.git
```

* Then install the dependencies:
```
> $ npm install
```

* Start the dev server
```
> $ npm run start
```

* Run the unit-tests
```
> $ npm run test
```

* You can simply run Webpack build using this command:
```
> $ npm run build
```


* Open the web browser to `http://localhost:3000/`
* If using dev, you can also use: http://localhost:3000/webpack-dev-server/ to run in iframe mode


### Additional Links

[React Developer  Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
[Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)


### Tech Used

| **Tech** | **Description** | **Version** |
| ---------|-----------------|-------------|
| [React](https://facebook.github.io/react/) | View layer | XXX |
| [React Router](https://github.com/reactjs/react-router) | Universal routing | XXX |
| [Redux](http://redux.js.org/) | State management | XXX |
| [Webpack](https://webpack.github.io/) | Module bundling + build for client | XXX |
| [SASS/SCSS](http://sass-lang.com/) |  stylesheet language, makes CSS fun again | XXX |



### TODO
- [x] Add dependencies using npm
- [x] Add base for React + Redux
- [x] Add pages and handle routing
- [x] Open/close submenu on click
- [x] Change user when click email
- [x] Add CSS and make it responsive
- [ ] Add logo and icons and some animations
- [ ] Add open/close for menu when mobile
- [x] Add font and scss colors
- [ ] Add linter
- [x] Add some unitTests
- [ ] Deployed to a droplet using a Docker container
- [ ] Connect to a DataBase, somewhere (Using graphQl for fun maybe?)
