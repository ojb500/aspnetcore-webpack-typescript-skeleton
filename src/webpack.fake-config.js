// To support aspnetcore webpack dev middleware

require('ts-node/register');
module.exports = require('./webpack.config.ts').default;
