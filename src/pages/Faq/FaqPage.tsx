import Template from "../../components/Template";
import Breadcrumb from "../../components/Breadcrumb";

export default () => {
  return (
    <Template>
      <Breadcrumb
        links={[
          {
            label: "Home",
            href: "/home",
          },
          {
            label: "Faq",
            href: "",
          },
        ]}
      />

      <div className="bg-white text-gray-700 dark:bg-gray-800 dark:border-gray-700 shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
        <div className="flex flex-col">
          <h1 className="text-gray-900 dark:text-white text-xl font-bold mb-2">
            Frequenty asked questions
          </h1>
        </div>
        <div className="grid divide-y divide-neutral-200 mx-auto mt-8">
          <div className="py-5">
            <details className="group">
              <summary className="dark:text-white flex justify-between items-center font-medium cursor-pointer list-none">
                <span>What is a SAAS platform?</span>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shapeRendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="text-neutral-600 dark:text-gray-500 mt-3 group-open:animate-fadeIn">
                SAAS platform is a cloud-based software service that allows
                users to access and use a variety of tools and functionality.
              </p>
            </details>
          </div>
          <div className="py-5">
            <details className="group">
              <summary className="dark:text-white flex justify-between items-center font-medium cursor-pointer list-none">
                <span> How does billing work?</span>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shapeRendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="text-neutral-600 dark:text-gray-500 mt-3 group-open:animate-fadeIn">
                We offers a variety of billing options, including monthly and
                annual subscription plans, as well as pay-as-you-go pricing for
                certain services. Payment is typically made through a credit
                card or other secure online payment method.
              </p>
            </details>
          </div>
          <div className="py-5">
            <details className="group">
              <summary className="dark:text-white flex justify-between items-center font-medium cursor-pointer list-none">
                <span> Can I get a refund for my subscription?</span>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shapeRendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="text-neutral-600 dark:text-gray-500 mt-3 group-open:animate-fadeIn">
                We offers a 30-day money-back guarantee for most of its
                subscription plans. If you are not satisfied with your
                subscription within the first 30 days, you can request a full
                refund. Refunds for subscriptions that have been active for
                longer than 30 days may be considered on a case-by-case basis.
              </p>
            </details>
          </div>
          <div className="py-5">
            <details className="group">
              <summary className="dark:text-white flex justify-between items-center font-medium cursor-pointer list-none">
                <span> How do I cancel my subscription?</span>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shapeRendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="text-neutral-600 dark:text-gray-500 mt-3 group-open:animate-fadeIn">
                To cancel your We subscription, you can log in to your account
                and navigate to the subscription management page. From there,
                you should be able to cancel your subscription and stop future
                billing.
              </p>
            </details>
          </div>
          <div className="py-5">
            <details className="group">
              <summary className="dark:text-white flex justify-between items-center font-medium cursor-pointer list-none">
                <span> Can I try this platform for free?</span>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shapeRendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="text-neutral-600 dark:text-gray-500 mt-3 group-open:animate-fadeIn">
                We offers a free trial of its platform for a limited time.
                During the trial period, you will have access to a limited set
                of features and functionality, but you will not be charged.
              </p>
            </details>
          </div>
          <div className="py-5">
            <details className="group">
              <summary className="dark:text-white flex justify-between items-center font-medium cursor-pointer list-none">
                <span> How do I access documentation?</span>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shapeRendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="text-neutral-600 dark:text-gray-500 mt-3 group-open:animate-fadeIn">
                Documentation is available on the company's website and can be
                accessed by logging in to your account. The documentation
                provides detailed information on how to use the , as well as
                code examples and other resources.
              </p>
            </details>
          </div>
        </div>
      </div>
    </Template>
  );
};
