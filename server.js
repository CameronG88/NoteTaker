// dependencies
const express = require("express")
const fs = require("fs");
const path = require("path")

// call and set up express server
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));

// make GET and SET routes (details in the readme)

require("./routes/htmlRoutes")(app);
require("./routes/apiRoutes")(app);

// make sure port is listening
app.listen(PORT, () => {
    console.log(`app listening on port:  + ${PORT}`);
}) 