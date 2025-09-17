import Card from "./components/Card";
import Counter from "./components/Counter";
import Greeeting from "./components/Greeeting";
import Logical from "./components/Logical";

// rafce: 컴포넌트 기본 구조 세팅 단축키



function App() {


  const handleIncrease = () => {
      console.log("handleIncrease()");
  }

  return (
    <div className="App">
      후츠릿 App.js
      <Logical />
      <Greeeting username={"문성민"} />
      <Card />      
      <Counter onClickIncrease={handleIncrease} />
      {/* 숫자가 5씩 증가하는 Counter 컴포넌트 만들기 */}
    </div>
  );
}

export default App;

/*

Logical operators
단축평가 논리 계산법








*/