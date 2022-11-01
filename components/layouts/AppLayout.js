import Head from "next/head";
import Footer from "../footer.jsx";
import Header from "../header.jsx";

const AppLayout = ({ children, title }) => {
  return (
    <div className="d-flex flex-column vh-100 justify-content-between">
      <div>
        <Head> <title>{title ?? 'Mantenar'}</title> </Head>
        <Header />
        {children}
      </div>
      <Footer />
      <button id="back-to-top" className="btn back-to-top p-3" role="button">
        <i className="bi bi-arrow-up"></i>
      </button>
    </div>
  )
}

export default AppLayout