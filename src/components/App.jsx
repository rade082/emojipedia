import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function renderemoji(emoticon) {
  return (
    <Entry
      key={emoticon.id}
      img={emoticon.emoji}
      name={emoticon.name}
      description={emoticon.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(renderemoji)}</dl>
    </div>
  );
}

export default App;
