# User Stories & Routing Diagrams
### GET Login User
```json
Request Type: GET
Request URL: "/login"
Payload: {email: String, password: String} Response: {_id, fullName, email, password, role (default: user), token}
```
![Login](images/login.png)

### POST New User
```json
Request Type: POST
Request URL: "/sign-up"
Payload: {fullName: String, email: String, password: String} Response: {_id, fullName, email, password, role (default: user)}
```
![Create User](images/sign-up.png)

### EDIT Update User Password
```json
Request Type: PUT
Request URL: "/edit/:_id"
Payload: {token, password: String} Response: {_id, fullName, email, password, role (default: user) }
```
![Edit Password](images/edit.png)

### POST Weather Forecast
```json
Request Type: GET
Request URL: "/results/query=:id"
Payload: {query: id}
Response: json file
```
![Weather Forecast](images/weather.png)

### GET Bookmarks
```json
Request Type: GET
Request URL: "/results/query=:id"
Payload: {query: id}
Response: json file
```
![Get saved locations](images/get-bookmarks.png)

## POST Bookmarks
```json
Request Type: POST
Request URL: "/save-location"
Payload: {city: String, lon: String, lat: String} Response: {message}
```
![Update saved locations](images/update-bookmarks.png)

## User Stories

### User Story 1

As a user, I'd like to be able to create a new account by providing my registration details (email, password), so that I can access user services.

**Tests**

- [ ] Test the user registration function to ensure it correctly processes valid input and rejects invalid input.
- [ ] Test validation rules (e.g., email format, password strength).
- [ ] Ensure the registration endpoint correctly interacts with the database to create a new user.
- [ ] Verify that the endpoint returns appropriate success or error messages.
- [ ] Registering with an already taken username or email and check should throw an error response.
- [ ] Missing or malformed input data should throw an error response.

### User Story 2

As a returning user, I'd like to log into the application with my credentials I signed up with, so I can access my account.

**Tests**

- [ ] Test the user authentication function to ensure it correctly validates user credentials.
- [ ] Test password hashing and comparison.
- [ ] Verify that the login endpoint correctly interacts with the user database.
- [ ] Check that a session token is generated and returned upon successful login.
- [ ] Test login with incorrect username or password and ensure an error message is returned.
- [ ] Test with missing or malformed input data.

### User Story 3

As an authenticated user, I'd like to be able to change my password, so I can update it for security purposes.

**Tests**

- [ ] Test the password update function to ensure it verifies the current password and updates to the new password correctly.
- [ ] Test validation rules for the new password.
- [ ] Verify that the password change endpoint correctly interacts with the database to update the password.
- [ ] Ensure appropriate success or error messages are returned.
- [ ] Test with incorrect current password and check for the correct error response.
- [ ] Test with missing or malformed input data.

### User Story 4

As an authenticated user, I want to stay authenticated on every subsequent request to any other backend service so that my sessions are secure and persistent.

**Tests**

- [ ] Test middleware or functions that validate session tokens.
- [ ] Verify that protected endpoints correctly validate the session token before processing requests.
- [ ] Test with expired or invalid tokens and ensure access is denied with an appropriate error message.

### User Story 5

As an authenticated user, I want to view my favourite locations so that I can see the locations I have bookmarked.

**Tests**

- [ ] Test the function that retrieves favourite locations from the database.
- [ ] Verify that the endpoint returns the correct list of favourite locations for authenticated users.
- [ ] Test with no favourite locations and ensure an empty list is returned.

### User Story 6

As an authenticated user, I want to add a new location to my favourite locations so that I can easily access it later.

**Tests**

- [ ] Test the function that adds a location to the user's favourites.
- [ ] Verify that the endpoint correctly adds the location to the database and associates it with the authenticated user.
- [ ] Test adding a duplicate location and ensure the appropriate response is returned.

### User Story 7

As an authenticated user, I want to remove a location from my favourite locations so that I can keep my list of favourite locations up to date.

**Tests**

- [ ] Test the function that removes a location from the user's favourites.
- [ ] Verify that the endpoint correctly removes the location from the database.
- [ ] Test removing a non-existent location and ensure the appropriate response is returned.

**Additional Requirements**

### User Story 8

As a user, I want to be able to search for a location and see a 5 day weather forecast from an api so I can prepare for the temperature changes.

### User Story 9

As a user, I want to be able to see a map of the location I've searched for in the results, so I can see what's available nearby.

### User Story 10

As a user, I want to be able to see a list of hotels on the results page based on the searched location, so I can look to book a hotel for the week I'm staying.

## Kanban Board & Diagrams

To help organise my tasks, tests and diagrams, I used Miro's features to create a kanban board and build routing diagrams.  
![Kanban Board](images/kanban.png)

### Miro Board
https://miro.com/app/board/uXjVKCXWVNQ=/?share_link_id=310189384549

## Gen AI
Throughout the project I did incorporate the help of Gen AI to help understand code, especially with testing, and also how to implement infrastructures, as well as blog posts and videos.  

![Issue with findOne](images/image.png)

**Checking how to implement JWT**
I asked Co-Pilot on the usage of the token to check for authorised access and understand the process better.  
![jwt token](images/image-1.png)  
It also showed how I could complete this on the frontend so I was aware on how to collect the information later.  
![frontend access token](images/image-2.png)
![backend verify token](images/image-3.png)

**Testing**
I had trouble understanding why my error message wasn't matching especially when the wording was the same in my test. Co-pilot explained that I needed to access the '.message' item to check the value of the message to make them equal.  
![Error Testing](images/image-4.png)

**Filtering Bookmarks**
During the creation of the save location functionality, I did have a problem with the filtering of the bookmarks and couldn't get '.some' working. I had to ask Co-pilot the method to double check my understanding and also tried using a loop. It ended up being how I wasn't targeting the right array within the user document and therefore wasn't filtering correctly.  
![some function](images/image-5.png)

**Refactoring**
My update bookmarks method seemed long as it went from just adding a bookmark, to updating the bookmarks array and removing it if it existed. I asked Co-pilot on how I could refactor the code to make this method cleaner. I will look to incorporate this refactored version.  
```javascript
updateUserBookmarks = async (req, res) => {
    const { city, lat, lon } = req.body;
    try {
      //check the city exists in user's saved locations
      const checkLocationResponse = await this.#service.checkLocationExists(
        req.user.id, city, lat, lon
      );

      if (checkLocationResponse.locationExists) {
        //remove location from user bookmarks
        const userSavedLocations = await this.#service.removeFromSavedLocations(
          checkLocationResponse.user, city, lat, lon
        );
        if (userSavedLocations)
          return res.status(200).json({ message: "Location removed from user bookmarks" });
      } else {
        //go to service to add location to user bookmarks
        const userSavedLocations = await this.#service.addToSavedLocations(
          checkLocationResponse.user, city, lat, lon
        );
        if (userSavedLocations)
          return res.status(200).json({ message: "Location added to user bookmarks" });
      }
    } catch (e) {
      return res.status(500).json({ message: e.message });
    }
  };
```
![refactoring-updatebookmarks1](images/image-6.png)
![refactoring-updatebookmarks2](images/image-7.png)