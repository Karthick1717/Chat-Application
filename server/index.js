require('dotenv').config();
const express = require('express');
const cors = require('cors');
const http = require('http');
const socketIo = require('socket.io');


const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(cors());
app.use(express.json());




const pool = require('./db');


pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Error:', err);
  } else {
    console.log('Connected! Time:', res.rows[0]);
  }
  pool.end();
});


server.listen(process.env.PORT, ()=>{console.log(`Server is running on port ${process.env.PORT}`)});