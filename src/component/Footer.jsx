import React from 'react'
import {FaTruckMoving} from 'react-icons/fa'
import {MdSecurity, MdOutlineReplay} from 'react-icons/md'
import {TfiHeadphoneAlt}  from 'react-icons/tfi'
import {BsFacebook,BsYoutube,BsInstagram,BsPinterest,BsTwitter} from 'react-icons/bs'
import {HiLocationMarker} from 'react-icons/hi'

function Footer() {
  return ( 
    <div className='max-w-[1280px] md:max-xl:w-[768px] md:mx-auto bg-white py-4 rounded-lg mx-2'>
        <div className='flex flex-row px-2 py-4'>
            <div className='flex flex-col md:flex-row basis-1/4 items-center md:items-start md:justify-center gap-2'>
                <FaTruckMoving className='icon'  size={50}/>
                <div>
                <p className='font-semibold text-green-600 text-center md:text-left'> Miễn phí vận chuyển</p>
                <p className='hidden md:block'>Với đơn hàng trên 500k</p>
                </div>
            </div>
            <div className='flex flex-col md:flex-row basis-1/4 items-center md:items-start md:justify-center gap-2'>
                <MdSecurity className='icon' size={50}/>
                <div>
                <p className='font-semibold text-green-600 text-center md:text-left'>Bảo Mật Thanh Toán</p>
                <p className='hidden md:block'>100% Bảo Mật Thông Tin Khách Hàng</p>
                </div>  
            </div>
            <div className='flex flex-col md:flex-row basis-1/4 items-center md:items-start md:justify-center gap-2 '>
                <MdOutlineReplay className='icon'  size={50}/>
                <div>
                <p className='font-semibold text-green-600 text-center md:text-left'>Hoàn Trả Dễ Dàng</p>
                <p className='hidden md:block'>Trong 10 Ngày Đâu Tiên</p>
                </div>  
            </div>
            <div className='flex flex-col md:flex-row basis-1/4 items-center md:items-start md:justify-center gap-2'>
                <TfiHeadphoneAlt className='icon'  size={50}/>
                <div>
                <p className='font-semibold text-green-600 text-center md:text-left'>Hỗ Trợ Khách Hàng 24/7</p>
                <p className='hidden md:block'>Hãy Liên Hệ Với Chúng Tôi Bất Cứ Khi Nào Bạn Cần</p>
                </div>  
            </div>
        </div>
        <div className='bg-slate-700 flex flex-col md:flex-row p-4 gap-2 md:items-center md:justify-between'>
          <h2 className='text-white'>ĐĂNG KÍ NHẬN BẢN TIN</h2>
          <div className='flex flex-row gap-2'>
            <input type="text" placeholder='Nhập địa chỉ email của bạn' className='min-w-[220px] rounded-md px-2 focus:outline-none' />
            <button className='p-2'>Đăng kí</button>
          </div>
        </div>
        <div className='flex flex-row py-4 bg-[url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDbCvTRS8A0Y2dX1Xqe6HUSOLpJ4wtd-nQZdfXXQ97E9GR7MiqODWeorGXpPsGjFVaujA&usqp=CAU")] bg-center bg-no-repeat bg-auto'>
          <div className='basis-1/2 flex flex-col items-center gap-1'>
            <p className='font-bold'>Hệ Thống Nhà Sách</p>
            <ul>
              <li><HiLocationMarker className='icon' style={{display: 'inline-block'}} size={20}/><p className='ml-2 inline'>Hà Nội</p></li>
              <li><HiLocationMarker className='icon' style={{display: 'inline-block'}} size={20}/><p className='ml-2 inline'>TP. Hồ Chí Minh</p></li>
              <li><HiLocationMarker className='icon' style={{display: 'inline-block'}} size={20}/><p className='ml-2 inline'>Đà Nẵng</p></li>  
            </ul>  
          </div>
          <div className='basis-1/2 flex flex-col items-center gap-1'>
            <p className='font-bold'>Tài Khoản Của Tôi</p>
            <ul>
              <li>Đăng nhập</li>
              <li>Tạo Tài Khoản</li>
              <li>Chi Tiết Mua Hàng</li>
              <li>Lịch Sử Mua Hàng</li>
            </ul>
          </div>
        </div>

        <div className='flex flex-row justify-around py-2'>
          <BsFacebook className='icon' size={30}/>
          <BsYoutube className='icon' size={30}/>
          <BsInstagram className='icon' size={30}/>
          <BsTwitter className='icon' size={30}/>
          <BsPinterest className='icon' size={30}/>
        </div>
        <p className='text-slate-500 text-center mt-2 pb-2'>Create by thangvu33</p>
    </div>
  )
}

export default Footer
