import request from 'supertest';

it('should fetch movie record', async() => {
    const response = await request('http://localhost:9000').get('/movies?id=1')
    expect(Object.keys(response.body.data)).toEqual(Object.keys({
        id: '2',
        title: '24',
        description: 'A thriller',
        shortDescription: 'A first time movie',
        duration: 300,
        releaseDate: new Date(),
        images: ['https://check.com', 'https://two.com'],
        genres: ['romance', 'scary'],
    }))
})