import { useEffect, useState } from "react";

import "./App.css";
import axios from "axios";

function App() {
  const [jokes, setJokes] = useState(null);

  useEffect(() => {
    axios.get("/api/jokes").then((esponse) => {
      setJokes(esponse.data);
    });
  }, []);

  if (!jokes) {
    return <h1>nai hai</h1>;
  }
  return (
    <>
      {console.log(jokes)}
      <h1>Kartiks frontend</h1>
      <h3>JOKES : {jokes.length}</h3>
      {jokes.jokes.map((joke, index) => (
        <div key={jokes.id}>
          <h3>{joke.title}</h3>
          <h2>{joke.content}</h2>
        </div>
      ))}
    </>
  );
}

export default App;
