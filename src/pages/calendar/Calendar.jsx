import { useState, useEffect } from "react";
import { useTranslation, Trans } from "react-i18next";

import Header from "../../components/ui/Header";
import TopBar from "../../components/ui/TopBar";
import Footer from "../../components/ui/Footer";

import CalendarMonthView from "../../components/calendar/CalendarMonthView";


export default function Calendar() {
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
            <CalendarMonthView/>
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
