import React from "react";

const Dashboard = ({ strikes, balls, fouls, hit }) => (
  <div>
    <input type="button" value="Strike" onClick={strikes} />
    <input type="button" value="Ball" onClick={balls} />
    <input type="button" value="Foul" onClick={fouls} />
    <input type="button" value="Hit" onClick={hit} />
  </div>
);

export default Dashboard;
