
import request from 'supertest';
describe('GET /', () => {
  it('get the / route', async () => {
    const response = await request('server:4001').get('/');
    expect(response.statusCode).toBe(200);
  });
});

console.log('testing modules');

describe('GET Vacancies', () => {
  it('get the /api/vacancy route', async () => {
    const response = await request('server:4001/api/vacancy').get('/');
    expect(response.statusCode).toBe(200);
  });
});

describe('check llm is up', () => {
  it('get the /api/bot route', async () => {
    const payload = { prompt: 'hey u up?' }; 
    const response = await request('server:4001').post('/api/bot').send(payload);
    expect(response.statusCode).toBe(200);
  });
});
