var axios = require('axios');
var data = JSON.stringify({
    "collection": "users",
    "database": "bank3",
    "dataSource": "Cluster0",
    "projection": {
        "_id": 1
    }
});

var config = {
    method: 'post',
    url: 'https://data.mongodb-api.com/app/data-pyqpj/endpoint/data/beta/action/findOne',
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': '*',
        'api-key': '7TFp0oC9dcCG7pRIf46wrixHTmCcHuYeKUP9AhYk40WQ2yjaB08dIZjsh6llwp97'
    },
    data: data
};

axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });

// console.log(axios);
