const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/lists", function (req, res){
    const printList = getPeople();
    res.send(printList);
});

function getPeople(){
    return ["1", "2", "3", "4"];
}

app.listen(2000, function () {
  console.log("Server started on port 2000");
});




// localhost:2000/items?type=Type 2