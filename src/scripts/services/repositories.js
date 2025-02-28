import {  baseUrl, repositoriesQuantity } from '../variables.js'

async function getRepositories(userName) {
  const response = await fetch(`${baseUrl}/${userName}/repos?per_page=${repositoriesQuantity}`)
  console.log(response)
  return await response.json()
}

export { getRepositories }