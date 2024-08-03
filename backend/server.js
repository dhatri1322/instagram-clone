const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/your_routes_files');

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect('your_mongodb_connection_string', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use('/api', routes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
