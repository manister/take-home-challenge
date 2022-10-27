export const searchQuery = `
query GetSearchResults($searchTerm: String! $limit: Int!, $offset: Int!) {
  saleSearch(query: $searchTerm, travelTypes: "HOTEL_ONLY") {
    resultCount
    sales(limit: $limit, offset: $offset) {
      id
      editorial {
        title
        destinationName
      }
      photos {
        url
      }
    }
  }
}
`;

export const salesQuery = `
query GetSalesResutls($id: String!) {
  sale(saleId: $id) {
    editorial {
      title
      destinationName
      hotelDetails
    }
    prices {
      leadRate {
      forDisplay
    }
    }
  photos { url }
  }
}`;
