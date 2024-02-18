# Challenge 5 - Travel Info Backend Challenge

```ascii

-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+-----
           . _..::__:  ,-"-"._        |7       ,     _,.__
   _.____ _<_>`!(._`.`-.    /         _._`_ ,_/  '  '-._.---.-.__
>.{     " " `-==,',._\{  \  / {)      / _ ">_,-'`                mt-2_
  \_.:--.       `._ )`^-. "'       , [_/(                       __,/-'
 '"'     \         "    _L        oD_,--'                )     /. (|
          |           ,'          _)_.\\._<> 6              _,' /  '
          `.         /           [_/_'` `"(                <'}  )
           \\    .-. )           /`-'"..' `:.#          _)  '
    `        \  (  `(           /`:\  > \  ,-^.  /' '
              `._,   ""         |           \`'   \|   ?_)  {\
                 `=.---.`._._       ,'     "`|' ,- '..
                   |    `-._         |     /          `:`<_|h--._
                   (        >        .     | ,          `=.__.`-'\
                    `.     /         |     |{|              ,-.,\     .
                     |   ,'           \   /`'            ,"     \
                     |  /              |_'                |  __  /
                     | |                                  '-'  `-'   \.
                     |/                                         "    /
                     \.                                             '

                      ,/            ______._.--._ _..---.---------._
     ,-----"-..?----_/ )      __,-'"             "                  (
-.._(                  `-----'`-
-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+-----
Map (C) 1998 Matthew Thomas. 
```

## Introduction

After running the Travel Info Web Application without any backend services other than the direct API calls for a few weeks, DFCorp have received feedback from their users that the application could be improved to make it more personalised to them.  In response to this, DFCorp have decided to commission you to build a set of backend services that will allow the Travel Info Web Application to have individual users and for them to be able to use their favourite locations for use across any device they log in on.

> Before proceeding, ensure that you have a solid understanding of why a user needs this software and the benefits that it will bring to them (See Task 1).

## Core Features

The Business Analyst team working with the Product Owner at DFCorp have identified the following core features that the backend services should provide:

1. **User Authentication**:
   - The web application will send registration details to a backend service to create a new user account
   - The web application will send login details to the backend service to authenticate a user
   - The web application will send a password change request to the backend service and update the user's password
   - A user must be authenticated on every subsequent request to any other backend service
2. **Favourite Locations**:
   - The web application will send a request to a backend service to obtain the stored favourite locations of an authenticated user
   - The web application will send a request to add a new location to an authenticated user's favourite locations
   - The web application will send a request to remove a location from an authenticated user's favourite locations

You may architect the backend services in any way you see fit.  Authentication can be handled through a simple check of username/password on each request but more efficient and secure methods are encouraged.  The storage of user data and favourite locations can be done in any way you see fit but must be held in a MongoDB database.

> **Note:** The use of a generative AI tool to complete tasks relating to the specific requirements above is NOT allowed.  All work here should be your own.

## Additional Features

DFCorp have been made aware that inserting API keys into frontend applications can leave their accounts open to abuse.  To counter this, they have asked that you create proxy services that will allow the frontend application to make requests to the backend services without exposing the API keys.

They are also concerned that an industry standard method of authentication is not being used and have asked that you implement JSON Web Token (JWT) authentication for the backend services.

The Product Owner at DFCorp has also identified a number of additional features that they would like to see in the backend services if time should allow you:

1. **JSON Web Token Authentication**:
   - Once a user has logged in, a JSON Web Token (JWT) should be returned to the web application and used for all subsequent requests
2. **Proxy Services**:
   - Weather API Proxy Service:
      - The web application will send a request to the backend service to obtain weather information for a location using the weather API and its key used in the frontend application and it will be responsible for returning the data to the web application (in JSON format)
   - **Map API Proxy Service**:
     - The TomTom API used allows you to set a whitelist of domains that can access the API - this means a proxy is not needed as the domain for the web application can be used and key exposure is not a concern
   - **Hotel API Proxy Service**:
     - The web application will send a request to the backend service to obtain hotel information for a location using the hotel API and its key used in the frontend application and it will be responsible for returning the data to the web application (in JSON format)

> **Note:** The use of a generative AI tool to help complete tasks relating to these further requirements is allowed but should be clearly documented.

---

## Tasks

1. Explain why the customer needs the backend services and the benefits that it will bring to them.  You should include the following in your explanation:
   - The problems that the backend services will solve
   - The benefits that the backend services will bring to the user
   - The impact that the backend services will have on the customer's business
2. From the requirements listed above, devise a set of user stories that describe the functionality that the client has requested
3. Create a set of routing diagrams that show how the backend services will be accessed by the frontend application
4. Create the application using a test-driven development (TDD) approach and the NodeJS/Express/MongoDB stack
5. Create a set of tests that validate the functionality of the backend services using POSTMAN

---

## Tips

- Commit regularly to GitHub with clear commit messages - write a failing test, pass the test, commit, etc
- You should put your component hierarchies, state identification notation and test plans in the markdown file in the `docs` folder, if you decide to use some form of Scrum board to track your progress, you should include a screenshot of this in the markdown file
- Structure your `src` folder with suitable sub-folders to help identify groups of components

---

## APIs

The following APIs can be used in this project.  Be mindful of any request limits and DO NOT use any APIs that require billing information.

---

### Weather API

For weather information, you can use the free ***OpenWeatherMap*** API by signing up for a free developer key - select the ***FREE*** tier here:

[https://openweathermap.org/price](https://openweathermap.org/price)

Once you have your API key, you can use the following fetch or Axios request to obtain the weather data for a location:

```javascript
const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=<YOUR API KEY>`);
setWeatherData(response.data);
```

> You can then simply return the `response.data` to the frontend application.

---

### Hotel API

For hotel information, you can use the free ***RapidAPI*** to access the ***[Priceline.com](https://rapidapi.com/davidtaoweiji/api/priceline-com/)*** API by signing up for a free developer key.

Once you have done this, you can use the following fetch or Axios request to obtain the hotel data for a location:

```javascript

const options = {
  method: 'GET',
  url: 'https://priceline-com.p.rapidapi.com/hotels/city/search',
  params: {q: 'Dublin US'},
  headers: {
    'X-RapidAPI-Key': '<YOUR KEY HERE>',
    'X-RapidAPI-Host': 'priceline-com.p.rapidapi.com'
  }
};

try {
 const response = await axios.request(options);
 console.log(response.data);
} catch (error) {
 console.error(error);
}
```

> You can then simply return the `response.data` to the frontend application.

---

## Grading Criteria

## Digital Futures Software Engineering Progression Management Framework

In this Challenge, you will have the opportunity to demonstrate the following competencies from the Software Engineering Progression Management framework:

TBC

---

## Digital Futures Professional Skills Progression Management Framework

In this Challenge, you will have the opportunity to demonstrate the following competencies from the Professional Skills Progression Management framework:

TBC

---

## Submission

Your Challenge attempt should be submitted via commits to the forked project from GitHub Classroom.  Your trainer will have supplied you with the appropriate link to do access this, you need to take no further action on this platform.  To indicate that you have completed the Challenge, you should you the Assignment Submission link in the Challenge course for your Cohort on Noodle.  The Progression Management Frameworks will be assessed via a marking rubric in Noodle and you will be able to see how you performed in each competency.

You are not permitted to collaborate with anyone to complete this challenge.  You should complete the *Core Functionality* using traditional skills, knowledge and understanding of software engineering and all code submitted for this should be your own.  You may use a *Generative AI tool* to help you complete the *Additional Functionality* but this should be clearly documented.

---

## Feedback

After submission of your challenge attempt, your trainer will record and submit feedback in Noodle and/or via GitHub for comments in your code .  You will then be able to view this feedback via Noodle and your GitHub account.

Your trainer will also provide general feedback to the cohort via the Discord channel.

---
