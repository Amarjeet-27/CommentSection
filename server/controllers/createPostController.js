import commentModel from "../model/comment.js";

const createPostControllers = async (req, res) => {
  try {
    // const { postData } = req.body.postData;
    console.log(req.body);
    const comment = new commentModel(req.body);
    await comment.save();

    res.status(200).send({
      success: true,
      message: "New comment created successfully",
      comment,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in creating new post",
      error,
    });
  }
};

export default createPostControllers;
