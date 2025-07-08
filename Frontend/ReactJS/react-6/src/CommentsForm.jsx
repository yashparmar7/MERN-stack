import React, { useState } from "react";
import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = "Username is Required";
  } else if (values.username.length > 15) {
    errors.username = "Must be 15 characters or less";
  }

  return errors;
};
const CommentsForm = ({ addNewComment }) => {
  //   let [formData, setFormData] = useState({
  //     username: "",
  //     remark: "",
  //     rating: "5",
  //   });

  const formik = useFormik({
    initialValues: {
      username: "",
      remark: "",
      rating: 5,
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  //   let handleInputData = (event) => {
  //     setFormData((currData) => {
  //       return { ...currData, [event.target.name]: event.target.value };
  //     });
  //   };

  //   let handleSubmit = (event) => {
  //     console.log(formData);
  //     addNewComment(formData);
  //     event.preventDefault();
  //     setFormData({
  //       username: "",
  //       remark: "",
  //       rating: "5",
  //     });
  //   };
  return (
    <div>
      <h4>Comments Form</h4>
      <form action="" onSubmit={formik.handleSubmit}>
        <label htmlFor="username">Username :</label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="enter name"
          value={formik.values.username}
          onChange={formik.handleChange}
        />
        {formik.errors.username ? (
          <p style={{ color: "red" }}>{formik.errors.username}</p>
        ) : null}
        <br />
        <br />
        <label htmlFor="remark">Remarks :</label>
        <textarea
          name="remark"
          id="remark"
          placeholder="enter remarks"
          value={formik.values.remark}
          onChange={formik.handleChange}
        >
          {" "}
        </textarea>
        <br />
        <br />
        <label htmlFor="ratings">Rating :</label>
        <input
          type="number"
          name="rating"
          id="ratings"
          max={5}
          value={formik.values.rating}
          onChange={formik.handleChange}
        />
        <br />
        <br />

        <button type="submit">Add Comments</button>
      </form>
    </div>
  );
};

export default CommentsForm;
