import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const MainContent: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Outlet />
    </Suspense>
  );
};

export default MainContent;
