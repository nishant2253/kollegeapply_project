import express from "express";
import cors from "cors";
import feesRoutes from "./routes/fees.routes.js";
import overviewRoutes from "./routes/overview.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/fees", feesRoutes);
app.use("/api/overview", overviewRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Backend is running successfully!" });
});

export default app;
