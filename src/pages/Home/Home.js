import React, { useEffect } from 'react'
import HomeMenu from './HomeMenu/HomeMenu';
//kết nối redux
import { useSelector, useDispatch } from 'react-redux'
import Film from '../../component/Film/Film';
import MultipleRowsSlick from '../../component/ReactSlick/MultipleRowSlick';
import { layDanhSachPhimAction } from '../../redux/actions/QuanLyPhimActions';
import { layDanhSachHeThongRapAction } from '../../redux/actions/QuanLyRapAction';
import HomeCarousel from '../../template/HomeTemplate/Layout/HomeCarousel/HomeCarousel';

export default function Home(props) {

   const { arrFilm } = useSelector(state => state.QuanLyPhimReducer);
   const { heThongRapChieu } = useSelector(state => state.QuanLyRapReducer);

   const dispatch = useDispatch();


   useEffect(() => {
      // const action = layDanhSachPhimAction();
      dispatch(layDanhSachPhimAction());
      dispatch(layDanhSachHeThongRapAction());
   }, [])

   return (
      <div>
         <HomeCarousel />
         <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
               <MultipleRowsSlick arrFilm={arrFilm} />

               {/* <div className="flex flex-wrap -m-4" style={{ justifyContent: 'center' }}>
                  {renderFilms()}
               </div> */}
            </div>
         </section>

         <div className="w-3/4 mx-auto">
            <HomeMenu heThongRapChieu={heThongRapChieu} />
         </div>
      </div>
   )
}
