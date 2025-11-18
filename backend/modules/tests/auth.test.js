// Create auth.test.js with Jest tests for register and login
// use this request body for registration:
// {
//   "username": "rach",
//   "email": "rachana@yopmail.com",
//   "password": "rach@123"
// }
// Add tests so POST /auth/register sends this body and expects:
// - status 200
// - res.body.status = "success"
// - res.body.data.id exists
// - res.body.data.email matches the input
// if email already exists, expect status 500 and success false 
// Also add login tests to use the same email + password.

import request from "supertest";
import app from "../../server.js";
describe("Auth Module", () => {
    const userData = {
        username: "rach",
        email: "rachana@yopmail.com",
        password: "rach@123"
    };
    describe("POST /auth/register", () => {
        it("should register a new user", async () => {
            const res = await request(app)
                .post("/auth/register")
                .send(userData);
            expect(res.statusCode).toEqual(200);
            expect(res.body.status).toBe("success");
            expect(res.body.data).toHaveProperty("id");
            expect(res.body.data.email).toBe(userData.email);
        });
        it("should not register an existing user", async () => {
            const res = await request(app)
                .post("/auth/register")
                .send(userData);
            expect(res.statusCode).toEqual(500);
            expect(res.body.status).toBe("fail");
        });
    });
    describe("POST /auth/login", () => {
        it("should login an existing user", async () => {
            const res = await request(app)
                .post("/auth/login")
                .send({
                    email: userData.email,
                    password: userData.password
                });
            expect(res.statusCode).toEqual(200);
            expect(res.body.status).toBe("success");
            expect(res.body.data).toHaveProperty("token");
        });
        it("should not login with incorrect credentials", async () => {
            const res = await request(app)
                .post("/auth/login")
                .send({
                    email: userData.email,
                    password: "wrongpassword"
                });
            expect(res.statusCode).toEqual(401);
            expect(res.body.status).toBe("fail");
        });
    });
});