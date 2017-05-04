Package.describe({
  name: "modules",
  version: "0.9.0-beta.18",
  summary: "CommonJS module system",
  documentation: "README.md"
});

Npm.depends({
  reify: "0.9.2"
});

Package.onUse(function(api) {
  api.use("underscore");
  api.use("modules-runtime");
  api.mainModule("client.js", "client");
  api.mainModule("server.js", "server");
  api.export("meteorInstall");
  api.export("process");
});
