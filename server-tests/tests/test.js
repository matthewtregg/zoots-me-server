/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../app')
describe('Test photo-data', () => {
    test('It should respond status code 200 on GET method', async () => {
        const response = await request(app).get('/photo-data')
        expect(response.statusCode).toBe(200);
    });
});


// fetch('http://localhost:400' + '/photo-data', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         title: 'test',
//         date: 'tests',
//         venue: 'testss',
//     })
// })