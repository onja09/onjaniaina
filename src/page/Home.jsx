import React from "react";
import Container from "../components/home/Container";

function Home({ handleClose, handlePop, imaPop }) {
  return (
    <div>
      <Container
        handlePop={handlePop}
        imaPop={imaPop}
        handleClose={handleClose}
      />
    </div>
  );
}

export default Home;
