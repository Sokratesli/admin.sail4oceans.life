import React, { Fragment } from "react";
import { useTranslation, Trans } from "react-i18next";
import { Link } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";

const tabs = [
  { name: "overview", label: "Overview", current: true },
  { name: "user", label: "User", current: false },
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
                    ? "border-nextcase-300 text-nextcase-300"
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
