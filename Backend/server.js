const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;

<<<<<<< HEAD
app.use(express.json());
app.use(cors());

=======
// Middlewares
app.use(express.json());
app.use(cors());

// mongo connection
>>>>>>> 495b005fcd7777efcf535459105c0ac3732dd59b
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB connected');
}).catch((err) => {
  console.error('MongoDB connection error:', err);
});

<<<<<<< HEAD
const logger = require('./middleware/logger');
app.use(logger);

=======
>>>>>>> 495b005fcd7777efcf535459105c0ac3732dd59b
// Routes
const movieRoutes = require('./routes/movies');
app.use('/movies', movieRoutes);

const streamRoutes = require('./routes/stream');
app.use('/stream', streamRoutes);

const authRoutes = require('./routes/auth');
<<<<<<< HEAD
app.use('/api', authRoutes);
=======
const logger = require('./middleware/logger');
app.use('/api', authRoutes);
app.use(logger);

>>>>>>> 495b005fcd7777efcf535459105c0ac3732dd59b

// Start server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
