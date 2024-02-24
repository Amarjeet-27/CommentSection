import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
// import commentModel from "./model/comment.js";
import createPostControllers from "./controllers/createPostController.js";
import deleteCommentController from "./controllers/deleteCommentController.js";
import getAllcommentsController from "./controllers/getAllcommentsController.js";
import getAllChildrenCommentsController from "./controllers/getAllChildrenCommentsController.js";
dotenv.config();
connectDB();
const app = express();
app.use(cors());
app.use(express.json());
// app.get("/", (req, res) => {
//   return res.send({
//     message: "This is testing page",
//   });
// });

app.get("/", getAllcommentsController);
app.get("/:id", getAllChildrenCommentsController);
app.post("/create-post", createPostControllers);
app.delete("/delete/:id", deleteCommentController);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on  ${PORT}`);
});
