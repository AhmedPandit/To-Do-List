const request = require('supertest');
const app = require('../app'); // Assuming your app.js file is named app.js

describe('Test the routes', () => {
  // Test GET route to retrieve all items
  it('should get all items', async () => {
    const response = await request(app).get('/todos');
    expect(response.status).toBe(200);
    expect(response.body.itemlist).toBeDefined();
    expect(Array.isArray(response.body.itemlist)).toBe(true);
  });

  // Test POST route to create a new item
  it('should create a new item', async () => {
    const newItem = { data: 'New item' };
    const response = await request(app)
      .post('/todos')
      .send(newItem);
    expect(response.status).toBe(201);
    expect(response.body.heading).toBe(newItem.data);
  });

  // Test GET route to retrieve a specific item and toggle its done property
  it('should toggle the done property of a specific item', async () => {
    const itemId = '64985361510c6f6aa46d2a60'; // Provide an existing item ID here
    const response = await request(app).get(`/todos/${itemId}`);
    expect(response.status).toBe(200);
    expect(response.body.done).toBeDefined();
    expect(response.body.done).not.toBeUndefined();
  });

  // Test DELETE route to delete an item
  it('should delete an item', async () => {
    const itemId = '64985361510c6f6aa46d2a60'; // Provide an existing item ID here
    const response = await request(app).delete(`/todos/deleteitem/${itemId}`);
    expect(response.status).toBe(200);
    expect(response.body._id).toBe(itemId);
  });

  // Test PUT route to update an item
  it('should update an item', async () => {
    const itemId = '64985361510c6f6aa46d2a60'; // Provide an existing item ID here
    const updatedItem = { data: 'Updated item' };
    const response = await request(app)
      .put(`/todos/updateitem/${itemId}`)
      .send(updatedItem);
    expect(response.status).toBe(200);
    expect(response.body.heading).toBe(updatedItem.data);
  });
});
