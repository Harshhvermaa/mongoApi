import mongoose from "mongoose";

// mongodb+srv://agcharshverma:<password>@cluster0.ivobady.mongodb.net/
const mongoDB = mongoose.connect('mongodb+srv://agcharshverma:harshvermaagc@cluster0.ivobady.mongodb.net/newDatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to the database');
}).catch((err) => {
  console.error('Error connecting to the database:', err);
});

export default mongoDB;