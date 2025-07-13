import React from "react";

const FormData = ({ username, fullname }) => {
  return (
    <div>
      <h4>UserName : {username}</h4>
      <h5>FullName : {fullname}</h5>
    </div>
  );
};

export default FormData;
