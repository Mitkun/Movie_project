import React from 'react';
import { NavLink } from 'react-router-dom';
import './Film.css'
export default function Film(props) {

   const { phim } = props;

   return (
      <div className="film_content">
         <div className="film_card w-full"><img src={phim.hinhAnh} />
            <div className="film_info w-full">
               <h1 className="h-12">{phim.tenPhim}</h1>
               <p className="h-28 ">{phim.moTa.length > 100 ? <span>{phim.moTa.slice(0, 100)}...</span> : <span>{phim.moTa}</span>}</p>
               {/* <p>Lorem Ipsum is simply dummy text from the printing and typeseting industry</p> */}
               <div className="flex justify-between w-full">
                  <button>Trailer</button>
                  <NavLink to={`/detail/${phim.maPhim}`}><button className="dat_ve">ĐẶT VÉ</button></NavLink>
               </div>
            </div>

         </div>
      </div>
   )
}
