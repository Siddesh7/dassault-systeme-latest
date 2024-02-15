import mongoose, {Schema, Document} from "mongoose";

export interface CommentSchemaType extends Document {
  from: string;
  videoId: string;
  image: string;
  fromEmail: string;
  message: string;
  createdAt: Date;
}

const CommentSchema = new Schema<CommentSchemaType>({
  from: {
    type: String,
    required: [true, "Please provide a email."],
  },
  videoId: {
    type: String,
    required: [true, "Please provide a video id ."],
  },
  image: {
    type: String,
    required: [true, "Please provide a image."],
  },
  fromEmail: {
    type: String,
    required: [true, "Please provide a email."],
  },
  message: {
    type: String,
    required: [true, "Please provide a message for this user."],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const CommentModel =
  mongoose.models.Comment ||
  mongoose.model<CommentSchemaType>("Comment", CommentSchema);

export default CommentModel;
