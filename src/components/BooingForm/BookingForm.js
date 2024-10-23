import React, { useState } from "react";
import Button from "../../components/Button/Button";
import "./BookingForm.css";
import { useFormik } from "formik";
import * as Yup from "yup";

const BookingForm = ({
  onFormSubmit,
  isFormSubmitted,
  availableTimes,
  dispatchOnDateChange,
}) => {
  const defaultTime = availableTimes[0];

  const formik = useFormik({
    initialValues: {
      date: "",
      time: defaultTime,
      people: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First name is required"),
      lastName: Yup.string().required("Last name is required"),
      phoneNumber: Yup.number().required("Phone number is required"),
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
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
        <input
          type="number"
          id="people"
          name="people"
          onChange={formik.handleChange}
          value={formik.values.people}
          className={isFormSubmitted && !formik.values.people ? "error" : ""}
        />
      </div>
      <div className="reservation-container">
        <label htmlFor="firstName" className="containter-item-title">
          First Name
        </label>
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
        {formik.touched.firstName && formik.errors.firstName ? (
          <div className="error-message">{formik.errors.firstName}</div>
        ) : null}
      </div>
      <div className="reservation-container">
        <label htmlFor="lastName" className="containter-item-title">
          Last Name
        </label>
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
        {formik.touched.lastName && formik.errors.lastName ? (
          <div className="error-message">{formik.errors.lastName}</div>
        ) : null}
      </div>
      <div className="reservation-container">
        <label htmlFor="phoneNumber" className="containter-item-title">
          Phone Number
        </label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          onChange={formik.handleChange}
          value={formik.values.phoneNumber}
          className={
            formik.touched.phoneNumber && formik.errors.phoneNumber
              ? "error"
              : ""
          }
        />
        {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
          <div className="error-message">{formik.errors.phoneNumber}</div>
        ) : null}
      </div>
      <div className="reservation-container">
        <label htmlFor="email" className="containter-item-title">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          className={formik.touched.email && formik.errors.email ? "error" : ""}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="error-message">{formik.errors.email}</div>
        ) : null}
      </div>
      <Button type="submit" disabled={formik.isSubmitting}>
        Submit
      </Button>
    </form>
  );
};

export default BookingForm;
