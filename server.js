const path = require('path');
const express = require('express');
const sequelize = require('./config/connection');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.static(path.join(__dirname, 'public')))
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('home');
});

sequelize.sync({force:false}).then(() => {
    app.listen(PORT, () => console.log(`Now listening at localhost:${PORT}`));
    console.log(PORT);
})