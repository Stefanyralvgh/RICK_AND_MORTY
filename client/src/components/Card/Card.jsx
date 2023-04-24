import { connect } from "react-redux";
import { addFavs, deleteFavs } from "../../redux/actions/actions";
import { useEffect, useState } from "react";
import {
  CardContenedor,
  CloseButtonCard,
  Species,
  Gender,
  ImgCardContenedor,
  CharId,
  NameLink,
  FavButtonCard,
} from "./CardStyles";

export function Card(props) {
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    props.myFavorites &&
      props.myFavorites.forEach((fav) => {
        if (fav.id === props.id) {
          setIsFav(true);
        }
      });
  }, [props.myFavorites, props.id]);

  function handleFavorite() {
    if (isFav) {
      const confirmDelete = window.confirm("Are you sure you want to remove this character from your favorites?");
      if (confirmDelete) {
        setIsFav(false)
        props.deleteFavs(props.id);
      }
    } else {
      setIsFav(true);
      props.addFavs(props);
    }
  }

  return (
    <CardContenedor>
      <div>
        {isFav ? (
          <FavButtonCard onClick={handleFavorite} isFav={true}>
            ❤️
          </FavButtonCard>
        ) : (
          <FavButtonCard onClick={handleFavorite} isFav={false}>
            🤍
          </FavButtonCard>
        )}
      </div>
      { props.onClose && <CloseButtonCard onClick={props.onClose}>X</CloseButtonCard>}
      <CharId>{props.id}</CharId>
      <NameLink to={`/detail/${props.id}`}>
        <h2>{props.name}</h2>
      </NameLink>
      <Species>{props.species}</Species>
      <Gender>{props.gender}</Gender>
      <ImgCardContenedor src={props.image} alt="character picture" />
    </CardContenedor>
  );
}

export function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites,
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    addFavs: (char) => {
      dispatch(addFavs(char));
    },
    deleteFavs: (id) => {
      dispatch(deleteFavs(id));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
