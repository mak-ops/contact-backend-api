const asyncHandlr = require("express-async-handler");
//@desc Get all coontacts
//@route Get /api/contacts
//@access public
const getContacts = asyncHandlr(async (req, res) => {
  res.status(200).json({ massage: "Get all massage" });
});

//@desc create all coontacts
//@route post /api/contacts
//@access public
const createContact = asyncHandlr(async (req, res) => {
  // console.log(req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are mandatory !");
  }
  res.status(201).json({ massage: "Create contact" });
});

//@desc update all coontacts
//@route Get /api/contacts/:id
//@access public
const getContact = asyncHandlr(async (req, res) => {
  res.status(200).json({ massage: `Create contact for ${req.params.id}` });
});

//@desc Get all coontacts
//@route Put /api/contacts/:id
//@access public
const updateContact = asyncHandlr(async (req, res) => {
  res.status(200).json({ massage: `Update contact for ${req.params.id}` });
});

//@desc Delete coontacts
//@route Delete /api/contacts/:id
//@access public
const deleteContact = asyncHandlr(async (req, res) => {
  res.json({ massage: `Delete contact for ${req.params.id}` });
});

module.exports = {
  getContact,
  deleteContact,
  updateContact,
  getContacts,
  createContact,
};
