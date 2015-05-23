# Template for NodeJS/ ExpressJS/ Jade/ GruntJS on Openshift

### Aim

	- Create a Template to run on Openshift NodeJS Server
	- Run an ExpressJS Server
	- Use the Jade templating engine
	- Use Grunt for task automation and activating server
		* SASS conversion
		* Watch on Files
		* Livereload of SASS and Jade Updates

### Requirements

> ###Openshift
	- NodeJS Server Only

> ###PC
	- Git
	- NodeJS
	- Express
	- Express-Generator
	- Bower
	- Bower-Installer
	- GruntJS
	- Ruby(Gem Installer) > SASS

### How to get setup
	- Create a NodeJS Gear either in the Interface or on the Command Line
	- Fork this repo to a directory on your computer
	- Git pull from the Openshift Directory and merge
	- You can run a server and convert sass with 'Grunt Server' in command line
		- This will also use livereload (install browser plugin)
	- Once your happy with the site update package.json > start as per comments
	- Then use git push to the openshift remote to get your server up and running