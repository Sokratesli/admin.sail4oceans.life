import React from "react";
import { useTranslation, Trans } from "react-i18next";

import PersonalInformation from "../../components/PersonalInformation";
import AddressBookCardList from "../../components/AddressBookCardList";
import JournalViewer from "../../components/JournalViewer";
import PaymentStatus from "../../components/PaymentStatus";


export default function CaseOverview() {
  const { t } = useTranslation();
  return (
    <>
      <div className="grid grid-cols-3 grid-rows-3 gap-10">
        <div className="col-span-2 row-span-1">
          <PersonalInformation />
        </div>
        <div className="col-span-2 row-start-2 border-t-2 border-slate-100 pt-5">
        <h2 className="text-md font-bold mb-5">Journal</h2>
          <JournalViewer />
        </div>
        <div className="col-start-3 row-start-2">
          <PaymentStatus />
        </div>
        <div className="col-start-3 row-span-1 pl-5 bg-slate-100 p-5">
          <h2 className="text-md font-bold mb-5">Addressbook</h2>
          <AddressBookCardList />
        </div>
      </div>
    </>
  );
}
