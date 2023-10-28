import { useState, useEffect } from "react";
import { useTranslation, Trans } from "react-i18next";

import Header from "../../components/ui/Header";
import TopBar from "../../components/ui/TopBar";
import Footer from "../../components/ui/Footer";

import CaseTabs from "../../partials/case/CaseTabs";
import CaseList from "../../partials/case/CaseList";

import CaseOverview from "../../partials/case/CaseOverview";
import CaseProfile from "../../partials/case/CaseProfile";
import CaseAddressBook from "../../partials/case/CaseAddressBook";
import CaseJournal from "../../partials/case/CaseJournal";
import CaseCalendar from "../../partials/case/CaseCalendar";
import CaseDocuments from "../../partials/case/CaseDocuments";
import CaseRecords from "../../partials/case/CaseRecords";
import CaseFinance from "../../partials/case/CaseFinance";


export default function PageNotFound() {
  const { t } = useTranslation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [caseId, setCaseId] = useState(null);
  const [caseTab, setCaseTab] = useState('overview');

  useEffect(() => {
    if (caseId !== null) {
      setCaseTab('overview');
    }
  }, [caseId]);

  console.log(caseId)

  return (
    <>
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-nextcase-300">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
          <p className="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t find the page you’re looking for.</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/"
              className="rounded-md bg-nextcase-300 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-nextcase-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go back home
            </a>
            <a href="#" className="text-sm font-semibold text-gray-900">
              Contact support <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
