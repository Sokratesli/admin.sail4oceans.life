import { useState, useEffect } from "react";
import { useTranslation, Trans } from "react-i18next";

import Header from "../../components/ui/Header";
import TopBar from "../../components/ui/TopBar";
import Footer from "../../components/ui/Footer";

import AddressBookList from "../../components/AddressBookList";


export default function Documents() {
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
            <AddressBookList maxItems={15} />
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
