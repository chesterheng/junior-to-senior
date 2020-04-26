const fetch = require('node-fetch');
const swapi = require('./script2')

describe('swapi', () => {
  // it('calls swapi to get people', done => {
  //   expect.assertions(1)
  //   swapi.getPeople(fetch).then(data => {
  //     expect(data.count).toEqual(82)
  //     done();
  //   })
  // })

  it('calls swapi to get people', () => {
    //expect.assertions(number) verifies that a
    // certain number of assertions are called during a
    // test. This is often useful when testing asynchronous
    //code, in order to make sure that assertions in a
    //callback actually got called.
    expect.assertions(1)
    // return promise so expect.assertions(1) can detect
    return swapi.getPeople(fetch).then(data => {
      expect(data.count).toEqual(82)
    })
  })

  it('calls swapi to get people with a promise', () => {
    expect.assertions(2)
    return swapi.getPeoplePromise(fetch).then(data => {
      expect(data.count).toEqual(82)
      expect(data.results.length).toBeGreaterThan(5)
    })
  })

  it('getPeople returns count and results', () => {
    const mockFetch = jest.fn()
      .mockReturnValue(Promise.resolve({
        json: () => Promise.resolve({
          count: 87,
          results: [0,1,2,3,4,5]
        })
      }))
    
    expect.assertions(4)
    // use dependency injection to inject mockFetch instead of fetch
    return swapi.getPeoplePromise(mockFetch).then(data => {
      expect(mockFetch.mock.calls.length).toBe(1)
      expect(mockFetch).toBeCalledWith('https://swapi.dev/api/people')
      expect(data.count).toEqual(87)
      expect(data.results.length).toBeGreaterThan(5)
    })
  })

})

