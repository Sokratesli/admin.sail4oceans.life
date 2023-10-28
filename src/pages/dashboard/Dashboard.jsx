import { useState, useEffect } from "react";
import { useTranslation, Trans } from "react-i18next";

import Header from "../../components/ui/Header";
import TopBar from "../../components/ui/TopBar";
import Footer from "../../components/ui/Footer";

import AnalyticsCards from "../../components/analytics/AnalyticsCards";
import AddressBookList from "../../components/AddressBookList";
import CalendarSmallWithMeeting from "../../components/calendar/CalendarSmallWithMeeting";


export default function Dashboard() {
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
              <div className="mb-10">
                <AnalyticsCards />
              </div>
              <div  className="mb-10">
                <AddressBookList maxItems={5} />
              </div>
              <div className="pb-10">
                <CalendarSmallWithMeeting  maxItems={4} />
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
