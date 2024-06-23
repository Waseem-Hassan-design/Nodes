const product = async(req,res) => {
res.status(200).json({msg : "welcome to products"});
}
const productshow = async(req,res)=> {
 res.status(200).json({msg: "welcome to product show"})
}
const producttest = async(req,res)=> {
    res.status(200).json({msg: "welcome to product test"})
   }
module.exports = {product,productshow,producttest};








// const Product = require('../models/product')
// const getAllProductsShow = async (req,res) => {
//     //const products = await Product.find({});
//    // const products = await Product.find(req.query).select("name company");
//     const products = await Product.find(req.query).skip(2);
//      res.status(200).json({products})
//  // res.status(200).json({msg: "I am getAllProducts"})
//  }
// const getAllProducts = async (req,res) => {
//     const {company,name,featured,sort,select} = req.query;
//     const queryObject = {};
//     if(company) {
//         queryObject.company = company;
//         //console.log(queryObject.company)
//     }
//     if(featured) {
//         queryObject.featured = featured;
//     }
//     if(name) {
//         //queryObject.name = name;
//         queryObject.name = {$regex:name,$options: "i"};
//     }
//     let apiData = product.find(queryObject)
//     if(sort) {
//         //let sortFix = sort.replace(",","");
//         let sortFix = sort.split(",").join("");
//         // queryObject.sort= sortFix;
//         apiData = apiData.sort(sortFix)
//     }
//      if(select) {
//         //let selectFix = select.replace(",","");
//         let selectFix = select.split(",").join("");
//         // queryObject.sort= sortFix;
//         apiData = apiData.select(selectFix)
//     }
//     let page = Number(req.query.page) || 1;
//     let limit = Number(req.query.limit) || 3;

//     let skip = (page - 1) * limit;

//     //page = 2;
//    // limit = 3;
//    // skip = 1 * 3 = 3 ;

//     //apiData = apiData.skip(skip).limit(limit);
//     apiData = apiData.skip(skip).limit(limit);
//     console.log(queryObject)
//     const products =  await apiData;
//     //const products =  await Product.find(req.query).sort("name -price");
//     //sort = name,price;
//     //const products =  await Product.find(queryObject)
//     // console.log("~ file: Products.js ~ line 9 ~ getAllProducts ~ req.query", req.query);

//     //res.status(200).json({products});
//     res.status(200).json({products, nbHits: products.length});
// }
// // const getAllProducts = async (req,res) => {
// // res.status(200).json({msg: "I am getAllProducts"})
// // }
// const getAllProductsTesting =async (req,res) =>{
// res.status(200).json({msg: "I am getAllProductsTesting"})
// }
// module.exports = {getAllProducts,getAllProductsTesting,getAllProductsShow};

