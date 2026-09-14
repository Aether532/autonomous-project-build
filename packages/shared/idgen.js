'use strict'

const crypto = require('crypto')

function generateId () {
  return crypto.randomBytes(16).toString('hex')
}

const ALPHABET = '0123456789abcdefghijklmnopqrstuvwxyz'

function generateShortId (len = 8) {
  const bytes = crypto.randomBytes(len)
  let result = ''
  for (let i = 0; i < len; i++) {
    result += ALPHABET[bytes[i] % ALPHABET.length]
  }
  return result
}

module.exports = { generateId, generateShortId, ALPHABET }
