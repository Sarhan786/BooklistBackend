const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BooksSchema = new Schema({
  //   Books: [
  //     {
  title: String,
  author: String,
  isbn: String,
  publisher: String,
  published_date: String,
  description: String,
  //     },
  //   ],
  //   user:{ type: Schema.Types.ObjectId, ref: "User" }
});

module.exports = mongoose.model("Books", BooksSchema);