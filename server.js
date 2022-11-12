const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Zuri Training on MongoDb')
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));