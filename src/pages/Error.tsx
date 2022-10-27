import { Link, useRouteError } from "react-router-dom";
import Container from "../components/layout/Container";

const ErrorPage = () => {
  const error = useRouteError() as Error;
  return (
    <Container>
      <Link to="/">Home page</Link>
      <h1>{error.message ?? "There has been an error"}</h1>
    </Container>
  );
};
export default ErrorPage;
