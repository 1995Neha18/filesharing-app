import express from "express";
import router from "./routes/route.js"; // Note the file extension
import cors from "cors";
import DBconnection from "./database/db.js";

const app = express();

app.use(cors()); //cors needs to be enable before routing otherwise, it throws error.

app.use("/", router);

const PORT = 8800;

DBconnection();

app.listen(PORT, () => console.log(`server is running on PORT ${PORT}`));
