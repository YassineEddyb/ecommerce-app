import React, { useState } from "react";

export default function useCartSideBar() {
  const [sideBar, setSideBar] = useState(false);

  return { sideBar, setSideBar };
}
