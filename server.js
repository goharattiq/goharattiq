const express     = require('express'),
      app         = express(),
      mongoose    = require('mongoose'), 
      config      = require('config'),
      path        = require('path');
//const Project     = require('./models/Project');
const work = require('./routes/api/Work');

app.use(express.json({extended:false}));

// DB Config
const db = config.get("mongoURI");

// Connect to MongoDB
mongoose
  .connect(db,{ useNewUrlParser: true,
                useUnifiedTopology: true,
                   })
  .then((db) => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Use Routes
app.use('/api/work', work);

if(process.env.NODE_ENV==='production'){
  app.use(express.static('client/build'));
  app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'client','build','index.html'))
  })
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
