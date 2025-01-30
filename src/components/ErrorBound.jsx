// ErrorBound.jsx
import React from "react";

const ErrorBound = ({ error }) => {
    return (
        <div style={{ padding: "20px", textAlign: "center" }}>
            <h1>Oops! Something went wrong.</h1>
            <p>{error?.message || "An unexpected error occurred."}</p>
            <a href="/">Go back to Home</a>
            <h1>This is Error Route</h1>
        </div>
    );
};

export default ErrorBound;
