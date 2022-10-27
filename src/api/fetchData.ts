const fetchData = async (
  query: string,
  variables: Record<string, string | number>
): Promise<JSONObject> => {
  const endpoint = process.env?.REACT_APP_ENDPOINT;
  if (typeof endpoint === "undefined") {
    throw new Error('No "ENDPOINT" in your env');
  }
  const res = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });
  const json = await res.json();
  return json;
};

export default fetchData;
