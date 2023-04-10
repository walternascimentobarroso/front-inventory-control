const Table = () => {
  const tHeads = ["Description", "Color", "Category", "Price", "Actions"];

  const data = [
    {
      description: "Apple MacBook Pro 17'",
      color: "Silver",
      category: "Laptop",
      price: "$2999",
    },
    {
      description: "Apple MacBook Pro 17'",
      color: "Silver",
      category: "Laptop",
      price: "$2999",
    },
    {
      description: "Apple MacBook Pro 17'",
      color: "Silver",
      category: "Laptop",
      price: "$2999",
    },
  ];
  return (
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
        List of Users
      </caption>
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-500 dark:text-gray-400">
        <tr>
          {tHeads.map((head: any, index: any) => (
            <th scope="col" className="px-6 py-3" key={index}>
              {head}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((record: any, index: any) => (
          <tr
            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            key={index}
          >
            <td className="px-6 py-4">{record.description}</td>
            <td className="px-6 py-4">{record.color} </td>
            <td className="px-6 py-4">{record.category}</td>
            <td className="px-6 py-4">{record.price}</td>
            <td className="px-6 py-4">
              <a
                href="#"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Edit
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
