const express = require('express');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get('/api/hello', (request, response) => {
    response.send({
        hello: "express"
    });
});

app.listen(PORT, () => {
    console.log("Express Server Listening on PORT:", PORT);
});
