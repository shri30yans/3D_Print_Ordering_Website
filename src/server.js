var http = require('http');
var url = require('url');
var fs = require('fs');
var cors = require('cors');  
var qs = require('querystring');
var MongoClient = require('mongodb').MongoClient;

var backend = http.createServer(function(request, response) {
    cors()(request, response, () => {});
    if (request.method == 'POST') {
        var myurl = url.parse(request.url);
        var query = myurl.query;
        var qobj = qs.parse(query);
        let body = [];
        request.on('data', (chunk) => {
                body.push(chunk);
                console.log(chunk.toString());
            })
            .on('end', () => {
                body = Buffer.concat(body).toString();
                console.log(body);
                const data = JSON.parse(body);

                const url1 = "mongodb://localhost:27017";
                const dbName = "3d_printing_website";
                const collectionName = "db";

                MongoClient.connect(url1)
                    .then((client) => {
                        console.log("Connected to MongoDB server");
                        const db = client.db(dbName);
                        const collection = db.collection(collectionName);
                        const newData = {
                            product_id: data.product_id,
                            custom_info: data.custom_info,
                            product_style: data.product_style, // Include style in the data sent to the database
                            date_ordered: new Date().toISOString()
                        };
                        return collection.insertOne(newData);
                    })
                    .then((result) => {
                        // console.log(result);
                        response.writeHead(200, { 'Content-type': 'application/json' });
                        response.write(JSON.stringify(result));
                        response.end();
                    })
                    .catch((err) => {
                        console.error("An error occurred:", err);
                    });
            });
    }
}).listen(8080);

console.log("Server is up and running");