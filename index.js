const express = require('express') //express is framework used to built api
const app = express();
const userRoute = require("./route/user.route");
app.use(express.json()); //request will be in json

const port = 3002

app.use("/users", userRoute)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});