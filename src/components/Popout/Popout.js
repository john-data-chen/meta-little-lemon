import React from "react";
import "./Popout.css";
import Button from "../Button/Button";

const Popout = ({ title, description, onClose }) => {
  return (
    <>
      <div
        data-testid="popout-background"
        className="popout-background"
        onClick={onClose}
      ></div>
      <div className="popout">
        <h2 className="popout-title">{title}</h2>
        <p className="popout-description">{description}</p>
        <div className="popout-button">
          <Button onClick={onClose} title="Close" />
        </div>
      </div>
    </>
  );
};

export default Popout;
