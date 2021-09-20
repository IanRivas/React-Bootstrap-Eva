import React, { useRef } from 'react';
import Header from '../components/Header';
import Main from '../components/Main';

function Home() {
  const anime = useRef(null);
  const movies = useRef(null);
  return (
    <>
      <Header scrollA={anime} scrollB={movies} />
      <Main scrollA={anime} scrollB={movies} />
    </>
  );
}

export default Home;
