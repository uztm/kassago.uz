import Image from "next/image";

export default function Pricing() {
  return (
    <section className="bg-white py-24 px-6 md:px-12 relative">
      {/* Gradient Blur Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-[#1E32FA] opacity-10 rounded-full blur-[180px] z-0 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-semibold mb-4 leading-tight text-gray-900">
          Один тариф. Всё включено.
        </h2>
        <p className="text-lg text-gray-500 mb-16 max-w-xl mx-auto">
          Мобильный POS без оборудования и подписки. Только 1 000 сум в день. Оплата — только за дни использования.
        </p>

        {/* Pricing Card */}
        <div className="bg-gray-50 border border-gray-200 rounded-3xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] p-10 md:p-14 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 max-w-5xl mx-auto">
          {/* Left: Text */}
          <div className="text-left w-full lg:w-1/2">
            <div className="mb-6">
              <h3 className="text-5xl font-extrabold text-gray-900 tracking-tight mb-2">
                1 000 сум / день
              </h3>
              <p className="text-base text-gray-600">
                Без комиссий, без договоров, без оборудования.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 text-sm text-gray-700">
              {[
                "Работает на Android и iOS",
                "Оплата по QR и ссылке",
                "Фискальные чеки и отчёты",
                "Поддержка клиентов и сотрудников",
                "Без кассового терминала",
                "Мгновенное подключение",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#1E32FA]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10">
              <button className="bg-[#1E32FA] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#1727cf] transition">
                Скачать приложение
              </button>
            </div>
          </div>

          {/* Right: Device Mockup */}
          <div className="relative w-[260px] h-[520px] shrink-0">
            <Image
              src="/images/pos-mockup.png"
              alt="POS App Mockup"
              fill
              className="object-contain drop-shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
