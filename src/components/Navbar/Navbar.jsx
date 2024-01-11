import SearchBar from "../SearchBar";
import './style.css';

export default function Navbar() {
  return (
<nav className="navbar navbar-expand-md " style={{ padding: 0 }}>
  <div className="container-md align-content-center">
    {/* Navbar brand */}
    <a className="navbar-brand" href="#">
    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-film S-ham-b-icon" viewBox="0 0 16 16">
  <path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm4 0v6h8V1zm8 8H4v6h8zM1 1v2h2V1zm2 3H1v2h2zM1 7v2h2V7zm2 3H1v2h2zm-2 3v2h2v-2zM15 1h-2v2h2zm-2 3v2h2V4zm2 3h-2v2h2zm-2 3v2h2v-2zm2 3h-2v2h2z"/>
</svg>
</a>

    {/* Toggle button */}
    <button
      className="navbar-toggler g-col-4 S-ham-b"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
      style={{ borderWidth: 0 }}
    >
      <svg
        className="S-ham-b-icon"
        xmlns="http://www.w3.org/2000/svg"
        width={35}
        height={35}
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
        />
      </svg>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
  {/* Search bar */}
  <SearchBar/>
  <ul className="navbar-nav ms-3" style={{ margin: "6px 15px" }}>
    <li className="nav-item">
      <a
        style={{ width: "100%" }}
        className="nav-link d-flex align-items-center me-3 flex-column"
        href="#!"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={16}
          height={16}
          fill="currentColor"
          className="bi bi-fire"
          viewBox="0 0 16 16"
        >
          <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16m0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15" />
        </svg>
        Latest
      </a>
    </li>
    <li className="nav-item">
      <a
        style={{ width: "100%" }}
        className="nav-link d-flex align-items-center me-3 flex-column"
        href="#!"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={16}
          height={16}
          fill="currentColor"
          className="bi bi-bookmark-fill"
          viewBox="0 0 16 16"
        >
          <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2" />
        </svg>{" "}
        Watchlist
      </a>
    </li>
    <li className="nav-item">
      <a
        style={{ width: "100%" }}
        className="nav-link d-flex align-items-center me-3 flex-column text-nowrap"
        href="#!"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={16}
          height={16}
          fill="currentColor"
          className="bi bi-door-open-fill"
          viewBox="0 0 16 16"
        >
          <path d="M1.5 15a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1H13V2.5A1.5 1.5 0 0 0 11.5 1H11V.5a.5.5 0 0 0-.57-.495l-7 1A.5.5 0 0 0 3 1.5V15zM11 2h.5a.5.5 0 0 1 .5.5V15h-1zm-2.5 8c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1" />
        </svg>
        Sign in
      </a>
    </li>
  </ul>
</div>

  </div>
</nav>
  )
}