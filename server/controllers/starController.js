import commentModel from "../model/comment.js";

const starController = async (req, res) => {
  try {
    const id = req.params.id;
    await commentModel.findByIdAndUpdate(id, { star: req.body.star });

    return res.status(200).send({
      success: true,
      message: "Star it  successfully",
    });
  } catch (error) {
    console.log(error);

    return res.status(500).send({
      success: false,
      message: "Unable to star comment ",
      error,
    });
  }
};

export default starController;
