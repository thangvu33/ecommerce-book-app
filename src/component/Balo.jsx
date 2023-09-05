import React, { useCallback }from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import {MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md'

const ListItem = [
    {
      title :  'Ba lô Chống Gù Fancy Biệt Đội Avengers - Clever Hippo Black',
      imgUrl : 'https://cdn0.fahasa.com/media/catalog/product/8/9/8935337506333.jpg',
      salePrice : '981.000',
      sale : '-10%',
      rootPrice : '1.090.000'   
    }, {
        title :  'Ba lô Học Sinh - Sun Eight 90149 - Kì Lân Hồng',
        imgUrl : 'https://cdn0.fahasa.com/media/catalog/product/3/9/3900000159159.jpg',
        salePrice : '280.000',
        sale : '-5%',
        rootPrice : '295.000'   
    },{
        title :  'Ba lô Học Sinh - Sun Eight 90149 - Khủng Long',
        imgUrl : 'https://cdn0.fahasa.com/media/catalog/product/3/9/3900000159173.jpg',
        salePrice : '280.000',
        sale : '-5%',
        rootPrice : '295.000'   
    },{
        title :  'Ba lô Học Sinh - Sun Eight 90149 - Thỏ Tím ',
        imgUrl : 'https://cdn0.fahasa.com/media/catalog/product/3/9/3900000159135.jpg',
        salePrice : '280.000',
        sale : '-5%',
        rootPrice : '295.000'   
    },{
        title :  'Ba lô Học Sinh - Sun Eight 90149 - Phi Hành Gia ',
        imgUrl : 'https://cdn0.fahasa.com/media/catalog/product/3/9/3900000159142.jpg',
        salePrice : '280.000',
        sale : '-5%',
        rootPrice : '295.000'   
    },{
        title :  'Ba lô Người Nhện Spider-Man - Clever Hippo Black ',
        imgUrl : 'https://cdn0.fahasa.com/media/catalog/product/8/9/8935337506432.jpg',
        salePrice : '629.000',
        sale : '-10%',
        rootPrice : '699.000'   
    },{
        title :  'Ba lô Chống Gù Fancy Frozen - Clever Hippo Blue ',
        imgUrl : 'https://cdn0.fahasa.com/media/catalog/product/8/9/8935337506302.jpg',
        salePrice : '981.000',
        sale : '-10%',
        rootPrice : '1.090.000'   
    },{
        title :  'Ba lô Chống Gù Spider-Man - Clever Hippo Blue ',
        imgUrl : 'https://cdn0.fahasa.com/media/catalog/product/8/9/8935337506326.jpg',
        salePrice : '981.000',
        sale : '-10%',
        rootPrice : '1.090.000'   
    },{
        title :  'Ba lô Chống Gù Hello Kitty - Clever Hippo Pink ',
        imgUrl : 'https://cdn0.fahasa.com/media/catalog/product/8/9/8935271737329.jpg',
        salePrice : '534.000',
        sale : '-15%',
        rootPrice : '629.000'   
    },{
        title :  'Ba lô Chống Gù Siêu Nhân Morph - Clever Hippo Pink ',
        imgUrl : 'https://cdn0.fahasa.com/media/catalog/product/8/9/8935271737466.jpg',
        salePrice : '534.000',
        sale : '-15%',
        rootPrice : '629.000'   
    },
]


function Balo() {
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
        <h2 className='pb-4 px-2 font-bold'>Balo Bán Chạy</h2>
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

export default Balo
