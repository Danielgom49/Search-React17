import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from '../components/Nav';
import SearchCharac from '../components/SearchCharac';
import ShowCharacter from '../components/ShowCharacter';
import { url } from '../helpers/url'

function App() {

  const [data, setData] = useState([])

  useEffect(() => {
    ShowData()
  }, [])

  const ShowData = async () => {
    const resp = await fetch(url)
    const dataResults = await resp.json()
    setData(dataResults.results)
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route exact path="/" element={<ShowCharacter data={data} />} />
          <Route exact path="/search" element={<SearchCharac />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
