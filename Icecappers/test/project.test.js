const request = require("request");
const expect = require("chai").expect;
const PORT = process.env.PORT || 3000;
const url = "http://localhost:" + PORT + "/";

describe("Guess number game test", () => {
  describe("Easy mode", () => {
    let mode = "easyMode";
    it("returns status 200", (done) => {
      request(url + "?mode=" + mode, (error, response, body) => {
        expect(response.statusCode).to.equal(200);
      });
      done();
    });

    it("returns the proper initial json data", (done) => {
      request(url + "?mode=" + mode, (error, response, body) => {
        let data = JSON.parse(body);
        expect(data.data).to.deep.include({
          score: 0,
          highScore: 0,
          noGuesses: 0,
          guessedNums: [],
        });
      });
      done();
    });

    it("returns no error when number between 1 and 10", (done) => {
      request.post(
        url + mode,
        { json: { answer: 5 } },
        (error, response, body) => {
          let data = body;
          expect(data).to.not.have.key({ error });
        }
      );
      done();
    });

    it("returns error when number is not between 1 and 10", (done) => {
      request.post(
        url + mode,
        { json: { answer: 11 } },
        (error, response, body) => {
          let data = body;
          expect(data).to.have.key({ error });
        }
      );
      done();
    });
  });

  describe("Medium mode", () => {
    let mode = "mediumMode";
    it("returns status 200", (done) => {
      request(url + "?mode=" + mode, (error, response, body) => {
        expect(response.statusCode).to.equal(200);
      });
      done();
    });

    it("returns the proper initial json data", (done) => {
      request(url + "?mode=" + mode, (error, response, body) => {
        let data = JSON.parse(body);
        expect(data.data).to.deep.include({
          score: 0,
          highScore: 0,
          noGuesses: 0,
          guessedNums: [],
        });
      });
      done();
    });

    it("returns no error when number between 1 and 20", (done) => {
      request.post(
        url + mode,
        { json: { answer: 15 } },
        (error, response, body) => {
          let data = body;
          expect(data).to.not.have.key({ error });
        }
      );
      done();
    });

    it("returns error when number is not between 1 and 20", (done) => {
      request.post(
        url + mode,
        { json: { answer: 21 } },
        (error, response, body) => {
          let data = body;
          expect(data).to.have.key({ error });
        }
      );
      done();
    });
  });

  describe("Hard mode", () => {
    let mode = "hardMode";
    it("returns status 200", (done) => {
      request(url + "?mode=" + mode, (error, response, body) => {
        expect(response.statusCode).to.equal(200);
      });
      done();
    });

    it("returns the proper initial json data", (done) => {
      request(url + "?mode=" + mode, (error, response, body) => {
        let data = JSON.parse(body);
        expect(data.data).to.deep.include({
          score: 0,
          highScore: 0,
          noGuesses: 0,
          guessedNums: [],
        });
      });
      done();
    });

    it("returns no error when number between 1 and 30", (done) => {
      request.post(
        url + mode,
        { json: { answer: 21 } },
        (error, response, body) => {
          let data = body;
          expect(data).to.not.have.key({ error });
        }
      );
      done();
    });

    it("returns error when number is not between 1 and 30", (done) => {
      request.post(
        url + mode,
        { json: { answer: 31 } },
        (error, response, body) => {
          let data = body;
          expect(data).to.have.key({ error });
        }
      );
      done();
    });
  });
});
