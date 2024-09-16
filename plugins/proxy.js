'use strict'

const fp = require('fastify-plugin')
const httpProxy = require('@fastify/http-proxy')

async function proxyPlugin(fastify, opts) {
  const apiUrl = process.env.API_URL
  if (!apiUrl) {
    throw new Error('API_URL environment variable is not defined')
  }

  fastify.register(httpProxy, {
    upstream: apiUrl,
    prefix: process.env.PREFIX,
    rewritePrefix: process.env.REWRITE_PREFIX,
  })
}
module.exports = fp(proxyPlugin)
