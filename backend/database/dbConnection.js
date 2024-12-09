import mongoose from "mongoose";

export const dbConnection = ()=>{
    mongoose.connect('mongodb://localhost:27017',{
        dbName: "NEW_HMS",
    })
    .then(()=>{
        console.log("Connected to Database!");
    })
    .catch(err=>{
        console.log(`Some error occured while connecting to database: ${err}`);
    });
};