/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import "../../index.css";

export default function MainSection(props) {
  const { showPopUpForm } = props;

  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-5xl text-3xl mb-4 font-medium text-gray-900">
              Te ayudamos a digitalizar tus certificados,
              <br class="hidden lg:inline-block" /> diplomas y títulos
              escolares.
            </h1>
            <p class="mb-8 leading-relaxed">
              Con Credenttia mueve todos tus documentos físicos a digitales para que los estudiantes puedan compartir sus logros en redes sociales.
            </p>
            <div class="flex justify-center">
              <button
                onClick={showPopUpForm}
                class="ml-4 inline-flex text-black-900 font-bold bg-blue-400 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
              >
                Más Información
              </button>
            </div>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src="../../coverpic.png"
            />
          </div>
        </div>
      </section>
    </>
  );
}
