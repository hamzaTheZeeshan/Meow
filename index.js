import express from 'express';
const app = express();
const PORT = process.env.PORT || 9000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});     

// Pass '0.0.0.0' as the host argument
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});