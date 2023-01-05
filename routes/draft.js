import express from "express";
const router = express.Router()

const {
    getAllBlogs,
    createBlog,
    getBlog,
    updateBlog,
    deleteBlog,

} = require('../controllers/blogs')

router.route('/').get(getAllBlogs).post(createBlog)
router.route('/:id').get(getBlog).patch(updateBlog).delete(deleteBlog)