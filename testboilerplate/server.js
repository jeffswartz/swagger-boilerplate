var SwaggerServer = require('swagger-boilerplate').Server;

var swaggerServer =
 new SwaggerServer({
   apiDef: './apiDef.yml',
   modulePath: __dirname + '/',
   appName: 'Test Swagger Module Implementation',
   serverPort: 8124
 });

swaggerServer.start();
