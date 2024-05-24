import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// 장소 이미지 슬라이더 리스트 (사진 넘기는거)
const PlaceCardImageList = ({ photos }) => {
  // price에서 숫자만 추출하고 정수로 변환

  return (
    <div className='relative w-full group'>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true} //화살표 커스텀
        modules={[Pagination, Navigation]}
        className='mySwiper'
      >
        {photos.map((photo, index) => (
          <SwiperSlide key={index}>
            <div className='relative w-full h-full'>
              <img
                src={photo}
                alt={`Slide`}
                className='w-full h-full object-cover aspect-square bg-zinc-400 rounded-xl'
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
export default PlaceCardImageList
