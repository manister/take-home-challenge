import { Link, useRouteError } from "react-router-dom";
import PageTitle from "../components/elements/PageTitle";
import Container from "../components/layout/Container";

const ErrorPage = () => {
  const error = useRouteError() as Error;
  return (
    <Container>
      <PageTitle>{error.message ?? "There has been an error"}</PageTitle>
      <p className="text-center">
        Back to{" "}
        <Link className="underline" to="/">
          home page
        </Link>
      </p>
    </Container>
  );
};
export default ErrorPage;
