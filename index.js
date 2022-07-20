import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import Connection from './Database/db.js';
import DefaultData from './default.js';
import Router from './Routes/route.js';
import bodyParser from 'body-parser';

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
dotenv.config();

const PORT = process.env.PORT || 5000;

Connection();

app.get("/", (req, res) => {
    res.send("This is Flipkart API");
});

//DefaultData();

app.use("/", Router);

app.listen(PORT, () => {
    console.log(`Server started in ${PORT}`);
});
