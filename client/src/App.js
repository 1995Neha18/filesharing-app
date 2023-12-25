/* eslint-disable no-unused-expressions */
import "./App.css";
import { useEffect, useRef, useState } from "react";
import { uploadFile } from "./services/api";

function App() {
  const [file, setFile] = useState("");
  const fileInputRef = useRef();

  const handleUpload = () => {
    fileInputRef.current.click();
  };

  useEffect(() => {
    const getImage = async () => {
      const data = new FormData();
      data.append = ("name", file.name);
      data.append = ("file", file);

      let response = await uploadFile(data);
    };
    getImage();
  }, [file]);

  return (
    <div className="App">
      <main className="relative h-screen flex flex-col justify-center items-center ">
        <div className=" w-full h-full blur-3xl bg-gradient-to-b  from-[#5F9EA0] via-[#B3D9D9] to-[#CFECEC]"></div>
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
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
