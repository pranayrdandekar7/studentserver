import express from "express"
import dotenv  from "dotenv"
 
dotenv.config ()
import { getHealth } from "./controllers/health.js"
import { postStudent,
         getStudents ,
         getStudentId,
         putStudentId,
         deleteStudentId
        } from "./controllers/student.js"

 import { handelPageNotFound } from "./controllers/error.js"
import mongoose from "mongoose"



const app= express()
app.use(express.json())


const dbConnection = async ()  =>{
    const conn =  await mongoose.connect(process.env.MONGODB_URL)

    if (conn){
        console.log(`MongoDB is Connected 📦`)
    }

    else{
        console.log(`MongoDB is  Not Connected ❌`)
    }
}

     dbConnection();


const students=[{
    "id":1,
    "name": "shriya",
    "age": "25",
    "gender": "female"
},
{
    "id": 2,
    "name": "sakshi",
    "age": "27",
    "gender": "female"
},] ;

app.get("/health", getHealth)

app.post("/student", postStudent)

app.get("/students", getStudents)

app.get("/student/:id",getStudentId)

app.put("/student/:id",putStudentId)

app.delete("/student/:id",deleteStudentId)

app.use("*",handelPageNotFound)

const PORT=process.env.PORT

app.listen(PORT ,()=>{
    console.log(`your PORT is running on ${PORT}`);
})


