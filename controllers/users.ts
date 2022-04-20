import {Request, Response} from 'express';
import User from '../models/usuario';

export const getUsers = async (req: Request, res: Response) => {
  const usuarios = User.findAll();
  res.json({usuarios});
}

export const getUser = async (req: Request, res: Response) => {
  const {id} = req.params;
  const user = await User.findByPk(id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({
      message: `User ${id} not Found!`
    });
  }
}

export const postUser = async (req: Request, res: Response) => {
  const {body} = req;
  try {
    const itExist = await User.findOne({
      where: {
        email: body.email
      }
    })
    if (itExist){
      return res.status(400).json({
        message: `The user ${body.email} exist`
      });
    }
    const user = User.build(body);
    await user.save();
  } catch(error) {
    console.log(error);
    res.status(500).json({
      message: `Contact to Admin user ${body}`
    });
  }
}

export const putUser = async (req: Request, res: Response) => {
  const {id} = req.params;
  const {body} = req;
  try {
    const existId = await User.findByPk(id);
    if (!existId) {
      return res.status(404).json({
        message: `User with id ${id} not exist!`
      });
    }
    await existId.update(body);
    res.json(existId);
  } catch(error) {
    console.log(error);
    res.status(500).json({
      message: `Contact to Admin user ${body}`
    });
  }
}

export const deleteUser = async (req: Request, res: Response) => {
  const {id} = req.params;
  const existId = await User.findByPk(id);
  if (!existId) {
    return res.status(404).json({
      message: `User with id ${id} not exist!`
    });
  }
  await existId.update({estado: false});
  await existId.destroy();
  res.json(existId);
}