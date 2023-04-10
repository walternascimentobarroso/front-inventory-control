import { useRef } from "react";

import Header from "../Header";
import AsideMenu from "../AsideMenu";
import Footer from "../Footer";
import TopButton from "../TopButton";

const Template = ({ children }: any) => {
  const contentRef: any = useRef<HTMLDivElement>(null);
  return (
    <>
      <Header />
      <div className="flex overflow-hidden bg-white dark:bg-gray-700 pt-16">
        <AsideMenu />
        <div
          className="bg-gray-900 opacity-50 hidden fixed inset-0 z-10"
          id="sidebarBackdrop"
        ></div>
        <div
          className="w-full bg-gray-50 dark:bg-gray-700 relative overflow-y-auto lg:ml-64
          flex flex-col h-[calc(100vh-74px)]"
          ref={contentRef}
        >
          <main className="flex-grow">
            <div className="pt-6 px-4">
              <div className="w-full grid grid-cols-1">{children}</div>
              <TopButton passRef={contentRef} />
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Template;
