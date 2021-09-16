import React, { useEffect, Fragment } from 'react';
import { CustomCard } from '@tsamantanis/react-glassmorphism';
import '@tsamantanis/react-glassmorphism/dist/index.css';
import '../../assets/styles/circle.css';
import { Tabs } from 'antd';
import { StarOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux';
import { layThongTinChiTietPhim } from '../../redux/actions/QuanLyRapAction';
import moment from 'moment';
import { NavLink } from 'react-router-dom';

const { TabPane } = Tabs;

export default function Detail(props) {

   const filmDetail = useSelector(state => state.QuanLyPhimReducer.filmDetail)
   console.log('filmDetail', filmDetail);

   const dispatch = useDispatch()

   useEffect(() => {
      //Lấy thông tin param từ url
      let { id } = props.match.params;

      dispatch(layThongTinChiTietPhim(id))
   }, [])

   const renderReview = (review) => {
      let start = '';
      for (let i = 2; i <= review; i += 2) {
         start += '★'
         if ((review - i) === 1) {
            start += '1/2'
         }
      }
      return start;
   }

   return (
      <div style={{
         backgroundImage: `url(${filmDetail.hinhAnh})`, backgroundPosition: 'center',
         backgroundRepeat: 'no-repeat',
         backgroundSize: '100% 100%', minHeight: '100vh'
      }}>
         <CustomCard
            style={{ paddingTop: 200, minHeight: '100vh' }}
            effectColor="#C780FF" // required
            color="#14AEFF" // default color is white
            blur={20} // default blur value is 10px
            borderRadius={10} // default border radius value is 10px
         >
            <div className="grid grid-cols-12">
               <div className="col-span-4 col-start-4">
                  <div className="flex items-center">
                     <img src={filmDetail.hinhAnh} style={{ width: 280, height: 360, borderRadius: 15 }} alt="123" />
                     <div className="ml-3 text-white" style={{ textShadow: 'black 0.1em 0.1em 0.2em' }}>
                        <p>{moment(filmDetail.ngayKhoiChieu).format('DD.MM.YYYY')}</p>
                        <p className="text-xl leading-3">{filmDetail.tenPhim}</p>
                        <p >{filmDetail.moTa}</p>
                     </div>
                  </div>
               </div>
               <div className=" col-span-2 col-start-9 flex items-center">
                  <div className="clearfix ">
                     <div className={`c100 p${filmDetail.danhGia * 10} big`}>
                        <span>{filmDetail.danhGia * 10}%</span>
                        <div className="slice">
                           <div className="bar" />
                           <div className="fill" />
                        </div>
                     </div>
                     <p className="text-center font-bold text-3xl" style={{ color: '#fb4226' }}>{renderReview(filmDetail.danhGia)}</p>
                  </div>
               </div>
            </div>
            <div className="w-2/3 mt-32 container mx-auto" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", minHeight: 300 }}>
               <div >
                  <Tabs defaultActiveKey="1" centered>
                     <TabPane tab={<div className="text-white">Lịch Chiếu</div>} key="1">
                        <div className="w-full  mt-5">
                           <Tabs tabPosition={'left'}>
                              {filmDetail.heThongRapChieu?.map((heThongRap, index) => {
                                 return <TabPane tab={<div> <img src={heThongRap.logo} alt={heThongRap.tenHeThongRap} style={{ width: 50, height: 50 }} /></div>} key={index}>

                                    {heThongRap.cumRapChieu?.map((cumRap, index) => {
                                       return <Fragment key={index}>
                                          <div className="my-5">
                                             <div style={{ display: 'flex' }} >
                                                <img style={{ height: 60, width: 60 }} src={cumRap.hinhAnh} alt={cumRap.tenCumRap} onError={(e) => { e.target.onerror = null; e.target.src = "image_path_here" }} />
                                                <div className="ml-2">
                                                   <h1 className="text-xl text-white">{cumRap.tenCumRap}</h1>
                                                   <p className="text-white">{cumRap.diaChi}</p>
                                                </div>

                                             </div>
                                             <div className="grid grid-cols-8 gap-4">
                                                {cumRap.lichChieuPhim?.slice(0, 16).map((lichChieu, index) => {
                                                   return <NavLink className=" bg-green-700 text-white p-2 rounded-md text-center" to="/" key={index}>
                                                      {moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}
                                                   </NavLink>
                                                })}
                                             </div>
                                          </div>
                                       </Fragment>
                                    })}

                                 </TabPane>
                              })}
                           </Tabs>
                        </div>
                     </TabPane>
                     <TabPane tab={<div className="text-white">Thông Tin</div>} key="2">
                        <div className="w-2/3 mx-auto grid grid-cols-2">
                           <div className="text-xl text-white">
                              <p>Ngày khởi chiếu: {moment(filmDetail.ngayKhoiChieu).format('DD.MM.YYYY')}</p>
                           </div>
                           <div className="text-white">
                              <p >Nội dung:</p>
                              <p>{filmDetail.moTa}</p>
                           </div>
                        </div>
                     </TabPane>
                     <TabPane tab={<div className="text-white">Đánh Giá</div>} key="3">

                     </TabPane>
                  </Tabs>
               </div>

            </div>
         </CustomCard>
      </div>
   )
}
