# Desafio Grade Programação RPC

Como desenvolvedor de aplicações para web, você precisa construir uma aplicação para que nossos telespectadores possam acessar a grade de programação da RPC. Para isso, você deverá consumir a API "EPG" da Globo. A aplicação deve mostrar os programas do dia, dispostos de 00:00 até 23:59, mostrando qual programa estará no ar em determinada data e hora.

 O endereço da API "EPG" responsável por retornar os dados da programação é: https://epg-api.video.globo.com/programmes/{ID_EMISSORA}?date=ANO-MES-DIA. O valor ID_EMISSORA para a RPC é 1337, e o formato padrão para o campo "date" é "ANO-MES-DIA". Através deste endereço é possível consultar em JSON a programação de qualquer dia passado e do próximo dia.

## A aplicação construída deverá conter as funcionalidades abaixo: 

- O usuário poderá escolher data e hora para consultar qual programa estará no ar.

- O sistema deve mostrar a grade de programação da data escolhida pelo usuário, disposta de 00:00 até 23:59.

## Estrutura BackEnd

### Configurações do Banco de Dados ORM
	- app
		- models
			dados_json.js
	- config
		context.js
	- database
		- migrations
			20200311235440-create-data_json.js
### Configuração de rotas e tratamento da API externa 
	- src
		- controller
			JsonController.js
		index.js
		routs.js

## Tecnologias Necessárias 

- NodeJS v12.14.1
- MySql 5.7.17
- Sequelize 5.21.5
- Axios 0.19.2
- Express 4.17.1