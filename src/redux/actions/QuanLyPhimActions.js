import { quanLyPhimService } from '../../services/QuanLyPhimService';
import { STATUS_CODE } from '../../util/settings/config';
import { SET_DANH_SACH_PHIM } from './types/QuanLyPhimType';



export const layDanhSachPhimAction = () => {
   return async (dispatch) => {
      try {

         const result = await quanLyPhimService.layDanhSachPhim();
         if (result.status === STATUS_CODE.SUCCESS) {
            dispatch({
               type: SET_DANH_SACH_PHIM,
               arrFilm: result.data.content
            })
         }


      } catch (err) {
         console.log('err', err);
         console.log('errors', err.response?.data);
      }
   }
}