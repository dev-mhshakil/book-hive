import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const CategoryRow = ({ category, index }) => {
  //     const handleDelete = async (id) => {
  //     await axios
  //       .delete(`http://localhost:5000/category/${id}`)
  //       .then(function (response) {
  //         if (response?.status == 200) {
  //           toast.success("Recipe Deleted Successfully");
  //         }
  //       });
  //   };
  return (
    <tr>
      <td>{index}</td>
      <td>{category?.name}</td>
      <td className="flex gap-4">
        {/* Add actions like edit or delete buttons here */}
        <Link
          //   to={`/dashboard/edit-book/${category?._id}`}
          className="btn btn-success text-white btn-sm"
        >
          Edit
        </Link>
        <button
          //   onClick={() => handleDelete(category?._id)}
          className="btn btn-error text-white btn-sm btn-danger"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default CategoryRow;
