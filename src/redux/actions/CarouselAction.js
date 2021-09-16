import axios from 'axios'
import { DOMAIN, STATUS_CODE } from '../../util/settings/config';
import { SET_CAROUSEL } from './types/CarouselType';
import { quanLyPhimService } from '../../services/QuanLyPhimService';

export const getCarouselAction = () => {

   return async (dispatch) => {
      try {
         //Sử dụng tham số thamSo
         const result = await quanLyPhimService.layDanhSachBanner();
         if (result.status === STATUS_CODE.SUCCESS) {
            dispatch({
               type: SET_CAROUSEL,
               arrImg: result.data.content
            })
         }

      } catch (err) {
         console.log('err', err);
         console.log('errors', err.response?.data);
      }
   };
}


