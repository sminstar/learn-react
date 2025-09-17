import Card from "./components/Card";
import Counter from "./components/Counter";
import Greeeting from "./components/Greeeting";

// rafce: 컴포넌트 기본 구조 세팅 단축키
function App() {
  return (
    <div className="App">
      후츠릿 App.js
      <Greeeting />
      <Card />
      <Counter />
    </div>
  );
}

export default App;
