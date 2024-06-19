# Travel Info Web Application Challenge - Challenge 5

## Introduction

Users of the Travel Info Web Application are looking for a more personalised experience whilst using the application. DF Corp have there commissioned for a set of backend services that will allow their users to have individual accounts and be able to use their favourite locations bookmarks page across any device they log in on.

### Benefits

- **Personalised User Experience:** Users will be able to log into their own personal accounts where they can save their location bookmarks and have the information stored on the database. This would lead to enhanced engagement on the platform regularly.
- **User Satisfaction:** The tailored content from user feedback would lead to user satisfaction.
- **Storing Data:** Implementing backend services allows for secure storage of user data.
- **User Authentication:** Robust user authentication methods can be implemented to protect user accounts.

### Impact

- **User Retention and Growth:** A personalised and seamless experience can lead to higher user retention and attract new users.
- **Brand Reputation:** This new feature can enhance the brand's reputation and build trust with the user.
- **Data Analytics:** Backend services can collect and analyse user data and be used to provide better features later.
- **Revenue:** This new feature and investment into backend services could open up new revenue streams such as targeted advertising and/or premium features for account holders.

### Risks

- **Security Breaches:** Storing user data centrally increases the risk of data breaches.
- **Data Compliance:** Ensuring compliance with data protection regulations (e.g. GDPR) can be complex and costly.

### Conclusion
The travel application is able to locate a 5-day weather forecast and successfully call the weather API to return accurate data based on the location the user queries. Users are also able to save their favourite locations to their profile which will store the location data against their document in the database. Account creation is successful and my verification and tokens are also implemented but I feel the verification messages aren't succinct when sent to the frontend.
Pathways for logged in users are protected and shown to those with verified tokens. 

I wasn't able to fully test the application with Mocha and Chai and did have trouble mocking all the instances and having a good coverage of the application due to time constraints.

## Setup
```
Start Project
npm run start       - for Mac OS
npm run start-win   - for Window users

Run Tests
npm run test        - for Mac OS
npm run test-win    - for Window users
```
