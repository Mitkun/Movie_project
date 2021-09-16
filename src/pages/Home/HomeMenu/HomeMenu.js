import React, { Fragment, memo, useState } from 'react';
import { Tabs, Radio, Space } from 'antd';
import { NavLink } from 'react-router-dom';
import moment from 'moment';

const { TabPane } = Tabs;

function HomeMenu(props) {
   // console.log('heThongRapChieu', props.heThongRapChieu);

   // const [state, setstate] = useState({
   //    tabPosition: 'left',
   // });
   // const changeTabPosition = e => {
   //    this.setState({ tabPosition: e.target.value });
   // };

   const renderHeThongRap = () => {
      return props.heThongRapChieu?.map((heThongRap, index) => {
         return <TabPane tab={<img src={heThongRap.logo} className="rounded-full" width='50' />} key={index}>
            <Tabs tabPosition={'left'}>
               {heThongRap.lstCumRap?.map((cumRap, index) => {
                  return <TabPane tab={
                     <div style={{ width: '300px', display: 'flex' }}>
                        <img src={cumRap.hinhAnh} style={{ height: '50px', width: '50px' }} />
                        <div className="text-left ml-2">
                           <p className="text-green-400">{cumRap.tenCumRap}</p>
                           <p>{cumRap.diaChi}</p>
                        </div>
                     </div>
                  } key={index}>
                     {cumRap.danhSachPhim?.slice(0, 4).map((phim, inex) => {
                        return <Fragment key={index}>
                           <div className="my-5">
                              <div style={{ display: 'flex' }} >
                                 <img style={{ height: 100, width: 100 }} src={phim.hinhAnh} alt={phim.tenPhim} onError={(e) => { e.target.onerror = null; e.target.src = "image_path_here" }} />
                                 <div className="ml-2">
                                    <h1 className="text-2xl text-green-700">{phim.tenPhim}</h1>
                                    <p>{cumRap.diaChi}</p>
                                    <div className="grid grid-cols-6 gap-4">
                                       {phim.lstLichChieuTheoPhim?.slice(0, 12).map((lichChieu, index) => {
                                          return <NavLink className=" bg-green-700 text-white p-2 rounded-md" to="/" key={index}>
                                             {moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}
                                          </NavLink>
                                       })}
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </Fragment>
                     })}
                  </TabPane>
               })}
            </Tabs>
         </TabPane>
      })
   }

   // const { tabPosition } = state;
   return (
      <>
         <Space style={{ marginBottom: 24 }}>
            Tab position:
         </Space>
         <Tabs tabPosition={'left'}>
            {renderHeThongRap()}
         </Tabs>
      </>
   )
}


export default memo(HomeMenu)