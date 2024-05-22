import { useState } from "react";

const ExpandableText = ({ text }: { text: string }) => {
  const limit = 255;
  const [isExpanded, setIsExpanded] = useState(false);

  if (text.length <= limit) {
    return <article>{text}</article>;
  }

  return (
    <div>
      <article>{isExpanded ? text : `${text.slice(0, limit)}...`}</article>
      <button
        className="bg-purple-500 hover:bg-purple-700 disabled:bg-gray-600 font-semibold text-black rounded-md px-4 py-1.5 transition-colors duration-300 ease-in-out mt-4"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? "Show Less" : "Show More"}
      </button>
    </div>
  );
};

export default ExpandableText;
