import { SET_DANH_SACH_PHIM, SET_PHIM_DANG_CHIEU, SET_PHIM_SAP_CHIEU } from '../actions/types/QuanLyPhimType';


const initialState = {
   arrFilmDefault: [],
   arrFilm: [
      {
         "maPhim": 1328,
         "tenPhim": "Ted New",
         "biDanh": "ted-new",
         "trailer": "https://www.youtube.com/embed/S3AVcCggRnU",
         "hinhAnh": "http://movieapi.cyberlearn.vn/hinhanh/ted-232132198_gp15.jpg",
         "moTa": "Newlywed couple Ted and Tami-Lynn want to have a baby, but in order to qualify to be a parent, Ted will have to prove he's a person in a court of law.",
         "maNhom": "GP01",
         "ngayKhoiChieu": "2021-09-24T00:00:00",
         "danhGia": 6,
         "hot": true,
         "dangChieu": false,
         "sapChieu": true
      },
      {
         "maPhim": 1343,
         "tenPhim": "Bright",
         "biDanh": "bright",
         "trailer": "https://www.youtube.com/embed/2MxnhBPoIx4",
         "hinhAnh": "http://movieapi.cyberlearn.vn/hinhanh/trainwreck.jpg",
         "moTa": "Having thought that monogamy was never possible, a commitment-phobic career woman may have to face her fears when she meets a good guy.",
         "maNhom": "GP01",
         "ngayKhoiChieu": "2021-09-09T13:21:37.273",
         "danhGia": 5,
         "hot": false,
         "dangChieu": true,
         "sapChieu": false
      },
   ],
   dangChieu: true,
   sapChieu: false,
}

export const QuanLyPhimReducer = (state = initialState, action) => {
   switch (action.type) {

      case SET_DANH_SACH_PHIM: {
         state.arrFilm = action.arrFilm;
         state.arrFilmDefault = action.arrFilm
         return { ...state };
      }

      case SET_PHIM_DANG_CHIEU: {
         console.log('phim dang chieu');
         state.dangChieu = true;
         state.sapChieu = false
         state.arrFilm = state.arrFilmDefault.filter(film => film.dangChieu === state.dangChieu);
         return { ...state };
      }

      case SET_PHIM_SAP_CHIEU: {
         console.log('phim sap chieu');
         state.sapChieu = true;
         state.dangChieu = false
         state.arrFilm = state.arrFilmDefault.filter(film => film.sapChieu === state.sapChieu);
         return { ...state };
      }

      default:
         return { ...state };
   }
}
