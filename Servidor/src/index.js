const express = require('express');
const cors = require('cors');
const app = express();
const morgan = require('morgan');
const path = require('path');
const multer = require('multer');


//imports
const personRoutes = require('./routes/person-routes');

//settings
app.set('port', 3000);

//middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('uploads'))

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  if ('OPTIONS' == req.method) {
    res.sendStatus(200);
  }
  else {
    next();
  }
});

//routes
app.use(personRoutes);
app.use('/api/person-routes', require('./routes/person-routes.js'));


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/')
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});


const upload = multer({ storage: storage });

app.get("/", (req, res) => {
  res.send(
    `<h1 style='text-align: center'>
          Wellcome to server
          <br><br>
          <b style="font-size: 182px;">😃👻</b>
      </h1>`
  );
});


app.post('/file', upload.single('file'), (req, res, next) => {
  const file = req.file;
  console.log(file.path);
  if (!file) {
    res.json({
      "response":false,
      "foto": ""
    });
  }

  res.json({
    "response":true,
    "foto": file.path
  });
})

//run
app.listen(app.get('port'), () => {
  console.log('Server on port 3000')
});