# [WIP] Administration dashboard template in React
This is an administration dashboard template made with React.js in ES6 JavaScript (using Babel as transpiler).
That means there are reusable components and one-way reactive data flow is already implemented.

![Screenshot of the template](http://vaclavzeman.com/files/upload/dashboard.png)
- [Screenshot 2 - example form and a table](http://vaclavzeman.com/files/upload/dashboard2.png)
- [Screenshot 3 - typography](http://vaclavzeman.com/files/upload/typography.png)

# Libraries
	- React.js
	- Redux
	- react-router
	- Babel - ES6/ES2015 transpiler 
	- Sass loader, Autoprefixer
	- Lodash - utility library
	- Webpack - module bundler
	- ESLint - JS linter
	- Browsersync - used as a server
	- Mocha - tests
	- Font awesome - icon font
	- Bootstrap (only the grid)

# Run
Node.js is necessary to be installed.

```shell
git clone https://github.com/vaclav-zeman/dashboard-react-template.git dashboard-template
cd dashboard-template
npm install
npm start
```

The template skeleton comes from [React Slingshot](https://github.com/coryhouse/react-slingshot)
If you experience any trouble running the app, please look at the link above before asking here.

# TODOs
This template is still work in progress. There are many things to be done such as:
	- add tests
	- test support on older browsers
	- add more UI elements - tooltips, user popover, buttons
	- add optional action buttons to the DataTable
	- add UI responsiveness
	- refactor forms to be modular (make fields components etc.)
	- add form validation
	- edit data flow to match current best practices
	- ...

