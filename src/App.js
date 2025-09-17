// import Card from "./components/Card";
// import Counter from "./components/Counter";
// import Greeeting from "./components/Greeeting";
// import Logical from "./components/Logical";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

// rafce: 컴포넌트 기본 구조 세팅 단축키



function App() {

  //logic
  //페이지 3개: Home, About, Contact

   return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>           
    
    </BrowserRouter>
  );


}

export default App;

/*

Logical operators
단축평가 논리 계산법








*/