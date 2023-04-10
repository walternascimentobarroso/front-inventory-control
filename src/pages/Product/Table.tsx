import ButtonEdit from "./ButtonEdit";
import ButtonDelete from "./ButtonDelete";

export default ({
  data,
  deleteRow,
  editRow,
  defaultRowValue,
  onActionSubmit,
}: any) => {
  const tHeads = ["Barcode", "Description", "Value", "Actions"];
  return (
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
        List of product
      </caption>
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-500 dark:text-gray-400">
        <tr>
          {tHeads.map((head: any, index: any) => (
            <th className="px-6 py-3" key={index}>
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
            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {record.barcode}
            </td>
            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {record.description}
            </td>
            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {record.value}
            </td>
            <td className="px-6 py-4">
              <ButtonEdit
                id={record.id}
                onActionSubmit={onActionSubmit}
                editRow={editRow}
                defaultValue={defaultRowValue}
              />

              <ButtonDelete
                id={record.id}
                description={record.description}
                deleteAction={deleteRow}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
