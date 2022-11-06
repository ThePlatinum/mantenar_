import Link from "next/link";
import { Autoplay, Mousewheel, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export default function How() {
  return (
    <>

      <Swiper
        modules={[Mousewheel, Pagination, Scrollbar, Autoplay]}
        direction={"vertical"}
        speed={1000}
        mousewheel={{
          forceToAxis: true,
          sensitivity: 1,
          releaseOnEdges: true,
        }}
        pagination={{ clickable: true, }}
        className='how_slide'>

        <SwiperSlide>
          <div className="slide1 h-100 slide__content">
            <div className="container h-100">
              <div className="row h-100 ">
                <div className="col-md-4 scroll__hight">
                  <div className="d-flex flex-column left__space h-100">
                    <div>
                      <h4>Install and Set up</h4>
                      <p>
                        Simply profile a name for your installation <br /> <br />
                        Create an Admin Account
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="d-flex justify-content-center align-item-center scroll__hight">
                    <img src="/screens/org_setup.png" alt="Setup" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide2 h-100 slide__content">
            <div className="container h-100">
              <div className="row h-100 ">
                <div className="col-md-4 scroll__hight">
                  <div className="d-flex flex-column left__space h-100">
                    <div>
                      <h4>Invite</h4>
                      <p>
                        Send out invitations to your staffs and collaborators to join you. <br /> <br />
                        They Accept the Invite and setup their Account in 2mins
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="d-flex justify-content-center align-item-center scroll__hight">
                    <img src="/screens/invited_user_profile.png" alt="Setup" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide3 h-100 slide__content">
            <div className="container h-100">
              <div className="row h-100 ">
                <div className="col-md-4 scroll__hight">
                  <div className="d-flex flex-column left__space h-100">
                    <div>
                      <h4>Share & Manage</h4>
                      <p>
                        Share ANY file type or size with your team and control who sees it. <br /> <br />
                        Receive files shared with you from your users
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="d-flex justify-content-center align-item-center scroll__hight">
                    <img src="/screens/share_new_file.png" alt="Setup" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide4 h-100 slide__content">
            <div className="container h-100">
              <div className="row h-100 ">
                <div className="col-md-4 scroll__hight">
                  <div className="d-flex flex-column left__space h-100">
                    <div>
                      <h4>Discuss</h4>
                      <p>
                        Quick and organized real-time chat for communication and discussion on the file shared.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="d-flex justify-content-center align-item-center scroll__hight">
                    <img src="/screens/the_file_and_chat.png" alt="Setup" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <Link id="back-to-home" className="btn back-to-home p-2" role="button" href="/">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M1.146 4.854a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H12.5A2.5 2.5 0 0 1 15 6.5v8a.5.5 0 0 1-1 0v-8A1.5 1.5 0 0 0 12.5 5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4z" />
        </svg> &nbsp; Back Home
      </Link>
    </>
  )
}