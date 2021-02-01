import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

class Home extends React.Component {
  state = {
    count: 0,
    isLoading: true,
    movies: []
  };

  add = () => {
    // this.setState({ count: this.state.count + 1 }); 비효율적
    this.setState(current => ({ count: current.count + 1 })); // current는 현재 값을 나타냄
  };

  minus = () => {
    this.setState(current => ({ count: current.count - 1 }));
  };

  getMovies = async () => {
    // getMovies 로딩 시간(axios.get 완료 시간)이 있으니 기다려라 (비동기)
    // async 없으면 await 사용 불가
    const { data: { data: { movies } } } = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating"); // ?뒤는 rating 기준으로 sort 의미
    this.setState({ movies, isLoading: false });
  };

  // mounting : 생성 - 로딩 순서 constructor(js), render, componentDidMount
  componentDidMount() {
    console.log("mount");
    setTimeout(() => {
      // this.setState({ isLoading: false });
    }, 3000);
    this.getMovies();
  };

  // updating : 업데이트 - 로딩 순서 render, componentDidUpdate
  componentDidUpdate() {
    console.log("update");
  };

  // unmounting : component 제거 (ex - 페이지 교체 등)
  componentWillUnmount() {
    console.log("unmount");
  };

  render() {
    const { isLoading, movies } = this.state; // this.state를 안쓰는 방법
    return (
      <div className="main">
        <section className="container">
          {isLoading ? (
            <div className="loader">
              <span className="loader_text">Loading...</span>
            </div>
          ) : (
              <div className="movies">
                {movies.map(movie =>
                  <Movie
                    key={movie.id}
                    id={movie.id}
                    year={movie.year}
                    title={movie.title}
                    summary={movie.summary}
                    poster={movie.medium_cover_image}
                    genres={movie.genres} />
                )}
              </div>
            )}
        </section>
        {/* <h1>The number is : {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button> */}
      </div >
    );
  }
}

// function component : return해서 screen에 표시
// class component : react component로부터 확장되고 screen에 표시
// state : object, component의 data를 넣을 공간이 있고 데이터는 동적
// → 즉, 바꾸고 싶은 data를 넣으면 됨
// state를 직접 변경 X → render function에 적용 X → setState를 호출할 때마다 render

export default Home; // export를 하지 않으면 App 함수 사용 불가
