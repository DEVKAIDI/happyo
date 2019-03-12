'use strict'

const myRoutes = {
    name:'myRoutes',
    version:'1.0.0',
    register: async function(server, optins){
        server.route({
            method:'GET',
            path:'/hops',
            handler:function(request, h){
                return 'Good morning ';
            }
        });
        await server.start();
    }
}

module.exports = myRoutes