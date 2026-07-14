const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://aswathy:ashexhere22@ac-d01d9ty-shard-00-00.36nhatr.mongodb.net:27017,ac-d01d9ty-shard-00-01.36nhatr.mongodb.net:27017,ac-d01d9ty-shard-00-02.36nhatr.mongodb.net:27017/hackathondb?ssl=true&replicaSet=atlas-sg5pws-shard-0&authSource=admin&appName=Cluster0").then(
    console.log("Mongodb Connected")
).catch(
    (error)=>{
        console.log(error)
    }
)

const Team = mongoose.model("Hackathon-Teams", new mongoose.Schema(
    {
        teamId: Number,
        teamName: String,
        teamLeader: String,
        leaderEmail: String,
        leaderPhone: String,
        collegeName: String,
        numOfMembers: Number,
        projectTitle: String,
        projectStatementTrack: String,
        technologyStack: String,
        mentorName: String,
        registrationDate: String,
        tableNumber: Number
    }
))

app.post("/add-team", async (req,res) =>{
    await Team.create(req.body)
    res.json({"status":"success"})
})

app.get("/view-team", async (req,res) =>{
    const teams = await Team.find()
    res.send(teams)
})

app.listen(5000, ()=>{
    console.log("Server Started");
})