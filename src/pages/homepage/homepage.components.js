import React from "react";
import Directory from "../../components/directory/directory.component";
import "./homepage.components.scss";

function HomePage({ history }) {
  console.log(history);
  return (
    <div className="homepage">
      <Directory />
    </div>
  );
}

export default HomePage;
