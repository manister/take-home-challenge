import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import fetchData from "../api/fetchData";
import { salesQuery } from "../api/gql";

type IUseSale = () => {
  sale: ISaleComplete | null;
  loading: boolean;
  error: boolean;
};

const useSale: IUseSale = () => {
  const { id } = useParams();

  const response = useQuery(["sales", id], () =>
    fetchData(salesQuery, {
      id: id ?? "",
    })
  );

  const { isError, isLoading } = response;

  let sale: ISaleComplete | null = null;

  if (!isLoading) {
    const data = response?.data?.data as unknown as { sale: ISaleComplete };
    sale = data.sale;
  }

  return {
    sale,
    loading: isLoading,
    error: isError,
  };
};

export default useSale;
