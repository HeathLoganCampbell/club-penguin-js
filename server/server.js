const express = require('express')
const app = express()
const path = require('path');
const port = 3000

app.set('views', path.join(__dirname, '..', 'client', 'views'));
app.set('view engine', 'ejs');

app.use("/client", express.static('./client'))
app.use("/lib", express.static('./libraries'))

app.get('/', (request, response) => {
    response.render('index', { title: 'Welcome!' });
})

app.listen(port, () => console.log(`app listening on port ${port}!`))