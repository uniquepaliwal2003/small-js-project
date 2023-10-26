const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/ShopAp')
.then( ()=>{
    console.log('Network connected');
}).catch( err=>{
    console.log('Network erro');
    console.log(err);
})
const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        maxlength:20
    },
    price:{
        type: Number,
        min: 0
    },
    onSale:{
        type:Boolean,
        default:false
    },
    categories: {
        type:[String],//array of string it is
        default: ['sports']
    },
    qty:{
        online: {
            type: Number,
            default:0
        },
        inStore: {
            type: Number,
            default: 0
        }
    },
    size:{
        type:String,
        enum:['S','M','L'] // means size could be only one of them
    }
});
//instance method - in it this means the particular instance
productSchema.methods.greet = function(){
    console.log("Hello Hi ! Howdy!")
}
//static method - in it this means whole model class not a particular instance
productSchema.statics.fireSale = function(){
    return this.updateMany({},{onSale:ture, price:0})
}
const Product = mongoose.model('Product',productSchema);


// Validations will only apply when the product is created to make it apply when the product is updated also do -

Product.findOneAndUpdate({name:'Tire Pump'},{price:-199},{new:true,runValidators:true}).then().catch();