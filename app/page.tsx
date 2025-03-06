'use client';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Reviews from "../components/Reviews";
import { ArrowRight, Mountain } from 'lucide-react';
import { RoutesSection } from '@/components/RoutesSection';


export default function Home() {
  return (
   <div>
      <Head>
        <title>Туры в Катон-Карагай</title>
        <meta name="description" content="Незабываемые туры в Катон-Карагай на комфортабельном внедорожнике! Выберите маршрут и отправляйтесь в путешествие." />
      </Head>
      {/* Hero Section */}
      {/* <section className="relative h-screen flex items-center justify-center text-center bg-cover bg-center" style={{ backgroundImage: "url('/images/katon-bg.jpg')" }}>
        <div className="bg-black bg-opacity-40 p-6 rounded-lg w-full">
          <h1 className="text-white text-4xl font-bold">Незабываемые туры в Катон-Карагай на комфортабельном внедорожнике!</h1>
          <p className="text-white text-lg mt-2">Индивидуальные маршруты с опытным гидом. Авто, пешие и конные туры – выберите свой вариант!</p>
          <a href="#reviews" className="mt-4 bg-yellow-500 text-black px-6 py-3 rounded-lg font-bold">Забронировать тур</a>
        </div>
      </section> */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/katon-bg-2.jpg"
              alt="Mountain landscape in Katon-Karagay"
              fill
              priority
              className="object-cover"
              quality={85}
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>

          {/* Content Container */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="space-y-8">
              {/* Icon */}
              <div className="flex justify-center">
                <Mountain className="h-16 w-16 text-white/90 animate-pulse" />
              </div>

              {/* Main Title */}
              <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
                Туры в Катон-Карагай
              </h1>

              {/* Tagline */}
              <p className="mytext-shadow text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                Откройте для себя величественную красоту Алтайских гор в уникальных походах по нетронутой природе
              </p>

              {/* CTA Button */}
              <div className="mt-8">
                <a
                  href="#ctasection" 
                  className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-transparent border-2 border-white rounded-full overflow-hidden transition-all duration-300 ease-in-out hover:bg-white hover:text-black"
                  >
                  <span className="relative z-10 flex items-center">
                    Забронировать тур
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent z-[1]" />
      </section>


      {/* How It Works Section */}
      <section className="py-12 px-4 text-center">
        <h2 className="text-3xl font-bold">Как проходит тур?</h2>
        <p className="text-lg mt-4">Вы отправляетесь в путешествие на комфортабельном авто с опытным гидом, наслаждаетесь живописными маршрутами и индивидуальным подходом.</p>
        <div className="grid md:grid-cols-4 gap-6 mt-8">
          <div className="flex flex-col items-center">
            <Image src="/icons/car.png" width={50} height={50} alt="Комфортный авто" />
            <p>Комфортный авто</p>
          </div>
         <div className="flex flex-col items-center">
            <Image src="/icons/guide.png" width={50} height={50} alt="Опытный гид" />
            <p>Опытный гид</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/icons/scenery.png" width={50} height={50} alt="Живописные маршруты" />
            <p>Живописные маршруты</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/icons/individual.png" width={50} height={50} alt="Индивидуальный подход" />
            <p>Индивидуальный подход</p>
          </div>
        </div>
      </section>
        
      {/* Routes Section */}
      <RoutesSection />
        
      {/* Reviews Section */}
      <section className="bg-gray-100 py-12 text-center">
        <h2 className="text-2xl font-bold">Отзывы туристов</h2>
        <Reviews />
      </section>

          
      {/* CTA Section */}
      <section id="ctasection" className="bg-gray-100 py-12 text-center">
        <h2 className="text-2xl font-bold">Забронируйте тур</h2>
        <p className="text-lg mt-2">Выберите маршрут и оставьте заявку – мы свяжемся с вами и уточним детали!</p>
        <div className="mt-4">
          <a href="https://wa.me/77001234567" className="inline-block bg-green-500 text-white px-6 py-3 rounded-lg font-bold mr-2 sm:mr-4 mb-2 sm:mb-0">Забронировать в WhatsApp</a>
          <a href="tel:+77001234567" className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg font-bold">Позвонить гиду</a>
        </div>
      </section>
      {/* Footer Section */}
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          {/* <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">Tailblocks</span>
          </a> */}
          {/* <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2020 Tailblocks —
            <a href="https://twitter.com/knyttneve" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@knyttneve</a>
          </p> */}
          <span className="w-full flex justify-center">
            <a className="text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}
