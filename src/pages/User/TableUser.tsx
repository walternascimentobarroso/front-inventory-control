import EditUser from "./EditUser";
import DeleteUser from "./DeleteUser";

export default ({
  data,
  deleteRow,
  editRow,
  defaultRowValue,
  onActionSubmit,
}: any) => {
  const tHeads = ["User", "Role", "Status", "Actions"];
  return (
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
        List of Users
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
              <div className="flex items-center gap-x-2">
                <img
                  className="object-cover w-8 h-8 rounded-full"
                  src={record.photo}
                  alt="Profile"
                />
                <div>
                  <h2 className="text-sm font-medium text-gray-800 dark:text-white ">
                    {record.name}
                  </h2>
                  <p className="text-xs font-normal text-gray-600 dark:text-gray-400">
                    {record.email}
                  </p>
                </div>
              </div>
            </td>
            <td className="px-6 py-4">{record.role} </td>
            <td className="px-6 py-4">{record.status}</td>
            <td className="px-6 py-4">
              <EditUser
                id={record.id}
                onActionSubmit={onActionSubmit}
                editRow={editRow}
                defaultValue={defaultRowValue}
              />

              <DeleteUser
                id={record.id}
                description={record.name}
                deleteAction={deleteRow}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
