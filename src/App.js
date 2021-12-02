import "./App.css";
import SearchBar from "./components/SearchBar";
import { Container } from "@mui/material";
function App() {
  return (
    <>
      <header>
        <h1 style={{textAlign: "center"}} >Welcome to the PokeSearch!</h1>
      </header>
      <Container>
        <SearchBar />
      </Container>
    </>
  );
}

export default App;
