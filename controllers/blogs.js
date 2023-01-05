import Blog from '../models/Blog'
export const getAllBlogs = (async(req, res) => {
    const blogs = await Blog.find({})
    res.status(200).json({ blogs })
})

export const createBlog = (async(req, res) => {
    const blog = await Blog.create(req.body)
    res.status(201).json({ blog })
})


export const getBlog = (async(req, res, next) => {
    const { id: blogID } = req.params
    const blog = await Blog.findOne({ _id: blogID })
    if (!blog) {
        return next(createCustomError(`No blog with id : ${blogID}`, 404))
    }

    res.status(200).json({ blog })
})

export const deleteBlog = (async(req, res, next) => {
    const { id: blogID } = req.params
    const blog = await Blog.findOneAndDelete({ _id: blogID })
    if (!blog) {
        return next(createCustomError(`No task with id : ${blogID}`, 404))
    }
    res.status(200).json({ blog })
})
export const updateBlog = (async(req, res, next) => {
    const { id: blogID } = req.params

    const blog = await Blog.findOneAndUpdate({ _id: blogID }, req.body, {
        new: true,
        runValidators: true,
    })

    if (!blog) {
        return next(createCustomError(`No blog with id : ${blogID}`, 404))
    }

    res.status(200).json({ blog })
})