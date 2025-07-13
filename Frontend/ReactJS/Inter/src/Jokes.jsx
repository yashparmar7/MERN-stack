import React, { useEffect, useState } from "react";

const Jokes = () => {
  const [jokes, setJokes] = useState({});

  const URL = "https://official-joke-api.appspot.com/random_joke";

  let getJokes = async () => {
    let data = await fetch(URL);
    let res = await data.json();
    console.log(res);

    setJokes({ setup: res.setup, punchline: res.punchline });
  };

  useEffect(() => {
    getJokes();
  }, []);

  return (
    <div>
      <h3>Joke Title :{jokes.setup}</h3>
      <p>Jokes :{jokes.punchline}</p>
      <button onClick={getJokes}>Get Jokes</button>
    </div>
  );
};

export default Jokes;
