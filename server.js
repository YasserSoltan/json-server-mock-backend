const jsonServer = require('json-server');
const auth = require('json-server-auth');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Bind auth rules (e.g., only logged-in users can create posts)
const rules = auth.rewriter({
  "/posts*": "/600/posts$1",  // 600 = "Logged in users only"
});

server.use(middlewares);
server.use(rules);
server.use(auth);  // Enable JWT auth
server.use(router);

server.listen(3000, () => {
  console.log('JSON Server + Auth running on port 3000');
});