import SubTitle from "../elements/SubTitle";
import SearchResultsPages from "./SearchResultsPages";

interface Props {
  searchTerm: string;
  loading: boolean;
  error: boolean;
  saleSearch?: ISaleSearch;
  currentPage: number;
  itemsPerPage: number;
}

const SearchResults = (props: Props) => {
  const { loading, error, searchTerm, saleSearch, currentPage, itemsPerPage } =
    props;

  if (error) {
    throw new Error("Something went wrong, please try again.");
  }

  if (loading) {
    //if loading
    return <p className="text-center py-4">Loading...</p>;
  }

  if (saleSearch && searchTerm === "") {
    //We should show all results in this case
    return (
      <>
        <SubTitle>All results</SubTitle>
        <SearchResultsPages
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          saleSearch={saleSearch}
        />
      </>
    );
  }

  if (saleSearch?.resultCount && saleSearch.resultCount > 0) {
    //if we have results
    return (
      <>
        <SubTitle>
          Results for: "{searchTerm}" ({saleSearch.resultCount})
        </SubTitle>
        <SearchResultsPages
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          saleSearch={saleSearch}
        />
      </>
    );
  }

  if (saleSearch && saleSearch.resultCount === 0) {
    //if we have 0 results
    return (
      <>
        <SubTitle>No results found!</SubTitle>
        <p className="text-center">Please choose another search term</p>
      </>
    );
  }

  throw new Error("Something went wrong, please try again.");
};

export default SearchResults;
