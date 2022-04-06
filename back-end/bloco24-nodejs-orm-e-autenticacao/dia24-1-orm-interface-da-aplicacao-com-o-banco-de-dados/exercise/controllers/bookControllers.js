const express = require('express');
const { Books } = require('../models');

 const findAllBook = async (_req, res, next) => {
  try {
    const book = await Books.findAll();

    return res.status(200).json(book);
  } catch (error) {
    next(error)
  }
};

const findBookById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const book = await Books.findByPk(id);

    if (!book) return res.status(404).json({ message: 'Usuário não encontrado' });

    return res.status(200).json(book);
  } catch (error) {
    next(error)
  }
};

const createBook = async (req, res, next) => {
  try {
    const { title, author, pageQuantity } = req.body;
    console.log(req.body);
    const newBook = await Books.create({ title, author, pageQuantity });
    

    return res.status(201).json(newBook);
  } catch (error) {
    next(error)
  }
};

const updateBook = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, author, pageQuantity } = req.body;
    const bookById = await Books.update({ title, author, pageQuantity }, {where: { id }});

    console.log("update", bookById);
    if(!bookById) return res.status(404).json({ message: 'Usuário não encontrado' });

    return res.status(200).json({ message: 'Usuário atualizado com sucesso' });
  } catch (error) {
    next(error)
  }
};

const deleteBook = async (req, res, next) => {
  try {
    const { id } = req.params;
    const book = Books.destroy({ where: { id } });

    console.log("deleteBook", book);

    return res.status(204).json({ message: "Book excluído com sucesso!!" });

  } catch (error) {
    next(error);
  }
}


module.exports= { findAllBook, findBookById, createBook, updateBook, deleteBook };
