import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
      navigate('/project')
  }, [])

  return (
    <>
      <div>
        111
        <Outlet />
      </div>
    </>
  );
};
export default App;
