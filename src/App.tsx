import "./App.css";
import Container from "./partials/Container";
import Content from "./partials/Content";
import Menu from "./partials/Menu";

function App() {
  return (
    <div className="App">
      <Container>
        <Menu />
        <Content />
      </Container>
    </div>
  );
}

export default App;
