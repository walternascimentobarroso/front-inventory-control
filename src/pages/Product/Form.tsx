import { useEffect, useState } from "react";

import Alert from "../../components/Alert";
import Input from "../../components/Input";
import Button from "../../components/Button";
import CustomSelect from "../../components/CustomSelect";

import { get } from "../../services/api";

export default ({ onActionSubmit, defaultValue, closeModal }: any) => {
  const initData = {
    description: "",
    category: "",
    barcode: "",
    value: "",
    tax: "",
  };
  const [formState, setFormState] = useState(initData);
  const [errors, setErrors] = useState("");
  const [options, setOptions] = useState([]);

  useEffect(() => setFormState(defaultValue || initData), [defaultValue]);

  useEffect(() => {
    loadOptions();
  }, []);

  const loadOptions = async () => {
    try {
      const response = await get(`category`);
      setOptions(
        response.map((item: any) => {
          return {
            value: item.id,
            label: item.description,
          };
        })
      );
    } catch (error) {
      console.error(error);
    }
  };

  const validateForm = () => {
    setErrors("");
    let errorFields: any = [];
    for (const [key, value] of Object.entries(formState)) {
      if (!value) {
        errorFields.push(key);
      }
    }
    if (errorFields.length) {
      setErrors(errorFields.join(", "));
      return false;
    }
    return true;
  };

  const handleChange = (e: any) =>
    setFormState({ ...formState, [e.target.name]: e.target.value });

  const handleSubmit = (e: any) => {
    if (!validateForm()) return;
    onActionSubmit(formState);
    closeModal();
  };

  return (
    <>
      {errors && (
        <Alert
          type={"Error"}
          message={`Please include: ${errors}`}
          onClick={() => setErrors("")}
        />
      )}

      <form className="p-1 bg-white dark:bg-gray-800">
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

        <CustomSelect
          label={"Category"}
          name={"category"}
          options={options}
          defaultValue={defaultValue?.category}
          onSelect={handleChange}
        />

        <Button customClass="w-full" onClick={handleSubmit}>
          Save
        </Button>

        <Button
          customClass="mt-4 custom--btn-danger w-full"
          onClick={() => closeModal()}
        >
          Close
        </Button>
      </form>
    </>
  );
};
