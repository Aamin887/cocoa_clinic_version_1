const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const errorHandler = require('./middlewares/errorHandler');
const db = require('./config/db')
const asyncHandler = require('express-async-handler')

const PORT = process.env.PORT || 5001

//database connection
db()

const app = express();

// form handling middleware
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(cors());

// routes
app.use('/api', require('./Routes/userRoute'))
app.use('/api/admin', require('./Routes/adminRoute'))


// error handler middleware
app.use(errorHandler)

app.listen(PORT, function(){
    console.log(`Server running on PORT: ${PORT}`);
}) 