import React, { useState } from "react";
import { marked } from "marked";

function App() {
  const [markup, setMarkup] = useState(
    "# Welcome to my React Markdown Preview\n## This is a sub-heading\n### And here's some other cool stuff\nHeres some code, `<div></div>`, between 2 backtics.\n```\n\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine){\n\tif (firstLine == '```' && lastLine == '```'){\n\treturn multiLineCode;\n\t}\n}\n```\n\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.org), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------\nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n- Some are bulleted.\n- With different indentation levels.\n- That look like this.\n\n\n1. And there are numbered lists too.\n1. Use just 1s if you want!\n1. And last but not least, let's not forget embedded images:\n\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)"
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
