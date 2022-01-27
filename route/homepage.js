const db=require('../model/database')
const Product=db.products

exports.postData=async(req,res,next)=>{
    //console.log(req.body.product_name[0])

    try{

        let product1=new Product({
            product_name:req.body.product_name[0],
            product_price:req.body.product_price[0],
            product_qnt:req.body.product_qnt[0]
        })

        console.log(product1)

    }catch(e){
        console.log(e)
        next(e)
    }

    return res.redirect('/')
}