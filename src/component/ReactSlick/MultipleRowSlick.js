import React, { Component } from "react";
import Slider from "react-slick";
import styleSlick from './MultipleRowSlick.module.css';
import Film from "../Film/Film";
import { useDispatch, useSelector } from "react-redux";
import { SET_PHIM_DANG_CHIEU, SET_PHIM_SAP_CHIEU } from "../../redux/actions/types/QuanLyPhimType";


function SampleNextArrow(props) {
   const { className, style, onClick } = props;
   return (
      <div
         className={`${className} ${styleSlick['slick-next']}`}
         style={{ ...style, display: 'block' }}
         onClick={onClick}
      >
      </div>
   )
}

function SamplePrevArrow(props) {
   const { className, style, onClick } = props;
   return (
      <div
         className={`${className} ${styleSlick['slick-prev']}`}
         style={{ ...style, display: 'block', left: '-50px' }}
         onClick={onClick}
      >
      </div>
   )
}


const MultipleRowsSlick = (props) => {

   const { dangChieu, sapChieu } = useSelector(state => state.QuanLyPhimReducer);

   let activeClassDangChieu = dangChieu === true ? 'active_Film' : 'none_active_Film';
   let activeClassSapChieu = sapChieu === true ? 'active_Film' : 'none_active_Film';

   const dispatch = useDispatch()

   const renderFilms = () => {
      return props.arrFilm.slice(0, 12).map((item, index) => {
         return <div key={index}>
            <Film phim={item} />
         </div>
      })
   }


   const settings = {
      className: "center variable-width",
      centerMode: true,
      infinite: true,
      centerPadding: "100px",
      slidesToShow: 2,
      speed: 500,
      rows: 2,
      slidesPerRow: 2,
      variableWidth: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
   };
   return (
      <div>
         <div>
            <button className={`${styleSlick[activeClassDangChieu]} px-8 py-3 font-semibold rounded bg-yellow-700 text-white m-1`} onClick={() => {
               dispatch({ type: SET_PHIM_DANG_CHIEU })
            }}>PHIM ĐANG CHIẾU</button>
            <button className={`${styleSlick[activeClassSapChieu]} px-8 py-3 font-semibold rounded text-white m-1 bg-blue-700`} onClick={() => {
               dispatch({ type: SET_PHIM_SAP_CHIEU })
            }}>PHIM SẮP CHIẾU</button>
         </div>
         <Slider {...settings}>
            {renderFilms()}
         </Slider>
      </div>
   );

}

export default MultipleRowsSlick;