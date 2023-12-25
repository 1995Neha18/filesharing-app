/* eslint-disable no-unused-expressions */
import "./App.css";
import { useRef } from "react";

function App() {
  const fileInputRef = useRef();

  const handleUploadFile = () => {
    fileInputRef.current;
  };

  return (
    <div className="App">
      <main className="relative h-screen flex flex-col justify-center items-center ">
        <div className=" w-full h-full blur-3xl bg-gradient-to-b  from-[#5F9EA0] via-[#B3D9D9] to-[#CFECEC]"></div>
        <div className="absolute w-[60%] h-[80%] bg-white rounded-xl border border-red-700 space-y-2">
          <h1 className="text-3xl font-bold mt-10">Simple File Sharing!</h1>
          <p className="text-md text-blue-600 font-normal">
            Upload and share the download link ...
          </p>
          <button
            onClick={handleUploadFile}
            className="px-4 py-1 bg-white font-semibold text-teal-600 rounded-md hover:bg-teal-600 hover:text-white border border-teal-600"
          >
            Upload
          </button>
          <div className="mt-2 ml-6 ">
            <input type="file" ref={fileInputRef} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
