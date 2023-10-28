import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/20/solid'

const addresses = [
    {
      name: 'Jane Cooper',
      title: 'Regional Paradigm Technician',
      role: 'Admin',
      email: 'janecooper@example.com',
      telephone: '+1-202-555-0170',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
      name: 'John Doe',
      title: 'Senior Developer',
      role: 'Developer',
      email: 'johndoe@example.com',
      telephone: '+1-202-555-0123',
      imageUrl:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
      name: 'Alice Smith',
      title: 'Marketing Manager',
      role: 'Marketing',
      email: 'alicesmith@example.com',
      telephone: '+1-202-555-0456',
      imageUrl:
        'https://images.unsplash.com/photo-1507003455298-71a2a7d3356b?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
      name: 'Bob Johnson',
      title: 'Financial Analyst',
      role: 'Finance',
      email: 'bobjohnson@example.com',
      telephone: '+1-202-555-0789',
      imageUrl:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    // Add more people here...
  ];
  

export default function AddressBookCardList() {
  return (
    <div>
      <ul role="list" className="divide-y divide-gray-100">
        {addresses.map((address) => (
          <li key={address.email} className="flex items-center justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
             {/*} <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={address.imageUrl} alt="" /> */}
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">{address.name}</p>
                <a href={"mailto:" + address.email}><p className="mt-1 truncate text-xs leading-5 text-gray-500">{address.email}</p></a>
              </div>
            </div>
            <a
              href={address.href}
              className="rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              View
            </a>
          </li>
        ))}
      </ul>
      <a
        href="#"
        className="flex w-full items-center justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
      >
        View all
      </a>
    </div>
  )
}
