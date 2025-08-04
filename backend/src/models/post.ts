import mongoose, { Schema, Document } from 'mongoose';

interface IPost extends Document {
    content: string;
    author: mongoose.Types.ObjectId;
    timestamp: Date;
}

const PostSchema: Schema<IPost> = new Schema({
    content: {
        type: String,
        required: true,
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    timestamp: {
        type: Date,
        default: Date.now,
    },
}, {
    timestamps: true,
});

const Post = mongoose.model<IPost>('Post', PostSchema);

export default Post;