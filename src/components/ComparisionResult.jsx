import { useEffect, useRef } from "react";

function ComparisionResult({ similarityScore, aiInsights }) {
  const resultRef = useRef(null);
  useEffect(() => {
    resultRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [similarityScore]);
  return (
    <div
      ref={resultRef}
      className="flex flex-col max-w-7xl mx-auto justify-center mt-15 text-center"
    >
      {similarityScore !== null && (
        <div className="p-5 text-white animate-float">
          <span className="text-4xl font-bold animate-slide-in">
            Comparison Match is{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              {similarityScore}%
            </span>
          </span>
        </div>
      )}
      {aiInsights && (
        <div className="max-w-2xl mx-auto bg-gray-800 rounded-xl p-5 border border-gray-700 animate-slide-in">
          <p className="text-gray-300 text-lg leading-relaxed text-justify">
            {aiInsights}
          </p>
        </div>
      )}
    </div>
  );
}

export default ComparisionResult;
