import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({
    text,
    setText,
    color = "#5a90e3",
    placeholder = "search...",
}) => {
    return (
        <div className="searchbar-holder">
            <FontAwesomeIcon icon={faSearch} />
            <input
                type="text"
                placeholder={placeholder}
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
        </div>
    );
};

export default SearchBar;
