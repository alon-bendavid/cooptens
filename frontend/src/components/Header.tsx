import Link from "next/link";
import Image from 'next/image'
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import qs from "query-string";
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Logo from '../assets/logoSVG-01.svg'
import { useLoginMutation, useLogoutMutation, useProfileQuery } from "@/graphql/generated/schema";


// import { useCategoriesQuery } from "@/graphql/generated/schema";
// const router = useRouter();


const navigation = [
  { name: 'ACCUEIL', href: '/' },
  { name: 'NOTRE EXPERTISE', href: '/about' },
  { name: 'CANDIDANTS', href: '/candidants' },
  { name: 'OPPORTUNITÉS', href: '/opportunities' },
  { name: 'CONTACT', href: '/contact' },
  { name: 'ADMIN PANEL', href: '/admin' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [logout] = useLogoutMutation();
  const { data: currentUser, client } = useProfileQuery({
    errorPolicy: "ignore",
  });

    return (
      <> 
     {/* <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-xl "> */}
     <header className="sticky inset-x-0 top-0 z-50 backdrop-blur-xl ">

        {/* <nav className="flex items-center justify-between p-6 lg:px-8 " aria-label="Global"> */}
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">

          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Link href={'/'}>
              
          <Image
          priority={true}
         src={Logo}
         className="w-28 max-w-lg"
          alt="logo"
        />
              </Link>

            </a>
          </div>
          <div className="flex lg:hidden ">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12  mx-3">
            {navigation.map((item) => (
              <>
                {
   
                item.name === 'ADMIN' && currentUser?.profile.role !== 'admin'? null :(
                  <Link key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                  {item.name}
                </Link>
                  )

                }
      
  
              </>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            { currentUser? ( 
              <Link href="/login" className="text-sm font-semibold leading-6 text-gray-900">
                        <button
                        className="btn btn-primary text-white mt-4 w-full"
                        onClick={async () => {
                          await logout();
                          client.resetStore();
                        }}
                      >
                        Se déconnecter
                      </button>
       
            </Link>

          ):(
            <Link href="/login" className="text-sm font-semibold leading-6 text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </Link>
            )}

          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <Link href={'/'}>
              
              <Image
              priority={true}
             src={Logo}
             className="w-28 max-w-lg"
              alt="logo"
            />
                  </Link>
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <Link
                    href="/login"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </Link>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
      </>
    );
  }





  