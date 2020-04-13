const mongoose = require("../db/connection.js");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    title:{
        type:String
    },
    status:{
        type:String
    },
    deadline:{
        type:String
    }
})

const listSchema = new Schema({
    name:{
        type:String
    },
    items:[itemSchema]
})

module.exports = mongoose.model("List", listSchema);