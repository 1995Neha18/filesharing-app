/* eslint-disable no-unused-expressions */
import "./App.css";
import { useEffect, useRef, useState } from "react";
import { uploadFile } from "./services/api";
import scenery1 from "./images/scenery1.jpeg";

function App() {
  const [file, setFile] = useState("");
  const [result, setResult] = useState("");
  const fileInputRef = useRef();

  const handleUpload = () => {
    fileInputRef.current.click();
  };

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        try {
          const response = await uploadFile(data);

          if (response && response.path) {
            setResult(response.path);
          } else {
            console.error("Invalid response format:", response);
          }
        } catch (error) {
          console.error("Error uploading file:", error.message);
        }
      }
    };

    getImage();
  }, [file]);

  return (
    <div className="App">
      <main className="relative w-full h-screen flex flex-col justify-center items-center ">
        <div className=" w-full h-full blur-sm">
          <img src={scenery1} alt="icon" className="w-full h-full" />
        </div>
        <div className="absolute  w-[50%] h-[80%] bg-white rounded-xl space-y-6 bg-[#fff]">
          <h1 className="text-3xl text-primary font-bold mt-20">
            Simple File Sharing!
          </h1>
          <p className="text-lg text-secondary font-normal">
            Upload and share the download link ...
          </p>
          <button
            onClick={handleUpload}
            className="px-6 py-2 bg-white text-xl font-semibold text-primary rounded-md hover:bg-primary hover:text-[#fff] border border-primary"
          >
            Upload
          </button>
          <div className="mt-2 ml-6 hidden">
            <input
              type="file"
              ref={fileInputRef}
              onChange={(e) => {
                const selectedFile = e.target.files[0];
                if (selectedFile) {
                  setFile(selectedFile);
                }
              }}
            />
          </div>
          <div className="mt-4 text-secondary">
            <a href={result}>{result}</a>
          </div>
        </div>
      </main>
    </div>
  );
}

// originalname: 'download.jpeg',
// encoding: '7bit',
// mimetype: 'image/jpeg',
// destination: 'uploads',
// filename: '6cc6dbb18e4ef63c5356ef0990a7f37b',
// path: 'uploads\\6cc6dbb18e4ef63c5356ef0990a7f37b',
// size: 8810

export default App;
