import SaleFullProfile from "./SaleFullProfile";

interface Props {
  sale: ISaleComplete | null;
  error: boolean;
  loading: boolean;
}

const SaleResult = (props: Props) => {
  const { sale, error, loading } = props;
  if (error) {
    throw new Error("Something went wrong.");
  }
  if (loading) {
    return <>Loading...</>;
  }
  if (sale) {
    return (
      <>
        <SaleFullProfile
          title={sale.editorial.title}
          destinationName={sale.editorial.destination}
          body={sale.editorial.hotelDetails}
          price={sale.prices.leadRate.forDisplay}
          photos={sale.photos}
        />
      </>
    );
  }
  throw new Error("Somthing went wrong.");
};

export default SaleResult;
