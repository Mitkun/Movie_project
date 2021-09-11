import React, { useEffect } from 'react'
import HomeMenu from './HomeMenu/HomeMenu';
//kết nối redux
import { useSelector, useDispatch } from 'react-redux'
import Film from '../../component/Film/Film';
import MultipleRowsSlick from '../../component/ReactSlick/MultipleRowSlick';
import { layDanhSachPhimAction } from '../../redux/actions/QuanLyPhimActions';

export default function Home(props) {

   const { arrFilm } = useSelector(state => state.QuanLyPhimReducer);

   const dispatch = useDispatch();

   // const renderFilms = () => {
   //    return arrFilm.map((film, index) => {
   //       return <Film key={index} />
   //    })
   // }

   useEffect(() => {
      // const action = layDanhSachPhimAction();
      dispatch(layDanhSachPhimAction())
   }, [])

   return (
      <div>
         <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
               <MultipleRowsSlick arrFilm={arrFilm} />

               {/* <div className="flex flex-wrap -m-4" style={{ justifyContent: 'center' }}>
                  {renderFilms()}
               </div> */}
            </div>
         </section>

         <div className="mx-28">
            <HomeMenu />
         </div>
      </div>
   )
}
