import { useEffect, useState } from "react";
import Alert from "../../components/Alert";
import Input from "../../components/Input";
import Button from "../../components/Button";
import CustomSelect from "../../components/CustomSelect";

export default ({ onActionSubmit, defaultValue, closeModal }: any) => {
  const [formState, setFormState] = useState({
    description: "",
    category: "",
    barcode: "",
    value: "",
    tax: "",
  });

  useEffect(
    () =>
      setFormState(
        defaultValue || {
          description: "",
          category: "",
          barcode: "",
          value: "",
          tax: "",
        }
      ),
    [defaultValue]
  );

  const [errors, setErrors] = useState("");

  const options = [
    { value: "option1", label: "Opção 1" },
    { value: "option2", label: "Opção 2" },
    { value: "option3", label: "Opção 3" },
  ];

  const handleSelect = (value: string) => {
    console.log("Opção selecionada:", value);
    // Faça algo com o valor selecionado, como atualizar o estado do componente pai
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
          onSelect={handleSelect}
        />

        <Input
          label={"category"}
          type={"number"}
          placeholder={"category"}
          name={"category"}
          value={formState?.category || ""}
          onChange={handleChange}
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
