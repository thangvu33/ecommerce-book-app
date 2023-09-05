import React, { useCallback }from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import {MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md'


function Hero() {
 
  const [emblaRef,emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000 }),
  ])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
   <div className='max-w-[1280px] mx-auto mt-[56px]'>
    <div className='grid grid-cols-1 xl:grid-cols-3 gap-2 p-2 '>
        <div className='w-full md:max-xl:w-[768px] h-full xl:col-span-2 xl:row-span-2 mx-auto relative'>
          <div className='w-full h-full overflow-hidden'>
            <div ref={emblaRef}>
              <div className='flex'>
                <div className='shrink-0 grow basis-full'>
                  <img src="https://cdn0.fahasa.com/media/magentothem/banner7/FahasaSaleT3_W1_2-9_Banner_Slide_840x320.jpg" alt="" className='h-full'/>  
                </div>
                <div className='shrink-0 grow basis-full'>
                  <img src="https://cdn0.fahasa.com/media/magentothem/banner7/NCCT9_Platinum_Bitex_Banner_840x320.jpg" alt="" className='h-full'/>  
                </div>
                <div className='shrink-0 grow basis-full'>
                  <img src="https://cdn0.fahasa.com/media/magentothem/banner7/NCCDiamondT823_MCBOOKBirthday_BannerSlide_840x320_t9.jpg" alt="" className='h-full'/>  
                </div>
                <div className='shrink-0 grow basis-full'>
                  <img src="https://cdn0.fahasa.com/media/magentothem/banner7/TrangBaLoT9_Slidebanner_840x320.jpg" alt="" className='h-full'/>  
                </div>
                <div className='shrink-0 grow basis-full'>
                  <img src="https://cdn0.fahasa.com/media/magentothem/banner7/KDKS_Mainbanner_T9_Slide_840x320.jpg" alt="" className='h-full'/> 
                </div>
                <div className='shrink-0 grow basis-full'>
                  <img src="https://cdn0.fahasa.com/media/magentothem/banner7/BookBTST1508_T9_Banner_840x320.jpg" alt="" className='h-full'/> 
                </div>
              </div>
            </div>
            
              <MdKeyboardArrowLeft size={30} onClick={scrollPrev} className='absolute bottom-1/2 -translate-x-1/2 translate-y-1/2 bg-white rounded-full fill-slate-500 hover:scale-150 duration-100' />
              <MdKeyboardArrowRight size={30} onClick={scrollNext} className='absolute bottom-1/2 left-full -translate-x-1/2 translate-y-1/2 bg-white rounded-full fill-slate-500 hover:scale-150 duration-100'/>
            
          </div>
        </div>
        <img src="https://cdn0.fahasa.com/media/wysiwyg/Thang-09-2023/VnpayT9_392x156.png" alt="" className='hidden xl:block col-span-1 w-full h-full'/>
        <img src="https://cdn0.fahasa.com/media/wysiwyg/Thang-09-2023/zlpay_392x156_t9.jpg" alt="" className='hidden xl:block col-span-1 w-full h-full'/>
    </div>
    <div className='hidden md:grid grid-cols-4 w-[768px] mx-auto xl:w-full gap-2'>
        <img src="https://cdn0.fahasa.com/media/wysiwyg/Thang-09-2023/Notebook_SmallBanner_310x210.png" alt="" className='w-full h-full'/>
        <img src="https://cdn0.fahasa.com/media/wysiwyg/Thang-09-2023/Dochoitrungthu_Mainbanner_Smallbanner_310x210.png" alt="" className='w-full h-full'/>
        <img src="https://cdn0.fahasa.com/media/wysiwyg/Thang-09-2023/Manga_mainbanner_T7_Smallbanner_310x210.png" alt="" className='w-full h-full'/>
        <img src="https://cdn0.fahasa.com/media/wysiwyg/Thang-09-2023/NCCT9_Platinum_%C4%90inhT%E1%BB%8B_Smaillbanner_310x210-04.png" alt="" className='w-full h-full'/>
    </div>
   </div>
  )
}

export default Hero
