import express from "express";
import routes from "./routes";

const app = express();

app.use(express.json());
ApplicationCache.arguments(routes);

app.listen(3333);
