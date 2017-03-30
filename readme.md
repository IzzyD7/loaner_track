# Code Louisville MEAN Stack Project: Loaner PC Tracker
With this simple inventory app, someone will be able to keep track of their stock of laptops. In this application you have the ability to add and delete computers from your loaner pool, check them in and out with the touch of a button, and update names as needed.    

## Required Technologies and Pre-reqs
Since this is a MEAN stack application, you will need to install a few different pieces of software. There is are links to the packages that will need to be downloaded but otherwise NPM (a package management system that is installed as part of Node.js) will take care the dependencies.

### Download and install:
[Node.js](http://nodejs.org/) - https://nodejs.org
[MongoDb](http://www.mongodb.org/) - https://www.mongodb.com/

(windows users: Here is a helpful link to get MongoDB installed and set-up on your machine.[Link](https://code.msdn.microsoft.com/Mongo-Database-setup-on-6963f46f) - https://code.msdn.microsoft.com/Mongo-Database-setup-on-6963f46f)

###Software packages handled by NPM:
[MongooseJs](http://mongoosejs.com/)
[ExpressJs](http://expressjs.com/)
[AngularJs](http://angularjs.org/)
[Jquery](https://jquery.com/)
[Bootstrap](http://getbootstrap.com/)
[PugJs](https://pugjs.org/api/getting-started.html)

You will also need a console. I personally use Powershell.


## Installation:

1. From your console, clone this repo onto your local machine.
```https://github.com/IzzyD7/loaner_track.git```
2. Switch to the directory ```loaner_track```
```cd loaner_track```
3. Install dependencies with NPM
```npm install```
4. Open a second console window and start MongoDB by starting the Mongo Daemon (Windows Users: Please see link referenced above to set up environment variable for MongoDB. )
```mongod```
5. From the ```loaner_track``` directory, start the application.
```node index.js```
The console will respond with the following ```THE FRONTEND SERVER IS LISTENING ON PORT 8080!!!!"``` and you should see four initial records created for you database.

## Opening the application:

After you have started the database and the node server, you can access the app by opening a browser and type "localhost:8080*"

## Future Functionality:
-Updates to UX including color changing buttons for In/Out Status and modal notification for blank text entry.
-Graphical interface to show quick stats (total machines, status, models in loaner pool)
-Added data tracking in database (client names, date of checkout, machine model)

## Contribution:
Feel free to contribute to this project.

## Authors:
**[Pete Isgrigg](https://github.com/IzzyD7)** - *Inital creation*

## License:
This project is licensed under the MIT License

## Thank You:
[Shauvon](https://github.com/ShauvonM) and [Aaron](https://github.com/aarontropy) for being amazing mentors and helping me when I got stuck.
