import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import {MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md'

const ListItem = [
    {
      title: 'Combo Sách Muôn Kiếp Nhân Sinh + Thay Đổi Cuộn Sống Với Nhân Số Học (Bộ 2 Cuốn)',
      imgUrl : 'https://cdn0.fahasa.com/media/catalog/product/z/4/z4389778466065_0006fadde6a95896a7aa25ee9da92eb1.jpg',
      salePrice : '309.000',
      sale : '-34%',
      rootPrice : '387.000'
    },{
      title: 'Bộ Sách Tâm Lí Hàn Quốc - Khi Kẻ Tàn Ác Thường Sống Thảnh Thơi + Khám Phá Chữu Lành 16 Kiểu Tính Qua MBTI (Bộ 2 cuốn) ',
      imgUrl : 'https://cdn0.fahasa.com/media/catalog/product/z/4/z4341249598095_f08b0a1bf92591b210e0cfd49eedaa97.jpg',
      salePrice : '273.000',
      sale : '-10%',
      rootPrice : '304.000'
    },{
      title: 'Combo Sách Muôn Kiếp Nhân Sinh + Không Diệt Không Sinh Đừng Sợ Hãi (Bộ 2 cuốn)',
      imgUrl : 'https://cdn0.fahasa.com/media/catalog/product/z/4/z4389778470937_2bf23e326e5ca521f95725baa0fd063d.jpg',
      salePrice : '218.000',
      sale : '-34%%',
      rootPrice : '387.000'
    },{
      title: 'Combo Sách Tuổi Trẻ Đáng Giá Bao Nhiêu + Đừng Lựa Chọn An Nhàn Khi Còn Trẻ (Bộ 2 cuốn)',
      imgUrl : 'https://cdn0.fahasa.com/media/catalog/product/c/o/combo-8935235231115-8935325001826.jpg',
      salePrice : '125.000',
      sale : '-34%',
      rootPrice : '189.000'
    },{
      title: 'Combo Sách Người Chữa Lành - Sức Mạnh Lay Động Trái Tim + Tìm Mình Trong Thành Phố Nội Tâm (Bộ 2 cuốn)',
      imgUrl : 'https://cdn0.fahasa.com/media/catalog/product/c/o/combo-8935280913998-8935325012174.jpg',
      salePrice : '323.000',
      sale : '-15%',
      rootPrice : '387.000'
    },{
      title: 'Combo Sách Tạm Biệt Tôi Của Nhiều Năm Về Trước + Càng Hiểu Chuyện Càng Đau Lòng (Bộ 2 cuốn)',
      imgUrl : 'https://cdn0.fahasa.com/media/catalog/product/c/o/combo-8935325003875-9786043927351.jpg',
      salePrice : '309.000',
      sale : '-34%',
      rootPrice : '387.000'
    },{
      title: 'Combo Sách Cà Phê Cùng Tony + Trên Đường Băng (Bộ 2 cuốn)',
      imgUrl : 'https://cdn0.fahasa.com/media/catalog/product/c/o/combo-8934974180548-8934974179979.jpg',
      salePrice : '124.000',
      sale : '-41%',
      rootPrice : '210.000'
    },{
      title: 'Combo Sách Hành Trình Của Một Kẻ Nghĩ Nhiều + Không Phải Sói Nhưng Cũng Đừng Là Cừu (Bộ 2 cuốn)',
      imgUrl : 'https://cdn0.fahasa.com/media/catalog/product/c/o/combo-8935325005312-8935325006685.jpg',
      salePrice : '148.000',
      sale : '-31%%',
      rootPrice : '214.000'
    },{
      title: 'Combo Sách Tâm Lí Tội Phạm - Phác Họa Chân Dung Kẻ Phạm Tội + Thiên Tài Bên Trái Kẻ Điên Bên Phải (Bộ 2 cuốn)',
      imgUrl : 'https://cdn0.fahasa.com/media/catalog/product/8/9/8936186546815-8935325001819.jpg',
      salePrice : '309.000',
      sale : '-34%%',
      rootPrice : '387.000'
    },{
      title: 'Combo Sách Đọc Vị Bất Kì Ai + Khéo Ăn Nói Sẽ Có Được Thiên Hạ (Bộ 2 cuốn)',
      imgUrl : 'https://cdn0.fahasa.com/media/catalog/product/c/o/combo-8935280904262-8936067605693_1.jpg',
      salePrice : '309.000',
      sale : '-34%%',
      rootPrice : '387.000'
    },{
      title: 'Combo Sách Đắc Nhân Tâm + Nhà Giả Kim (Bộ 2 cuốn)',
      imgUrl : 'https://cdn0.fahasa.com/media/catalog/product/c/o/combo-8935086854754-8935235226272.jpg',
      salePrice : '309.000',
      sale : '-34%%',
      rootPrice : '387.000'
    },{
      title: 'Combo Sách Muôn Kiếp Nhân Sinh + Thay Đổi Cuộn Sống Với Nhân Số Học',
      imgUrl : 'https://cdn0.fahasa.com/media/catalog/product/z/4/z4389778466065_0006fadde6a95896a7aa25ee9da92eb1.jpg',
      salePrice : '309.000',
      sale : '-34%%',
      rootPrice : '387.000'
    }
]

function SachTamLi() {
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
    <h2 className='pb-4 px-2 font-bold'>Combo Tâm Lí - Kĩ Năng Sống</h2>
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

export default SachTamLi
