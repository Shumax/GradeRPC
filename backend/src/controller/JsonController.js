const express = require('express');
const axios = require('axios');
const { dados_json } = require('../../app/models');
const bodyParser = require('body-parser');

module.exports = {
	async index(request, response){
        console.log('API funcionando!');

        const {dia} = request.body;

        const resp = await axios.get(
            `https://epg-api.video.globo.com/programmes/1337?date=2020-03-12`
        ).then(response => {
            mostra = response.data;
            console.log(mostra);
        }).catch(error => console.log(error));
            console.log({dia});
        //dados_json.create({mostra});
    
      return response.json(resp);
    }
};

