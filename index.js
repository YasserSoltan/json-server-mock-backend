// const jsonServerAuth = require("json-server-auth");
// const server = jsonServerAuth.create();
// const router = jsonServerAuth.router("db.json");
// const middlewares = jsonServerAuth.defaults();
// const port = process.env.PORT || 3000;

// server.use(middlewares);
// server.use(router);

// server.listen(port);

const jsonServer = require('json-server');
const auth = require('json-server-auth');

const server = jsonServer.create();
const router = jsonServer.router('db.json');

server.db = router.db; // Required for auth
server.use(auth);      // Attach auth middleware
server.use(router);