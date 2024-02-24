import commentModel from "../model/comment.js";

const deleteCommentController = async (req, res) => {
  try {
    const id = req.params.id;
    await commentModel.findByIdAndDelete(id);
    await commentModel.deleteMany({
      parentId: id,
    });

    return res.status(200).send({
      success: true,
      message: "Comment deleted successfully",
    });
  } catch (error) {
    console.log(error);

    return res.status(500).send({
      success: false,
      message: "Unable to delete comment",
      error,
    });
  }
};

export default deleteCommentController;
