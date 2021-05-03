const express = require('express');
const fs = require('fs');
const PORT = process.env.PORT || 3001;
const app = express();


app.use(express.urlencoded({extended: true}));
app.use(express.json());

require("../routes/apiRoutes")(app);
app.use(express.static('public'));
require('../routes/htmlRoutes')(app);


app.listen(PORT, () =>{
    console.log(`App listening on PORT: ${PORT}`);

});