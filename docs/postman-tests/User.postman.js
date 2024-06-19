//! Postman test script for POST Sign Up User Tests
pm.test("Response status code is 201", function () {
    pm.expect(pm.response.code).to.equal(201);
});


pm.test("Response has the required fields - id, fullName, email, and token", function () {
    const responseData = pm.response.json();

    pm.expect(responseData).to.be.an('object');
    pm.expect(responseData.id).to.exist.and.to.be.a('string');
    pm.expect(responseData.fullName).to.exist.and.to.be.a('string');
    pm.expect(responseData.email).to.exist.and.to.be.a('string');
    pm.expect(responseData.token).to.exist.and.to.be.a('string');
});


pm.test("Email is in a valid format", function () {
    const responseData = pm.response.json();

    pm.expect(responseData).to.be.an('object');
    pm.expect(responseData.data.email).to.be.a('string').and.to.match(/^.+@.+\..+$/);
});


pm.test("Response time is less than 200ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(200);
});

//! Postman test script for PUT Edit User Password Tests
pm.test("Response status code is 200", function () {
    pm.expect(pm.response.to.have.status(200));
});


pm.test("Response time is less than 200ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(200);
});


pm.test("Response schema for the fields returned", function () {
    const responseData = pm.response.json();

    pm.expect(responseData).to.be.an('object');
    pm.expect(responseData).to.have.property('_id');
    pm.expect(responseData).to.have.property('fullName');
    pm.expect(responseData).to.have.property('email');
    pm.expect(responseData).to.have.property('password');
    pm.expect(responseData).to.have.property('role');
    pm.expect(responseData).to.have.property('updatedAt');
    pm.expect(responseData).to.have.property('savedLocations');
});

//! Postman test script for POST Login User Tests
pm.test("Response status code is 200", function () {
    pm.response.to.have.status(200);
});


pm.test("Response Content-Type is application/json", function () {
    pm.expect(pm.response.headers.get("Content-Type")).to.include("application/json");
});


pm.test("Response time is less than 500ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(500);
});


pm.test("Response has the required fields", function () {
    const responseData = pm.response.json();

    pm.expect(responseData).to.be.an('object');
    pm.expect(responseData).to.have.property('id');
    pm.expect(responseData).to.have.property('fullName');
    pm.expect(responseData).to.have.property('email');
    pm.expect(responseData).to.have.property('token');
});


pm.test("Email is in a valid format", function () {
    const responseData = pm.response.json();

    pm.expect(responseData).to.be.an('object');
    pm.expect(responseData.email).to.match(/\S+@\S+\.\S+/);
});


//! Postman test script for GET Saved Locations Tests

pm.test("Response status code is 200", function () {
    pm.expect(pm.response.code).to.equal(200);
});


pm.test("Content-Type is application/json", function () {
    pm.expect(pm.response.headers.get("Content-Type")).to.include("application/json");
});


pm.test("Response schema contains required fields", function () {
    const responseData = pm.response.json();

    pm.expect(responseData).to.be.an('array').that.is.not.empty;

    responseData.forEach(function (location) {
        pm.expect(location.city).to.exist;
        pm.expect(location.longitude).to.exist;
        pm.expect(location.latitude).to.exist;
        pm.expect(location._id).to.exist;
    });
});


pm.test("Response time is less than 200ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(200);
});

//! Postman test script for POST Add to Saved Locations Tests
pm.test("Response status code is 200", function () {
    pm.expect(pm.response.code).to.equal(200);
});


pm.test("Response has the required field - message", function () {
    const responseData = pm.response.json();

    pm.expect(responseData).to.be.an('object');
    pm.expect(responseData.message).to.exist;
});

pm.test("Response time is less than 200ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(200);
});

pm.test("Content-Type header is application/json", function () {
    pm.expect(pm.response.headers.get("Content-Type")).to.include("application/json");
});

pm.test("Message field is a non-empty string", function () {
    const responseData = pm.response.json();

    pm.expect(responseData).to.be.an('object');
    pm.expect(responseData.message).to.be.a('string').and.to.have.lengthOf.at.least(1, "Message should not be empty");
});