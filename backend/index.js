import express from 'express';
const app = express()

import dotenv  from "dotenv";
dotenv.config()


app.use(express.json())
app.use(express.urlencoded({extended: true}))



app.listen(process.env.port, () => {
    console.log(`Server running at http://localhost:${process.env.port}`);
})
