const express = require("express");
const path = require("path");
const app = express();
require("./db/connection");

const port = process.env.PORT || 3000;

// const static_path = path.join(__dirname)

console.log(path.join(__dirname , ".."))
// app.use(express.static())
app.get("/",(req,res) => {
    res.send("Hey this is Aashutosh")
});

app.listen(port, () => {
    console.log(`Server is running at port number ${port}`);
})
