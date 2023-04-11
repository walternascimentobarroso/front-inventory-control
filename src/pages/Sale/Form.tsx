import { useEffect, useState } from "react";

import Alert from "../../components/Alert";
import Input from "../../components/Input";
import Button from "../../components/Button";

export default ({ onActionSubmit, defaultValue, closeModal }: any) => {
  const initData = {
    items: "",
    total: "",
  };
  const [formState, setFormState] = useState(initData);
  const [errors, setErrors] = useState("");

  useEffect(() => setFormState(defaultValue || initData), [defaultValue]);

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
          label={"items"}
          placeholder={"items"}
          name={"items"}
          value={formState?.items || ""}
          onChange={handleChange}
        />

        <Input
          label={"Total"}
          placeholder={"Total"}
          type={"number"}
          name={"total"}
          value={formState?.total || ""}
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
