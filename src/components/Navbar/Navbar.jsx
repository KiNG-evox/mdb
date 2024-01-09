import SearchBar from "../SearchBar"
import './style.css'

export default function Navbar() {
  return (
<nav class="navbar bg-dark border-bottom border-body p-2" data-bs-theme="dark">
  <div class="container-fluid">
    <a class="navbar-brand">MDB</a>
      <SearchBar/>
    <ul class="navbar-nav mb-2 mb-lg-0 d-flex flex-nowrap">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
      </ul>
  </div>
</nav>
  )
}