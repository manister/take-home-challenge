import { Link } from "react-router-dom";
import SearchResultsPagination from "./SearchResultsPagination";

interface Props {
  saleSearch: ISaleSearch;
  currentPage: number;
  itemsPerPage: number;
}

const SearchResultsPages = (props: Props) => {
  const { saleSearch, currentPage, itemsPerPage } = props;
  const totalPages = Math.ceil(saleSearch.resultCount / itemsPerPage);

  return (
    <>
      <ul className="flex flex-wrap">
        {saleSearch.sales.map((sale) => (
          <li className="mb-3 md:w-1/2 p-2" key={sale.id}>
            <Link className="hover:underline" to={`/sales/${sale.id}`}>
              {sale.photos?.[0]?.url ? (
                <img src={sale.photos[0].url} alt={sale.editorial.title} />
              ) : null}
              <h3 className="text-lg">{sale.editorial.title}</h3>
              <p>{sale.editorial.destinationName}</p>
            </Link>
          </li>
        ))}
      </ul>

      {totalPages > 1 ? (
        <SearchResultsPagination
          currentPage={currentPage}
          totalPages={totalPages}
        />
      ) : null}
    </>
  );
};

export default SearchResultsPages;
