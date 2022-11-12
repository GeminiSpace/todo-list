const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/routes");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const {config} = require('dotenv');
config()
const path = require("path");

app.use(express.json());
app.use(cors());

mongoose
	.connect("mongodb://localhost:27017")
	.then(() => console.log("Connected to MongoDB..."))
	.catch((err) => console.log(err));

app.use(routes);

app.all("*", (req, res) => {
	res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

app.listen(port, () => console.log(`Server is running on port ${port}`));