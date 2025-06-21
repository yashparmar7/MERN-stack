const Activity = ({ username, textcolor }) => {
  let style = { color: textcolor };
  return (
    <div>
      <h1 style={style}>Hello {username}</h1>
    </div>
  );
};

export default Activity;
