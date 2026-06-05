import { useState } from "react";
import DocumentUpload from "./components/DocumentUpload";
import Header from "./components/Header";
import ComparisionResult from "./components/ComparisionResult";

function App() {
  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);
  const [similarityScore, setSimilarityScore] = useState(null);
  const [aiInsights, setAiInsights] = useState(null);
  const [loading, setLoading] = useState(false);

  function handleFileChange(id, file) {
    if (id === "file1") {
      setFile1(file);
    } else {
      setFile2(file);
    }
  }

  async function handleCompare() {
    if (!file1 || !file2) {
      alert("Please upload both files before comparing!");
      setSimilarityScore(null);
      return;
    }
    setLoading(true);
    setSimilarityScore(null);
    setAiInsights(null);
    try {
      const formData = new FormData();
      formData.append("file1", file1);
      formData.append("file2", file2);
      const [start, end] = await Promise.all([
        fetch(`${import.meta.env.VITE_API_URL}/api/compare`, {
          method: "POST",
          body: formData,
        }),
        new Promise((resolve) => setTimeout(resolve, 1000)),
      ]);

      if (start.status === 415) {
        alert("Only .txt files are supported!");
        return;
      }

      if (!start.ok) {
        alert("Something went wrong. Please try again.");
        return;
      }

      const data = await start.json();
      setSimilarityScore(data.similarityScore);
      setAiInsights(data.aiInsights);
    } catch (error) {
      if (error instanceof TypeError) {
        alert("Upload failed. Please check your files and try again.");
      } else {
        alert("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <Header />
      <div className="flex flex-col md:flex-row gap-10 p-10 max-w-7xl mx-auto">
        <DocumentUpload id="file1" handleFileChange={handleFileChange} />
        <DocumentUpload id="file2" handleFileChange={handleFileChange} />
      </div>
      <div className="flex gap-10 max-w-7xl mx-auto justify-center">
        <button
          className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-10 rounded-xl transition duration-300 cursor-pointer disabled:opacity-50"
          onClick={handleCompare}
          disabled={loading}
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin-slow"></span>
              Comparing...
            </span>
          ) : (
            "Compare"
          )}
        </button>
      </div>
      <ComparisionResult
        similarityScore={similarityScore}
        aiInsights={aiInsights}
      />
    </div>
  );
}

export default App;
