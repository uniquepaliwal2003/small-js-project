const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/personDB')
.then( ()=>{
    console.log('Network connected');
}).catch( err=>{
    console.log('Network erro');
    console.log(err);
})

const personSchema = new mongoose.Schema({
    first:String,
    last:String
})
//this is like a virtual property which actually does not exist but will be treated as per the code as it was a real property
personSchema.virtual('fullName').get(function(){
    return `${this.first} ${this.last}`
}).set(function(v){
    this.first = v.substr(0,v.indexOf(' '));
    this.second = v.substr(v.indexOf(" ")+1);
})
//defining middleWAre
personSchema.pre('save',async function(){
    console.log("pre save");
})
personSchema.post('save',async function(){
    console.log("pre save");
})

const Person = mongoose.model('Person',personSchema);