import * as React from 'react';
import { Disclosure, Transition } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'

const Announcements = () => {
  return (
    <div className="w-full px-4 py-20 my-20" id="announcements">
    <h1 className="text-center text-4xl font-semibold font-sans block mb-10">
    Accouncements
    </h1>
    <div className="mx-auto w-full max-w-7xl rounded-2xl bg-white p-2">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-amber-100 px-4 py-2 text-left text-sm font-medium text-amber-900 hover:bg-amber-200 focus:outline-none focus-visible:ring focus-visible:ring-amber-500 focus-visible:ring-opacity-75 transition-all duration-500 ease-in-out">
              <span className='text-3xl'>August Birthdays</span>
              <ChevronUpIcon
                className={`${
                  open ? 'rotate-180 transform' : ''
                } h-5 w-5 text-amber-500`}
              />
            </Disclosure.Button>
            <Transition
              enter="transition duration-500 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-300 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
              <ul className='list-disc text-xl'>
                <li>
                  TBA
                </li>
                <li>
                  TBA
                </li>
              </ul>
            </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
      <Disclosure as="div" className="mt-2">
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-amber-100 px-4 py-2 text-left text-sm font-medium text-amber-900 hover:bg-amber-200 focus:outline-none focus-visible:ring focus-visible:ring-amber-500 focus-visible:ring-opacity-75">
              <span className='text-3xl'>CACMA Contribution (Sample)</span>
              <ChevronUpIcon
                className={`${
                  open ? 'rotate-180 transform' : ''
                } h-5 w-5 text-amber-500`}
              />
            </Disclosure.Button>
            <Transition
              enter="transition duration-500 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-300 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
              <h1 className='text-xl'>Sample Announcement Text</h1>
            </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  </div>
  )
}

export default Announcements