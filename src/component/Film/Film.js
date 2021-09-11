import React from 'react';
import './Film.css'
export default function Film(props) {

   const { phim } = props;

   return (
      <div className="film_content">
         <div className="film_card"><img src={phim.hinhAnh} />
            <div className="film_info">
               <h1 className="h-12">{phim.tenPhim}</h1>
               <p className="h-28 ">{phim.moTa.length > 100 ? <span>{phim.moTa.slice(0, 100)}...</span> : <span>{phim.moTa}</span>}</p>
               {/* <p>Lorem Ipsum is simply dummy text from the printing and typeseting industry</p> */}
               <div className="flex justify-between">
                  <button>Trailer</button>
                  <button className="dat_ve">ĐẶT VÉ</button>
               </div>
            </div>

         </div>
      </div>


   )
}
