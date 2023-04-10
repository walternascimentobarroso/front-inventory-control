import Table from "./Table";
import { get, post } from "../../services/api";
import Title from "../../components/Title";
import { useEffect, useState } from "react";
import Template from "../../components/Template";
import Breadcrumb from "../../components/Breadcrumb";
import ButtonNew from "./ButtonNew";

export default () => {
  useEffect(() => {
    fetchData();
  }, []);

  const [data, setData] = useState([{}]);

  const [rowToEdit, setRowToEdit] = useState({});

  const handleEditRow = (idx: any) => {
    let row: any = data.find((row: any) => row.id === idx);
    setRowToEdit(row);
  };

  const handleDeleteRow = (targetIndex: any) =>
    setData(data.filter((row: any) => row.id !== targetIndex));

  const handleSubmit = (newRow: any) => {
    if ("barcode" in rowToEdit) {
      setData(
        data.map((row: any) => {
          if (row.id !== newRow.id) return row;

          return newRow;
        })
      );
    } else {
      setData([...data, newRow]);
      create(newRow);
    }
  };

  // CRUD
  const create = async (newRow: any) => {
    try {
      await post(`http://localhost/product`, newRow);
      console.log("Item criado com sucesso!");
    } catch (error) {
      console.error(error);
    }
  };

  const fetchData = async () => {
    try {
      const response = await get(`http://localhost/product`);
      setData(response);
    } catch (error) {
      console.error(error);
    }
  };

  const update = () => {};
  const remove = () => {};

  return (
    <Template>
      <Breadcrumb
        links={[
          {
            label: "Home",
            href: "/home",
          },
          {
            label: "Product",
            href: "",
          },
        ]}
      />

      <Title>Users</Title>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <div className="flex justify-between bg-white p-4 border-b dark:bg-gray-800 dark:border-gray-700 rounded-t-lg">
            <label htmlFor="table-search" className="sr-only">
              Search
            </label>
            <div className="relative mt-1">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="table-search"
                className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search for items"
              />
            </div>

            <ButtonNew
              onActionSubmit={handleSubmit}
              cleanEditData={() => setRowToEdit({})}
            />
          </div>
          <Table
            data={data}
            deleteRow={handleDeleteRow}
            onActionSubmit={handleSubmit}
            editRow={handleEditRow}
            defaultRowValue={rowToEdit}
          />
        </div>
      </div>
    </Template>
  );
};
