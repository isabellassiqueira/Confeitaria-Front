const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

// Import route files
const usersRoutes = require('./routes/users');


// Create Express app
const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Routes
app.use('/api/users', usersRoutes);


// // Health check endpoint
// app.get('/', (req, res) => {
//     res.json({ 
//         message: 'Client-Order Management API is running!',
//         timestamp: new Date().toISOString()
//     });
// });

// Error handling middleware
// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).json({ 
//         error: 'Something went wrong!',
//         message: err.message 
//     });
// });

// // Handle 404 routes
// app.use('*', (req, res) => {
//     res.status(404).json({ 
//         error: 'Route not found',
//         requestedUrl: req.originalUrl 
//     });
// });

// Start server
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`👥 Users API: http://localhost:${PORT}/api/users`);
});

module.exports = app;


