import style from "./SearchBox.module.css";

const SearchBox = ({ searchName, setSearchName }) => {
    
 
 
    return (
    <div>
      <p>Find contacts by neme</p>
      <input type="text" id="search" value={searchName} onChange={(event) => setSearchName(event.target.value)} />
    </div>
  );
};

export default SearchBox;
