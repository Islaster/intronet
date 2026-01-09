import express from "express";
import cors from "cors";
import { config } from "dotenv";
config();

const app = express();

//middleware
app.use(cors());
app.use(express.json());

//routes
