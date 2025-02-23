import Head from "next/head";
import Image from "next/image";


export default function Route1() {
  return (
    <div>
      <Head>
        <title>Авто Тур</title>
        <meta
          name="description"
          content="Подробная информация о нашем Авто туре. Незабываемые поездки на комфортабельном внедорожнике!"
        />
      </Head>

      <main className="p-8 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Авто Тур</h1>
        <div className="relative w-full h-64 mb-6">
          <Image
            src="/images/auto-tour.jpg"
            alt="Авто Тур"
            fill
            className="object-cover rounded"
          />
        </div>
        <p className="text-lg mb-4">
          Отправляйтесь в незабываемое путешествие на комфортном внедорожнике. Вы
          сможете посетить труднодоступные уголки природы, насладиться
          живописными пейзажами и остановиться в самых интересных местах по пути.
        </p>
        <p className="mb-4">
          <strong>Что вас ждёт:</strong>
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Современный автомобиль повышенной проходимости</li>
          <li>Опытный водитель и гид</li>
          <li>Гибкий маршрут и возможность остановок</li>
          <li>Безопасное и комфортное путешествие</li>
        </ul>
        <p className="mb-4">
          Цена тура: <strong>50 000 KZT</strong>
        </p>
        <a
          href="https://wa.me/77001234567"
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded"
        >
          Забронировать тур
        </a>
      </main>
    </div>
  );
}

