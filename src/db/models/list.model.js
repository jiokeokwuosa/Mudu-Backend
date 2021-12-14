import mongoose from "mongoose";

const ListSchema = new mongoose.Schema(
  {    
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },  
    text: {
      type: String,
      required: true     
    },
    completed: {
      type: Boolean,
      default: false     
    },
    delectedAt:{
      type:Date
    }   
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    timestamps: true,
  }
);


const list = mongoose.model("list", ListSchema);

export default list;
