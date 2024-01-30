// library
// icons
import { ImSearch } from "react-icons/im";

// helper
import { createQueryObject } from "../helper/helper.js";

// styles
import styles from "./SearchBox.module.css";

function SearchBox({ search, setSearch, setQuery }) {
  const searchHandler = () => {
    setQuery((query) => createQueryObject(query, { search: search.trim() }));
  };

  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value.toLowerCase());
          // searchHandler();
        }}
      />
      <button onClick={searchHandler}>
        <ImSearch />
      </button>
    </div>
  );
}

export default SearchBox;
