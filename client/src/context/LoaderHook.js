import { useState } from "react";

const useLoader = () => {
  const [isLoading, setIsLoading] = useState(false);
  return [isLoading, setIsLoading];
};

export default useLoader;
