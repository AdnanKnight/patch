const config = require('config')


const Port = `${config.get("PORT")}`;

const mongoDBUrl = `${config.get("MongoDB_URI")}`;

module.exports = { mongoDBUrl, Port };
