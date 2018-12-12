const express = require('express');
const logger = require('winston');
const app = express();
const port = 5000;

app.get('/', (request, response) => {
	response.send(`Hello, I'm alive`);
	logger.info('Responded to GET request on /')
});

app.get('/api/me', (request, response) => {
	response.send('{"name": "Sindre Eik de Lange", "location": "Earth"}');
	logger.info('Responded to GET request on /api/me')
});

app.get('/api/work', (request, response) => {
	response.send('[{"yearFrom": "2018", "yearTo": "2019", "place": "MMVI", "comment": "Maskinlæring"}, {"yearFrom": "2017", "yearTo": "2019", "place": "Sbanken", "comment": "Bank stuffs"}]');
	logger.info('Responded to GET request on /api/work')
});

app.get('/api/education', (request, response) => {
	response.send('[{"yearFrom": "2014", "yearTo": "2017", "place": "HVL", "comment": "Dataingeniør"}, {"yearFrom": "2017", "yearTo": "2019", "place": "HVL & UIB", "comment": "Programutvikling"}]');
	logger.info('Responded to GET request on /api/edu')
});

app.listen(port, (err) => {
  if (err) {
    return logger.error('something bad happened', err)
  }

  logger.info(`server is listening on ${port}`)
});
