'use strict'

const Octokat = require('octokat')
var octo

module.exports = function (repoName, description, flags, token) {
  if (typeof repoName !== 'string') {
    throw new TypeError('Expected a string')
  }
  if (repoName.split('/').length !== 2) {
    throw new Error('Not a repository name in form \'user/repo\'')
  }

  return Promise.resolve().then(() => {
    octo = new Octokat({
      token: token || process.env.GH_DESCRIPTION_TOKEN
    })
    return repoName
  }).then((repoName) => {
    repoName = repoName.split('/')
    return octo.repos(repoName[0], repoName[1]).fetch()
  }).then(function (result) {
    if (description) {
      // return octo.repos(result.owner.login, result.name).update({
      //   'description': description,
      //   'name': result.name
      // }).then((result) => {
      //   return { method: 'patch', description: result.description }
      // }).catch((err) => {
      //   console.log(err)
      //   throw ('Unable to set description', err)
      // })
    } else {
      return { method: 'get', topics: result }
    }
  }).catch(function (err) {
    if (err.status === 404) {
      return err
    } else {
      throw ('Could not get GitHub user', err)
    }
  })
}
