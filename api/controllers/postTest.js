function testPost(req, res, next) {
    res.status(200).json({error: false, data: 'asdfasdf'})
}
module.exports = testPost;