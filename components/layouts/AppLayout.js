import Footer from "../footer.jsx";
import Header from "../header.jsx";

const AppLayout = ({ children }) => {
  return (
    <div className="d-flex flex-column vh-100 justify-content-between">
      <div>
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