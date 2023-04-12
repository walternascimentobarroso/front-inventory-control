import { useState } from "react";
import Input from "../../components/Input";
import Title from "../../components/Title";
import Button from "../../components/Button";
import Template from "../../components/Template";
import Breadcrumb from "../../components/Breadcrumb";
import Table from "./Table";
import CustomSelect from "../../components/CustomSelect";

export default () => {
  const initData = {
    description: "",
    category: "",
    barcode: "",
    value: "",
    tax: "",
  };
  const [formState, setFormState] = useState(initData);
  const handleChange = (e: any) =>
    setFormState({ ...formState, [e.target.name]: e.target.value });

  const data = [
    {
      description: "Apple MacBook Pro 17'",
      value: "10'",
      quantity: "2'",
      tax: "5'",
      total: "20",
    },
    {
      description: "Apple MacBook Pro 17'",
      value: "120'",
      quantity: "22'",
      tax: "5'",
      total: "230",
    },
    {
      description: "Apple MacBook Pro 17'",
      value: "120'",
      quantity: "22'",
      tax: "5'",
      total: "230",
    },
  ];

  const options = [
    {
      label: "Money",
      value: "1",
    },
    {
      label: "Paypal",
      value: "2",
    },
    {
      label: "Card",
      value: "3",
    },
  ];

  return (
    <Template>
      <Breadcrumb
        links={[
          {
            label: "Home",
            href: "/home",
          },
          {
            label: "Profile",
            href: "",
          },
        ]}
      />

      <Title>Sell</Title>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg custom--bg p-4">
        <div className="flex justify-between">
          <div className="flex-1 justify-between">
            <div className="flex justify-between">
              <div className="px-4">
                <img src="https://via.placeholder.com/300x300" alt="Produto" />
              </div>
              <div className="flex-1 px-4">
                <Input
                  label={"Barcode"}
                  placeholder={"Barcode"}
                  name={"barcode"}
                  value={formState?.barcode || ""}
                  onChange={handleChange}
                />
                <Input
                  label={"Description"}
                  placeholder={"Description"}
                  name={"description"}
                  value={formState?.description || ""}
                  onChange={handleChange}
                />

                <Input
                  label={"Value"}
                  type={"number"}
                  placeholder={"Value"}
                  name={"value"}
                  value={formState?.value || ""}
                  onChange={handleChange}
                />

                <Input
                  label={"Tax"}
                  type={"number"}
                  placeholder={"Tax"}
                  name={"tax"}
                  value={formState?.tax || ""}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="px-4 mt-5">
              <Button customClass="w-full">Add Product</Button>
            </div>
          </div>
          <div className="">
            <Table data={data} />
            <div className="mt-4">
              <CustomSelect
                label={"Form of payment"}
                name={"payment"}
                options={options}
                onSelect={handleChange}
              />
              <div className="flex justify-between mb-2 mr-2">
                <h4 className="text-lg font-bold">Total:</h4>
                <h4 className="text-lg font-bold">R$ 94,45 </h4>
              </div>
              <Button customClass="w-full custom--btn-danger">Finish</Button>
            </div>
          </div>
        </div>
      </div>
    </Template>
  );
};