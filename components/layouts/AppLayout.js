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
      <button id="back-to-top" className="btn back-to-top p-2" role="button">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z" />
        </svg>
      </button>
    </div>
  )
}

export default AppLayout