import { useState, useEffect } from "react";
import { useTranslation, Trans } from "react-i18next";

import Header from "../../components/ui/Header";
import TopBar from "../../components/ui/TopBar";
import Footer from "../../components/ui/Footer";

import Datepicker from "../../components/Datepicker";
import AnalyticsCard01 from "../../components/analytics/AnalyticsCard01";
import AnalyticsCard02 from "../../components/analytics/AnalyticsCard02";
import AnalyticsCard03 from "../../components/analytics/AnalyticsCard03";
import AnalyticsCard04 from "../../components/analytics/AnalyticsCard04";
import AnalyticsCard05 from "../../components/analytics/AnalyticsCard05";
import AnalyticsCard06 from "../../components/analytics/AnalyticsCard06";
import AnalyticsCard07 from "../../components/analytics/AnalyticsCard07";
import AnalyticsCard08 from "../../components/analytics/AnalyticsCard08";
import AnalyticsCard09 from "../../components/analytics/AnalyticsCard09";
import AnalyticsCard10 from "../../components/analytics/AnalyticsCard10";
import AnalyticsCard11 from "../../components/analytics/AnalyticsCard11";

function Analytics() {
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
            <div>
              {/* Page header */}
              <div>
                {/* Right: Actions */}
                <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                  {/* Datepicker built with flatpickr 
                <Datepicker align="right" />*/}
                </div>
              </div>

              {/* Cards */}
              <div className="grid grid-cols-12 gap-6">
                {/* Line chart (Analytics) */}
                <AnalyticsCard01 />
                {/*  Line chart (Active Users Right Now) */}
                <AnalyticsCard02 />
                {/* Stacked bar chart (Acquisition Channels) */}
                <AnalyticsCard03 />
                {/* Horizontal bar chart (Audience Overview) */}
                <AnalyticsCard04 />
                {/* Report card (Top Channels) */}
                <AnalyticsCard05 />
                {/* Report card (Top Pages) */}
                <AnalyticsCard06 />
                {/* Report card (Top Countries) */}
                <AnalyticsCard07 />
                {/* Doughnut chart (Sessions By Device) */}
                <AnalyticsCard08 />
                {/* Doughnut chart (Visit By Age Category) */}
                <AnalyticsCard09 />
                {/* Polar chart (Sessions By Gender) */}
                <AnalyticsCard10 />
                {/* Table (Top Products) */}
                <AnalyticsCard11 />
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

export default Analytics;
