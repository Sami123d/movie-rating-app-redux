import React from 'react'
import "./moviecard.scss"
import { Card } from 'antd';

const { Meta } = Card;
function MovieCard(props) {
  const {data} = props;
  return (
    <Card
    hoverable
    className='movie-card'
    
    cover={<img alt="example" src={data.Poster} style={{height: "357px"}} />}
  >
    <Meta title={data.Title} description={data.Year} />
  </Card>
    // <div className="card-item">
    //   <div className="card-inner">
    //     <div className="card-top">
    //       <img src={data.Poster} alt="" />
    //     </div>
    //     <div className="card-bottom">
    //       <div className="card-info">
    //         <h4>{data.Title}</h4>
    //         <p>{data.Year}</p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}

export default MovieCard