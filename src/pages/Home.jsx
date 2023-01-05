import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Home Page</h1>
      <p>
        This is the main page. Talks about a product. Once You click the button,
        it starts the buying proccess.
      </p>
      <button onClick={() => navigate("/cart")}>Subscribe</button>
    </div>
  );
}
export default Home;
