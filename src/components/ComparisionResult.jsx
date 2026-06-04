function ComparisionResult({ similarityScore }) {
  return (
    <div className="flex max-w-7xl mx-auto justify-center mt-15 text-center">
      {similarityScore !== null && (
        <div className="p-5 text-white animate-float">
          <span className="text-4xl font-bold animate-slide-in">
            Comparison Match is{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              {similarityScore.toFixed(2)}%
            </span>
          </span>
        </div>
      )}
    </div>
  );
}

export default ComparisionResult;
