export default function SearchBar() {
    return (

        <form
    className="d-flex align-items-center w-100 form-search"
    style={{ margin: "4px 15px" }}
  >
    <div className="input-group">
      <input
        type="text"
        style={{ width: 0 }}
        className="form-control focus-ring focus-ring-dark S-inp"
        placeholder="Search"
        aria-label="Search"
      />
      <button
        className="btn btn-light shadow-0"
        type="button"
        aria-expanded="false"
        style={{ paddingBottom: "0.4rem" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={16}
          height={16}
          fill="currentColor"
          className="bi bi-search"
          viewBox="0 0 16 16"
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
        </svg>
      </button>
    </div>
  </form>
    )
}

