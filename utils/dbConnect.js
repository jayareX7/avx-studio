import mongoose from 'mongoose'

async function dbConnect() {

  const db = mongoose.connection;

  // check if we have a connection to the database or if it's currently
  // connecting or disconnecting (readyState 1, 2 and 3)
  if (db.readyState >= 1) {
    return
  }

    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', () => {
      console.log('connected');
    });

  return mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
}

export default dbConnect





