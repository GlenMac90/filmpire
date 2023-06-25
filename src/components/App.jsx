import '../App.css'
import { CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Switch from '@mui/material';

import useStyles from './styles'

import { Actors, MovieInformation, Movies, NavBar, Profile } from '.'


function App() {

  return (
      <div className='root'>
        <CssBaseline />
        <NavBar />
        <main className='content'>
        <div className='toolbar' />
          <Routes>
            <Route exact path='/' element={<Movies />} />
            <Route exact path='/movie/:id' element={<MovieInformation />} />
            <Route exact path='/actors/:id' element={<Actors />} />
            <Route exact path='/profile/:id' element={<Profile />} />
          </Routes>
        </main>
      </div>
  );
}

export default App;
