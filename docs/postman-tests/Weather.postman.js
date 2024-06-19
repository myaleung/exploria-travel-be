//! Postman test script for the Weather API
pm.test("Response status code is 200", function () {
    pm.expect(pm.response.code).to.equal(200);
});


pm.test("Response time is less than 200ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(200);
});

pm.test("Validate the top-level fields", function () {
    const responseData = pm.response.json();

    pm.expect(responseData).to.be.an('object');
    pm.expect(responseData).to.have.property('cod');
    pm.expect(responseData).to.have.property('message');
    pm.expect(responseData).to.have.property('cnt');
    pm.expect(responseData).to.have.property('list');
    pm.expect(responseData).to.have.property('city');
});

pm.test("List array contains required fields", function () {
    const responseData = pm.response.json();

    pm.expect(responseData.list).to.be.an('array');

    responseData.list.forEach(function (item) {
        pm.expect(item.dt).to.exist;
        pm.expect(item.main).to.exist;
        pm.expect(item.weather).to.exist;
        pm.expect(item.clouds).to.exist;
        pm.expect(item.wind).to.exist;
        pm.expect(item.visibility).to.exist;
        pm.expect(item.pop).to.exist;
        pm.expect(item.sys).to.exist;
        pm.expect(item.dt_txt).to.exist;
    });
});

pm.test("City object contains the required fields", function () {
    const responseData = pm.response.json();

    pm.expect(responseData.city).to.be.an('object');
    pm.expect(responseData.city).to.have.property('id').that.is.a('number');
    pm.expect(responseData.city).to.have.property('name').that.is.a('string');
    pm.expect(responseData.city).to.have.property('coord').that.is.an('object');
    pm.expect(responseData.city).to.have.property('country').that.is.a('string');
    pm.expect(responseData.city).to.have.property('population').that.is.a('number');
    pm.expect(responseData.city).to.have.property('timezone').that.is.a('number');
    pm.expect(responseData.city).to.have.property('sunrise').that.is.a('number');
    pm.expect(responseData.city).to.have.property('sunset').that.is.a('number');
});