import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./SubmitButton.css";

const SubmitButton = () => {
  const [clicked, setClicked] = useState(false);
  const [content, setContent] = useState("");
  const [wordCount, setWordCount] = useState([]);

  const handleClick = () => {
    setClicked(true);
    fetch("https://www.terriblytinytales.com/test.txt")
      .then((response) => response.text())
      .then((data) => {
        setContent(data);
        const words = data.toLowerCase().match(/\b\S+\b/g);
        const wordCountObj = {};
        words.forEach((word) => {
          wordCountObj[word] = (wordCountObj[word] || 0) + 1;
        });
        const wordCountArr = Object.keys(wordCountObj)
          .map((key) => ({ word: key, count: wordCountObj[key] }))
          .sort((a, b) => b.count - a.count)
          .slice(0, 20);
        setWordCount(wordCountArr);
      })
      .catch((error) => console.log(error));
  };

  const handleExport = () => {
    const csvContent =
      "data:text/csv;charset=utf-8," +
      wordCount.map((row) => `${row.word},${row.count}`).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "histogram-data.csv");
    document.body.appendChild(link);
    link.click();
  };

  return (
    <div className="container">
      {clicked ? (
        <>
          <div className="chart">
            <ResponsiveContainer width="100%" height={500}>
              <BarChart data={wordCount}>
                <XAxis dataKey="word" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Bar dataKey="count" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="export">
            <button onClick={handleExport}>Export Data</button>
          </div>
        </>
      ) : (
        <div className="submit">
          <button onClick={handleClick}>Submit</button>
        </div>
      )}
    </div>
  );
};

export default SubmitButton;
