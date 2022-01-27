
module.exports=(sequelize,DataTypes)=>{
    const Products=sequelize.define('products',{
        product_name:{
            type:DataTypes.STRING
        },
        product_price:{
            type:DataTypes.STRING
        },
        product_qnt:{
            type:DataTypes.STRING
        }
    },{
        timestamps:true
    })
    return Products
}