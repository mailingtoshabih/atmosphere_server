const express = require('express');
require('dotenv').config();
const cors = require('cors');

const weatherRoute = require("./routes/weatherRoute");

const port = process.env.PORT || 3000;
const app = express();

// -------------------------------------


app.use(cors());
app.use(express.json());
app.use("/weather", weatherRoute);



app.listen(port, () => {
    console.log(`Listening at port ${port}`);
})
