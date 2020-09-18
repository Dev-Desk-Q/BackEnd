const supertest = require("supertest")
const server = require("./server")
// const db = require("../data/config")



// This will test a login with blank body and should fail to succeed
// describe("POST to register tests", () => {
// 	it("Should fail", async () => {
// 		const res = await supertest(server).post("/api/auth/register")
// 		expect(res.statusCode).toBe(500)
// 	})
// // This will test registration but after the first success, will fail because it'll find a dupicate user and receive the duplicate user status code
// 	it("Should work now but find duplicate", async () => {
//         const testUser = {username: "test", password: "test"}
//         const res = await supertest(server).post("/api/auth/register").send(testUser)
//         .then(res => { 
//             expect(res.statusCode).toBe(409)

//         })
// 	})

	
// })