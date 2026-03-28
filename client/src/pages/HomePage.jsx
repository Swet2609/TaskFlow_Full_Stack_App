import React from "react";

export const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Welcome to TaskFlow</h1>
      <p>Manage your tasks efficiently and stay productive.</p>
      <div className="cta-section">
        <a href="/tasks" className="btn-primary">
          Get Started
        </a>
      </div>
    </div>
  );
};

export default HomePage;
