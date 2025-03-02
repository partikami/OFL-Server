import express from "express";
import cors from "cors";
import records from "./routes/record.js";

const PORT = process.env.PORT || 5050;
const app = express();

// Local development
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);

// Heroku deployment
app.use(
  cors({
    origin: ["https://of-client-9c7ab85a5d42.herokuapp.com"],
    methods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
    credentials: true,
  })
);

app.use(express.json());
app.use("/record", records);

// start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
