//app.js -file
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Root route
app.get('/', (req, res) => {
  res.send(`
    <h1>About</h1>
    <p><strong>Name:</strong> Pravin V</p>
    <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/pravin-velusamy" target="_blank">linkedin.com/in/pravin-velusamy</a></p>
    <p><strong>GitHub:</strong> <a href="https://github.com/Pravin-19" target="_blank">github.com/Pravin-19</a></p>
    <p><strong>Twitter:</strong> <a href="https://x.com/pravinv_" target="_blank">x.com/pravinv_</a></p>
    <p><strong>Resume:</strong> <a href="https://drive.google.com/file/d/1Rw8H4P9tNWKiOGN9sOkoQ5ffkbOzwLj9/view?usp=sharing" target="_blank">Resume-GoogleDrive</a></p>
    <p><strong>Code:</strong> <a href="https://github.com/Pravin-19/codedeploy-ec2-asg.git" target="_blank">Github Code</a></p>

  `);
});

// /user route
app.get('/user', (req, res) => {
  res.json({
    Name: 'Pravin V',
    Role: 'Cloud Engineer',
    Message: 'Passionate about Cloud and DevOps ',
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



