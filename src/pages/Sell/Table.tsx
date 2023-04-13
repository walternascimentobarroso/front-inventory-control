import Button from "../../components/Button";
import ButtonDelete from "./ButtonDelete";

const Table = ({ data, deleteRow }: any) => {
  const tHeads = ["Description", "Value", "QTD", "Tax", "Total", "Action"];
  return (
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
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
            <td className="px-6 py-4">{record.value} </td>
            <td className="px-6 py-4">{record.quantity}</td>
            <td className="px-6 py-4">{record.tax}</td>
            <td className="px-6 py-4">
              {(
                record.value *
                record.quantity *
                (1 + record.tax / 100)
              ).toFixed(2)}
            </td>
            <td className="px-6 py-4">
              <ButtonDelete
                id={index}
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

export default Table;
