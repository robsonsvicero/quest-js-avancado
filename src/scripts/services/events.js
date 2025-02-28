import { baseUrl, repositoriesQuantity } from '../variables.js';

async function getEvents(userName) {
  const response = await fetch(`${baseUrl}/${userName}/events?per_page=${repositoriesQuantity}`)
  const eventsData = await response.json()

  return eventsData.filter(element => element.type === 'CreateEvent' || element.type === 'PushEvent').slice(0, repositoriesQuantity);
}

export { getEvents }