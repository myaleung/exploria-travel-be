import chaiModule, { expect } from 'chai';
import chaiHttp from 'chai-http';

const chai = chaiModule.use(chaiHttp);

import Database from '../../src/db/database.js';
import Config from '../../src/db/db.config.js';
import Server from '../../src/server/Server.js';
import Router from "../../src/routes/Router.routes.js";
import UserRoutes from '../../src/routes/User.routes.js';
import User from "../../src/models/User.model.js";
import testData from "./testData/user.Data.js";

const { validUser, existingUser, noName, noEmail, noPassword } = testData;

describe('Testing requests on database', () => {
    let app;
    let server;

    before(async () => {
        Config.load();
        const { PORT, HOST, DB_URI } = process.env;
        const router = new Router();
        const userRoutes = new UserRoutes();
        router.addRouter(userRoutes);

        server = new Server(PORT, HOST, router);
        const database = new Database(DB_URI);
        server.start();
        await database.connect();
        app = server.getApp();
    });

    after(async () => { 
        server.close();
    });

    describe(`/POST user routes`, () => {
        beforeEach(async () => {
            try {
                // Clear the database
                await User.deleteMany();
                console.log("Database cleared");
            } catch (e) {
                console.log(e.message);
                console.log("Error clearing");
                throw new Error();
            }
            try {
                await User.insertMany(existingUser);
                console.log("Database populated with test users");
            } catch (e) {
                console.log(e.message);
                console.log("Error inserting");
                throw new Error();
            }
        });

        it('should create a new user', (done) => {
            chai.request(app)
                .post(`/sign-up`)
                .send(validUser)
                .end((err, res) => {
                    if (err) console.log(err);
                    expect(res).to.have.status(201);
                    expect(res._body.message).to.be.equal(`User registered`);
                    done();
                });
        });

        it('should not create a new user with same email', (done) => {
            chai.request(app)
                .post(`/sign-up`)
                .send(existingUser)
                .end((err, res) => {
                    if (err) console.log(err);
                    expect(res).to.have.status(400);
                    expect(res).to.have.property(`error`);
                    expect(res._body.message).to.be.equal(`Failed! Email already in use`);
                    done();
                });
        });

        it('should not create a new user with no name', (done) => { 
            chai.request(app)
                .post(`/sign-up`)
                .send(noName)
                .end((err, res) => {
                    if (err) console.log(err);
                    expect(res).to.have.status(400);
                    expect(res).to.have.property(`error`);
                    done();
                });
        });
    });
});