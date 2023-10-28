import { useState, useEffect } from "react";
import { useTranslation, Trans } from "react-i18next";

import Header from "../../components/ui/Header";
import TopBar from "../../components/ui/TopBar";
import Footer from "../../components/ui/Footer";


import SettingsGeneral from "../../partials/settings/SettingsGeneral";


export default function Settings() {
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
      <div>
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <div className="lg:pl-20">
          <TopBar />
          <main className="-mt-16">
            <div className="px-4 sm:px-6">
              {/* Main area */}
             {/*} <CaseTabs setCaseTab={setCaseTab} caseTab={caseTab} />
              <div className="mt-5">
                {caseTab === "overview" ? (
                  <CaseOverview />
                ) : caseTab === "profile" ? (
                  <CaseProfile />
                ) :caseTab === "addressbook" ? (
                  <CaseAddressBook />
                ) : caseTab === "journal" ? (
                  <CaseJournal />
                ) : caseTab === "documents" ? (
                  <CaseDocuments />
                ) : caseTab === "calendar" ? (
                  <CaseCalendar />
                ) : caseTab === "records" ? (
                  <CaseRecords />
                ) : caseTab === "finance" ? (
                  <CaseFinance />
                ) : null} c
              </div>*/}
              <SettingsGeneral/>
            </div>
          </main>
        </div>
{/*}
        <aside className="fixed bottom-0 left-20 top-16 hidden w-96 overflow-y-auto border-r border-gray-200 px-4 py-6 sm:px-6 lg:px-8 xl:block">
          {/* List area */}
          {/*<CaseList caseId={caseId} setCaseId={setCaseId}/> 
        </aside>*/}
      </div>
      <footer className="fixed bottom-0 right-0">
        <Footer />
      </footer>
    </>
  );
}
