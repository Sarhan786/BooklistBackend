const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BooksSchema = new Schema({
});

module.exports = mongoose.model("Books",BooksSchema);