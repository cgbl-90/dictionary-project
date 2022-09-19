import logo from "./logo.svg";
import "./App.css";
import Search from "./Search";

function App() {
  return (
    <div className="app">
      <header className="box">
        <img src={logo} className="logo" alt="logo" />
        <h1>.dictionary.</h1>
      </header>
      <main>
        <Search />
      </main>
      <footer className="box">
        <p>
          <a
            href="https://github.com/cgbl-90/dictionary-project"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open-course code
          </a>{" "}
          by{" "}
          <a
            href="https://www.linkedin.com/in/cgbl/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Carmen López
          </a>
        </p>
        <p className="text-right">
          Powered by{" "}
          <a
            href="https://dictionaryapi.com/products/json"
            target="_blank"
            rel="noopener noreferrer"
          >
            Merriam-Webster Dictionary API
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
