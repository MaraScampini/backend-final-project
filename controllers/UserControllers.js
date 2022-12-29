const models = require("../models/index");
const { encryptPasswordService } = require("../services/AuthServices");
const jsonwebtoken = require("jsonwebtoken");
require("dotenv").config();

const editUser = async (req, res) => {
  try {
    const user = req.body;

    delete user.email;
    delete user.password;

    let resp = await models.users.update(
      {
        name: user.name,
        surname: user.surname,
        address: user.address,
        age: user.age,
      },
      {
        where: { email: req.auth?.email },
      }
    );

    res.json({
      resp,
      message: "User data updated"
    })
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  editUser,
};
