import Gallery from "./Gallery";
import SearchForm from "./SearchForm";
import ThemeToggle from "./ThemeToggle";

const App = () => {
  return <main className="container">
      <ThemeToggle />
      <SearchForm />
      <Gallery />
    </main>;
};
export default App;
