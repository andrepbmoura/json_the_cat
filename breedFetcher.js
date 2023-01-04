const request = require('request');

const fetchBreedDescription = function(breed, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;
  request.get(url, (error, response) => {
    const body = JSON.parse(response.body)[0];
    let desc;
    if (body === undefined) {
      error = "Breed not found: " + breed;
    } else {
      desc = (response.statusCode !== 200) ? `Status Code: ${response.statusCode}` : body["description"];
    }
    callback(error, desc);
  });
};

module.exports = { fetchBreedDescription };



