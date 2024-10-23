// Reservations.js
import React, { useState } from "react";
import "./Booking.css";
import BookingForm from "../../components/BooingForm/BookingForm";
import Popout from "../../components/Popout/Popout";
import { useNavigate } from "react-router-dom";
import pages from "../../utils/pagesMap";
import { useReducer } from "react";
import { fetchAPI } from "../../utils/fakeApi";

const Booking = () => {
  const [isPopoutVisible, setIsPopoutVisible] = useState(false);
  const navigate = useNavigate();
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleFormSubmit = (formValues) => {
    setIsFormSubmitted(true);
    const areAllFieldsFilled = Object.values(formValues).every(
      (value) => value
    );

    if (areAllFieldsFilled) {
      setIsPopoutVisible(true);
    }
  };

  const updateTimes = (availableTimes, date) => {
    const response = fetchAPI(new Date(date));
    return response.length !== 0 ? response : availableTimes;
  };

  const initializeTimes = (initialAvailableTimes) => [
    ...initialAvailableTimes,
    ...fetchAPI(new Date()),
  ];

  const [availableTimes, dispatchOnDateChange] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  return (
    <div data-testid="booking-component" className="booking">
      <div className="booking-card">
        <h1 className="booking-title">Table reservation</h1>
        <BookingForm
          availableTimes={availableTimes}
          dispatchOnDateChange={dispatchOnDateChange}
          onFormSubmit={handleFormSubmit}
          isFormSubmitted={isFormSubmitted}
        />
      </div>

      {isPopoutVisible && (
        <Popout
          onClose={() => {
            setIsPopoutVisible(false);
            navigate(pages.get("home").path);
          }}
          title="Reservation Completed!"
          description="Please check your email for the confirmation."
        />
      )}
    </div>
  );
};

export default Booking;
