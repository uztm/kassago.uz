import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white text-[#0F172A] py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & App Links */}
        <div>
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Company Logo"
              width={120}
              height={40}
              className="mb-6"
            />
          </Link>
          <p className="text-sm text-gray-400 mb-4">
            Мобильный POS без оборудования. Оплата и управление бизнесом — прямо с телефона.
          </p>
          <div className="flex gap-4">
            <a href="#">
              <Image
                src="/images/appstore.png"
                alt="App Store"
                width={120}
                height={40}
                className=" rounded-[5px]"
              />
            </a>
            <a href="#">
              <Image
                src="/images/pmarket.png"
                alt="Google Play"
                width={120}
                height={40}
                className=" rounded-[5px]"
              />
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-sm font-semibold mb-4 text-[#0F172A]">Продукт</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="#">Возможности</Link></li>
            <li><Link href="#">Тариф</Link></li>
            <li><Link href="#">Партнёрам</Link></li>
            <li><Link href="#">Скачать приложение</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-sm font-semibold mb-4 text-[#0F172A]">Компания</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="#">О нас</Link></li>
            <li><Link href="#">Контакты</Link></li>
            <li><Link href="#">Поддержка</Link></li>
            <li><Link href="#">FAQ</Link></li>
          </ul>
        </div>

        {/* Contact / Social */}
        <div>
          <h4 className="text-sm font-semibold mb-4 text-[#0F172A]">Связь с нами</h4>
          <p className="text-sm text-gray-400 mb-4">tmbekzod05@gmail.com</p>
          <div className="flex gap-4">
            {[
              { src: "/images/telegram.svg", alt: "Telegram" },
              { src: "/images/instagram.svg", alt: "Instagram" },
              { src: "/images/whatsapp.svg", alt: "WhatsApp" },
            ].map((icon, i) => (
              <a key={i} href="#">
                <Image src={icon.src} alt={icon.alt} width={24} height={24} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 mt-12 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} KassaGo. Все права защищены.
      </div>
    </footer>
  );
}
