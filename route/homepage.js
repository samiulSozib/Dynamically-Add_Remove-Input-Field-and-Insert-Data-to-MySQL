const db=require('../model/database')
const Product=db.products

exports.postData=async(req,res,next)=>{
    //console.log(req.body)

    try{


        
          let array=[];
          let current_product={};

            for(let i=0;i<req.body.product_name.length;i++){
                current_product['product_name']=req.body.product_name[i];
                current_product['product_price']=req.body.product_price[i];
                current_product['product_qnt']=req.body.product_qnt[i];
                array.push(current_product)
            }
            //console.log(array)

            let result=await Product.bulkCreate(array);
            if(result){
                console.log(result);
            }else{
                console.log('error')
            }


    }catch(e){
        console.log(e)
        next(e)
    }

    return res.redirect('/')
}