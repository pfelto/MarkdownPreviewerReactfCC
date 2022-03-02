import React, { useState } from "react";
import { marked } from "marked";

function App() {
  const [markup, setMarkup] = useState(
    `# Welcome to my React Markdown Previewer!`
  );
  return (
    <div
      style={{
        display: "flex",
        gap: "2vw",
        minHeight: "100vh",
        backgroundColor: "lightgrey",
        padding: "4vh 2vw",
      }}
    >
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          padding: "5px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "1vh",
          }}
        >
          <h3 style={{ alignSelf: "center" }}>Input</h3>
          <button style={{ alignSelf: "center" }} onClick={() => setMarkup("")}>
            Clear
          </button>
        </div>
        <textarea
          id="editor"
          style={{
            flex: 1,
            border: "1px solid black",
            backgroundColor: "white",
            borderRadius: "3px",
            resize: "none",
            overflowY: "scroll",
            padding: "4px",
          }}
          value={markup}
          onChange={(e) => setMarkup(e.target.value)}
        ></textarea>
      </div>
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          padding: "5px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "1vh",
          }}
        >
          <h3 style={{ alignSelf: "center" }}>Preview</h3>
        </div>
        <div
          id="preview"
          style={{
            flex: 1,
            border: "1px solid black",
            backgroundColor: "white",
            borderRadius: "3px",
            overflowY: "scroll",
            padding: "4px",
          }}
          dangerouslySetInnerHTML={{ __html: marked.parse(markup) }}
        ></div>
      </div>
    </div>
  );
}

export default App;
