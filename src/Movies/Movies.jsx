import React,{useState} from 'react';
import './Movies.css';

const Movies = () => {
  const [movies,setMovies] = useState('');
  const [data,setData] = useState([]);
  const submitHandler = z =>{
    z.preventDefault();
    fetch(`http://www.omdbapi.com/?s=${movies}&apikey=88b712f6`).then(
      response => response.json()
    ).then(name => {
      setData(name.Search);
    })
    setMovies('');
  }
  const download = url => {
    fetch(url).then(response => {
        response.arrayBuffer().then(function(buffer) {
          const url = window.URL.createObjectURL(new Blob([buffer]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "image.png");
          document.body.appendChild(link);
          link.click();
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <div>
        <center>
          <h1>Search Your Favorite Movie</h1>
          <form onSubmit={submitHandler}>
            <input type="text" value={movies} onChange={(e) => setMovies(e.target.value)}/><br />
            <input type="submit" value="Search" />
          </form>
          <div className="row" >
          {data.length>=1?data.map(movie=>
          <div className="col-md-4" key={movie.imdbID}>
            <div className="card" style={{"width": "18rem"}}>
              <img src={movie.Poster} className="card-img-top" alt={movie.Title} />
              <div className="card-body">
                <b className="card-title">{movie.Title}</b>
                <a className="btn btn-outline-info" onClick={()=>download(movie.Poster)}>Download Poster</a>
              </div>
            </div>
          </div>
            ):null}
            </div>
        </center>
    </div>
  )
}

export default Movies;