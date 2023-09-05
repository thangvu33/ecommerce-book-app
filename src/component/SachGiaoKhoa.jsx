import React, { useCallback }from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import {MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md'

const ListItem = [
    {
      title: 'Bộ Sách Giáo Khoa Lớp 1 (Bộ 9 Cuốn)',
      imgUrl : 'https://cdn0.fahasa.com/media/catalog/product/c/o/combo-3300000026817-1901011620920.jpg',
      salePrice : '194.000',
      sale : '-5%',
      rootPrice : '204.000'
    }, {
        title: 'Bộ Sách Bài Tập Lớp 1 Bộ (Bộ 11 Cuốn)',
        imgUrl : 'https://cdn0.fahasa.com/media/catalog/product/c/o/combo-3300000026831-1901011410903.jpg',
        salePrice : '152.000',
        sale : '-9%',
        rootPrice : '168.000'
    },{
      title: 'Bộ Sách Giáo Khoa Lớp 2 Bộ (Bộ 9 Cuốn)',
      imgUrl : 'https://cdn0.fahasa.com/media/catalog/product/c/o/combo-3300000026947-1901011620920.jpg',
      salePrice : '187.000',
      sale : '-5%',
      rootPrice : '197.000'
    },{
      title: 'Bộ Sách Bài Tập Lớp 2 Bộ (Bộ 11 Cuốn)',
      imgUrl : 'https://cdn0.fahasa.com/media/catalog/product/c/o/combo-3300000026930-1901011410903.jpg',
      salePrice : '173.000',
      sale : '-8%',
      rootPrice : '189.000'
    },{
      title: 'Bộ Sách Giáo Khoa Lớp 3 Bộ (Bộ 9 Cuốn)',
      imgUrl : 'https://cdn0.fahasa.com/media/catalog/product/c/o/combo-3300000027036-1901011620920.jpg',
      salePrice : '236.000',
      sale : '-8%',
      rootPrice : '256.000'
    },{
      title: 'Bộ Sách Bài Tập Lớp 3 Bộ (Bộ 11 Cuốn)',
      imgUrl : 'https://cdn0.fahasa.com/media/catalog/product/c/o/combo-3300000027043-1901011410903.jpg',
      salePrice : '220.000',
      sale : '-6%',
      rootPrice : '236.000'
    },{
      title: 'Bộ Sách Giáo Khoa Lớp 5 Bộ (Bộ 9 Cuốn)',
      imgUrl : 'https://cdn0.fahasa.com/media/catalog/product/c/o/combo-3300000027098-1901011410903.jpg',
      salePrice : '236.000',
      sale : '-8%',
      rootPrice : '256.000'
    },{
      title: 'Bộ Sách Bài Tập Lớp 5 Bộ (Bộ 11 Cuốn)',
      imgUrl : 'https://cdn0.fahasa.com/media/catalog/product/c/o/combo-3300000027098-1901011410903.jpg',
      salePrice : '220.000',
      sale : '-6%',
      rootPrice : '236.000'
    },{
      title: 'Bộ Sách Giáo Khoa Lớp 6 Bộ (Bộ 9 Cuốn)',
      imgUrl : 'https://cdn0.fahasa.com/media/catalog/product/c/o/combo-3300000027180-1901011620920.jpg',
      salePrice : '236.000',
      sale : '-8%',
      rootPrice : '256.000'
    },{
      title: 'Bộ Sách Bài Tập Lớp 6 Bộ (Bộ 11 Cuốn)',
      imgUrl : 'https://cdn0.fahasa.com/media/catalog/product/c/o/combo-3300000027203-1901011410903.jpg',
      salePrice : '220.000',
      sale : '-6%',
      rootPrice : '236.000'
    }
  
  
]

function SachGiaoKhoa() {
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
    <div className='max-w-[1280px] md:max-xl:w-[768px] bg-white md:mx-auto my-4 relative shadow-xl rounded-lg mb-4 py-4 mx-2'>
      <h2 className='pb-4 px-2 font-bold'>Combo Sách Giáo Khoa</h2>
      <div className='w-full h-full overflow-hidden pb-4'>
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

export default SachGiaoKhoa
