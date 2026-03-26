import cors from "cors"; 
import express from "express";
import linkRoutes from "./routes/linkRoutes";
import redirectRoutes from "./routes/RedirectRoutes";

const app = express();
app.use(express.json());

app.use(cors({
    origin: "http://localhost:3000"
}))

app.use("/links", linkRoutes)
app.use("/", redirectRoutes)

export default app;