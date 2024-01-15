import './App.css';
import Row from './Components/Row/Row';
import request from './request';

function App() {
  return (
    <div className="App">
      <h1>abyus netflix</h1>
      <Row title="NETFLIX ORIGINALS"
        fetchUrl={request.fetchNetflixOriginals} />
      <Row title="Trending Now"
      fetchUrl={request.fetchTrending} />
      <Row title="Top Rated"
      fetchUrl={request.fetchTopRatedMovies} />
    </div>
  );
}

export default App;
