import React, { useEffect } from 'react';
import { Carousel } from 'antd';
import { useDispatch, useSelector } from 'react-redux'
import { getCarouselAction } from '../../../../redux/action/CarouselAction';

const contentStyle = {
   height: '700px',
   color: '#fff',
   lineHeight: '160px',
   textAlign: 'center',
   background: '#364d79',
   backgroundPosition: 'center',
   backgroundRepeat: 'no-repeat',
   backgroundSize: '100% 100%'
};

export default function HomeCarousel(props) {

   const { arrImg } = useSelector(state => state.CarouselReducer);

   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getCarouselAction());
   }, [])

   const renderImg = () => {
      return arrImg.map((item, index) => {
         return <div key={index}>
            <div style={{ ...contentStyle, backgroundImage: `url(${item.hinhAnh})` }}>
               <img src={item.hinhAnh} className="w-full opacity-0" alt={item.hinhAnh} />
            </div>
         </div>
      })
   }

   return (
      <Carousel effect="fade">
         {renderImg()}

      </Carousel>
   )
}
