import { useQuery } from "react-query";
import { useSearchParams } from "react-router-dom";
import fetchData from "../api/fetchData";
import { searchQuery } from "../api/gql";
import { amendSearchParams } from "../lib/searchParams";

const PER_PAGE = 10;

type IUseSaleSearch = () => {
  searchTerm: string;
  page: number;
  saleSearch: ISaleSearch | null;
  loading: boolean;
  error: boolean;
  setSearchTerm: (term: string) => void;
  createSearchResultsPageQueryString: (page: number) => string;
};

const useSaleSearch: IUseSaleSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchTerm = searchParams.get("query") ?? "";

  const page = parseInt(searchParams.get("page") ?? "1");

  const setSearchTerm = (newSearchTerm: string) => {
    const params = amendSearchParams(
      new URLSearchParams(),
      "query",
      newSearchTerm
    );
    setSearchParams(params);
  };

  const createSearchResultsPageQueryString = (page: number): string => {
    const params = amendSearchParams(searchParams, "page", page.toString());
    return params.toString();
  };

  const response = useQuery(["search", searchTerm, page, PER_PAGE], () =>
    fetchData(searchQuery, {
      searchTerm,
      limit: PER_PAGE,
      offset: (page - 1) * PER_PAGE,
    })
  );

  const { isLoading, isError } = response;

  let saleSearch: ISaleSearch | null = null;

  if (!isLoading) {
    const data = response?.data?.data as unknown as { saleSearch: ISaleSearch };
    saleSearch = data.saleSearch;
  }

  return {
    searchTerm,
    page,
    saleSearch,
    loading: isLoading,
    error: isError,
    setSearchTerm,
    createSearchResultsPageQueryString,
  };
};

export default useSaleSearch;
