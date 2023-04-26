const axios = require('axios')
const apiOptions = {
    headers: {
      'x-rapidapi-key': 'ac36004e64msh2f03d5e28e75ab5p1a32bfjsn9dc87404b637',
      'x-rapidapi-host': 'dad-jokes.p.rapidapi.com',
      'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
    },
     };
getApiController = async (req, res) => {
    try {
      const response = await axios.get('https://dad-jokes.p.rapidapi.com/random/joke', apiOptions);
      const { setup, punchline } = response.data.body[0];
      res.send(`${setup}\n${punchline}`);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal server error');
    }
  }
  module.exports = { getApiController }