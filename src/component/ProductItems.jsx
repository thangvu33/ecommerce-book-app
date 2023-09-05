import React from 'react'

const Product = [
    {
      title: 'Trở Lại Trường Học',
      imgUrl : 'https://cdn0.fahasa.com/media/wysiwyg/Thang-07-2023/Icon_B2S_1.png'
    }, 
    {
      title: 'Sale thứ 3',
      imgUrl : 'https://cdn0.fahasa.com/media/wysiwyg/Thang-09-2023/F3Thang9_120x120.png'
    },
    {
      title: 'Flash Sale',
      imgUrl : 'https://cdn0.fahasa.com/media/wysiwyg/icon-menu/Icon_FlashSale_Thuong_120x120.png'
    },
    {
      title: 'Mã Giảm Giá',
      imgUrl : 'https://cdn0.fahasa.com/media/wysiwyg/icon-menu/Icon_MaGiamGia_8px_1.png'
    },
    {
      title: 'Đồ Chơi',
      imgUrl : 'https://cdn0.fahasa.com/media/wysiwyg/icon-menu/IconDoChoi_Thuong_120x120.png'
    },
    {
      title: 'Đinh Tị',
      imgUrl : 'https://cdn0.fahasa.com/media/wysiwyg/Thang-09-2023/Icon_NCC_DinhTiT9.png'
    },
    {
      title: 'Balo',
      imgUrl : 'https://cdn0.fahasa.com/media/wysiwyg/Thang-09-2023/Icon_Balo_120x120.png'
    },
    {
      title: 'Sản phẩm mới',
      imgUrl : 'https://cdn0.fahasa.com/media/wysiwyg/icon-menu/Icon_SanPhamMoi_8px_1.png'
    },
    {
      title: 'Manga',
      imgUrl : 'https://cdn0.fahasa.com/media/wysiwyg/icon-menu/Manga_Week_Hot.png'
    },
    {
      title: 'Phiên chợ sách cũ',
      imgUrl : 'https://cdn0.fahasa.com/media/wysiwyg/icon-menu/Icon_PhienChoCu_8px_1.png'
    } 

  ] 
  



function ProductItems() {
  return (
    <div className='grid grid-cols-5 max-w-[1280px] md:mx-auto md:grid-cols-10 md:max-xl:w-[768px] bg-white px-2 py-4 gap-2 mt-4 shadow-xl rounded-lg mx-2'>
        {Product.map((item,index) => {
          return (
            <div key={index} className='flex flex-col items-center '>
              <img src={item.imgUrl} alt={item.title} className='h-[45px] w-[45px]'/>
              <p className='text-center'>{item.title}</p>
            </div>
          )
        })}
    </div>
  )
}

export default ProductItems
