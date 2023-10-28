import { Fragment, useState } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { FaceFrownIcon, GlobeAmericasIcon } from '@heroicons/react/24/outline'
import { Combobox, Dialog, Transition } from '@headlessui/react'

const items = [
  { id: 1, name: 'Workflow Inc.', category: 'Cases', url: '#' },
  { id: 2, name: 'AddressPro', category: 'Addressbook', url: '#' },
  { id: 3, name: 'Legal Solutions', category: 'Mandates', url: '#' },
  { id: 4, name: 'InvoiceGenius', category: 'Invoices', url: '#' },
  { id: 5, name: 'Journal Master', category: 'Journals', url: '#' },
  { id: 6, name: 'RecordKeeper', category: 'Records', url: '#' },
  { id: 7, name: 'Case Files', category: 'Cases', url: '#' },
  { id: 8, name: 'ContactBook', category: 'Addressbook', url: '#' },
  { id: 9, name: 'Legal Matters', category: 'Mandates', url: '#' },
  { id: 10, name: 'InvoicePro', category: 'Invoices', url: '#' },
  { id: 11, name: 'Journal Express', category: 'Journals', url: '#' },
  { id: 12, name: 'RecordVault', category: 'Records', url: '#' },
  { id: 13, name: 'CaseMaster', category: 'Cases', url: '#' },
  { id: 14, name: 'AddressHub', category: 'Addressbook', url: '#' },
  { id: 15, name: 'LegalEase', category: 'Mandates', url: '#' },
  { id: 16, name: 'InvoiceWizard', category: 'Invoices', url: '#' },
  { id: 17, name: 'Journal Insights', category: 'Journals', url: '#' },
  { id: 18, name: 'RecordArchiver', category: 'Records', url: '#' },
  { id: 19, name: 'CaseLink', category: 'Cases', url: '#' },
  { id: 20, name: 'InvoicePro', category: 'Addressbook', url: '#' },
  { id: 21, name: 'LegalPro', category: 'Mandates', url: '#' },
  { id: 22, name: 'InvoiceGenius Pro', category: 'Invoice', url: '#' },
  { id: 23, name: 'Journal Elite', category: 'Journals', url: '#' },
  { id: 24, name: 'RecordGuardian', category: 'Records', url: '#' },
  { id: 25, name: 'CaseSolutions', category: 'Cases', url: '#' },
  { id: 26, name: 'AddressLink', category: 'Addressbook', url: '#' },
  { id: 27, name: 'LegalExpert', category: 'Mandates', url: '#' },
  { id: 28, name: 'InvoiceMaster', category: 'Invoices', url: '#' },
  { id: 29, name: 'Journal Pro', category: 'Journals', url: '#' },
  { id: 30, name: 'RecordSafe', category: 'Records', url: '#' },
  // Weitere Einträge...
];


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function SearchModal({open, setOpen}) {
  const [query, setQuery] = useState('')

  const filteredItems =
    query === ''
      ? []
      : items.filter((item) => {
          return item.name.toLowerCase().includes(query.toLowerCase())
        })

  const groups = filteredItems.reduce((groups, item) => {
    return { ...groups, [item.category]: [...(groups[item.category] || []), item] }
  }, {})

  return (
    <Transition.Root show={open} as={Fragment} afterLeave={() => setQuery('')} appear>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto p-4 sm:p-6 md:p-20">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="mx-auto max-w-xl transform overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all">
              <Combobox onChange={(item) => (window.location = item.url)}>
                <div className="relative">
                  <MagnifyingGlassIcon
                    className="pointer-events-none absolute left-4 top-3.5 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  <Combobox.Input
                    className="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                    placeholder="Search..."
                    onChange={(event) => setQuery(event.target.value)}
                  />
                </div>

                {query === '' && (
                  <div className="border-t border-gray-100 px-6 py-14 text-center text-sm sm:px-14">
                    <GlobeAmericasIcon className="mx-auto h-6 w-6 text-gray-400" aria-hidden="true" />
                    <p className="mt-4 font-semibold text-gray-900">Search for clients and projects</p>
                    <p className="mt-2 text-gray-500">
                      Quickly access clients and projects by running a global search.
                    </p>
                  </div>
                )}

                {filteredItems.length > 0 && (
                  <Combobox.Options static className="max-h-80 scroll-pb-2 scroll-pt-11 space-y-2 overflow-y-auto pb-2">
                    {Object.entries(groups).map(([category, items]) => (
                      <li key={category}>
                        <h2 className="bg-gray-100 px-4 py-2.5 text-xs font-semibold text-gray-900">{category}</h2>
                        <ul className="mt-2 text-sm text-gray-800">
                          {items.map((item) => (
                            <Combobox.Option
                              key={item.id}
                              value={item}
                              className={({ active }) =>
                                classNames('cursor-default select-none px-4 py-2', active && 'bg-indigo-600 text-white')
                              }
                            >
                              {item.name}
                            </Combobox.Option>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </Combobox.Options>
                )}

                {query !== '' && filteredItems.length === 0 && (
                  <div className="border-t border-gray-100 px-6 py-14 text-center text-sm sm:px-14">
                    <FaceFrownIcon className="mx-auto h-6 w-6 text-gray-400" aria-hidden="true" />
                    <p className="mt-4 font-semibold text-gray-900">No results found</p>
                    <p className="mt-2 text-gray-500">We couldn’t find anything with that term. Please try again.</p>
                  </div>
                )}
              </Combobox>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
