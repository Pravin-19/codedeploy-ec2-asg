const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Root route
app.get('/', (req, res) => {
  res.send('<h1>Hello from EC2 Instance!</h1><p>Welcome to my simple web application.</p>');
});

// /data route
app.get('/data', (req, res) => {
  res.json({
    name: 'Pravin V',
    role: 'Cloud Engineer',
    message: 'Passionate about Cloud and DevOps!',
  });
});

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});





// const express = require('express');
// const app = express();
// const port = process.env.PORT || 3000;

// app.get('/', (req, res) => {
//     res.send('Hello, welcome to the Node.js application!');
// });

// app.get('/data', (req, res) => {
//     res.json({ message: 'This is some sample data.' });
// });

// app.listen(port, () => {
//     console.log(`App running on port ${port}`);
// });



