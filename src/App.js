import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      {/* exact : 해당 url 아니면 로딩 X */}
      <Route path="/about" component={About} />
      {/* /about 경로로 가면 About.js를 보여줌 */}
      <Route path="/movie/:id" component={Detail} />
      {/* :id는 주소에 id가 붙여서 출력 */}
    </HashRouter>
  );
}

export default App;