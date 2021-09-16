import { quanLyRapService } from "../../services/QuanLyRapService";
import { STATUS_CODE } from "../../util/settings/config";
import { SET_CHI_TIET_PHIM, SET_HE_THONG_RAP_CHIEU } from "./types/QuanLyRapType";



export const layDanhSachHeThongRapAction = () => {
   return async (dispatch) => {
      try {
         const result = await quanLyRapService.layDanhSachHeThongRap();
         // console.log('heThongRap', result.data.content);
         if (result.status === STATUS_CODE.SUCCESS) {
            dispatch({
               type: SET_HE_THONG_RAP_CHIEU,
               heThongRapChieu: result.data.content
            })
         }

      } catch (err) {
         console.log('err', err);
         console.log('errors', err.response?.data);
      }
   }
}

export const layThongTinChiTietPhim = (id) => {
   return async (dispatch) => {
      try {

         const result = await quanLyRapService.layThongTinLichChieuPhim(id)
         if (result.status === STATUS_CODE.SUCCESS) {
            dispatch({
               type: SET_CHI_TIET_PHIM,
               filmDetail: result.data.content
            })
         }

      } catch (err) {
         console.log('err', err);
         console.log('errors', err.response?.data);
      }
   }
}