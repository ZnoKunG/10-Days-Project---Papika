import router from "./routes/route";

const express = require('express');
const app = express();
app.use(router);

app.listen(3000, () => {
    console.log("Listening to port 3000...")
})