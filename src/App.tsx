import { Outlet } from "react-router-dom";

import { GNB } from "@features/gnb";

export const App = () => {
  return (
    <>
      <GNB />
      <Outlet />
    </>
  );
};
