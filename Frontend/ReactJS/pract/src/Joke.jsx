import React, { useEffect, useState } from "react";

const Joke = () => {
  let [joke, setJoke] = useState("");

  let getJoke = async () => {
    try {
      let res = await fetch(
        "https://official-joke-api.appspot.com/random_joke"
      );
      let jsonRes = await res.json();
      setJoke(jsonRes);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getJoke();
  }, []);

  return (
    <div>
      <p>{joke.setup}</p>
      <p>{joke.punchline}</p>
      <button onClick={getJoke}>Click</button>
    </div>
  );
};

export default Joke;
