import { useLayoutEffect, useRef, useState } from "react";

const addresses = [
  {
    id: 1,
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  {
    id: 2,
    name: "John Doe",
    title: "Back-end Developer",
    email: "john.doe@example.com",
    role: "Member",
  },
  {
    id: 3,
    name: "Jane Smith",
    title: "UI/UX Designer",
    email: "jane.smith@example.com",
    role: "Member",
  },
  {
    id: 4,
    name: "Michael Johnson",
    title: "Software Engineer",
    email: "michael.johnson@example.com",
    role: "Member",
  },
  {
    id: 5,
    name: "Emily Brown",
    title: "Project Manager",
    email: "emily.brown@example.com",
    role: "Member",
  },
  {
    id: 6,
    name: "David Clark",
    title: "Database Administrator",
    email: "david.clark@example.com",
    role: "Member",
  },
  {
    id: 7,
    name: "Sarah White",
    title: "QA Tester",
    email: "sarah.white@example.com",
    role: "Member",
  },
  {
    id: 8,
    name: "Robert Wilson",
    title: "System Administrator",
    email: "robert.wilson@example.com",
    role: "Member",
  },
  {
    id: 9,
    name: "Olivia Garcia",
    title: "Graphic Designer",
    email: "olivia.garcia@example.com",
    role: "Member",
  },
  {
    id: 10,
    name: "William Martinez",
    title: "DevOps Engineer",
    email: "william.martinez@example.com",
    role: "Member",
  },
  {
    id: 11,
    name: "Sophia Lee",
    title: "Product Manager",
    email: "sophia.lee@example.com",
    role: "Member",
  },
  {
    id: 12,
    name: "James Adams",
    title: "Front-end Developer",
    email: "james.adams@example.com",
    role: "Member",
  },
  {
    id: 13,
    name: "Ella Turner",
    title: "Back-end Developer",
    email: "ella.turner@example.com",
    role: "Member",
  },
  {
    id: 14,
    name: "Matthew Hall",
    title: "UI/UX Designer",
    email: "matthew.hall@example.com",
    role: "Member",
  },
  {
    id: 15,
    name: "Ava Lewis",
    title: "Software Engineer",
    email: "ava.lewis@example.com",
    role: "Member",
  },
  {
    id: 16,
    name: "Daniel Scott",
    title: "Project Manager",
    email: "daniel.scott@example.com",
    role: "Member",
  },
  {
    id: 17,
    name: "Grace Baker",
    title: "Database Administrator",
    email: "grace.baker@example.com",
    role: "Member",
  },
  {
    id: 18,
    name: "Benjamin Harris",
    title: "QA Tester",
    email: "benjamin.harris@example.com",
    role: "Member",
  },
  {
    id: 19,
    name: "Chloe Young",
    title: "System Administrator",
    email: "chloe.young@example.com",
    role: "Member",
  },
  {
    id: 20,
    name: "Liam King",
    title: "Graphic Designer",
    email: "liam.king@example.com",
    role: "Member",
  },
  {
    id: 21,
    name: "Zoe Rodriguez",
    title: "DevOps Engineer",
    email: "zoe.rodriguez@example.com",
    role: "Member",
  },
  {
    id: 22,
    name: "Mason Scott",
    title: "Product Manager",
    email: "mason.scott@example.com",
    role: "Member",
  },
  {
    id: 23,
    name: "Emma Wilson",
    title: "Front-end Developer",
    email: "emma.wilson@example.com",
    role: "Member",
  },
  {
    id: 24,
    name: "Noah Davis",
    title: "Back-end Developer",
    email: "noah.davis@example.com",
    role: "Member",
  },
  {
    id: 25,
    name: "Ava Thomas",
    title: "UI/UX Designer",
    email: "ava.thomas@example.com",
    role: "Member",
  },
  {
    id: 26,
    name: "Liam Harris",
    title: "Software Engineer",
    email: "liam.harris@example.com",
    role: "Member",
  },
  {
    id: 27,
    name: "Olivia Martin",
    title: "Project Manager",
    email: "olivia.martin@example.com",
    role: "Member",
  },
  {
    id: 28,
    name: "William Wilson",
    title: "Database Administrator",
    email: "william.wilson@example.com",
    role: "Member",
  },
  {
    id: 29,
    name: "Sophia Rodriguez",
    title: "QA Tester",
    email: "sophia.rodriguez@example.com",
    role: "Member",
  },
  {
    id: 30,
    name: "James Martinez",
    title: "System Administrator",
    email: "james.martinez@example.com",
    role: "Member",
  },
  // Weitere Einträge...
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function AddressBookList({ maxItems }) {
  const checkbox = useRef();
  const [checked, setChecked] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState([]);

  useLayoutEffect(() => {
    const isIndeterminate =
      selectedAddress.length > 0 && selectedAddress.length < addresses.length;
    setChecked(selectedAddress.length === addresses.length);
    setIndeterminate(isIndeterminate);
    checkbox.current.indeterminate = isIndeterminate;
  }, [selectedAddress]);

  function toggleAll() {
    setSelectedAddress(checked || indeterminate ? [] : addresses);
    setChecked(!checked && !indeterminate);
    setIndeterminate(false);
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            Users
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the users in your account including their name, title,
            email and role.
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            type="button"
            className="block rounded-md bg-ocean-300 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-ocean-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ocean-300"
          >
            Add user
          </button>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="relative overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
              {selectedAddress.length > 0 && (
                <div className="absolute left-14 top-0 flex h-12 items-center space-x-3 bg-white sm:left-12">
                  <button
                    type="button"
                    className="inline-flex items-center rounded bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white"
                  >
                    Bulk edit
                  </button>
                  <button
                    type="button"
                    className="inline-flex items-center rounded bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white"
                  >
                    Delete all
                  </button>
                </div>
              )}
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="relative px-7 sm:w-12 sm:px-6">
                      <input
                        type="checkbox"
                        className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-ocean-300 focus:ring-ocean-300"
                        ref={checkbox}
                        checked={checked}
                        onChange={toggleAll}
                      />
                    </th>
                    <th
                      scope="col"
                      className="min-w-[12rem] py-3.5 pr-3 text-left text-sm font-semibold text-gray-900"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Role
                    </th>
                    <th
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                    >
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {addresses
                    .slice(maxItems ? 0 : null, maxItems)
                    .map((address) => (
                      <tr
                        key={address.email}
                        className={
                          selectedAddress.includes(address)
                            ? "bg-gray-50"
                            : undefined
                        }
                      >
                        <td className="relative px-7 sm:w-12 sm:px-6">
                          {selectedAddress.includes(address) && (
                            <div className="absolute inset-y-0 left-0 w-0.5 bg-ocean-300" />
                          )}
                          <input
                            type="checkbox"
                            className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-ocean-300 focus:ring-ocean-300"
                            value={address.email}
                            checked={selectedAddress.includes(address)}
                            onChange={(e) =>
                              setSelectedAddress(
                                e.target.checked
                                  ? [...selectedAddress, address]
                                  : selectedAddress.filter((p) => p !== address)
                              )
                            }
                          />
                        </td>
                        <td
                          className={classNames(
                            "whitespace-nowrap py-4 pr-3 text-sm  font-bold",
                            selectedAddress.includes(address)
                              ? "text-ocean-300"
                              : "text-gray-900"
                          )}
                        >
                          {address.name}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {address.title}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {address.email}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {address.role}
                        </td>
                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                          <a href="#" className="text-ocean-300">
                            Edit
                            <span className="sr-only">, {address.name}</span>
                          </a>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>

              <nav
                className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6"
                aria-label="Pagination"
              >
                <div className="hidden sm:block">
                  <p className="text-sm text-gray-700">
                    Showing <span className="font-medium">1</span> to{" "}
                    <span className="font-medium">{maxItems}</span> of{" "}
                    <span className="font-medium">{addresses.length}</span>{" "}
                    results
                  </p>
                </div>
                <div className="flex flex-1 justify-between sm:justify-end">
                  <a
                    href="#"
                    className="relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
                  >
                    Previous
                  </a>
                  <a
                    href="#"
                    className="relative ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
                  >
                    Next
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
