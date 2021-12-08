import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Featured() {

    const [featured, setFeatured] = useState(null);

    useEffect(() => {
        fetch('https://api.rawg.io/api/games?dates=2021-01-01,2021-12-31&ordering=-rating&key=c2bb099076634fcd95738d7e0ec1cf38')
        .then(response => response.json())
        .then(data => {
            console.log(data.results.slice(0, 4));
            setFeatured(data.results.slice(0, 4));
        });
    }, []);


    return (
        <div className="bg-dark">
            <div className="container mt-5">
                <div className="row">
                    {featured && featured.map((el) => {
                        return (
                            <div key={el.id} className="col-12 col-md-6 col-lg-3">
                                <div className="card bg-transparent">
                                    <img src={el.background_image} className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <Link to={`/game/${el.slug}`}>{el.name}</Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}