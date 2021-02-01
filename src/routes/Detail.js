import React from "react";
import "./Detail.css";

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        if (location.state === undefined) {
            history.push("/");
        }
    }

    render() {
        const { location } = this.props;
        if (location.state) {
            return (
                <div className="detail_container">
                    <img src={location.state.poster} alt={location.state.title} />
                    <div className="detail_data">
                        <h1 className="detail_title">{location.state.title}</h1>
                        <h3 className="detail_year">{location.state.year}</h3>
                        <ul className="detail_genres">
                            {location.state.genres.map((genre, index) => (
                                <li key={index} className="detail_genres_genre">{genre}</li>
                            ))}
                        </ul>
                        <p></p>
                        <p className="detail_summary">{location.state.summary}</p>
                    </div>
                </div>
            );
        }
        else {
            return null;
        }
    }
}

export default Detail;