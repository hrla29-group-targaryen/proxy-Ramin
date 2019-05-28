const express = require ('express');
const proxy = require('http-proxy-middleware');
const cors = require('cors');
const path = require('path');
const PORT = 4000;

const app = express();

app.use(cors());
app.use('/', express.static(path.resolve(__dirname, '../public')));

app.use('/restaurants', proxy ({
  target:'http://localhost:4000',
  router: {
    // '/time_sponsored': 'http://localhost:3400',
    // '/menu_cart': 'http://localhost:3100',
    '/reviews_footer': 'http://localhost:3200',
    // '/nav_intro': 'http://localhost:3300'
  },
  changeOrigin: true
 }))

app.listen(PORT, () => console.log('App is listening on PORT ', PORT));