import { connect, useDispatch } from "react-redux";
import Card from "../Card/Card";
import { filterCards, orderCards } from "../../Redux/actions";
import { useState } from "react";
import styles from './Favorites.module.css'



const Favorites = ({ myFavorites }) => {

    const [aux, setAux] = useState(false)

    const dispatch = useDispatch()
    
    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value))
        setAux(true)
    }

    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value))
    }
    
    return (
        <div>
            <div>
                <select className={styles.selector} onChange={handleOrder}>
                    <option value="A">Ascendente</option>
                    <option value="D">Descendente</option>
                </select>
                <select className={styles.selector} onChange={handleFilter}>
                    <option value="Male">Hombre</option>
                    <option value="Female">Mujer</option>
                    <option value="Genderless">Genero</option>
                    <option value="unknown">Desconocidos</option>
                    <option value="allCharacters">Todos</option>
                </select>
            </div>
            <div className={styles.container}>
            {
                myFavorites?.map(fav => {
                    return(
                        <div>
                        <Card
                            key={fav.id}
                            id={fav.id}
                            status={fav.status}
                            name={fav.name}
                            species={fav.species}
                            gender={fav.gender}
                            image={fav.image}
                            onClose={fav.onClose}
                        />
                        </div>
                    )
                })
            }
            </div>
            
        </div>
    );
}

const mapStateToProps = (state) => {
    return{
        myFavorites: state.myFavorites
    }
}

export default connect(
    mapStateToProps,
    null
)(Favorites)
