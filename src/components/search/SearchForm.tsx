import { useState } from "react";
import Button from "../elements/Button";

interface Props {
  searchTerm: string;
  onSubmit: (searchTerm: string) => void;
}

const SearchForm = (props: Props) => {
  const [searchInputText, setSearchInputText] = useState(props.searchTerm);
  return (
    <>
      <form
        className="mx-auto max-w-sm mb-3"
        onSubmit={(e) => {
          e.preventDefault();
          props.onSubmit(searchInputText.trim());
        }}
      >
        <label className="block mb-2 w-1/1" htmlFor="searchTerm">
          Search Term:
        </label>
        <input
          id="searchTerm"
          type="text"
          className="block border-2 border-black p-1 mb-2 w-full"
          placeholder="Search..."
          value={searchInputText}
          onChange={(e) => setSearchInputText(e.target.value)}
        />
        <Button className="w-full" type="submit">
          Search
        </Button>
      </form>
    </>
  );
};

export default SearchForm;
