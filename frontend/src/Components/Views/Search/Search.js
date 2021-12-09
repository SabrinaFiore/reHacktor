import "./Search.css";
import { useEffect, useState } from "react";
import GenresList from "../../UI/GenresList/GenresList";

export default function Search() {

    const  [genres, setGenres] = useState(null);

    useEffect(() => {
        fetch('https://api.rawg.io/api/genres?&key=c2bb099076634fcd95738d7e0ec1cf38')
        .then((response) => response.json())
        .then((data) => {
            setGenres(data.results);
            console.log(data);
        });
    }, []);


    return (<> 
        <div className="container-fluid my-5 py-5 min-vh-100 bg-info">
            <div className="row my-5">
                <div className="col-12 col-md-3 col-lg-2">{ genres && <GenresList data={genres} />}</div>
                <div className="col-12 col-md-3 col-lg-10">
                    card video giochi filtrati
                </div>
            </div>
        </div>
    </>);
}
  