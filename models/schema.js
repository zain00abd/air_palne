const mongoose = require("mongoose")
const Schema = mongoose.Schema

const ModelSchema = new Schema({
    Name:String,
    Paspor:String,
    Visa:String,
    posin:String,
    radio1:String,
    
        take1:String,
        len1:String,
        date1_1:String,
        date2_1:String,
    
        take2:String,
        len2:String,
        date1_2:String,


        take3:String,
        len3:String,
        date1_3:String,


        take4:String,
        len4:String,
        date1_4:String,

    person:String,
    kg:Number,
    phone:String,

})

const data = mongoose.model("dataUser", ModelSchema)
module.exports = data