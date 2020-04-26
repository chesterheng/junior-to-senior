const googleDatabase = [
  'cats.com',
  'souprecipes.com',
  'flowers.com',
  'animals.com',
  'catpictures.com',
  'myfavouritecats.com',
  'myfavouritecats2.com'
]

// dependency injection for db
const googleSearch = (searchInput, db) => {
  const matches = db.filter(website => website.includes(searchInput))

  return matches.length > 3 ? matches.slice(0,3) : matches;
}

// console.log(googleSearch('cat', googleDatabase));

module.exports = googleSearch;