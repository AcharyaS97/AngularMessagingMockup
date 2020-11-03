module.exports = {
  apps: [
    {
      name        : "main",
      script      : "./main.ts",
      watch       : true,
      env_production : {
         "NODE_ENV": "production"
      }
    }
  ]
};
