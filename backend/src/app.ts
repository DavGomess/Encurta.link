import cors from "cors"; 
import express from "express";
import linkRoutes from "./routes/LinkRoutes";
import redirectRoutes from "./routes/RedirectRoutes";

const app = express();
app.use(express.json());

const allowedOrigins = [
    "http://localhost:3000", 
    "https://encurta-liink.vercel.app"
]

app.use(cors({
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Origem não permitida pelo cors"));
        }
    }
}))

app.use("/links", linkRoutes)
app.use("/", redirectRoutes)

export default app;