import React, { useEffect, useState } from "react";

const Jokes = () => {
  let [jokes, setJokes] = useState({});
  const URL = "https://official-joke-api.appspot.com/random_joke";

  let getNewJokes = async () => {
    let res = await fetch(URL);
    let jsonres = await res.json();
    setJokes({ setup: jsonres.setup, punchline: jsonres.punchline });
  };

  useEffect(() => {
    getNewJokes();
  }, []);

  return (
    <div>
      <h3>{jokes.setup}</h3>
      <h3>{jokes.punchline}</h3>
      <button onClick={getNewJokes}>New Joke</button>
    </div>
  );
};

export default Jokes;
