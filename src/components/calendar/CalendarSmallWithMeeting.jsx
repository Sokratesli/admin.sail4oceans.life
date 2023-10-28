import { Fragment } from 'react'
import {
  CalendarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  EllipsisHorizontalIcon,
  MapPinIcon,
} from '@heroicons/react/20/solid'
import { Menu, Transition } from '@headlessui/react'

const meetings = [
    {
      id: 1,
      date: 'January 10th, 2022',
      time: '5:00 PM',
      datetime: '2022-01-10T17:00',
      name: 'Leslie Alexander',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      location: 'Starbucks',
    },
    {
      id: 2,
      date: 'February 15th, 2022',
      time: '3:30 PM',
      datetime: '2022-02-15T15:30',
      name: 'John Smith',
      imageUrl:
        'https://images.unsplash.com/photo-1560807707-8cc77767d783',
      location: 'Library',
    },
    {
      id: 3,
      date: 'March 5th, 2022',
      time: '10:15 AM',
      datetime: '2022-03-05T10:15',
      name: 'Emily Davis',
      imageUrl:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
      location: 'Cafeteria',
    },
    {
      id: 4,
      date: 'April 20th, 2022',
      time: '1:45 PM',
      datetime: '2022-04-20T13:45',
      name: 'Daniel Johnson',
      imageUrl:
        'https://images.unsplash.com/photo-1525547717977-61b4d09acb96',
      location: 'Conference Room',
    },
    {
      id: 5,
      date: 'May 8th, 2022',
      time: '9:00 AM',
      datetime: '2022-05-08T09:00',
      name: 'Sophia Hernandez',
      imageUrl:
        'https://images.unsplash.com/photo-1573497019703-5f273b80dcb9',
      location: 'Park',
    },
    {
      id: 6,
      date: 'June 12th, 2022',
      time: '4:30 PM',
      datetime: '2022-06-12T16:30',
      name: 'Matthew White',
      imageUrl:
        'https://images.unsplash.com/photo-1589799285560-6b279d23e1a2',
      location: 'Coffee Shop',
    },
    {
      id: 7,
      date: 'July 3rd, 2022',
      time: '11:00 AM',
      datetime: '2022-07-03T11:00',
      name: 'Olivia Lewis',
      imageUrl:
        'https://images.unsplash.com/photo-1505761671935-60b3a7427bad',
      location: 'Library',
    },
    {
      id: 8,
      date: 'August 19th, 2022',
      time: '2:30 PM',
      datetime: '2022-08-19T14:30',
      name: 'William Martinez',
      imageUrl:
        'https://images.unsplash.com/photo-1584353666488-c3d3b3f84a3a',
      location: 'Office',
    },
    {
      id: 9,
      date: 'September 28th, 2022',
      time: '6:15 PM',
      datetime: '2022-09-28T18:15',
      name: 'Ava Turner',
      imageUrl:
        'https://images.unsplash.com/photo-1573496907242-529fcf2d94a0',
      location: 'Conference Room',
    },
    {
      id: 10,
      date: 'October 9th, 2022',
      time: '10:30 AM',
      datetime: '2022-10-09T10:30',
      name: 'James Brown',
      imageUrl:
        'https://images.unsplash.com/photo-1573496785142-33c20b56bce8',
      location: 'Cafeteria',
    },
    {
      id: 11,
      date: 'November 15th, 2022',
      time: '3:00 PM',
      datetime: '2022-11-15T15:00',
      name: 'Emma Garcia',
      imageUrl:
        'https://images.unsplash.com/photo-1573497019703-5f273b80dcb9',
      location: 'Park',
    },
    {
      id: 12,
      date: 'December 7th, 2022',
      time: '7:45 AM',
      datetime: '2022-12-07T07:45',
      name: 'Michael Davis',
      imageUrl:
        'https://images.unsplash.com/photo-1594858700145-6f25b1e16bf7',
      location: 'Coffee Shop',
    },
    {
      id: 13,
      date: 'January 22nd, 2023',
      time: '12:30 PM',
      datetime: '2023-01-22T12:30',
      name: 'Ella Johnson',
      imageUrl:
        'https://images.unsplash.com/photo-1573496785142-33c20b56bce8',
      location: 'Library',
    },
    {
      id: 14,
      date: 'February 5th, 2023',
      time: '4:00 PM',
      datetime: '2023-02-05T16:00',
      name: 'Liam Turner',
      imageUrl:
        'https://images.unsplash.com/photo-1573497019703-5f273b80dcb9',
      location: 'Conference Room',
    },
    {
      id: 15,
      date: 'March 18th, 2023',
      time: '9:30 AM',
      datetime: '2023-03-18T09:30',
      name: 'Sophia Smith',
      imageUrl:
        'https://images.unsplash.com/photo-1594858700145-6f25b1e16bf7',
      location: 'Cafeteria',
    },
    {
      id: 16,
      date: 'April 9th, 2023',
      time: '1:00 PM',
      datetime: '2023-04-09T13:00',
      name: 'Daniel Martinez',
      imageUrl:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
      location: 'Park',
    },
    {
      id: 17,
      date: 'May 14th, 2023',
      time: '10:45 AM',
      datetime: '2023-05-14T10:45',
      name: 'Ava Davis',
      imageUrl:
        'https://images.unsplash.com/photo-1573496907242-529fcf2d94a0',
      location: 'Office',
    },
    {
      id: 18,
      date: 'June 27th, 2023',
      time: '3:15 PM',
      datetime: '2023-06-27T15:15',
      name: 'William Smith',
      imageUrl:
        'https://images.unsplash.com/photo-1560807707-8cc77767d783',
      location: 'Coffee Shop',
    },
    {
      id: 19,
      date: 'July 11th, 2023',
      time: '8:30 AM',
      datetime: '2023-07-11T08:30',
      name: 'Olivia Turner',
      imageUrl:
        'https://images.unsplash.com/photo-1589799285560-6b279d23e1a2',
      location: 'Library',
    },
    {
      id: 20,
      date: 'August 5th, 2023',
      time: '2:00 PM',
      datetime: '2023-08-05T14:00',
      name: 'Matthew Martinez',
      imageUrl:
        'https://images.unsplash.com/photo-1505761671935-60b3a7427bad',
      location: 'Conference Room',
    },
    {
      id: 21,
      date: 'September 9th, 2023',
      time: '6:45 PM',
      datetime: '2023-09-09T18:45',
      name: 'Emma Turner',
      imageUrl:
        'https://images.unsplash.com/photo-1584353666488-c3d3b3f84a3a',
      location: 'Cafeteria',
    },
    {
      id: 22,
      date: 'October 17th, 2023',
      time: '11:30 AM',
      datetime: '2023-10-17T11:30',
      name: 'James Davis',
      imageUrl:
        'https://images.unsplash.com/photo-1573496785142-33c20b56bce8',
      location: 'Park',
    },
    {
      id: 23,
      date: 'November 23rd, 2023',
      time: '4:30 PM',
      datetime: '2023-11-23T16:30',
      name: 'Emily Turner',
      imageUrl:
        'https://images.unsplash.com/photo-1573497019703-5f273b80dcb9',
      location: 'Coffee Shop',
    },
    {
      id: 24,
      date: 'December 8th, 2023',
      time: '10:15 AM',
      datetime: '2023-12-08T10:15',
      name: 'Michael Martinez',
      imageUrl:
        'https://images.unsplash.com/photo-1594858700145-6f25b1e16bf7',
      location: 'Library',
    },
    {
      id: 25,
      date: 'January 14th, 2024',
      time: '3:45 PM',
      datetime: '2024-01-14T15:45',
      name: 'Sophia Davis',
      imageUrl:
        'https://images.unsplash.com/photo-1573496785142-33c20b56bce8',
      location: 'Conference Room',
    },
    {
      id: 26,
      date: 'February 22nd, 2024',
      time: '8:00 AM',
      datetime: '2024-02-22T08:00',
      name: 'Daniel Turner',
      imageUrl:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
      location: 'Cafeteria',
    },
    {
      id: 27,
      date: 'March 3rd, 2024',
      time: '1:30 PM',
      datetime: '2024-03-03T13:30',
      name: 'Ava Smith',
      imageUrl:
        'https://images.unsplash.com/photo-1573496907242-529fcf2d94a0',
      location: 'Park',
    },
    {
      id: 28,
      date: 'April 10th, 2024',
      time: '9:15 AM',
      datetime: '2024-04-10T09:15',
      name: 'William Davis',
      imageUrl:
        'https://images.unsplash.com/photo-1560807707-8cc77767d783',
      location: 'Office',
    },
    {
      id: 29,
      date: 'May 19th, 2024',
      time: '4:15 PM',
      datetime: '2024-05-19T16:15',
      name: 'Olivia Hernandez',
      imageUrl:
        'https://images.unsplash.com/photo-1589799285560-6b279d23e1a2',
      location: 'Coffee Shop',
    },
    {
      id: 30,
      date: 'June 28th, 2024',
      time: '10:00 AM',
      datetime: '2024-06-28T10:00',
      name: 'Matthew Smith',
      imageUrl:
        'https://images.unsplash.com/photo-1505761671935-60b3a7427bad',
      location: 'Library',
    },
  ];

  
const days = [
  { date: '2021-12-27' },
  { date: '2021-12-28' },
  { date: '2021-12-29' },
  { date: '2021-12-30' },
  { date: '2021-12-31' },
  { date: '2022-01-01', isCurrentMonth: true },
  { date: '2022-01-02', isCurrentMonth: true },
  { date: '2022-01-03', isCurrentMonth: true },
  { date: '2022-01-04', isCurrentMonth: true },
  { date: '2022-01-05', isCurrentMonth: true },
  { date: '2022-01-06', isCurrentMonth: true },
  { date: '2022-01-07', isCurrentMonth: true },
  { date: '2022-01-08', isCurrentMonth: true },
  { date: '2022-01-09', isCurrentMonth: true },
  { date: '2022-01-10', isCurrentMonth: true },
  { date: '2022-01-11', isCurrentMonth: true },
  { date: '2022-01-12', isCurrentMonth: true, isToday: true },
  { date: '2022-01-13', isCurrentMonth: true },
  { date: '2022-01-14', isCurrentMonth: true },
  { date: '2022-01-15', isCurrentMonth: true },
  { date: '2022-01-16', isCurrentMonth: true },
  { date: '2022-01-17', isCurrentMonth: true },
  { date: '2022-01-18', isCurrentMonth: true },
  { date: '2022-01-19', isCurrentMonth: true },
  { date: '2022-01-20', isCurrentMonth: true },
  { date: '2022-01-21', isCurrentMonth: true },
  { date: '2022-01-22', isCurrentMonth: true, isSelected: true },
  { date: '2022-01-23', isCurrentMonth: true },
  { date: '2022-01-24', isCurrentMonth: true },
  { date: '2022-01-25', isCurrentMonth: true },
  { date: '2022-01-26', isCurrentMonth: true },
  { date: '2022-01-27', isCurrentMonth: true },
  { date: '2022-01-28', isCurrentMonth: true },
  { date: '2022-01-29', isCurrentMonth: true },
  { date: '2022-01-30', isCurrentMonth: true },
  { date: '2022-01-31', isCurrentMonth: true },
  { date: '2022-02-01' },
  { date: '2022-02-02' },
  { date: '2022-02-03' },
  { date: '2022-02-04' },
  { date: '2022-02-05' },
  { date: '2022-02-06' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function CalendarSmallWithMeeting({maxItems}) {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <h2 className="text-base font-semibold leading-6 text-gray-900">Upcoming meetings</h2>
      <div className="lg:grid lg:grid-cols-12 lg:gap-x-16">
        <div className="mt-10 text-center lg:col-start-8 lg:col-end-13 lg:row-start-1 lg:mt-9 xl:col-start-9">
          <div className="flex items-center text-gray-900">
            <button
              type="button"
              className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Previous month</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </button>
            <div className="flex-auto text-sm font-semibold">January</div>
            <button
              type="button"
              className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Next month</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 grid grid-cols-7 text-xs leading-6 text-gray-500">
            <div>M</div>
            <div>T</div>
            <div>W</div>
            <div>T</div>
            <div>F</div>
            <div>S</div>
            <div>S</div>
          </div>
          <div className="isolate mt-2 grid grid-cols-7 gap-px rounded-lg bg-gray-200 text-sm shadow ring-1 ring-gray-200">
            {days
            .map((day, dayIdx) => (
              <button
                key={day.date}
                type="button"
                className={classNames(
                  'py-1.5 hover:bg-gray-100 focus:z-10',
                  day.isCurrentMonth ? 'bg-white' : 'bg-gray-50',
                  (day.isSelected || day.isToday) && 'font-semibold',
                  day.isSelected && 'text-white',
                  !day.isSelected && day.isCurrentMonth && !day.isToday && 'text-gray-900',
                  !day.isSelected && !day.isCurrentMonth && !day.isToday && 'text-gray-400',
                  day.isToday && !day.isSelected && 'text-indigo-600',
                  dayIdx === 0 && 'rounded-tl-lg',
                  dayIdx === 6 && 'rounded-tr-lg',
                  dayIdx === days.length - 7 && 'rounded-bl-lg',
                  dayIdx === days.length - 1 && 'rounded-br-lg'
                )}
              >
                <time
                  dateTime={day.date}
                  className={classNames(
                    'mx-auto flex h-7 w-7 items-center justify-center rounded-full',
                    day.isSelected && day.isToday && 'bg-indigo-600',
                    day.isSelected && !day.isToday && 'bg-gray-900'
                  )}
                >
                  {day.date.split('-').pop().replace(/^0/, '')}
                </time>
              </button>
            ))}
          </div>
          <button
            type="button"
            className="mt-8 w-full rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add event
          </button>
        </div>
        <ol className="mt-4 divide-y divide-gray-100 text-sm leading-6 lg:col-span-7 xl:col-span-8">
          {meetings
            .slice(maxItems ? 0 : null, maxItems)
          .map((meeting) => (
            <li key={meeting.id} className="relative flex space-x-6 py-6 xl:static">
              {/*<img src={meeting.imageUrl} alt="" className="h-14 w-14 flex-none rounded-full" /> */}
              <div className="flex-auto">
                <h3 className="pr-10 font-semibold text-gray-900 xl:pr-0">{meeting.name}</h3>
                <dl className="mt-2 flex flex-col text-gray-500 xl:flex-row">
                  <div className="flex items-start space-x-3">
                    <dt className="mt-0.5">
                      <span className="sr-only">Date</span>
                      <CalendarIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </dt>
                    <dd>
                      <time dateTime={meeting.datetime}>
                        {meeting.date} at {meeting.time}
                      </time>
                    </dd>
                  </div>
                  <div className="mt-2 flex items-start space-x-3 xl:ml-3.5 xl:mt-0 xl:border-l xl:border-gray-400 xl:border-opacity-50 xl:pl-3.5">
                    <dt className="mt-0.5">
                      <span className="sr-only">Location</span>
                      <MapPinIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </dt>
                    <dd>{meeting.location}</dd>
                  </div>
                </dl>
              </div>
              <Menu as="div" className="absolute right-0 top-6 xl:relative xl:right-auto xl:top-auto xl:self-center">
                <div>
                  <Menu.Button className="-m-2 flex items-center rounded-full p-2 text-gray-500 hover:text-gray-600">
                    <span className="sr-only">Open options</span>
                    <EllipsisHorizontalIcon className="h-5 w-5" aria-hidden="true" />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                              'block px-4 py-2 text-sm'
                            )}
                          >
                            Edit
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                              'block px-4 py-2 text-sm'
                            )}
                          >
                            Cancel
                          </a>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}
