import React from 'react';
import Requests from './Requests';
import './App.css';
import Row from '../../netflix/src/components/row/row.component';
import Banner from './components/banner/banner.component';




function App() {

 

  return (
    <div className="App">
      
      <Banner />
      <Row title="Netflix Orignals" fetchUrl={Requests.fetchNetflixOriginals} isLargeRow/>
      <Row title="Trending Now" fetchUrl={Requests.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={Requests.fetchTopRated}/>
      <Row title="Comedy Movie" fetchUrl={Requests.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={Requests.fetchHorrorMovies}/>
      <Row title="Rommance Movie" fetchUrl={Requests.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchUrl={Requests.fetchDocumentaries}/>
      



    </div>
  );
}

export default App;
