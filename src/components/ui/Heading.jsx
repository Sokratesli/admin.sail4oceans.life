import { useTranslation, Trans } from "react-i18next";
import { navigation } from "./NavData";
import { useLocation } from "react-router-dom";

export default function Heading() {
  const { t } = useTranslation();
  const location = useLocation();

  console.log(location);
  const currentNavItem = navigation.find(
    (item) => item.href === location.pathname && item.heading
  );

  return (
    <>
      {currentNavItem && (
        <>
          <div className="md:flex md:items-center md:justify-between ml-5 mt-5">
            <div className="min-w-0 flex-1">
              <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                {currentNavItem ? t(currentNavItem.name) : ""}
              </h2>
            </div>
          </div>
        </>
      )}
    </>
  );
}
