export const uploadImage = async (request, response) => {
  console.log(request);
  const fileObj = {
    path: request.file.path,
    name: request.file.originalName,
  };

  try {
    const file = await File.create(fileObj);
    console.log(file);
    response
      .status(200)
      .json({ path: `http://localhost:8800/file/${file._id}` });
  } catch (error) {
    console.log(error.message);
    response.status(500).json({ error: error.message });
  }
};

export const downloadImage = async (request, response) => {
  try {
    const file = await File.findById(request.params.fileId);

    file.downloadCount++;

    await file.save();

    response.download(file.path, file.name);
  } catch (error) {
    console.error(error.message);
    response.status(500).json({ msg: error.message });
  }
};
