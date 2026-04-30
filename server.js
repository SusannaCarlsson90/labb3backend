const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

//Init express
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); // Tillåter Cross-Origin anrop
app.use(express.json()); // Gör att servern kan läsa JSON i POST-anrop

// Anslut till MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/cvdb")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log("Error connecting to database: " + error);
  });

//Erfarenhets schema
const workSchema = new mongoose.Schema({
  companyname: {
    type: String,
    required: true,
  },
  jobtitle: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const WorkExperience = mongoose.model(
  "WorkExperience",
  workSchema,
  "workexperiences"
);

//routes

app.get("/api", async (req, res) => {
  res.json({ message: "Welcome to this API" });
});

app.get("/workexperiences", async (req, res) => {
  try {
    let result = await WorkExperience.find({});
    return res.json(result);
  } catch (error) {
    return res.status(500).json(error);
  }
});

app.post("/workexperiences", async (req, res) => {
  try {
    let result = await WorkExperience.create(req.body);
    return res.json(result);
  } catch (error) {
    return res.status(400).json(error);
  }
});

app.put("/workexperiences/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const result = await WorkExperience.findByIdAndUpdate(id, updatedData, {
      new: true,
    });

    if (!result) {
      return res
        .status(404)
        .json({ message: "Hittade inget jobb med det ID:t" });
    }
    return res.json({ message: "Uppdatering lyckades!", result });
  } catch (error) {
    return res.status(500).json(error);
  }
});

//Delete baserat på ID
app.delete("/workexperiences/:id", async (req, res) => {
  try {
    const id = req.params.id; //Hämtar id från URL
    const result = await WorkExperience.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).json({ error: "Hittade inget jobb med det ID:t" });
    }
    return res.json({ message: "Jobbet har raderats!" });
  } catch (error) {
    return res.status(500).json({ error: "Kunde inte radera: " + error });
  }
});

app.listen(PORT, () => {
  console.log(`Servern körs på port ${PORT}`);
});
