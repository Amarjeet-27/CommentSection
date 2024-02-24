import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    comment: {
      type: String,
      required: true,
    },
    parentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "comments",
    },
    star: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const commentModel = mongoose.model("comments", commentSchema);

export default commentModel;
