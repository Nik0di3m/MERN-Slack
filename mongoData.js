import mongoose from 'mongoose';

const SlackSchema = mongoose.Schema({
    channelName: String,
    conversation: {
        message: String,
        timestamp: String,
        user: String,
        useImage: String,
    }
})

export default mongoose.model('conversation', SlackSchema)