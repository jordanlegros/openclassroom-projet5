import React, {useEffect} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Carousel from "../components/Carousel";
import Tag from "../components/Tag";
import Collapse from "../components/Collapse";
import Rating from "../components/Rating";
import styles from "../styles/CardPage.scss";

const CardPage = () => {
  const location = useLocation();
  const navigate = useNavigate();


 useEffect(() => {
    if (!location.state || !location.state.data) {
      navigate("*" , { replace: true }); 
    }
  }, [location, navigate]);

  if (!location.state || !location.state.data) {
    return null; 
  }

  const data = location.state.data;
  const tags = data.tags || []; // Assurez-vous que tags est un tableau ou initialisez-le à un tableau vide

  return (
    <div className="CardPage">
      
        <Carousel children={data.pictures} />
        <div className="CardPage__Info">
            <div className="CardPage__TitleAndTag">
                <h1 className="CardPage__title">{data.title}</h1>
                <h2 className="CardPage__location">{data.location}</h2>
                <div className="CardPage__TagContainer">
                    {tags.map((tag, index) => (
                    <Tag key={index} title={tag} />
                    ))}
                </div>
            </div>
            <div className="CardPage__PPAndRating">
                <div className="CardPage__PP">
                    <div className="CardPage__PP--name">{data.host.name}</div>
                    <img className="CardPage__PP--PP" src={data.host.picture} alt="Photo de profil de l'utilisateur"/>
                </div>
                <div className="CardPage__Rating">
                    <Rating rating={data.rating}/>
                </div>

                
            </div>
           
      </div>
      <div className="CardPage__details">
            <Collapse title="Description" text={data.description} className="Collapse__details">
                <p>{data.description}</p>
            </Collapse>
            <Collapse title="Équipements" text={data.equipments} className="Collapse__details">
                <p>{data.equipments}</p>
            </Collapse>
      </div>
    </div>
  );
};

export default CardPage;
