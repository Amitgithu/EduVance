const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userController = require('./controllers/userController');
const authMiddleware = require('./middleware/authMiddleware');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// seed()

mongoose.connect('mongodb://127.0.0.1:27017/E-Learning-Hub')
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch(err => console.error('Error connecting to MongoDB:', err));

  


// Routes
app.post('/signup', userController.signup);
app.post('/login', userController.login);
app.get('/search', userController.search);
app.get('/user/:userId', authMiddleware.verifyToken, userController.getUserById);
app.put('/user/:userId', authMiddleware.verifyToken, userController.editProfile);

app.post('/send-otp',userController.sendOtp);
app.post('/forgotpassword', userController.resetPassword);

app.get('/courses', userController.getAllCourses);




