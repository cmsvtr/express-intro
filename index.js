import express from "express";
import * as dotenv from "dotenv";
import uuid from "uuid";

dotenv.config()

app.use(express.json())

const app = express();


app.get("/all", (req, res) => {
    return res.status(200).json(bancodedados)
})

app.post("/create", (req, res) => {

    bancodedados.push(req.body)

    return res.status(201).json(bancodedados)
})

app.put("/edit/:id", (req, res) => {

    const editById = bancodedados.find(obj => obj.id === req.params.id)
    const index = bancodedados.indexOf(editById)

    bancodedados.splice(index, 1, req.body)
    
    return res.status().json(bancodedados)
    return res.status().json(bancodedados)
})

app.delete("/delete/:id", (req, res) => {
    
    const deleteById = bancodedados.find(obj => obj.id === req.params.id)
    const index = bancodedados.indexOf(deleteById)

    bancodedados.splice(index, 1)
    
    return res.status().json(bancodedados)
})

app.listen(process.env.PORT, () => {
    console.log("Server is up and running on port " + process.env.PORT)
})