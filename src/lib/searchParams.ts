export const amendSearchParams = (
  previousParams: URLSearchParams,
  key: string,
  value: string
): URLSearchParams => {
  const params = new URLSearchParams(previousParams);
  params.set(key, value);
  return params;
};
