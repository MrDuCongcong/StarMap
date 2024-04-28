import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
      navigate('/portal')
  }, [])

  return (
      <div style={{ height: '100%' }}>
        <Outlet />
      </div>
  );
};
export default App;
