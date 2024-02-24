import commentModel from "../model/comment.js";

const getAllChildrenCommentsController = async (req, res) => {
  try {
    const parentId = req.params.id;

    const comments = await commentModel.find({
      parentId,
    });

    return res.status(200).send({
      success: true,
      message: "All comments are fetched successfully",
      comments,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Unable to fetch all comments",
      error,
    });
  }
};

export default getAllChildrenCommentsController;
