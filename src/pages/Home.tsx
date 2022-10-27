import SearchForm from "../components/search/SearchForm";
import { useNavigate } from "react-router-dom";
import PageTitle from "../components/elements/PageTitle";
import Container from "../components/layout/Container";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <PageTitle>HOME</PageTitle>
      <SearchForm
        searchTerm=""
        onSubmit={(searchTerm) => {
          const params = new URLSearchParams();
          params.set("query", searchTerm);
          navigate({
            pathname: "/search",
            search: params.toString(),
          });
        }}
      />
    </Container>
  );
};
export default Home;
