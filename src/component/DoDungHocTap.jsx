import React, { useCallback }from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import {MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md'
const ListItem = [
  {
    title: 'Bộ Dụng Cụ Học Tập 31 Món Marvel Spydey',
    imgUrl : 'https://cdn0.fahasa.com/media/catalog/product/8/9/8936215850760.jpg',
    salePrice : '175.000',
    sale : '-5%',
    rootPrice : '185.000'
  }, {
    title: 'Bộ Dụng Cụ Học Sinh Tri Power Kit',
    imgUrl : 'https://cdn0.fahasa.com/media/catalog/product/i/m/image_235540.jpg',
    salePrice : '7.200',
    sale : '-20%',
    rootPrice : '9.000'
  },{
    title: 'Bộ Dụng Cụ Học Sinh Tri Smart Kit',
    imgUrl : 'https://cdn0.fahasa.com/media/catalog/product/8/9/8906073771606-dd.jpg',
    salePrice : '236.000',
    sale : '-20%',
    rootPrice : '296.000'
  },{
    title: 'Bộ Dụng Cụ Học Sinh DOMS My Pencil Kit',
    imgUrl : 'https://cdn0.fahasa.com/media/catalog/product/i/m/image_234761.jpg',
    salePrice : '7.200',
    sale : '-20%',
    rootPrice : '9.000'
  },{
    title: 'Bộ Dụng Cụ Học Sinh DOMS Neon Primes Kit',
    imgUrl : 'https://cdn0.fahasa.com/media/catalog/product/i/m/image_235539.jpg',
    salePrice : '13.600',
    sale : '-20%',
    rootPrice : '17.000'
  },{
    title: 'Bộ Dụng Cụ Học Toán DOMS X1 Premium Kit',
    imgUrl : 'https://cdn0.fahasa.com/media/catalog/product/u/n/untitled-1_148.jpg',
    salePrice : '44.600',
    sale : '-20%',
    rootPrice : '55.000'
  },{
    title: 'Bộ Dụng Cụ Học Tập Kèm Hộp Bút 5 Món',
    imgUrl : 'https://cdn0.fahasa.com/media/catalog/product/8/9/8936215850739.jpg',
    salePrice : '106.000',
    sale : '-15%',
    rootPrice : '125.000'
  },{
    title: 'Bộ Dụng Cụ Học Tập Oxford Splash International Xanh',
    imgUrl : 'https://cdn0.fahasa.com/media/catalog/product/5/0/5060375975247.jpg',
    salePrice : '75.000',
    sale : '-50%',
    rootPrice : '150.000'
  },{
    title: 'Bộ Túi Dụng Cụ Học Tập Kèm Hộp Bút 11 Món',
    imgUrl : 'https://cdn0.fahasa.com/media/catalog/product/8/9/8936215850722.jpg',
    salePrice : '157.000',
    sale : '-15%',
    rootPrice : '185.000'
  },{
    title: 'Bộ Túi Dụng Cụ Học Tập Kèm Marvel Spidey 5 Món',
    imgUrl : 'https://cdn0.fahasa.com/media/catalog/product/8/9/8936215850753.jpg',
    salePrice : '63.000',
    sale : '-15%',
    rootPrice : '75.000'
  }


]

function DoDungHocTap() {
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
    <h2 className='pb-4 px-2 font-bold'>Combo Dụng Cụ Học Tập</h2>
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

export default DoDungHocTap
