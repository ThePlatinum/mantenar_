import AppLayout from '../components/layouts/AppLayout'
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from 'next/link';

export default function Home() {

  const feedbacks = [
    {
      'name': 'Personalized',
      'img': '/asset/img.jpg',
      'note': 'Your data and file shared is yours and stays that way!'
    },
    {
      'name': 'Full Control',
      'img': '/asset/bg2.jpg',
      'note': 'You decide how much file you want to share and who you want to share it with.'
    },
    {
      'name': 'Unlimited',
      'img': '/asset/img.jpg',
      'note': "Zero storage limitation or file size limit. It's trully your space."
    }
  ]

  const prices = [
    {
      'name': 'Self Managed',
      'price': "NGN 80,000 / USD 180",
      'tag': "You decide",
      'note': "Perfect for people with technical knowhow of installing a software and hows their private server or what's to use in a private network",
      'id': 'self'
    },
    {
      'name': 'Pro Setup',
      'price': "NGN 100,000 / USD 250",
      'tag': "Technical Advice",
      'note': "Either you have a private network or you just want to set up one, we provide technical support and full setup of the software",
      'id': 'pro'
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

  const handleSubmit = (event) => {

    if (typeof window != "undefined") {
      event.preventDefault()
      const name = event.target.elements[0].value
      const email = event.target.elements[1].value
      const phone = event.target.elements[2].value
      const option = event.target.elements[3].value

      var handler = PaystackPop.setup({
        key: 'pk_test_07a4f1c9e8de964cbc8a799311ffb1a9a25b73ec',
        email: email,
        amount: (option == 'self') ? 80000 * 100 : 100000 * 100,
        text: 'Get Mantenar',
        metadata: {
          'Name': name,
          'Phone Number': phone,
          'Package': (option == 'self') ? 'Self Managed' : 'Pro Setup'
        },
        onSuccess: (reference) => {},
        onClose: ()=> {}
      })

      handler.openIframe();
    }
  }

  return (
    <AppLayout>
      {/* Banner */}
      <div className="container">
        <div className="row">
          <div className="col-md-6 d-flex flex-column justify-content-center py-5 py-md-0 banner__text">
            <h1> Control your Organizations File Share </h1>
            <p>Keep things secured and unbounded with Mantenar</p>
            <div className="d-flex flex-wrap gap-3">
              <Link href="/how" className="btn btn__b_f_outline_blue">See How it Works</Link>
              <Link href="/#pricing" className="btn btn__b_blue">Get Started</Link>
            </div>
          </div>

          <div className="col-md-6 d-flex flex-column justify-content-center h__75vh pb-5 pb-md-0">
            <img src="/screens/admin_dashboard.png" alt="" className="w-100" />
          </div>
        </div>
      </div>

      {/* Trusted by */}
      <section className="trusted_by">
        <div className='container text-center'>
          <h5> Trusted By </h5>
          <div className="row">
            {trustees.map((t, i) => {
              return (
                <div className="col-4 text-center" key={i}>
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
      <section className="pricing">
        <div className="container">
          <h3 className='title'> Pricing </h3>
          <div className="row">
            {prices.map((p, i) => {
              return (
                <div className="col-md-4 pb-4 pb-md-0" key={i}>
                  <div className="card card-body p-5 bg-white">
                    <h4 className="price__title"> {p.name} </h4>
                    <div className="price">
                      <h5> {p.price} </h5>
                      <p> <small>{p.tag}</small> </p>
                    </div>
                    <p> {p.note} </p>
                    <a data-bs-toggle="modal" data-bs-target="#paymentModal" className="btn btn__b_outline_blue">Get Now</a>
                  </div>
                </div>
              )
            })}

            <div className="col-md-4 d-flex flex-column banner__text justify-content-center pt-4 pt-md-0">
              <h2>Need something different?</h2>
              <p>Get in Touch</p>
              <a href="mailto:platinumemirate@gmail.com" className="btn btn__b_outline_blue">Let Us Know</a>
            </div>
          </div>
        </div>
      </section>

      {/* Subscription */}
      <section className="subscription">
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

      {/* Modals */}
      <div className="modal fade" tabIndex="-1" id='paymentModal'>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                Get Mantenar
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">

              <form id="purchase__form" onSubmit={handleSubmit}>
                <label htmlFor="name" className="col-form-label">Name</label>
                <input id="name" required className="form-control" name="name" autoFocus autoComplete="name" />

                <label htmlFor="email" className="col-form-label pt-3">Email</label>
                <input id="email" required className="form-control" name="email" autoFocus autoComplete="email" />

                <label htmlFor="phone" className="col-form-label pt-3">Phone</label>
                <input type={"number"} id="phone" required className="form-control" placeholder='+234 801 2345 678' name="phone" min={100000} autoFocus autoComplete="phone" />

                <label htmlFor="option" className="col-form-label pt-3">Purchase Option</label>
                <select id="option" required className="form-control" name="option" autoFocus autoComplete="option">
                  <option value=""> Select </option>
                  {prices.map((p, i) => {
                    return (<option key={i} value={p.id}> {p.name + ' (' + p.price + ')'}</option>)
                  })}
                </select>

                <button className="btn btn__b_f_blue my-4">Proceed</button>
                <a className="btn btn__b_f_outline_blue my-4" href='tel://+2347014293952'>Call Us Instead</a>
              </form>

            </div>
          </div>
        </div>
      </div>

    </AppLayout >
  )
}
