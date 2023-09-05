import React, { useState } from 'react'
import {BiSolidBook} from 'react-icons/bi'
import {BsSearch , BsCartFill} from 'react-icons/bs';
import {AiFillHeart, AiOutlineClose} from 'react-icons/ai';
import {BiSolidUser} from 'react-icons/bi';
import { AnimatePresence, motion } from "framer-motion"

function Nav() {
  const [login,setLogin] = useState(false)
  const [search,getSearch] = useState(false)
  return (
    <>
      <div className='w-full fixed h-[56px] top-0 bg-green-600 z-50'>
        <div className='flex justify-between p-4 h-14 shadow-2xl items-center gap-3 max-w-[1280px] mx-auto'>
          <div className='flex gap-4'>
            <BiSolidBook size={36} style={{color: 'white'}}/>
            <h1 className='text-white'>Book</h1>
            <input type="text" placeholder='Nhập sản phẩm bạn muốn tìm kiếm tại đây' className='w-[480px] hidden md:block px-2 rounded-md focus:outline-green-600' />
          </div>
            <AnimatePresence>
              {search && 
              <motion.input type="text" placeholder='Hãy nhập tên sản phẩm bạn đang tìm kiếm' className='p-2 border rounded-md focus:outline-green-600 w-full max-w-[500px] md:hidden'
                initial={{y:'-100%'}}
                animate={{y: 0}}
                exit={{y:'-150%'}}
              /> }
            </AnimatePresence>
            
          <div className='flex gap-2 items-center justify-end'>
            <BsSearch  size={26} style={{color:'white'}} onClick={() => getSearch(!search)}/>
            <AiFillHeart  size={26} style={{color:'white'}}/>
            <BsCartFill  size={26} style={{color:'white'}}/>
            {login ? 
              <AiOutlineClose size={26} className='icon z-20' onClick={() => setLogin(false)}/> :
              <BiSolidUser size={26} style={{color:'white'}} onClick={() => setLogin(true)}/>
            }
          </div>
          <AnimatePresence>
          {login && 
            <motion.div className='absolute w-screen h-screen bg-white/90 top-0 left-0 px-4 flex items-center z-10'
              initial={{x:'100%'}}
              animate={{x:0}}
              exit={{x:'100%'}}
              transition={{ ease: "easeOut", duration: 0.3 }}
            >
              <div className='h-1/2 shadow-xl p-4 w-full flex flex-col justify-around border rounded-lg z-10 '>
                <h1 className='w-full text-center'>ĐĂNG NHẬP</h1>
                <form className='w-full'>
                  <div className='flex flex-col gap-1'>
                    <label htmlFor="email" className='px-2'>Tên người dùng</label>
                    <input type="email" name="" id="email" placeholder='Nhập email của bạn tại đây' className='p-2 w-full border border-gray-500 rounded-md focus:border-2 focus:outline-none'  />
                  </div>
                  <div className='flex flex-col gap-1 mt-4'>
                    <label htmlFor="password" className='px-2'>Mật khẩu</label>
                    <input type="text" name="" id="password" placeholder='Nhập mật khẩu của bạn tại đây' className='p-2 w-full border border-gray-500 rounded-md focus:border-2 focus:outline-none'  />
                  </div>
                  <div className='mt-4'>
                    <input type="checkbox" className='ml-1'/>
                    <label className='ml-2'>Nhớ mật khẩu</label>
                  </div>
                </form>
                <button className='w-full'>Đăng nhập</button>
                <div>
                  <div className='flex gap-2'>
                    <p>Quên mật khẩu ?</p> 
                    <p className='underline text-green-700'>Lấy lại tại đây</p>
                  </div>
                  <div className='flex gap-2'>
                  <p>Không có tài khoản? </p>
                  <p className='underline text-green-700'>Tạo tài khoản tại đây</p>
                  </div>
                </div>
              </div>
            </motion.div>
          }
          </AnimatePresence>
          
        </div>
       
      </div>
    </>
  )
}

export default Nav
