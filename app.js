const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv').config()
const { router } = require('./src/routes/user.routes')

const app = express();
const port = process.env.PORT || 5100;
app.use(express.json())




app.get('/api/v1/dad-jokes', router)

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
