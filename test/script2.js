const fetch = require('node-fetch');

// dependency injection for fetch function
const getPeoplePromise = fetch => {
  return fetch('https://swapi.dev/api/people')
    .then(response => response.json())
    .then(data => {
      return {
        count: data.count,
        results: data.results
      }
    })
    .catch(err => console.error(err));
}

const getPeople = async fetch => {
  try {
    const getRequest = await fetch('https://swapi.dev/api/people');
    const data = await getRequest.json();
    return {
      count: data.count,
      results: data.results
    }
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getPeople,
  getPeoplePromise
}