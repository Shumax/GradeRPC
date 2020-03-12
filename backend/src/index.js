const express = require('express');
const axios = require('axios');
const { dados_json } = require('../app/models');
const bodyParser = require('body-parser');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', async (request, response) => {
	let mostra;
	const resp = await axios.get(
		`https://epg-api.video.globo.com/programmes/1337?date=2020-03-10`
	).then(response => {
		mostra = response.data;
		console.log(mostra);
	}).catch(error => console.log(error));
		
	dados_json.create({mostra});
	
  
  //console.log(resp.data);

  return response.json(resp);
});

app.listen(3000);
