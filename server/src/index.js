const express = require('express');
const app = express();
const cors = require("cors");
//middleware
app.use(express.json());
app.use(cors());
//routes
app.use("/auth", require("./routes/jwtAuth"));
let port = 5000;
app.use("/dashboard", require("./routes/dashboard"));
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});