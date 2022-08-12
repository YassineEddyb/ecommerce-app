import React, { useContext } from "react";
import "./Loader.scss";

import ScaleLoader from "react-spinners/ScaleLoader";
import GridLoader from "react-spinners/GridLoader";

const styles = {
  position: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
};

function Loader({ load }) {
  return (
    <div className="loader">
          {load ? (
        <GridLoader color={"#51a767"} cssOverride={styles} size={15} />
      ) : (
        <ScaleLoader color={"#51a767"} cssOverride={styles} size={150} />
      )}
    </div>
  );
}

export default Loader;
