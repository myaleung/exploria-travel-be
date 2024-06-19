const testData = {
    validUser: {
        "fullName": "Fairy Godmother",
        "email": "fairy@godmother.co.uk",
        "password": "Password123!",
    },
    existingUser: {
        "fullName": "A User",
        "email": "some@user.com",
        "password": "Pasword777?",
        "role": "user",
        "savedLocations": [],
    },
    noName: {
        "fullName": "",
        "email": "fairy@godmother.co.uk",
        "password": "Password123!",
        "role": "user",
        "savedLocations": [],
    },
    noPassword: {
        "fullName": "Fairy Godmother",
        "email": "fairy@godmother.co.uk",
        "password": "",
        "role": "user",
        "savedLocations": [],
    },
    noEmail: {
        "fullName": "Fairy Godmother",
        "email": "",
        "password": "Password123!",
        "role": "user",
        "savedLocations": [],
    },
    badPassword: {
        "fullName": "Fairy Godmother",
        "email": "fairy@godmother.co.uk",
        "password": "badpass",
        "role": "user",
        "savedLocations": [],
    },  
};

export default testData;