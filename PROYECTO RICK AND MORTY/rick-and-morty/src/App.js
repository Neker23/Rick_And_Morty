import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Detail from './components/Detail/Detail';
import About from './components/About/About';
import Nav from './components/Nav/Nav'
import Form from './components/Forms/Form';
import Favorites from './components/Favorites/Favorites';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom';

const URL_BASE = 'https://be-a-rym.up.railway.app/api';
const API_KEY = '4c698eeb62d2.5c2b3de2e560953c3a12'; 

const email = 'nekersanchez9@gmail.com';
const password = '123asd';

function App() {

   const location = useLocation();
   const navigate = useNavigate();  
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);

   const login = (userData) => {
      if(userData.email === email && userData.password === password){
         setAccess(true);
         navigate('/home');
      };
   }

   useEffect( ()=>{
      !access && navigate('/')
   }, [access])
   
   const onSearch = (id) => {
      axios(`${URL_BASE}/character/${id}/?key=${API_KEY}`)
      .then(response => response.data)
      .then((data) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = (id) => {
      const characterFiltered = characters.filter(character => character.id !== id);
      setCharacters(characterFiltered);
   }

   return (
      <div className='App'>
         {
            location.pathname !== '/' && <Nav onSearch={onSearch}
            access={access} setAccess={setAccess}/>
         }
         
         <Routes>
            <Route path='/' element={<Form login={login}/>}/>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>  
            <Route path='/about' element={<About/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path='/favorites' element={<Favorites/>}/>
         </Routes>
      </div>
   );
}

export default App;
