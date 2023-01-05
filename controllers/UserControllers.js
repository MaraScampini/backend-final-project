const models = require("../models/index");
const { encryptPasswordService } = require("../services/AuthServices");
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
      message: "User data updated",
    });
  } catch (error) {
    console.error(error);
  }
};

const editPassword = async (req, res) => {
  try {
    const user = req.body;
    delete user.email;
    let newPassword = encryptPasswordService(user.password);
    await models.users.update(
      {
        password: newPassword,
      },
      {
        where: { email: req.auth.email },
      }
    );
    res.json({
      message: "Password updated",
    });
  } catch (error) {
    console.error(error);
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await models.users.findAll();
    res.json({ message: "Users found", users });
  } catch (error) {
    console.error(error);
  }
};

const deleteUser = async (req, res) => {
  try {
    const email = req.body.email;
    const userFound = await models.users.findOne({
      where: {
        email: email,
      },
    });

    if (userFound.roleIdRole === 1) {
      res.json({
        message: "You cannot delete admins",
      });
    } else {
      models.users.destroy({
        where: {
          email: email,
        },
      });
      res.json({
        message: "User deleted",
      });
    }
  } catch (error) {
    console.error(error);
  }
};

const deleteMyAccount = async (req, res) => {
  try {
    const email = req.auth.email;
    const userFound = await models.users.findOne({
      where: {
        email: email,
      },
    });

    if (userFound.roleIdRole === 1) {
      res.json({
        message: "Admin account cannot be deleted",
      });
    } else {
      models.users.destroy({
        where: {
          email: email,
        },
      });
      res.json({
        message: "Account deleted",
      });
    }
  } catch (error) {
    console.error(error);
  }
};

const getMyData = async (req, res) => {
  try {
    const user = await models.users.findOne({
      where: {
        id_user : req.auth.id
      }
    })
    res.json({
      user
    })
  } catch (error) {
    console.error(error);
  }
}
module.exports = {
  editUser,
  getAllUsers,
  editPassword,
  deleteUser,
  deleteMyAccount,
  getMyData
};
