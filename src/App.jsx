import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Update import statemen
import Home from "./component/Home/Home.jsx";
import MovieDetail from "./component/MovieDetails/MovieDetail.jsx";
import PageNotFound from "./component/PageNotFound/PageNotFound.jsx";
import Header from "./component/Header/Header.jsx";
import Footer from "./component/Footer/Footer.jsx";
function App() {
  return (
    <BrowserRouter basename="/">
      <>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/movie/:imdbID" element={<MovieDetail />} />
            <Route element={<PageNotFound />} />
          </Routes>
        </div>

        <Footer />
      </>
    </BrowserRouter>
  );
}

export default App;
