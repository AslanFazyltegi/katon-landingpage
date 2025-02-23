import Head from "next/head";
import Image from "next/image";

export default function Route3() {
  return (
    <div>
      <Head>
        <title>Конный Тур</title>
        <meta
          name="description"
          content="Подробная информация о нашем Конном туре. Прогулки на лошадях по живописным местам!"
        />
      </Head>

      <main className="p-8 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Конный Тур</h1>
        <div className="relative w-full h-64 mb-6">
          <Image
            src="/images/horse-tour.jpg"
            alt="Конный Тур"
            fill
            className="object-cover rounded"
          />
        </div>
        <p className="text-lg mb-4">
          Конный тур подарит незабываемые впечатления от общения с лошадьми и
          прогулок по живописным местам. Вы сможете ощутить единение с природой,
          насладиться чистым воздухом и потрясающими видами.
        </p>
        <p className="mb-4">
          <strong>Что вас ждёт:</strong>
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Спокойные прогулки на лошадях в сопровождении инструктора</li>
          <li>Возможность обучения верховой езде</li>
          <li>Маршруты по горным тропам и лесным дорожкам</li>
          <li>Незабываемая фотосессия на фоне природы</li>
        </ul>
        <p className="mb-4">
          Цена тура: <strong>30 000 KZT</strong>
        </p>
        <a
          href="https://wa.me/77001234567"
          className="inline-block bg-yellow-600 text-white px-4 py-2 rounded"
        >
          Забронировать тур
        </a>
      </main>
    </div>
  );
}