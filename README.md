# Booked It!
## An audition tracking app for actors

Booked It! is a React/Rails application to allow actors to track their auditions. Linked databases store all the information an actor could need (date, time, who was in the room), allowing the actor to easily search for future reference. The applic

Features:
- Log audition details
- Search audition details based on Producer/Casting/In the room
- Update audition "results" (callback/booked/notes)
- Upload monologue information to the server, including a PDF (can be downloaded by users)
- Search monologues based on playwright/etc

[Check out a demo of the project on YouTube here!](https://youtu.be/VNv1Oc3SFa4)

This is my Phase 5 Final Project with Flatiron School's Software Engineering Bootcamp! Making the relationships between this many tables was a challenge - I slightly regretted being as detail-oriented as I am... The application uses Ruby on Rails and Postgres for back-end data management, and a React front-end using Styled Components and Bootstrap for styling.

To get the application running, make sure Postgres is installed and running on your machine.
Make sure to "bundle install" and then "rails s" to start the server.
In another terminal, run "npm start" within the client folder.

