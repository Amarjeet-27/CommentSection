import commentModel from "../model/comment.js";

const getAllcommentsController = async (req, res) => {
  try {
    const posts = await commentModel
      .find({
        parentId: null,
      })
      .sort({ createdAt: -1 });

    return res.status(200).send({
      success: true,
      message: "post fetched successfully",
      posts,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Unable to fetch posts",
      error,
    });
  }
};

export default getAllcommentsController;
