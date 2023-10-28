import { useTranslation, Trans } from "react-i18next";
import { useLocation } from "react-router-dom";

import Logo from "../../components/Logo";

import { navigation } from "./NavData";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function Nav() {
  const { t } = useTranslation();
  const location = useLocation();

  return (
    <>
      <div className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:z-50 lg:block lg:w-20 lg:overflow-y-auto lg:bg-nextcase-400 lg:pb-4">
        <div className="flex h-16 shrink-0 items-center justify-center p-2">
          <Logo color="white" />
        </div>
        <nav className="mt-8">
          <ul role="list" className="flex flex-col items-center space-y-1">
            {navigation.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className={classNames(
                    location.pathname === item.href
                      ? "bg-nextcase-300 text-white"
                      : "text-gray-400 hover:text-white hover:bg-nextcase-300",
                    "group flex gap-x-3 rounded-md p-3 text-sm leading-6 font-semibold"
                  )}
                >
                  <item.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
                  <span className="sr-only">{t(item.name)}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}

export function MobileNav() {
  const { t } = useTranslation();
  const location = useLocation();

  return (
    <>
      <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-nextcase-400 px-6 pb-2 ring-1 ring-white/10">
        <div className="flex h-16 shrink-0 items-center p-2 pt-4">
          <Logo color="white" />
        </div>
        <nav className="flex flex-1 flex-col">
          <ul role="list" className="-mx-2 flex-1 space-y-1">
            {navigation.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className={classNames(
                    location.pathname === item.href
                      ? "bg-nextcase-300 text-white"
                      : "text-gray-400 hover:text-white hover:bg-nextcase-300",
                    "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                  )}
                >
                  <item.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
                  {t(item.name)}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
