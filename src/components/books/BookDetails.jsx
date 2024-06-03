import { useParams } from "react-router-dom";

const BookDetails = () => {
  const bookDetails = useParams();
  console.log(bookDetails);
  return (
    <div>
      <h1>{bookDetails.name}</h1>
    </div>
  );
};

export default BookDetails;
