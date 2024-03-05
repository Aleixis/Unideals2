const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const checkoutRoutes = require('./checkout'); 

const app = express();

app.use(express.static("public"));
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(cors({ origin: true, credentials: true }));


const authRoutes = require('./authRoutes');
app.use('/', authRoutes); 

app.use('/checkout', checkoutRoutes);

app.listen(3000, () => console.log('Server is running on port 3000'));