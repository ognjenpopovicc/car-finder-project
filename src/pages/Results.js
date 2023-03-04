import Ad from "../components/Ad";
import SearchForm from "../components/SearchForm";

import { useQuery } from "../contexts/QueryContext";

const SearchResults = () => {
  const { loadedData } = useQuery();

  return (
    <>
      <SearchForm />
      {loadedData.map((doc) => (
        <Ad key={doc.id} data={doc} />
      ))}
    </>
  );
};

export default SearchResults;
