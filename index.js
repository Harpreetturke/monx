const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/e-com");


const ProductSchema=new mongoose.Schema(
    {
        name:String,
        price:Number,
        brand:String,
        category:String ,
        country:String      

    }
);


const main=async()=>{
    const ProductsModel=mongoose.model('products',ProductSchema);

    let data=new ProductsModel(
        {
            name:"U 10",
            price:200,
            brand:"samsung",
            category:"Mobile",
            country:"India"
        }
    );
    let result=await data.save();
    console.log(result)
}


const updateInDB=async()=>{
    const ProductsModel=mongoose.model('products',ProductSchema);
    let data=await ProductsModel.updateOne(
        {name:"U 10"},
        {
           $set:{price:950, name:"U 20"}
        }
    )
    console.log(data);
}

const deleteInDB=async()=>{
    const ProductsModel=mongoose.model('products',ProductSchema);
    let data= await ProductsModel.deleteOne(
    {name:"U 20"});

    console.log(data);
}

const findInDB=async()=>{
    const ProductsModel=mongoose.model('products',ProductSchema);
    let data= await ProductsModel.find();

    console.log(data);
}
main()