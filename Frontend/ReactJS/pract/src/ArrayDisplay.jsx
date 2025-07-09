import React from "react";

const ArrayDisplay = () => {
  const user = [
    { id: 1, name: "Yash" },
    { id: 2, name: "Parmar" },
  ];
  return (
    <div>
      {user.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
};

export default ArrayDisplay;
