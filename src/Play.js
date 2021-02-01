import React from "react";
import PropTypes from "prop-types";

// import Test from "./Test";

// 여기에다가 함수를 추가해도 됨
/* example
  function Test() {
    return <h1>This is Test</h1>;
}
*/

function Play({ name, picture, rating }) {
    return (
        <div>
            <h1>Let's {name}</h1>
            <h4>{rating}/5.0</h4>
            <img src={picture} alt="name" width="150px"></img>
        </div>
    );
}

// PropType을 확인해줌
Play.propTypes = {
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired
    // isRequired : 해당 값이 없으면 에러뜸
}

function renderPlay(ball) {
    return <Play key={ball.id} name={ball.name} picture={ball.image} rating={ball.rating} />
}

const sportsILike = [
    {
        id: 1,
        name: "Football",
        image: "http://www.activityalliance.org.uk/assets/000/000/719/football-1_original.jpg?1524668832",
        rating: 5
    },
    {
        id: 2,
        name: "Baseball",
        image: "https://brocku.ca/brock-news/wp-content/uploads/2018/09/Baseball-RS-1600x1067.jpg?x68208",
        rating: 3.5
    },
    {
        id: 3,
        name: "Basketball",
        image: "https://bamahammer.com/wp-content/uploads/getty-images/2016/04/1053676082.jpeg",
        rating: 4.3
    }
]

function App() {
    return (
        <div>
            {/* <Test /> */}
            {/* <Play name="football" /> */}
            {/* 속성(props, property), 이름은 원하는 걸로 가능 */}
            {sportsILike.map(ball => (
                <Play key={ball.id} /*key를 넣으면 error 안뜸*/
                    name={ball.name}
                    picture={ball.image}
                    rating={ball.rating}
                />)
            )}
            {/* {sportsILike.map(renderPlay)} */}
        </div>
    );
}

export default App; // export를 하지 않으면 App 함수 사용 불가
