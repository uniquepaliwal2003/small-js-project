// requiring mongoose and setting strictQuery to true to remove warning.
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
// connecting to mongodb://127.0.0.1:27017 / dbname and adding .then and .catch to see if we connected succefully or there is some error present in it.
mongoose.connect('mongodb://127.0.0.1:27017/movieAp')
.then( ()=>{
    console.log('Network connected');
}).catch( err=>{
    console.log('Network erro');
    console.log(err);
})
//Creating new Schema with mongoose.Schema 
const movieSchema = new mongoose.Schema({
    title : String,
    year : Number,
    score : Number,
    rating : String
})
const Movie = mongoose.model('Movie',movieSchema)//movies will be formed as the collection.//now you have a model class names movie

//creating or inserting one and many movies

const amadeus = new Movie({title:'Amadeus',year:1986,score:9.2,rating:9.4});
// amdeus.save();
//when your create single instance you need to call save() but below you need not to call save .
Movie.insertMany([
    {title:'Amelie',year:2001,score:8.3,rating:'R'},
    {title:'Alien',year:1979,score:8.1,rating:'R'},
    {title:'The Iron Giant',year:1999,score:7.5,rating:'PG'},
    {title:'Stand By Me',year:1986,score:8.6,rating:'R'},
    {title:'Moonrise Kindom',year:2012,score:7.3,rating:'PG-13'}
]).then(data=>{
    console.log("IT worked");
    // console.log(data);
}
).catch(err=>{
    console.log(err,"you got some erroe");
})
Movie.find({rating:'R'}).then( data => console.log(data,"UniquePaliwal"));


//finding one or many movies
// Movie.find({}).then(data => console.log(data))
//Movie.find({year:{$lt:1990}}).then(data=>console.log(data))-gives and array
//findOne -  gives and object
//Movie.findById(' id ').then().catch()

//update
//updateOne -- Model.updateOne({name:'jean-Luc Picard'},{ship:'USS Enterprise}).then(res=>{console.log(res)})  => gives how many updated instead of what is updated
// Movie.updateMany({title:{$in:['Amadeus','Stand By Me']}},{score:10}).then(res=>console.log(res))
// Movie.findByIdAndUpdate({title:'The Iron Giant'},{score:7.0} ).then( m => console.log(m)); // here m will be old version 
// Movie.findByIdAndUpdate({title:'The Iron Giant'},{score:7.0},{new:true} ).then( m => console.log(m)); // here m will be new updated version 


//delete - no conformation of deleted data is returned
//Movie.deleteMany({year:{$gte:1999}}).then().catch().
//Movie.deleteOne({title}).then().catch().

//to get back the deleted or updated things ; - use findOneAndDelete or findOneAndUpdate