import './App.css';
import Banner from './Components/Banner/Banner';
import Nav from './Components/Nav/Nav';
import Row from './Components/Row/Row';
import request from './request';

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row title="NETFLIX ORIGINALS"
        fetchUrl={request.fetchNetflixOriginals}
        isLargeRow />
      <Row title="Trending Now"
      fetchUrl={request.fetchTrending} />
      <Row title="Top Rated"
      fetchUrl={request.fetchTopRatedMovies} />
      <Row title="Action Movies"
      fetchUrl={request.fetchActionMovies} />
      <Row title="Comedy Movies"
      fetchUrl={request.fetchComedyMovies} />
      <Row title="Horror Movies"
      fetchUrl={request.fetchHorrorMovies} />
      <Row title="Romance Movies"
      fetchUrl={request.fetchRomanceMovies} />
      <Row title="Documentaries Movies"
      fetchUrl={request.fetchDocumentaries} />
    </div>
  );
}

export default App;
