const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

//Import User model
const User = require("./models/userModel");

//Initialize Express app
const app = express();

//Use body-parser middleware to parse JSON data
app.use(bodyParser.json());

//MongoDB connection string
const mongoURI =
  "mongodb+srv://olanrewajufolami21:K4LVQvc6bMJOE9zv@cluster0.adtkd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
//olanrewajufolami21
//K4LVQvc6bMJOE9zv

//connect to MongoDB
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connect success......"))
  .catch((err) => console.error("error connecting to MongoDB...", err));



//import routes
  const userRoutes = require('./routes/userRoutes');
  app.use('/', userRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
