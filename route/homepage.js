exports.postData=async(req,res,next)=>{
    console.log(req.body)
    return res.send('abc')
}