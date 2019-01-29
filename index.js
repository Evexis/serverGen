const express = require('express');
const app = express();
app.get('/get', (req, res) => {
    //artificial delay
    setTimeout(() => {
        res.send('data')
    }, 3000);
})

app.listen(8080, () => {
    console.log(`Server started on port`);
});