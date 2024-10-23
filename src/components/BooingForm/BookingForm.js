import React, { useState } from "react";
import Button from "../../components/Button/Button";
import "./BookingForm.css";
import { useFormik } from "formik";
import * as Yup from "yup";

const BookingForm = ({ onFormSubmit, isFormSubmitted, availableTimes }) => {
  const defaultDate = new Date();
  const defaultTime = availableTimes[0];

  const formik = useFormik({
    initialValues: {
      date: defaultDate.toISOString().substring(0, 10),
      time: defaultTime,
      people: 1,
      occasion: "",
      firstName: "",
      lastName: "",
      email: "",
    },
    validationSchema: Yup.object({
      people: Yup.number().min(1, "At least 1 person").required("Required"),
      firstName: Yup.string().required("Required"),
      lastName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email format").required("Required"),
    }),
    onSubmit: (values, { setSubmitting }) => {
      onFormSubmit(values);
      setSubmitting(false);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="reservation-container">
        <label htmlFor="date" className="containter-item-title">
          Date
        </label>
        <input
          type="date"
          id="date"
          name="date"
          onChange={formik.handleChange}
          value={formik.values.date}
          className={isFormSubmitted && !formik.values.date ? "error" : ""}
        />
      </div>
      <div className="reservation-container">
        <label htmlFor="time" className="containter-item-title">
          Time
        </label>
        <select
          id="time"
          name="time"
          value={formik.values.time}
          onChange={formik.handleChange}
        >
          {availableTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
      </div>
      <div className="reservation-container">
        <label htmlFor="people" className="containter-item-title">
          Number of people
        </label>
        {formik.touched.people && formik.errors.people ? (
          <div className="error-message" style={{ color: "red" }}>
            {formik.errors.people}
          </div>
        ) : null}
        <input
          type="number"
          id="people"
          name="people"
          onChange={formik.handleChange}
          value={formik.values.people}
          className={
            formik.touched.people && formik.errors.people ? "error" : ""
          }
        />
      </div>
      <div className="reservation-container">
        <label htmlFor="firstName" className="containter-item-title">
          First Name
        </label>
        {formik.touched.firstName && formik.errors.firstName ? (
          <div className="error-message">{formik.errors.firstName}</div>
        ) : null}
        <input
          type="text"
          id="firstName"
          name="firstName"
          onChange={formik.handleChange}
          value={formik.values.firstName}
          className={
            formik.touched.firstName && formik.errors.firstName ? "error" : ""
          }
        />
      </div>
      <div className="reservation-container">
        <label htmlFor="lastName" className="containter-item-title">
          Last Name
        </label>
        {formik.touched.lastName && formik.errors.lastName ? (
          <div className="error-message">{formik.errors.lastName}</div>
        ) : null}
        <input
          type="text"
          id="lastName"
          name="lastName"
          onChange={formik.handleChange}
          value={formik.values.lastName}
          className={
            formik.touched.lastName && formik.errors.lastName ? "error" : ""
          }
        />
      </div>
      <div className="reservation-container">
        <label htmlFor="email" className="containter-item-title">
          Email
        </label>
        {formik.touched.email && formik.errors.email ? (
          <div className="error-message">{formik.errors.email}</div>
        ) : null}
        <input
          type="email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          className={formik.touched.email && formik.errors.email ? "error" : ""}
        />
      </div>
      <div className="reservation-container">
        <label htmlFor="occasion" className="containter-item-title">
          Occasion
        </label>
        <select
          id="occasion"
          name="occasion"
          onChange={formik.handleChange}
          value={formik.values.occasion}
          className={isFormSubmitted && !formik.values.occasion ? "error" : ""}
        >
          <option value="celebration">Celebration</option>
          <option value="business">Business</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="reservation-button">
        <Button type="submit" disabled={formik.isSubmitting}>
          Submit
        </Button>
      </div>
    </form>
  );
};

export default BookingForm;
