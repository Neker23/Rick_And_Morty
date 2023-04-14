import styles from './SearchBar.module.css'
import { useState } from 'react';

export default function SearchBar({onSearch}) {

   const [id, setId] = useState('');

   const handleChange = (event) =>{
      setId(event.target.value)
   }

   return (
      <div className={styles.container}>
         <div className={styles.inputContainer}>
               <input id={styles.input} value={id} onChange={handleChange} placeholder=' Agrega un ID' type='search' />
               <button id={styles.button} onClick={()=>{onSearch(id); setId('')}}>Agregar</button>
         </div>
      </div>
   );
}
