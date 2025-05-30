const request = require('supertest');
const app = require('./app');

describe('POST /chat', () => {
  it('should return a response about yourself', async () => {
    const res = await request(app)
        .post('/chat')
        .send({ prompt: "Tell me about yourself" });

    expect(res.statusCode).toBe(200);
    expect(res.body.reply).toBe("Hi, I'm George!");
  });

  it('should return a response about projects', async () => {
    const res = await request(app)
      .post('/chat')
      .send({ prompt: "What projects have you worked on?" });

    expect(res.statusCode).toBe(200);
    expect(res.body.reply).toContain("movie search app");
  });

  it('should return a fallback response for unknown prompts', async () => {
    const res = await request(app)
      .post('/chat')
      .send({ prompt: "What is your favorite color?" });

    expect(res.statusCode).toBe(200);
    expect(res.body.reply).toBe("Sorry, I don't understand that question. Please try again.");
  });

  it('should return 400 for missing prompt', async () => {
    const res = await request(app)
      .post('/chat')
      .send({});

    expect(res.statusCode).toBe(400);
    expect(res.body.error).toBe("Missing prompt!");
  });

  it('should reject non-string prompts', async () => {
    const res = await request(app)
      .post('/chat')
      .send({prompt: 123});

    expect(res.statusCode).toBe(400);
    expect(res.body.error).toBe("Prompt must be a string!")
  });

  it('should return 400 for null prompts', async () => {
    const res = await request(app)
      .post('/chat')
      .send({ prompt: null});

    expect(res.statusCode).toBe(400);
    expect(res.body.error).toBe("Missing prompt!");
  })
});
