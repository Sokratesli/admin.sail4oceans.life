const addresses = [
  {
    id: 1,
    name: 'Lindsay Walton',
    title: 'Front-end Developer',
    department: 'Optimization',
    email: 'lindsay.walton@example.com',
    role: 'Member',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 2,
    name: 'John Doe',
    title: 'Backend Developer',
    department: 'Engineering',
    email: 'john.doe@example.com',
    role: 'Member',
    image: 'https://example.com/john-doe-image.jpg',
  },
  {
    id: 3,
    name: 'Alice Johnson',
    title: 'UI Designer',
    department: 'Design',
    email: 'alice.johnson@example.com',
    role: 'Member',
    image: 'https://example.com/alice-johnson-image.jpg',
  },
  {
    id: 4,
    name: 'Sarah Smith',
    title: 'Marketing Specialist',
    department: 'Marketing',
    email: 'sarah.smith@example.com',
    role: 'Member',
    image: 'https://example.com/sarah-smith-image.jpg',
  },
  {
    id: 5,
    name: 'Michael Brown',
    title: 'Product Manager',
    department: 'Product Management',
    email: 'michael.brown@example.com',
    role: 'Member',
    image: 'https://example.com/michael-brown-image.jpg',
  },
  {
    id: 6,
    name: 'Emily Davis',
    title: 'UX Designer',
    department: 'Design',
    email: 'emily.davis@example.com',
    role: 'Member',
    image: 'https://example.com/emily-davis-image.jpg',
  },
  {
    id: 7,
    name: 'David Wilson',
    title: 'Software Engineer',
    department: 'Engineering',
    email: 'david.wilson@example.com',
    role: 'Member',
    image: 'https://example.com/david-wilson-image.jpg',
  },
  {
    id: 8,
    name: 'Jessica Lee',
    title: 'Data Analyst',
    department: 'Data Science',
    email: 'jessica.lee@example.com',
    role: 'Member',
    image: 'https://example.com/jessica-lee-image.jpg',
  },
  {
    id: 9,
    name: 'Mark Anderson',
    title: 'Project Manager',
    department: 'Project Management',
    email: 'mark.anderson@example.com',
    role: 'Member',
    image: 'https://example.com/mark-anderson-image.jpg',
  },
  {
    id: 10,
    name: 'Olivia Clark',
    title: 'Content Writer',
    department: 'Marketing',
    email: 'olivia.clark@example.com',
    role: 'Member',
    image: 'https://example.com/olivia-clark-image.jpg',
  },
  {
    id: 11,
    name: 'Daniel Garcia',
    title: 'QA Tester',
    department: 'Quality Assurance',
    email: 'daniel.garcia@example.com',
    role: 'Member',
    image: 'https://example.com/daniel-garcia-image.jpg',
  },
  {
    id: 12,
    name: 'Sophia Miller',
    title: 'HR Manager',
    department: 'Human Resources',
    email: 'sophia.miller@example.com',
    role: 'Member',
    image: 'https://example.com/sophia-miller-image.jpg',
  },
  {
    id: 13,
    name: 'William White',
    title: 'Sales Representative',
    department: 'Sales',
    email: 'william.white@example.com',
    role: 'Member',
    image: 'https://example.com/william-white-image.jpg',
  },
  {
    id: 14,
    name: 'Ava Johnson',
    title: 'Financial Analyst',
    department: 'Finance',
    email: 'ava.johnson@example.com',
    role: 'Member',
    image: 'https://example.com/ava-johnson-image.jpg',
  },
  {
    id: 15,
    name: 'James Robinson',
    title: 'Customer Support',
    department: 'Customer Service',
    email: 'james.robinson@example.com',
    role: 'Member',
    image: 'https://example.com/james-robinson-image.jpg',
  },
];

  
  export default function CaseAddressBook() {
    return (
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-base font-semibold leading-6 text-gray-900">Users</h1>
            <p className="mt-2 text-sm text-gray-700">
              A list of all the users in your account including their name, title, email and role.
            </p>
          </div>
          <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            <button
              type="button"
              className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Add user
            </button>
          </div>
        </div>
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                      Name
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Title
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Status
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Role
                    </th>
                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {addresses.map((address) => (
                    <tr key={address.email}>
                      <td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                        <div className="flex items-center">
                          <div className="h-11 w-0 flex-shrink-0">
                           {/*} <img className="h-11 w-11 rounded-full" src={address.image} alt="" /> */}
                          </div>
                          <div className="ml-0">
                            <div className="font-medium text-gray-900">{address.name}</div>
                            <div className="mt-1 text-gray-500">{address.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                        <div className="text-gray-900">{address.title}</div>
                        <div className="mt-1 text-gray-500">{address.department}</div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                        <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                          Active
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">{address.role}</td>
                      <td className="relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                        <a href="#" className="text-ocean-300 hover:text-ocean-400">
                          Edit<span className="sr-only">, {address.name}</span>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
  