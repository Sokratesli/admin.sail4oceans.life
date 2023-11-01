import React, { useState, useRef, useEffect, useContext } from "react";
import { useTranslation, Trans } from "react-i18next";
import { Transition } from "@headlessui/react";
import {
  Bars3Icon,
  BellIcon,
  EnvelopeOpenIcon,
  InformationCircleIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/outline";

import { Link } from "react-router-dom";

import { Client, Databases, Query } from "appwrite";
import axios from 'axios';

import PostDate from "../PostDate";

export default function DropdownNotifications({ align }) {
  const { t } = useTranslation();
  const [displayedNotifications, setDisplayedNotifications] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notificationData, setNotificationData] = useState([]);

  const maxNotificationValues = 6;

  const trigger = useRef(null);
  const dropdown = useRef(null);

  

useEffect(() => {

}, []);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!dropdown.current) return;
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  // handle notifications
  useEffect(() => {
    setDisplayedNotifications(
      notificationData?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .slice(0, 4)
        .filter((notification) => notification.readStatus !== true)
    );
  }, [notificationData]);

  //handle show More notifications
  const handleShowMore = (e) => {
    e.stopPropagation();
    if (!dropdownOpen) {
      setDropdownOpen(true);
    }
    const endIndex = displayedNotifications.length + 2;
    const newDisplayedNotifications = notificationData.slice(
      0,
      Math.min(endIndex, 6)
    );
    setDisplayedNotifications(newDisplayedNotifications);
  };

  // Icons
  function getCategoryIcon(category, size = 16) {
    const iconProps = {
      width: size,
      height: size,
    };

    switch (category) {
      case "mail":
        return <EnvelopeOpenIcon {...iconProps} />;
      case "info":
        return <InformationCircleIcon {...iconProps} />;
      case "calendar":
        return <CalendarDaysIcon {...iconProps} />;
      // Weitere Fälle hier...
      default:
        return "❓";
    }
  }

  //delete Notification
  const handleDeleteClick = (id) => {
    deleteNotification(id, notificationData, setNotificationData);
  };


  return (
    <>
      <div className="relative inline-flex">
        <button
          ref={trigger}
          className={`w-8 h-8 flex items-center justify-center transition duration-150 rounded-full ${
            dropdownOpen && "bg-slate-200"
          }`}
          aria-haspopup="true"
          onClick={() => {
            setDropdownOpen(!dropdownOpen);
          }}
          aria-expanded={dropdownOpen}
        >
          <span className="sr-only">{t("notifications")}</span>
          <BellIcon className="h-6 w-6" aria-hidden="true" />
          {displayedNotifications?.some(
            (notification) => notification.status !== true
          ) && (
            <div
              className={`absolute top-0 right-0 w-2.5 h-2.5 bg-rose-500 border-2 border-white rounded-full`}
            ></div>
          )}{" "}
        </button>

        <Transition
          className={`origin-top-right z-10 absolute top-full -mr-48 sm:mr-0 min-w-80 bg-white border border-slate-200 py-1.5 rounded shadow-lg overflow-hidden mt-6 ${
            align === "right" ? "right-0" : "left-0"
          }`}
          show={dropdownOpen}
          enter="transition ease-out duration-200 transform"
          enterStart="opacity-0 -translate-y-2"
          enterEnd="opacity-100 translate-y-0"
          leave="transition ease-out duration-200"
          leaveStart="opacity-100"
          leaveEnd="opacity-0"
        >
          <div
            ref={dropdown}
            onFocus={() => setDropdownOpen(true)}
            onBlur={() => setDropdownOpen(false)}
          >
            <div className="text-xs font-semibold text-slate-400 uppercase pt-1.5 pb-2 px-4">
              {t("notifications")}
            </div>
            <ul>
              {displayedNotifications?.map((notification, index) => (
                <li
                  className="border-b border-slate-200 last:border-0"
                  key={index}
                >
                  <button
                    className="block py-1 px-4 float-right text-slate-500 hover:text-rose-500 focus:outline-none"
                    onClick={() => {
                      handleDeleteClick(notification.id);
                    }}
                    aria-label={t("delete") + ":" + notification.text}
                  >
                    ✖
                  </button>
                  <Link
                    className="block py-2 px-4 hover:bg-slate-50"
                    to="#0"
                    onClick={() => setDropdownOpen(false)}
                  >
                    <span className="block text-sm mb-2">
                      <span className="font-medium text-slate-800 flex items-center">
                        {getCategoryIcon(notification.category)}
                        <span className="ml-2"> {notification.text}</span>
                      </span>{" "}
                      Sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim.
                    </span>
                    <span className="block text-xs font-medium text-slate-400">
                      <PostDate date={notification.createdAt} />
                    </span>
                  </Link>
                </li>
              ))}
              {displayedNotifications?.length === 0 && (
                <li className="border-b border-slate-200 last:border-0">
                  <span className="block text-sm mb-2">
                    <span className="font-medium text-slate-800">
                      {t("noNotifications")}
                    </span>
                  </span>
                </li>
              )}
            </ul>
            {displayedNotifications?.length >= 6 && (
              <Link
                className="text-xs font-semibold text-slate-400 hover:text-ocean-500 pt-1.5 pb-2 px-4"
                to="/notifications"
                onClick={() => setDropdownOpen(false)}
              >
                {t("showAllNotifications")}
              </Link>
            )}
            {notificationData?.length > displayedNotifications?.length &&
            displayedNotifications.length !== 0 &&
            displayedNotifications.length <= 5 ? (
              <button
                className="text-xs font-semibold text-slate-400 hover:text-ocean-500 pt-1.5 pb-2 px-4"
                onClick={handleShowMore}
              >
                {t("showMore")}
              </button>
            ) : null}
          </div>
        </Transition>
      </div>
    </>
  );
}
