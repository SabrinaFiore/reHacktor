import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

export default function Game() {

    let {slug} = useParams();

    const [game, setGame] = useState(null);

    useEffect(() => {
        fetch(`https://api.rawg.io/api/games/${slug}?&key=c2bb099076634fcd95738d7e0ec1cf38`)
        .then((response) => response.json())
        .then((data) => {
            setGame(data);
            console.log(data);
        });
    }, []);

    return (
        <>
            { game && (
                <div className="cointainer-fluid pt-5 min-vh-100" 
                    style={{ background: `linear-gradient(rgba(33, 33, 33, 1), rgba(33, 33, 33, 0.8), rgba(33, 33, 33, 1)), 
                        url(${game.background_image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat"
                    }}>
                    <div className="container text-white">
                        <div className="row mt-5">
                            <div className="col-12">
                                <h1>{game.name}</h1>
                                <p className="small">Developed by {game.developers[0].name}</p>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-12 col-md-6">
                                {game.description_raw}
                            </div>
                            <div className="col-12 col-md-6">
                                <img className="img-fluid" 
                                    src={game.background_image} 
                                    alt={game.name} 
                                />
                            </div>
                        </div>
                        <div className="row mt-5">
                            <h3>Generes</h3>
                            { game.genres.map(el => 
                                <Link 
                                    key={el.id} to={`/search/${el.slug}`}
                                    className="text-decoration-none">
                                    <button className="btn btn-outline-info">{el.name}</button>
                                </Link>) 
                            }
                        </div>
                    </div>
                </div>
            ) }
        </>
    );
}
  