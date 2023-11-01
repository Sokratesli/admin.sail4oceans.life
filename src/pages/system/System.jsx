import { useState, useEffect } from "react";
import { useTranslation, Trans } from "react-i18next";

import Header from "../../components/ui/Header";
import TopBar from "../../components/ui/TopBar";
import Footer from "../../components/ui/Footer";

import AdminTabs from "../../partials/system/SystemTabs";

import CaseOverview from "../../partials/groups/GroupsOverview";
import AdminUserList from "../../partials/system/SystemUsersList";

export default function System() {
  const { t } = useTranslation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [caseId, setCaseId] = useState(null);
  const [caseTab, setCaseTab] = useState("overview");

  useEffect(() => {
    if (caseId !== null) {
      setCaseTab("overview");
    }
  }, [caseId]);

  console.log(caseId);

  return (
    <>
      <div>
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <div className="lg:pl-20">
          <TopBar />
          <main className="p-5">
            <div className="col-start-1 row-start-1 col-span-3">
              <AdminTabs setCaseTab={setCaseTab} caseTab={caseTab} />
              <div className="mt-5">
                {caseTab === "overview" ? (
                  <CaseOverview />
                ) : caseTab === "user" ? (
                  <AdminUserList />
                ) : null}
              </div>
            </div>
          </main>
        </div>
      </div>
      <footer className="fixed bottom-0 right-0">
        <Footer />
      </footer>
    </>
  );
}
