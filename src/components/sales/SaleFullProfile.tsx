import parse from "html-react-parser";
import PageTitle from "../elements/PageTitle";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

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
      <p className="font-bold mb-3 text-2xl text-center">{destinationName}</p>

      <p className="font-bold mb-3 text-xl text-center">{price}</p>

      {photos.length > 0 ? (
        <img key={photos[0].url} alt={title} src={photos[0].url} />
      ) : null}

      <section className="prose">{parse(body)}</section>
    </section>
  );
};

export default SaleFullProfile;
