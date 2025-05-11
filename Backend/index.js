const express = require('express');
const cors = require('cors');
const petRoutes = require('./routes/pets');
const app = express();


const loginRoutes = require('./routes/login');
const registerRoutes = require('./routes/register');

app.use(cors());
app.use(express.json());

app.use('/api', loginRoutes);
app.use('/api', registerRoutes);
app.use('/api/pets', petRoutes);

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
