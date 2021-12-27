// This file to saved with an extension *.spec.js* to tell Jest that it is a test file.
// Supertest library/Module helps us make API requests and and get responses in our Jest Tests.
// Installl it as a Dev dependency => `npm install  --save-dev supertest`

const request = require('supertest');
const app = require("../app");

// First test (Dunny test)
describe('Questions test suite', () => {
    it('Questions API Test', () => {
        expect(true).toEqual(true);
    });
});

// Second test (Tests the /questions/categories endpoint)
describe('Questions(Categories) test suite', () => {
    it('tests /categories endpoint', async() => {
        const response = await request(app).get("/questions/categories");

        // checking the categories field in the response
        expect(response.body.categories).toEqual(["Sports", "Music", "Science and Nature", "Geology", "History", "Entertainment:Anime_manga"]);
        expect(response.body.categories).toHaveLength(6);
        expect(response.statusCode).toBe(200);

        // Testing a single element in the array
        expect(response.body.categories).toEqual(expect.arrayContaining(['Entertainment:Anime_manga']));

    });
});
