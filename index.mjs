import express from "express";
import cors from "cors";
import "./loadEnvironment.mjs";
import "express-async-errors";
import cids from "./routes/cids.mjs";
import bvids from "./routes/bvids.mjs";
import pages from "./routes/pages.mjs";
import vlist from "./routes/vlist.mjs";
import twitter from "./routes/twitter.mjs";
import {danmuProxy} from "./routes/danmuProxy.mjs";

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());

// Load the /cids routes


app.use("/pages", pages);
app.use('/vlist', vlist);
app.use("/bvids", bvids);
app.use("/cids", cids);

app.use("/twitter", twitter);

app.use('/proxy', danmuProxy);

// 打印请求路径的中间件
// app.use('/api/v2', (req, res, next) => {
//   console.log('Incoming request path:', req.url); // 打印请求路径
//   next();
// }, danmuProxy);

// Global error handling
app.use((err, _req, res, next) => {
  res.status(500).send("Uh oh! An unexpected error occured.")
})

// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
