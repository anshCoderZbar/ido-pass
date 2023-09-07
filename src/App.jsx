import { useEffect } from "react";

import { AllRoutes } from "routes";

function App() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.js");
  }, []);
  return <AllRoutes />;
}

export default App;
