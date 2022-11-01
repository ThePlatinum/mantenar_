import AppLayout from '../components/layouts/AppLayout'
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Home() {

  const feedbacks = [
    {
      'name': 'Personalized',
      'img': '/asset/img.jpg',
      'note': 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
      'name': 'Full Control',
      'img': '/asset/bg2.jpg',
      'note': 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
      'name': 'Unlimited',
      'img': '/asset/img.jpg',
      'note': 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    }
  ]

  return (
    <AppLayout>
      {/* Banner */}
      <div className="container">
        <div className="row">
          <div className="col-md-6 d-flex flex-column justify-content-center py-5 py-md-0 banner__text">
            <h1> Control your Organizations File Share </h1>
            <p>Keep things secured and unbounded with Mantenar</p>
            <div className="d-flex flex-wrap gap-3">
              <a href="" className="btn btn__b_outline_blue">Demo</a>
              <a href="" className="btn btn__b_blue">Download</a>
            </div>
          </div>

          <div className="col-md-6 d-flex flex-column justify-content-center h__75vh">
            <img src="/asset/mantenar_demo.png" alt="" className="w-100" />
          </div>
        </div>
      </div>

      {/* Feedback */}
      <div className="feedback__section">
        <div className="container">
          <Swiper
            modules={[Navigation, A11y, Pagination, Scrollbar]}
            loop={true} centeredSlides={true}
            navigation
            effect="fade"
            pagination={{ clickable: true }}
            autoplay={{
              delay: 500,
              disableOnInteraction: false,
            }}>
            {feedbacks.map((s, i) => {
              return (
                <SwiperSlide key={i}>
                  <img src={s.img} alt="Feature" className="swiper__img" />
                  <div className="swiper__card">
                    <h3 className="mb-3 mb-md-2"> {s.name} </h3>
                    <p className="mb-0"> {s.note} </p>
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </div>
    </AppLayout>
  )
}
