import React from "react";

const Hero = () => {
  return (
    <div className="container py-5" style={{ fontSize: "1.1rem", color: "#333",marginTop:"100px" }}>
      <div className="text-center mb-5">
        <h1 className="fw-bold">About FullTradeStack</h1>
        <p className="text-muted mt-2">A complete stock trading simulation dashboard for modern traders</p>
        <hr className="w-25 mx-auto mt-3" style={{ borderTop: "3px solid #007bff" }} />
      </div>

      <section className="mb-5">
        <h3 className="text-primary">🚀 Our Vision</h3>
        <p>
          <strong>FullTradeStack</strong> is built to simplify the stock trading experience. Whether you're learning, analyzing, or testing strategies,
          our platform gives you real-time tools to simulate trades and track performance — all in one place.
        </p>
      </section>

      <section className="mb-5">
        <h3 className="text-primary">🔧 Built with Modern Tech</h3>
        <p>
          We use a robust full-stack setup:
        </p>
        <ul className="ms-4">
          <li><strong>MongoDB</strong> – stores user-specific orders and holdings</li>
          <li><strong>Express.js</strong> – handles secure backend API logic</li>
          <li><strong>React</strong> – provides a fast, interactive UI</li>
          <li><strong>Node.js</strong> – powers the core backend</li>
        </ul>
      </section>

      <section className="mb-5">
        <h3 className="text-primary">📊 What You Can Do</h3>
        <div className="row">
          <div className="col-md-6">
            <ul>
              <li>Buy and Sell stocks using a virtual environment</li>
              <li>Track live Holdings and see real-time P&L</li>
              <li>Visualize order history and position data</li>
            </ul>
          </div>
          <div className="col-md-6">
            <ul>
              <li>Export trade reports to CSV/PDF</li>
              <li>Simulate trading strategies</li>
              <li>View a complete summary of your trades</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-5">
        <h3 className="text-primary">🔐 User-Specific Data</h3>
        <p>
          Every action — from buying a stock to exporting reports — is tied to your account.
          FullTradeStack ensures data isolation and custom dashboards using your <code>username</code>.
        </p>
      </section>

      <section className="mb-5">
        <h3 className="text-primary">💡 For Learners and Developers</h3>
        <p>
          FullTradeStack is not just a simulation tool — it’s an educational platform. Whether you're:
        </p>
        <ul className="ms-4">
          <li>A student exploring trading concepts</li>
          <li>A developer practicing full-stack architecture</li>
          <li>Someone testing your trading logic without real money</li>
        </ul>
        <p>
          This platform is made for you.
        </p>
      </section>

      <div className="text-center mt-5">
        <h4 className="fw-bold">Made with ❤️ by FullTradeStack Team</h4>
        <p className="text-muted">Bringing together finance, code, and learning — one stack at a time.</p>
      </div>
    </div>
  );
};

export default  Hero;
