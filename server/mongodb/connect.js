import mongoose from 'mongoose';

const connectDB = (url) => {
  mongoose.set('strictQuery', true);
  mongoose.connect("mongodb+srv://clydefrancis:clydeclyde3995@cluster0.ivgtlcm.mongodb.net/?retryWrites=true&w=majority")
    .then(() => console.log('Connected to MongoDB Cluster'))
    .catch((err) => {
      console.error('Failed to Connect');
      console.error(err);
    });
};

export default connectDB;
