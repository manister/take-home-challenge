import { Link, useNavigate, useRouteError } from "react-router-dom";
import Container from "../components/layout/Container";

const ErrorPage = () => {
  const error = useRouteError() as Error;
  const navigate = useNavigate();
  return (
    <Container>
      <Link to="/">Home page</Link>
      <button type="button" onClick={() => navigate(-1)}>
        Back
      </button>
      <h1>{error.message}</h1>
    </Container>
  );
};
export default ErrorPage;
