import { useState } from "react";

function DocumentUpload({ id, handleFileChange }) {
  const [file, setFile] = useState(null);
  const [isDragging, setisDragging] = useState(null);

  return (
    <label htmlFor={id} className="flex-1">
      <div
        className={`border-dashed border-2 bg-gray-800 p-5 min-h-50 w-full max-h-100 rounded-2xl flex flex-col items-center justify-center text-white hover:bg-gray-700 transition duration-300 cursor-pointer ${isDragging ? "border-blue-500 bg-gray-700" : "border-gray-600"}`}
        onDragOver={(e) => e.preventDefault()}
        onDragEnter={() => setisDragging(true)}
        onDragLeave={() => setisDragging(false)}
        onDrop={(e) => {
          e.preventDefault();
          const droppedFile = e.dataTransfer.files[0];
          setFile(droppedFile);
          handleFileChange(id, droppedFile);
        }}
      >
        <span className="text-xl font-bold">📂 Upload Document</span>
        <span>Drag & drop or click to select</span>
        <span>Supports .txt files</span>
        {file && (
          <div className="mt-2">
            {" "}
            <span>Selected File:</span>{" "}
            <span className="text-blue-400">{file.name}</span>
          </div>
        )}
        <input
          id={id}
          type="file"
          className="hidden"
          accept=".txt"
          onChange={(e) => {
            setFile(e.target.files[0]);
            handleFileChange(id, e.target.files[0]);
          }}
        />
      </div>
    </label>
  );
}

export default DocumentUpload;
