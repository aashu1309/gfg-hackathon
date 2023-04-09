const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/Registration', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connection to database established');
})
.catch((error) => {
  console.error('Error connecting to database:', error.message);
});
