/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import '../index.css'



export default function Navbar(props) {

  const { showPopUpForm } = props 

  return (
    <>
      <nav class=" bg-gray-200 w-full flex relative justify-between items-center mx-auto px-8 h-20 text-2xl md:text-md -mb-10 ">

          <div class="inline-flex">
              <a  href="/"
                  ><div class="hidden md:block">
                      <img src='/logo.png' alt='logo' width={250}/>
                  </div>
                  <div class="block md:hidden">
                    <img src='/logo.png' />
                  </div>
              </a>
          </div>

          <div class="hidden sm:block flex-shrink flex-grow-0 justify-start px-2">
              <div class="inline-block">
                  <div class="inline-flex items-center max-w-full">

                  </div>
              </div>
          </div>

          <div class="flex-initial">
            <div class="flex justify-end items-center relative">
              <div class="flex mr-4 items-center">
                <a class="inline-block py-2 px-3 hover:bg-gray-200 rounded-full" href="#">
                  <div class="flex items-center relative cursor-pointer whitespace-nowrap">Sobre Nosotros</div>
                </a>
              </div>

              <div class="flex mr-4 items-center">
                <a class="inline-block py-2 px-3 hover:bg-gray-200 rounded-full" onClick={showPopUpForm}>
                  <div class="flex items-center relative cursor-pointer whitespace-nowrap">Contáctanos</div>
                </a>
              </div>

            </div>
          </div>
      </nav>
    </>

  )
}
