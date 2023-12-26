const fileSchema = new mongoose.schema({
  path: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  downloadContent: {
    type: String,
    required: true,
    default: 0,
  },
});

const File = mongoose.model("file", fileSchema);

export default File;
