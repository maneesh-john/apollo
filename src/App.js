import React from "react";

import { Provider } from "./contexts/AppContext";
import Navigation from "./navigation/Navigation";

function App() {
  return (
    <div className="App">
      <Provider>
        <Navigation />
      </Provider>
    </div>
  );
}

export default App;
