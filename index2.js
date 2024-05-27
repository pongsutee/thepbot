let express = require('express');
let app = express();

let port = process.env.PORT || 3000;

app.set('view engine','ejs');

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.listen(port,() => {
    console.log(`sever is running on  port ${port}`)
})