type JSONValue = string | number | boolean | JSONObject;

interface JSONObject {
  [x: string]: JSONValue;
}

interface ISale {
  id: string;
  editorial: {
    destinationName: string;
    title: string;
  };
  photos: {
    url: string;
  }[];
}

interface ISaleSearch {
  sales: ISale[];
  resultCount: number;
}

interface ISaleComplete {
  editorial: {
    destinationName: string;
    hotelDetails: string;
    title: string;
  };
  photos: { url: string }[];
  prices: {
    leadRate: {
      forDisplay: string;
    };
  };
}
