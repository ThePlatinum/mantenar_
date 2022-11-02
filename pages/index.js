import AppLayout from '../components/layouts/AppLayout'
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from "swiper";
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

  const prices = [
    {
      'name': 'Self Managed',
      'price': "NGN 20,000 / USD 50",
      'tag': "You decide",
      'note': "Perfect for people with technical knowhow of installing a software and hows their private server or what's to use in a private network"
    },
    {
      'name': 'Pro Setup',
      'price': "NGN 50,000 / USD 120",
      'tag': "Technical Advice",
      'note': "Either you have a private network or you just want to set up one, we provide technical support and full setup of the software"
    }
  ]

  const trustees = [
    {
      'name': 'Platinum Techs',
      'logo': "/trustees/platinum.png"
    },
    {
      'name': 'ProsUp.xyz',
      'logo': "/trustees/p prosup.svg"
    },
    {
      'name': 'BLASS',
      'logo': "/trustees/blass.png"
    },
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
              <a href="/how" className="btn btn__b_outline_blue">See How it Works</a>
              <a href="/#pricing" className="btn btn__b_blue">Get Started</a>
            </div>
          </div>

          <div className="col-md-6 d-flex flex-column justify-content-center h__75vh">
            <img src="/asset/mantenar_demo.png" alt="" className="w-100" />
          </div>
        </div>
      </div>

      {/* Trusted by */}
      <section className="trusted_by">
        <div className='container text-center'>
          <h6> Trusted By </h6>
          <div class="row">
            {trustees.map((t, i) => {
              return (
                <div class="col-4 text-center" key={i}>
                  <img src={t.logo} alt={t.name} style={{
                    width: '100px',
                    height: '100px'
                  }} />
                  <p><small> {t.name} </small></p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features__section">
        <div className="container">
          <Swiper
            modules={[Navigation, A11y, Pagination, Scrollbar, Autoplay]}
            loop={true} centeredSlides={true}
            navigation
            speed={2000}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: true,
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
          <div id="pricing"></div>
        </div>
      </section>

      {/* Pricing */}
      <section class="pricing">
        <div class="container">
          <h3 className='title'> Pricing </h3>
          <div class="row">
            {prices.map((p, i) => {
              return (
                <div class="col-md-4 pb-4 pb-md-0" key={i}>
                  <div class="card card-body p-5 bg-white">
                    <h4 class="price__title"> {p.name} </h4>
                    <div class="price">
                      <h5> {p.price} </h5>
                      <p> <small>{p.tag}</small> </p>
                    </div>
                    <p> {p.note} </p>
                    <a href="" class="btn btn__b_outline_blue">Get Now</a>
                  </div>
                </div>
              )
            })}

            <div class="col-md-4 d-flex flex-column banner__text justify-content-center pt-4 pt-md-0">
              <h2>Need something different?</h2>
              <p>Get in Touch</p>
              <a href="mailto:platinumemirate@gmail.com" class="btn btn__b_outline_blue">Let Us Know</a>
            </div>
          </div>
        </div>
      </section>

      {/* Subscription */}
      <section class="subscription">
        <div className='container d-flex flex-column align-items-center text-center'>
          <div className="w-md-50">
            <h4>Subscribe</h4>
            <p>We are working on many more awesome features, be among the first to know about them</p>
            <div className="input-group">
              <input type="text" className="form-control" name="email" placeholder="Enter your email" />
              <span className="input-group-btn">
                <button className="btn btn__b_blue px-4" type="button">Subscribe</button>
              </span>
            </div>
          </div>
        </div>
      </section>

    </AppLayout >
  )
}
