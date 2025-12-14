import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const DetailsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state;

  if (!data) {
    return (
      <div className="details-card">
        <h2>No Data Found</h2>
        <button onClick={() => navigate("/")}>Go Back</button>
      </div>
    );
  }

  return (
    <div className="details-card">
      <h2>Submission Success!</h2>
      <div className="details-list">
        <p>
          <strong>Name:</strong> {data.firstName} {data.lastName}
        </p>
        <p>
          <strong>Username:</strong> {data.username}
        </p>
        <p>
          <strong>Email:</strong> {data.email}
        </p>
        <p>
          <strong>Phone:</strong> {data.countryCode} {data.phone}
        </p>
        <p>
          <strong>Location:</strong> {data.city}, {data.country}
        </p>
        <p>
          <strong>PAN:</strong> {data.pan}
        </p>
        <p>
          <strong>Aadhaar:</strong> {data.aadhaar}
        </p>
      </div>
      <button onClick={() => navigate("/")} className="back-btn">
        Go Back
      </button>
    </div>
  );
};

export default DetailsPage;
