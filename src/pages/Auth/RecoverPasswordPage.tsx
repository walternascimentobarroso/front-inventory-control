import { useState } from "react";
import ALink from "../../components/ALink";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Title from "../../components/Title";

export default () => {
  const [email, setEmail] = useState("");
  return (
    <div className="container mx-auto">
      <div className="flex justify-center px-6 my-12">
        <div className="w-full xl:w-3/4 lg:w-11/12 flex">
          <div
            className="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
            style={{
              backgroundImage:
                "url('https://source.unsplash.com/Mv9hjnEUHR4/600x800')",
            }}
          ></div>
          <div className="w-full lg:w-7/12 bg-white dark:bg-gray-800 p-5 rounded-lg lg:rounded-l-none">
            <Title customClass="text-2xl text-center">Recover Password</Title>

            <form className="px-8 pt-6 pb-8 mb-4">
              <Input
                label={"Email"}
                type={"email"}
                value={email}
                placeholder={"Email"}
                onChange={(e: any) => setEmail(e.target.value)}
              />

              <Button customClass="w-full mb-6">Recover Password</Button>

              <div className="flex justify-between">
                <ALink route="/login">Already have an account? Login!</ALink>
                <ALink route="/register">Don't have an account? Sign up</ALink>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
