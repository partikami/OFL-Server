import express from "express";
import cors from "cors";
import records from "./routes/record.js";

const PORT = process.env.PORT || 5050;
const app = express();

app.use(
  cors({
    origin: "https://of-client-9c7ab85a5d42.herokuapp.com",
  })
);
app.use(express.json());
app.use("/record", records);

app.use((req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://of-client-9c7ab85a5d42.herokuapp.com"
  );
  // Other necessary headers
  next();
});

// start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
