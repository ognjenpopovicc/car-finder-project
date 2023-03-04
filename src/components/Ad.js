import Container from "../ui/Container";
import Pencil from "../imgs/pencil.png";
import Trash from "../imgs/bin.png";
import { db } from "../firebase";
import { doc, deleteDoc } from "firebase/firestore";

import { Link, useNavigate } from "react-router-dom";

const Ad = ({ use, data }) => {
  const navigate = useNavigate();

  const navigatePost = () => {
    return navigate(data.id);
  };

  const deleteHandler = async () => {
    await deleteDoc(doc(db, "ads", data.id));
  };

  return (
    <Container
      onClick={!use ? navigatePost : undefined}
      className="no-padding margin-top-large-small"
    >
      <div className="ad-small__container">
        <div className="ad-small__image__container">
          <img
            className="ad-small__image"
            src={
              data.images[0] ||
              "https://firebasestorage.googleapis.com/v0/b/car-finder-e01fa.appspot.com/o/images%2Fno-image.jpg?alt=media&token=3c92ce45-a8ea-4cea-8fba-305618d72505"
            }
            alt="Car Preview"
          ></img>
        </div>
        <div className="ad-small__description">
          <div className="ad-small__title">{`${data.manu} ${data.model} ${data.mark}`}</div>
          {use && (
            <div className="ad-small__info gap-small margin-top-small-medium">
              <Link to={data.id} className="ad-small__func">
                <div className="ad-small__func__image__container">
                  <img
                    src={Pencil}
                    alt="Pencil"
                    className="ad-small__func__image"
                  ></img>
                </div>
                <p className="ad-small__func__text">Change</p>
              </Link>
              <Link to="" onClick={deleteHandler} className="ad-small__func">
                <div className="ad-small__func__image__container">
                  <img
                    src={Trash}
                    alt="Trash"
                    className="ad-small__func__image"
                  ></img>
                </div>
                <p className="ad-small__func__text">Delete</p>
              </Link>
            </div>
          )}
          {!use && (
            <div className="ad-small__info gap-small margin-top-small-medium">
              <div>{data.year}</div>
              <div>{data.milage}km</div>
              <div>{data.fuel}</div>
              <div>{data.power}kW</div>
              <div>{data.body}</div>
              <div>{data.volume}ccm</div>
            </div>
          )}
        </div>
        <div className="ad-small__details">
          <div className="ad-small__price">{data.price}€</div>
          <div className="ad-small__place">{data.city}</div>
        </div>
      </div>
    </Container>
  );
};

export default Ad;
