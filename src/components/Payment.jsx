import React, { useState } from 'react';

const Payment = () => {
  const [isOpen, setIsOpen] = useState({
    section1: false,
    section2: false,
    section3: false,
    section4: false,
  });

  const toggleSection = (section) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <div className="w-1/3 rounded-xl bg-secondary px-4 py-6">
      <h3 className="mb-5 text-xl font-bold text-primary-foreground break-words md:mb-8 md:text-2xl">
        Pilih Pembayaran
      </h3>

      <div className="relative mb-5 flex items-center justify-between rounded-xl border border-paymentcard-background bg-paymentcard-background hidden">
        <div className="flex flex-1 items-center gap-x-3 px-4 py-3 md:py-4">
          <div className="relative flex h-8 w-8 items-center justify-center rounded-xl bg-general p-2 md:h-12 md:w-12">
            <img
              alt="credit"
              loading="lazy"
              className="aspect-auto h-auto w-full object-contain"
              src="https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/bangalex/icohires (1)-3234-original.webp"
            />
          </div>
          <div className="flex flex-col text-paymentcard-foreground md:gap-y-1">
            <h6 className="text-sm font-bold md:text-base">Wallet</h6>
            <p className="text-xxs md:text-xs">Masuk untuk menggunakan metode pembayaran ini</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-y-5">
        <div>
          <h3 className="flex">
            <button
              type="button"
              aria-controls="section1"
              aria-expanded={isOpen.section1}
              onClick={() => toggleSection('section1')}
              className="group flex w-full items-center justify-between rounded-xl bg-paymentcard-background px-4 py-4 text-paymentcard-foreground"
            >
              <span className="text-sm font-bold">QRIS</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`lucide lucide-chevron-down transition-transform duration-300 ease-out ${isOpen.section1 ? 'rotate-180' : ''}`}
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </button>
          </h3>
          <div
            id="section1"
            className={`mt-5 overflow-hidden text-xs transition-all duration-300 ease-in-out ${isOpen.section1 ? 'block' : 'hidden'}`}
          >
            {/* QRIS content goes here */}
          </div>
        </div>

        <div>
          <h3 className="flex">
            <button
              type="button"
              aria-controls="section2"
              aria-expanded={isOpen.section2}
              onClick={() => toggleSection('section2')}
              className="group flex w-full items-center justify-between rounded-xl bg-paymentcard-background px-4 py-4 text-paymentcard-foreground"
            >
              <span className="text-sm font-bold">E - Wallet</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`lucide lucide-chevron-down transition-transform duration-300 ease-out ${isOpen.section2 ? 'rotate-180' : ''}`}
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </button>
          </h3>
          <div
            id="section2"
            className={`mt-5 overflow-hidden text-xs transition-all duration-300 ease-in-out ${isOpen.section2 ? 'block' : 'hidden'}`}
          >
            {/* E - Wallet content goes here */}
          </div>
        </div>

        <div>
          <h3 className="flex">
            <button
              type="button"
              aria-controls="section3"
              aria-expanded={isOpen.section3}
              onClick={() => toggleSection('section3')}
              className="group flex w-full items-center justify-between rounded-xl bg-paymentcard-background px-4 py-4 text-paymentcard-foreground"
            >
              <span className="text-sm font-bold">Virtual Account</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`lucide lucide-chevron-down transition-transform duration-300 ease-out ${isOpen.section3 ? 'rotate-180' : ''}`}
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </button>
          </h3>
          <div
            id="section3"
            className={`mt-5 overflow-hidden text-xs transition-all duration-300 ease-in-out ${isOpen.section3 ? 'block' : 'hidden'}`}
          >
            {/* Virtual Account content goes here */}
          </div>
        </div>

        <div>
          <h3 className="flex">
            <button
              type="button"
              aria-controls="section4"
              aria-expanded={isOpen.section4}
              onClick={() => toggleSection('section4')}
              className="group flex w-full items-center justify-between rounded-xl bg-paymentcard-background px-4 py-4 text-paymentcard-foreground"
            >
              <span className="text-sm font-bold">Convenience Store</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`lucide lucide-chevron-down transition-transform duration-300 ease-out ${isOpen.section4 ? 'rotate-180' : ''}`}
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </button>
          </h3>
          <div
            id="section4"
            className={`mt-5 overflow-hidden text-xs transition-all duration-300 ease-in-out ${isOpen.section4 ? 'block' : 'hidden'}`}
          >
            {/* Convenience Store content goes here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
