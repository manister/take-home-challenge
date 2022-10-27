import PageTitle from "../components/elements/PageTitle";
import Container from "../components/layout/Container";
import SearchForm from "../components/search/SearchForm";
import SearchResults from "../components/search/SearchResults";
import useSaleSearch from "../hooks/useSaleSearch";

const PER_PAGE = 10;

const Search = () => {
  const { searchTerm, page, saleSearch, setSearchTerm, loading, error } =
    useSaleSearch();
  return (
    <Container>
      <PageTitle>Search</PageTitle>
      <SearchForm searchTerm={searchTerm} onSubmit={setSearchTerm} />
      <SearchResults
        searchTerm={searchTerm}
        loading={loading}
        error={error}
        currentPage={page}
        itemsPerPage={PER_PAGE}
        {...(saleSearch ? { saleSearch } : {})}
      />
    </Container>
  );
};
export default Search;
