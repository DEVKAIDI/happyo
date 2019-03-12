'use strict'
const Hapi = require("hapi");
const server = Hapi.server({
port:3000,
host:'127.0.0.1',

});
const init = async () => {
    await server.start();

    await server.register(require('./plugins/myroutes'));

    
    console.log(`Server is running at : ${server.info.uri}`);
};
process.on("unhandledRejection", (err)=> {
    console.log(err);
    process.exit();
})
init();