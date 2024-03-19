const mongoose = require("mongoose");

const querySchema = new mongoose.Schema({

    name: {
        type: String
    },
    email: {
        type: String
    },
    query: {
        type: String
    }
});
const Query = new mongoose.model("query", querySchema);


module.exports = Query;