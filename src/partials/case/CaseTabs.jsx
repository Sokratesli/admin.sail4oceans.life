import React, { Fragment } from "react";
import { useTranslation, Trans } from "react-i18next";
import { Link } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";

const tabs = [
  { name: "overview", label: "Overview", current: true },
  { name: "profile", label: "Profile", current: false },
  { name: "addressbook", label: "Addressbook", current: false },
  { name: "journal", label: "Journal", current: false },
  { name: "calendar", label: "Calendar", current: false },
  { name: "documents", label: "Documents", current: false },
  { name: "records", label: "Records", current: false },
  { name: "finance", label: "Finance", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function CaseTabs({ caseTab, setCaseTab }) {
  const { t } = useTranslation();

  console.log(caseTab);

  const updatedTabs = tabs.map((tab) => ({
    ...tab,
    current: tab.name === caseTab ? true : false,
  }));

  return (
    <div className="relative border-b border-gray-200 pb-5 sm:pb-0">
      <div className="md:flex md:items-center md:justify-between">
        <h1 className="text-2xl font-semibold leading-4 text-gray-900 mt-2 mb-5">
          Pedro Gonzales de la Joya Cardinal
        </h1>
        <div className="mt-4 flex items-center justify-between sm:ml-6 sm:mt-0 sm:flex-shrink-0 sm:justify-start">
          <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
            active
          </span>
          <Menu as="div" className="relative ml-3 inline-block text-left">
            <div>
              <Menu.Button className="-my-2 flex items-center rounded-full bg-white p-2 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-ocean-300">
                <span className="sr-only">Open options</span>
                <EllipsisVerticalIcon className="h-5 w-5" aria-hidden="true" />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "flex justify-between px-4 py-2 text-sm"
                        )}
                      >
                        <span>Edit</span>
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "flex justify-between px-4 py-2 text-sm"
                        )}
                      >
                        <span>Duplicate</span>
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        type="button"
                        className={classNames(
                          active ? "bg-gray-100 text-red-600" : "text-red-600",
                          "flex w-full justify-between px-4 py-2 text-sm"
                        )}
                      >
                        <span>Archive</span>
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
      <div className="mt-4">
        <div className="sm:hidden">
          <label htmlFor="current-tab" className="sr-only">
            Select a tab
          </label>
          <select
            id="current-tab"
            name="current-tab"
            className="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
            defaultValue={tabs.find((tab) => tab.current).label}
          >
            {tabs.map((tab) => (
              <option key={tab.name}>{tab.label}</option>
            ))}
          </select>
        </div>
        <div className="hidden sm:block">
          <nav className="-mb-px flex space-x-8">
            {updatedTabs.map((tab) => (
              <button
                key={tab.name}
                className={classNames(
                  tab.current
                    ? "border-ocean-300 text-ocean-300"
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                  "whitespace-nowrap border-b-2 px-1 pb-4 text-sm font-medium"
                )}
                aria-current={tab.current ? "page" : undefined}
                onClick={() => setCaseTab(tab.name)}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
