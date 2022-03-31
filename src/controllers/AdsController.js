const Category = require('../models/Category')

module.exports = {
  getCategories: async (req, res) => {
    const cats = await Category.find();

    let categories = [];

    for (let i in cats) {
      categories.push({
        ...cats[i]._doc,
        img: `${process.env.BASEURL}/assets/images/${cats[i].slug}.png`
      })
    }

    res.json({categories});
  },
  addAction: async (req, res) => {

  },
  getList: async (req, res) => {

  },
  getItem: async (req, res) => {

  },
  editAction: async (req, res) => {

  },
};