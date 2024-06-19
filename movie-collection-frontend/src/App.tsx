import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import Navbar from "./components/Navbar";
import Discover from "./pages/Discover";
import { MoviesProvider } from "./contexts/MoviesContext";
import MyMovies from "./pages/MyMovies";

const App = () => {
  return (
    <div className="bg-gradient-to-br from-stone-900 to-gray-950 flex flex-col items-center gap-8 py-5">
      <Navbar />
      <MoviesProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/myMovies" element={<MyMovies />} />
        </Routes>
      </MoviesProvider>
    </div>
  );
};

export default App;
