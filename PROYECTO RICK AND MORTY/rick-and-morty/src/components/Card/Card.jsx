import styles from './Card.module.css';
import { Link } from 'react-router-dom';
import { addFav, removeFav } from '../../Redux/actions';
import { connect } from 'react-redux';
import {useState, useEffect} from 'react'

function Card({id, name, status, species, gender, origin, image , onClose, addFav, removeFav, myFavorites}) {
   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if(isFav){
         setIsFav(false);
         removeFav(id)
      } else { 
         setIsFav(true);
         addFav({id, name, status, species, gender, origin, image})
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if(fav.id === id){
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className={styles.container}>

         <div className={styles.cardTop}>
            <Link id={styles.name} to={`/detail/${id}`}>
               <div >{name}</div>
            </Link>
            <button className={styles.button} onClick={onClose}>X</button>
         </div>
            <img className={styles.image} src={image} alt='' />
            <div className={styles.cardBot}>
               <h2 className={styles.info}>{status}</h2>
               <button className={styles.buttonHeart} onClick={handleFavorite}>{isFav?'❤️':'🤍'}</button>
               <h2 className={styles.info}>{species}</h2>
            </div>
      </div>
   );
}

const mapStateToProps = (state) => {
   return{
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => { dispatch(addFav(character))},
      removeFav: (id) => {dispatch(removeFav(id))}
   }
}

export default connect (
   mapStateToProps,
   mapDispatchToProps
)(Card);