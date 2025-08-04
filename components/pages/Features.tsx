import Image from "next/image";

export default function Features() {
  const features = [
    {
      title: "Скачайте приложение",
      description:
        "Зарегистрируйтесь и начните приём оплат за пару минут — без оборудования",
      image: "/images/feature-dashboard.png",
    },
    {
      title: "Принимайте оплату",
      description:
        "Считайте QR-коды, отправляйте ссылки или принимайте карты прямо с телефона",
      image: "/images/feature-pay.png",
    },
    {
      title: "Управляйте бизнесом",
      description:
        "Аналитика, товары, сотрудники и клиенты — всё в одном мобильном решении",
      image: "/images/feature-analayze.png",
    },
  ];

  return (
    <section className="bg-[#F5F8FF] py-16 px-6 md:px-12 rounded-2xl">
      <h2 className="text-2xl md:text-4xl font-bold text-center text-[#1C3343] mb-12">
        Как работает мобильный POS?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {features.map((feature, i) => (
          <div
            key={i}
            className="bg-white rounded-[28px] px-6 pt-6 pb-0 flex flex-col items-center text-center shadow-sm"
          >
            <h3 className="text-base md:text-lg font-semibold mb-2 text-[#1C3343]">{feature.title}</h3>
            <p className="text-sm text-gray-500 mb-4 max-w-[90%]">{feature.description}</p>

            {/* Phone image fixed to bottom */}
            <div className="w-full flex justify-center items-end relative ">
              <div className="w-[180px] h-[380px] ">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
