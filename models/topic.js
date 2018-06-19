const database = require("../database_connection");

function list(){  
    return database("topic").select();  
}

module.exports = {
    list
};