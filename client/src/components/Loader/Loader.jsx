import React, { useContext } from "react";
import "./Loader.scss";

import GlobalContext from "../../context/globalContext";
import ScaleLoader from "react-spinners/ScaleLoader";

const styles = {
  position: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
};

function Loader({ children }) {
  const { isLoading } = useContext(GlobalContext);

  return (
    <div className="loader">
      <ScaleLoader
        color={"#51a767"}
        // loading={loading}
        cssOverride={styles}
        size={150}
      />
    </div>
  );
}

export default Loader;
