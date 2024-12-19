import React from "react";

const ListMovie = ({item,removeMovie }) => {  //구조분해할당
  return (
    <div className="moviesMovie">
      <div className="movie-titleandyear">
        <div className="movie-title">{item.title}</div> {/*영화 제목 */}
        <div className="movie-year">{item.year}</div> {/*영화 개봉일 */}
      </div>
      <div className="removeBtn">
        <button onClick={() => removeMovie(item.id)}>삭제</button>
      </div>
    </div>
  );
};

export default ListMovie;
