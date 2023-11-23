const fs = require('fs');
const axios = require('axios');
const Serp = require('./serp');

exports.getDataForSeoResults = function (username, password, entry, keyword) {

    const postRequest = {
        method: 'post',
        url: 'https://api.dataforseo.com/v3/serp/google/organic/live/regular',
        auth: {
            username: username,
            password: password
        },
        data: [{
            "keyword": encodeURIComponent(keyword),
            "language_code": "en",
            "location_code": 2840
        }],
        headers: {
            'content-type': 'application/json'
        }
    };

    axios(postRequest).then(function (response) {
        
        var result = response['data']['tasks'];
        var serp = new Serp(result);
        var rank = serp.getRankOfUrl(entry);
        
        console.log(`Rank for ${url}, ${keyword} is ${rank}`);

        return rank;

    }).catch(function (error) {
        console.log(error);
    });
}
    

