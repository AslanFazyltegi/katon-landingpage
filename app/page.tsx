import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Туры в Катон-Карагай</title>
        <meta name="description" content="Незабываемые туры в Катон-Карагай на комфортабельном внедорожнике! Выберите маршрут и отправляйтесь в путешествие." />
      </Head>
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center bg-cover bg-center" style={{ backgroundImage: "url('/images/katon-bg.jpg')" }}>
        <div className="bg-black bg-opacity-40 p-6 rounded-lg">
          <h1 className="text-white text-4xl font-bold">Незабываемые туры в Катон-Карагай на комфортабельном внедорожнике!</h1>
          <p className="text-white text-lg mt-2">Индивидуальные маршруты с опытным гидом. Авто, пешие и конные туры – выберите свой вариант!</p>
          <a href="#reviews" className="mt-4 bg-yellow-500 text-black px-6 py-3 rounded-lg font-bold">Забронировать тур</a>
        </div>
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
      <section id="routes" className="py-12 px-4">
      <h2 className="text-3xl font-bold text-center">Выберите маршрут</h2>
  
  <div className="mt-8 overflow-x-auto mt-8 justify-center md:flex">
    <div className="flex space-x-6">
      <div className="border rounded-lg p-4 shadow-lg flex-shrink-0 justify-center">
        <Image src="/images/route1.jpg" width={300} height={200} alt="Маршрут 1" className="rounded object-cover w-[300px] h-[200px]" />
        <h3 className="text-xl font-bold mt-2">Маршрут 1</h3>
        <p className="text-gray-700">Авто + Пешие прогулки</p>
        <p className="text-lg font-bold mt-2">Цена: 50 000 KZT</p>
        <Link href="/routes/1" className="mt-3 inline-block bg-blue-600 text-white px-4 py-2 rounded">Подробнее</Link>
      </div>

      <div className="border rounded-lg p-4 shadow-lg flex-shrink-0">
        <Image src="/images/route2.jpg" width={300} height={200} alt="Маршрут 2" className="rounded object-cover w-[300px] h-[200px]" />
        <h3 className="text-xl font-bold mt-2">Маршрут 2</h3>
        <p className="text-gray-700">Авто + Конные прогулки</p>
        <p className="text-lg font-bold mt-2">Цена: 40 000 KZT</p>
        <Link href="/routes/1" className="mt-3 inline-block bg-blue-600 text-white px-4 py-2 rounded">Подробнее</Link>
      </div>

      <div className="border rounded-lg p-4 shadow-lg flex-shrink-0">
        <Image src="/images/route3.jpg" width={300} height={200} alt="Маршрут 3" className="rounded object-cover w-[300px] h-[200px]" />
        <h3 className="text-xl font-bold mt-2">Маршрут 3</h3>
        <p className="text-gray-700">Авто прогулки</p>
        <p className="text-lg font-bold mt-2">Цена: 20 000 KZT</p>
        <Link href="/routes/1" className="mt-3 inline-block bg-blue-600 text-white px-4 py-2 rounded">Подробнее</Link>
      </div>
    </div>
  </div>
      </section>
      
      {/* Reviews Section */}
      <section className="bg-gray-100 py-12 text-center">
  <h2 className="text-2xl font-bold">Отзывы туристов</h2>

  <div className="mt-8 overflow-x-auto justify-center">
    <div className="flex space-x-6">
      {/* Отзыв 1 */}
      <div className="border rounded-lg p-4 inline-block flex-shrink-0 w-full sm:w-auto">
        <Image src="/images/reviewer1.jpg" width={80} height={80} alt="Отзыв 1" className="rounded-full mx-auto object-cover w-[80px] h-[80px]" />
        <p className="mt-2 font-bold">Анна К.</p>
        <p className="text-gray-700">"Это было незабываемо! Отличная организация и маршрут!"</p>
      </div>

      {/* Отзыв 2 */}
      <div className="border rounded-lg p-4 inline-block flex-shrink-0 w-full sm:w-auto">
        <Image src="/images/reviewer2.jpg" width={80} height={80} alt="Отзыв 2" className="rounded-full mx-auto object-cover w-[80px] h-[80px]" />
        <p className="mt-2 font-bold">Иван П.</p>
        <p className="text-gray-700">"Великолепный опыт, всё было на высшем уровне!"</p>
      </div>

      {/* Отзыв 3 */}
      <div className="border rounded-lg p-4 inline-block flex-shrink-0 w-full sm:w-auto">
        <Image src="/images/reviewer3.jpg" width={80} height={80} alt="Отзыв 3" className="rounded-full mx-auto object-cover w-[80px] h-[80px]" />
        <p className="mt-2 font-bold">Мария Л.</p>
        <p className="text-gray-700">"Очень понравился маршрут! Отличные гиды и потрясающие виды!"</p>
      </div>

      {/* Отзыв 4 */}
      <div className="border rounded-lg p-4 inline-block flex-shrink-0 w-full sm:w-auto">
        <Image src="/images/reviewer4.jpg" width={80} height={80} alt="Отзыв 4" className="rounded-full mx-auto object-cover w-[80px] h-[80px]" />
        <p className="mt-2 font-bold">Сергей М.</p>
        <p className="text-gray-700">"Всё было замечательно, рекомендую всем!"</p>
      </div>

      {/* Отзыв 5 */}
      <div className="border rounded-lg p-4 inline-block flex-shrink-0 w-full sm:w-auto">
        <Image src="/images/reviewer5.jpg" width={80} height={80} alt="Отзыв 5" className="rounded-full mx-auto object-cover w-[80px] h-[80px]" />
        <p className="mt-2 font-bold">Елена Д.</p>
        <p className="text-gray-700">"Лучший тур! Никаких проблем, только радость и эмоции!"</p>
      </div>
    </div>
  </div>
</section>

      
      {/* CTA Section */}
      <section id="reviews" className="bg-gray-100 py-12 text-center">
        <h2 className="text-2xl font-bold">Забронируйте тур</h2>
        <p className="text-lg mt-2">Выберите маршрут и оставьте заявку – мы свяжемся с вами и уточним детали!</p>
        <div className="mt-4">
          <a href="https://wa.me/77001234567" className="inline-block bg-green-500 text-white px-6 py-3 rounded-lg font-bold mr-2 sm:mr-4 mb-2 sm:mb-0">Забронировать в WhatsApp</a>
          <a href="tel:+77001234567" className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg font-bold">Позвонить гиду</a>
        </div>
      </section>
    </div>
  );
}
