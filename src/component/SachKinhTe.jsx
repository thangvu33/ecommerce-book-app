import React, { useCallback }from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import {MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md'

const ListItem = [
  {
    title: 'Combo Sách Tạo Lập Mô Hình Kinh Doanh Cá Nh...',
    imgUrl : 'https://cdn0.fahasa.com/media/catalog/product/c/o/combo-20072022.jpg',
    salePrice : '880.032',
    sale : '-29%',
    rootPrice : '1.236.000'
  },  {
    title: 'Combo Sách Làm Giàu Từ Chứng Khoán + Tâm Lí Thị Trường Chứng Khoán',
    imgUrl : 'https://cdn0.fahasa.com/media/catalog/product/c/o/combo-8936066708227-8935251406276.jpg',
    salePrice : '880.032',
    sale : '-29%',
    rootPrice : '635.000'
  },  {
    title: 'Combo How Business Works - Hiểu Hết Về Kinh Doanh + How Things Work - Cách Mọi Vật Vận Hành (Bộ 2 cuốn)',
    imgUrl : 'https://cdn0.fahasa.com/media/catalog/product/c/o/combo-8935235225053-8935235221291.jpg',
    salePrice : '453.053',
    sale : '-29%',
    rootPrice : '635.000'
  },  {
    title: 'Combo Sức Mạnh Tiềm Thức + Bí Mật Tư Duy Triệu Phú + Người Giáu Có Nhất Thành Babylon (Bộ 3 cuốn)',
    imgUrl : 'https://cdn0.fahasa.com/media/catalog/product/c/o/combo-12052022_3.jpg',
    salePrice : '264.528',
    sale : '-21%',
    rootPrice : '334.000'
  },  {
    title: 'Combo Sách Nghệ Thuật Bán Hàng Bậc Cao + Nghệ Thuật Bán Hàng Của Người Do Thái + Người Bán Hàng Vĩ Đại Nhất Thế Giới',
    imgUrl : 'https://cdn0.fahasa.com/media/catalog/product/c/o/combo-120520223.jpg',
    salePrice : '880.032',
    sale : '-29%',
    rootPrice : '1.236.000'
  },  {
    title: 'Combo Sách Tạo Lập Mô Hình Kinh Doanh Cá Nh...',
    imgUrl : 'https://cdn0.fahasa.com/media/catalog/product/c/o/combo-8935280910218-8935280910225.jpg',
    salePrice : '880.032',
    sale : '-29%',
    rootPrice : '1.236.000'
  }, {
    title: 'Combo Sách Những Đòn Tâm Lí Trng Thuyết Phục + Những Đòn Tâm Lí Trong Bán Hàng (Bộ 2 Cuốn)',
    imgUrl : 'https://cdn0.fahasa.com/media/catalog/product/c/o/combo-8935251417616-8935251416138.jpg',
    salePrice : '217.294',
    sale : '-29%',
    rootPrice : '308.000'
  },{
    title: 'Combo Sách Tỷ Phú Bán Giày + Triết Lý Kinh Doanh Của Inamori Kazuo (Bộ 2 Cuốn)',
    imgUrl : 'https://cdn0.fahasa.com/media/catalog/product/c/o/combo-8935251417807-8935280906525.jpg',
    salePrice : '198.000',
    sale : '-15%',
    rootPrice : '234.000'
  },{
    title: 'Combo Sách Thị Trường Chứng Khoán: 24 Bài Học Sống Còn Để Đầu Tư Thành Công Trên Thị Trường Chứng Khoán + Tâm Lý Thị Trường Chứng Khoán (Bộ 2 Cuốn)',
    imgUrl : 'https://cdn0.fahasa.com/media/catalog/product/c/o/combo-8935251417432-8935251406276.jpg',
    salePrice : '151.000',
    sale : '-30%',
    rootPrice : '218.000'
  },{
    title: 'Combo Sách Thế Giới Phẳng + Từ Tốt Đến Vĩ Đại (Bộ 2 Cuốn)',
    imgUrl : 'https://cdn0.fahasa.com/media/catalog/product/c/o/combo-8934974158462-8934974171485.jpg',
    salePrice : '334.000',
    sale : '-24%',
    rootPrice : '440.000'
  },{
    title: 'Combo Sách Sói Già Phố Wall (Bộ 2 Cuốn)',
    imgUrl : 'https://cdn0.fahasa.com/media/catalog/product/c/o/combo-9786049957536-9786049957543.jpg',
    salePrice : '312.000',
    sale : '-15%',
    rootPrice : '368.000'
  }, {
    title: 'Combo Sách Thiếu Hiểu Tiếp Thị Từ A-Z + Tiếp Thị 5.0',
    imgUrl : 'https://cdn0.fahasa.com/media/catalog/product/c/o/combo-8934974165613-8934974174875.jpg',
    salePrice : '180.000',
    sale : '-23%',
    rootPrice : '235.000'
  }

]

function SachKinhTe() {
    function truncate (string, n) {
        return string?.length > n ? string.substr(0, n -1) + '...' : string
    }
    const [emblaRef,emblaApi] = useEmblaCarousel({slidesToScroll : 'auto'});
    
      const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
      }, [emblaApi])
    
      const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
      }, [emblaApi])
  return (
    <div className='max-w-[1280px] md:max-xl:w-[768px] bg-white md:mx-auto my-4 relative shadow-xl rounded-lg py-4 mx-2'>
      <h2 className='pb-4 px-2 font-bold'>Combo Sách Kinh Tế</h2>
      <div className='w-full h-full overflow-hidden mb-4'>
        <div ref={emblaRef}>
         <div className='flex' >
          {ListItem.map((item,index) => {
            return (
            <div className='shrink-0 grow-0 basis-1/5 min-w-[170px] p-2 flex flex-col border cursor-pointer gap-1'
             key={index}
            >
              <img src={item.imgUrl} alt={item.title} title={item.title} />
              <p title={item.title}>{truncate(item.title, 45)}</p>
              <div className='flex flex-row gap-2'>
                <p className='text-red-600'>{item.salePrice} đ</p>
                <div className='text-white bg-red-600 rounded-md px-1'>
                  {item.sale}
                </div>
              </div>
              <del className='text-slate-00'>{item.rootPrice} đ</del>
            </div> 
            )
          })}
         
         </div>
        </div>
      </div>
      <MdKeyboardArrowLeft size={30} onClick={scrollPrev} className='absolute bottom-1/2 -translate-x-1/2 translate-y-1/2 bg-white rounded-full fill-slate-500 hover:scale-150 duration-100' />
      <MdKeyboardArrowRight size={30} onClick={scrollNext} className='absolute bottom-1/2 left-full -translate-x-1/2 translate-y-1/2 bg-white rounded-full fill-slate-500 hover:scale-150 duration-100'/>
      <div className='mx-auto w-[210px]'>
        <div className='w-[210px] bg-white text-center border-2 rounded-md border-green-600 text-green-600 py-1'>Xem Thêm</div>
      </div>
      
    </div>
  )
}

export default SachKinhTe
