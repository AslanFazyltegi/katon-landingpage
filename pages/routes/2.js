import Head from "next/head";
import Image from "next/image";

export default function Route2() {
  return (
    <div>
      <Head>
        <title>Пеший Тур</title>
        <meta
          name="description"
          content="Подробная информация о нашем Пешем туре. Уникальные маршруты и треккинг в горах и лесах!"
        />
      </Head>

      <main className="p-8 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Пеший Тур</h1>
        <div className="relative w-full h-64 mb-6">
          <Image
            src="/images/walking-tour.jpg"
            alt="Пеший Тур"
            fill
            className="object-cover rounded"
          />
        </div>
        <p className="text-lg mb-4">
          Пеший тур — это возможность в полной мере прочувствовать природу,
          прогуляться по горным тропам и увидеть красоту пейзажей без шума
          мотора. Вы сможете дойти до мест, недоступных для автотранспорта.
        </p>
        <p className="mb-4">
          <strong>Что вас ждёт:</strong>
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Увлекательные пешие маршруты различной сложности</li>
          <li>Опытный проводник и гид</li>
          <li>Остановка в самых живописных местах</li>
          <li>Здоровая физическая активность и свежий воздух</li>
        </ul>
        <p className="mb-4">
          Цена тура: <strong>40 000 KZT</strong>
        </p>
        <a
          href="https://wa.me/77001234567"
          className="inline-block bg-green-600 text-white px-4 py-2 rounded"
        >
          Забронировать тур
        </a>
      </main>
    </div>
  );
}