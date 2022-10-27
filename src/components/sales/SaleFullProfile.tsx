import parse from "html-react-parser";
import PageTitle from "../elements/PageTitle";

interface Props {
  title: string;
  destinationName: string;
  body: string;
  price: string;
  photos: { url: string }[];
}

const SaleFullProfile = (props: Props) => {
  const { title, destinationName, body, price, photos } = props;
  return (
    <section className="max-w-prose">
      <PageTitle>{title}</PageTitle>

      <p className="font-bold my-3 text-xl text-center">{destinationName}</p>

      <p className="font-bold mb-3 text-lg text-center">{price}</p>

      {photos.length > 0 ? (
        <img key={photos[0].url} alt={title} src={photos[0].url} />
      ) : null}

      <section className="prose">{parse(body)}</section>
    </section>
  );
};

export default SaleFullProfile;
