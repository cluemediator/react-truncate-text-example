import React, { useState } from 'react';
import LinesEllipsis from 'react-lines-ellipsis';

const longText = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;

function App() {
  const [truncated, setTruncated] = useState(true);

  return (
    <div className="App">
      <h4>Truncate text in React - <a href="https://www.cluemediator.com">Clue Mediator</a></h4>

      {truncated ? <LinesEllipsis
        text={longText}
        maxLine='3'
        ellipsis={<>... <button onClick={() => setTruncated(!truncated)}>Read More</button></>}
        basedOn='words'
      /> : <div>{longText} <button onClick={() => setTruncated(!truncated)}>Less</button></div>}
    </div>
  );
}

export default App;