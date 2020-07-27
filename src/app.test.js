const test = require("tape");
const request = require("supertest");

const app = require("app");

test("get /hello", assert => {
  request(app)
    .get("/hello")
    .expect(200)
    .end(err => {
      if (err) throw err;
      assert.pass("should return 2000 OK");
      assert.end();
    });
});

test("get /goodbye", assert => {
  request(app)
    .get("/goodbye")
    .expect(200)
    .end(err => {
      if (err) throw err;
      assert.pass("should return 2000 OK");
      assert.end();
    });
});
