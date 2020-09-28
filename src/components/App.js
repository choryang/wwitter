import React, { useState } from "react";
import AppRouter from "components/Router";
import { authService } from "fbase";

function App() {
  //const auth = fbase.auth(); 많이 호출할 예정이면 fbase.js에서 export

  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn} />
      <footer>&copy; {new Date().getFullYear()} wwitter</footer>
    </>
  );
}

export default App;
