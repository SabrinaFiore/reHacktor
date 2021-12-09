import "./Search.css";
import { useEffect, useState } from "react";
import GenresList from "../../UI/GenresList/GenresList";
import Card from "../../UI/Card/Card";
import { useParams } from "react-router-dom";

export default function Search() {

    const  [genres, setGenres] = useState(null);
    const [games, setGames] = useState(null);
    
    let {genre} = useParams();
    let {num} = useParams();

    useEffect(() => {
        fetch('https://api.rawg.io/api/genres?&key=c2bb099076634fcd95738d7e0ec1cf38')
        .then((response) => response.json())
        .then((data) => {
            setGenres(data.results);
            console.log(genre, num);
        });
    }, []);

    useEffect(() => {
        fetch(`https://api.rawg.io/api/games?&key=c2bb099076634fcd95738d7e0ec1cf38&genres=${genre}&page=${num}&page_size=12`)
        .then(response => response.json()
        .then(data => 
            // console.log(response)
            setGames(data.results)
        ));
    }, [genre, num]);

    return (<> 
        <div className="container-fluid my-5 py-5 min-vh-100 bg-info">
            <div className="row my-5">
                <div className="col-12 col-md-3 col-lg-2">{ genres && <GenresList data={genres} />}</div>
                <div className="col-12 col-md-3 col-lg-10">
                    <div className="row">
                        { games && games.map(game => <div key={game.id} className="col-12 col-md-6 col-lg-4 mb-5">
                            <Card 
                                image={game.background_image} 
                                name={game.name} 
                                slug={game.slug}
                            />
                        </div>)}
                    </div>
                </div>
            </div>
        </div>
    </>);
}
  