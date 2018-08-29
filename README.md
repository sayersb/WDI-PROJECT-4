# WDI Project 4

![image](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

## ABC EVENTS - A MERN stack app - Collaborative Project

![abc](https://github.com/sayersb/WDI-PROJECT-4/blob/master/abcevents1.gif?raw=true)



## Intro


This was the final project on the WDI course, the first one using React to create a MERN(MongoDB, Express.js, React & Node.js) stack app. We were given a week to devise an idea, build and deploy this events and ticketing app.


Technologies implemented : 


| JavaScript(ECMAScript6)        | React          | SCSS  |
| ------------- |:-------------:| -----:|
| HTML5      | Express | MongoDB |
| Mongoose      | Node.js      |   Yarn |
| Bulma |   axios   |    Webpack |
| jsonwebtoken | bcrypt     |    body-parser |
| bluebird | Request-Promise     |    babel |
| chai | mocha     |    satellizer |
| supertest | sass-loader     |    Trello |
| lodash | sinon     |    draw.io |
| Paypal API | Google Maps API with Autocomplete     |    enzyme |
| MailChimp Subscription API | Eventbrite API     |    Ticketmaster API |

The application has been deployed on [Heroku](https://abc-events.herokuapp.com) 

*Please be aware that Heroku apps go to sleep after 30 mins of inactivity and may take a little time to load*



## Build Process 


After being assigned the project, myself and two other members of the class decided to work in a team, assuming the collaborative process would allow us more time to research and implement more outside API's amongs other features. The team set up a Trello board straight away and discussed ideas, leading to the consensus that we should aim to build an app for events. We wanted the users to have the ability to buy or sell tickets securely through the app if the event happened to be sold out, or if sellers were unable to attend an event. The uncertainty over whether the app and user experience would be primarily for events, or as a ticket exchange site, meant the amount of possible relevant outside API's to implement was encouraging.


After implementing the Ticketmaster and EventBrite API's we discovered the data was not as easy to manipulate into making new events and buying/selling tickets directly through our app as originally thought. At this stage a user was able to create an eventa and add information, including the visible location using the Google Map and Autocomplete API. The final feature needed to reach our planned MVP was the ability to buy / sell a ticket direclty through our site, leading us to the PayPal Button Manager API. Whilst another team member focused on the PayPal button I researched and implemented the MailChimp subscription API, adding the ability for the user to subscribe to our newsletter mailing list.


The styling was touched up as we went along, in comparison to the previous two projects where this was left until the end of the week. Using Bulma as the framework helped to make the app responsive and usable on mobiles, despite the user experience focus being on a laptop screen sized browser. 




## Issues



  * We spent too much time thoroughly researching possible API's to implement, many of which we didn't end up using for varying reasons and therefore could have been more productive in the allocation of time for the final product.  
  
  
  * Although we managed to implement both the Ticketmaster and Eventbrite API's, the links don't function as originally planned. Given more time we would add in the feature to not only search and be forwarded to the Ticketmaster and Eventbrite events, but have a link to buy the tickets straight from our app.

  
  
##  Other GA Project Repositories



  * 1st: [Chain Game](https://github.com/sayersb/project-1-wdi)


  * 2nd: [World Cup Predictor App](https://github.com/sayersb/project-2-wdi)


  * 3rd: [Hidden Gems App](https://github.com/sayersb/WDI34_PROJECT_3)
