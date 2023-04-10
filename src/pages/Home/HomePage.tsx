import { useState } from "react";
import { MdGroup, MdGroupAdd, MdGroupOff, MdGroupRemove } from "react-icons/md";
import Modal from "../../components/Modal";
import Template from "../../components/Template";
import Breadcrumb from "../../components/Breadcrumb";
import StatisticCard from "../../components/StatisticCard";
import Title from "../../components/Title";

export default () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModalClose = () => setIsModalOpen(!isModalOpen);

  return (
    <Template>
      <Breadcrumb
        links={[
          {
            label: "Home",
            href: "",
          },
        ]}
      />

      <Title>Dashboard</Title>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 pb-4 gap-4">
        <StatisticCard
          background={"bg-blue-500 dark:bg-blue-800"}
          icon={
            <MdGroup className="w-7 h-7 text-blue-600 dark:text-blue-900" />
          }
          value={"4,331"}
          description={"Total Users"}
        />

        <StatisticCard
          background={"bg-red-500 dark:bg-red-800"}
          icon={
            <MdGroupRemove className="w-7 h-7 text-red-600 dark:text-red-900" />
          }
          value={"1,678"}
          description={"Removed Users"}
        />

        <StatisticCard
          background={"bg-green-500 dark:bg-green-800"}
          icon={
            <MdGroupAdd className="w-7 h-7 text-green-600 dark:text-green-900" />
          }
          value={"2,987"}
          description={"New Users"}
        />

        <StatisticCard
          background={"bg-orange-500 dark:bg-orange-800"}
          icon={
            <MdGroupOff className="w-7 h-7 text-orange-600 dark:text-orange-900" />
          }
          value={"1,173"}
          description={"Inactive Users"}
        />
      </div>

      <div className="bg-white text-gray-700 dark:bg-gray-800 dark:border-gray-700 shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h3 className="text-gray-900 dark:text-gray-200 text-xl font-bold mb-2">
              Blank page
            </h3>
            <span className="text-base font-normal text-gray-500">
              This is a blank page!!
              <button onClick={toggleModalClose}>Open</button>
            </span>

            <Modal
              isOpen={isModalOpen}
              onClose={toggleModalClose}
              title="Exemplo de Modal"
            >
              <span>lol</span>
            </Modal>
          </div>
        </div>
      </div>
    </Template>
  );
};
