const mongoose = require('mongoose');

const dbName = 'places_facilito_api';

const connectionString =
  process.env.MONGODB_URI ||
  process.env.MONGOLAB_URI ||
  process.env.MONGOHQ_URI ||
  "'mongodb://localhost/'+dbName";

module.exports = {
  connect: ()=> mongoose.connect(connectionString),
  dbName,
  connection: ()=>{
    if(mongose.connection)
      return mongoose.connection;
    return this.connect();
  }
}
