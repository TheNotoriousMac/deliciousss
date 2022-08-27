import Pages from "./pages/Pages";
import Category from "./components/Category/Category";
import Search from "./components/Search/Search";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
