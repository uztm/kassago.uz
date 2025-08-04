import React from "react";

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-blue-600 to-blue-500 text-white rounded-xl w-full min-h-[80vh] overflow-hidden px-6 sm:px-8 py-10 flex flex-col lg:flex-row items-start lg:items-center justify-between">
      
      {/* Text content */}
      <div className="w-full lg:max-w-xl z-10 text-center lg:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
          Мобильный POS без оборудования <br className="hidden sm:block" />
          — всё в смартфоне
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-6">
          Принимайте оплату, управляйте заказами и следите за продажами — без терминалов и лишней техники
        </p>
        <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-gray-100 transition">
          Скачать приложение
        </button>
        <div className="mt-6 text-sm text-white/80">
          <span className="inline-block border-l-4 pl-3 border-white">
            Выбор предпринимателей — простой и быстрый POS в телефоне
          </span>
        </div>
      </div>

      {/* Mockup Image */}
      <div className="w-full lg:w-1/2 relative mt-10 lg:mt-0 flex justify-center lg:justify-end">
        <img
          src="/images/herophone.png"
          alt="App Mockup"
          className="absolute bottom-0 lg:static w-full sm:w-3/4 md:w-2/3 lg:w-full max-w-md lg:max-w-full object-contain z-0"
        />
      </div>
    </div>
  );
}
