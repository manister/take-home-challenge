import { Link } from "react-router-dom";
import useSaleSearch from "../../hooks/useSaleSearch";

interface Props {
  totalPages: number;
  currentPage: number;
}
const SearchResultsPagination = (props: Props) => {
  const { totalPages, currentPage } = props;

  const { createSearchResultsPageQueryString } = useSaleSearch();

  return (
    <ul className="my-3 flex items-center justify-center max-w-prose flex-wrap">
      {currentPage > 1 ? (
        <Link
          className="p-2 underline"
          to={{
            search: createSearchResultsPageQueryString(currentPage - 1),
          }}
        >
          Previous
        </Link>
      ) : null}
      {Array.from({ length: totalPages }).map((_item, index) => {
        return (
          <li className="mx-1 my-2" key={index}>
            {currentPage === index + 1 ? (
              <span className="p-2 opacity-8">{index + 1}</span>
            ) : (
              <Link
                className="p-2 underline"
                to={{
                  search: createSearchResultsPageQueryString(index + 1),
                }}
              >
                {index + 1}
              </Link>
            )}
          </li>
        );
      })}
      {currentPage < totalPages ? (
        <Link
          className="p-2 underline"
          to={{
            search: createSearchResultsPageQueryString(currentPage + 1),
          }}
        >
          Next
        </Link>
      ) : null}
    </ul>
  );
};

export default SearchResultsPagination;
