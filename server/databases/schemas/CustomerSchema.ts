import {Mongoose, Connection, Schema} from "mongoose";
import {Constants} from "../../config/Constants";
import Database = require("../../databases/Database");
import {ICustomerDocument} from "../../models/interfaces/ICustomerDocument";

let connection: Connection = Database.getConnectin();

// Define private schema for User model
// No necessary to export the schema (keep it private)
let customerSchema: Schema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, {
    collection: "Customers" // Set collection name
});

export = customerSchema;