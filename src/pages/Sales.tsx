import { useNavigate } from "react-router-dom";
import Container from "../components/layout/Container";
import SaleResult from "../components/sales/SaleResult";

import useSale from "../hooks/useSale";

const Sales = () => {
  const { sale, loading, error } = useSale();

  const navigate = useNavigate();

  return (
    <Container>
      <div className="text-center">
        <button className="underline " onClick={() => navigate(-1)}>
          Back to results
        </button>
      </div>
      <SaleResult loading={loading} error={error} sale={sale} />
    </Container>
  );
};

export default Sales;
