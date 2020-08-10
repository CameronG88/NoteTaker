// dependencies
const express = require("express")

// call and set up express server
const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));

// make GET and SET routes (details in the readme)
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);


// make sure port is listening
app.listen(PORT, () => {
    console.log(`app listening on port: ${PORT}`);
}) 