import Link from "next/link"

export default function Header() {
  return (
    <nav className="navbar header">
      <div className="container">
        <Link className="navbar-brand" href="/">
          <img src="/asset/mantenar_logo.svg" alt="Mantenar" className="brand__img"/>
        </Link>
      </div>
    </nav>
  )
}