"use client";
// components/Reviews.js
import Image from "next/image";
import { useHorizontalScroll } from "../hooks/useHorizontalScroll";


export default function Reviews() {
  // Получаем ссылку через наш кастомный хук
  const scrollRef = useHorizontalScroll();

  return (
    <div className="mt-8 overflow-x-auto no-scrollbar" ref={scrollRef}>
      <div className="flex space-x-6 min-w-max">
        {/* Отзыв 1 */}
        <div className="border rounded-lg p-4 inline-block flex-shrink-0 w-screen sm:w-auto">
          <Image
            src="/images/reviewer1.jpg"
            width={80}
            height={80}
            alt="Отзыв 1"
            className="rounded-full mx-auto object-cover w-[80px] h-[80px]"
          />
          <p className="mt-2 font-bold">Анна К.</p>
          <p className="text-gray-700">
            "Это было незабываемо! Отличная организация и маршрут!"
          </p>
        </div>

        {/* Отзыв 2 */}
        <div className="border rounded-lg p-4 inline-block flex-shrink-0 w-screen sm:w-auto">
          <Image
            src="/images/reviewer2.jpg"
            width={80}
            height={80}
            alt="Отзыв 2"
            className="rounded-full mx-auto object-cover w-[80px] h-[80px]"
          />
          <p className="mt-2 font-bold">Иван П.</p>
          <p className="text-gray-700">
            "Великолепный опыт, всё было на высшем уровне!"
          </p>
        </div>

        {/* Отзыв 3 */}
        <div className="border rounded-lg p-4 inline-block flex-shrink-0 w-screen sm:w-auto">
          <Image
            src="/images/reviewer3.jpg"
            width={80}
            height={80}
            alt="Отзыв 3"
            className="rounded-full mx-auto object-cover w-[80px] h-[80px]"
          />
          <p className="mt-2 font-bold">Мария Л.</p>
          <p className="text-gray-700">
            "Очень понравился маршрут! Отличные гиды и потрясающие виды!"
          </p>
        </div>

        {/* Отзыв 4 */}
        <div className="border rounded-lg p-4 inline-block flex-shrink-0 w-screen sm:w-auto">
          <Image
            src="/images/reviewer4.jpg"
            width={80}
            height={80}
            alt="Отзыв 4"
            className="rounded-full mx-auto object-cover w-[80px] h-[80px]"
          />
          <p className="mt-2 font-bold">Сергей М.</p>
          <p className="text-gray-700">
            "Всё было замечательно, рекомендую всем!"
          </p>
        </div>

        {/* Отзыв 5 */}
        <div className="border rounded-lg p-4 inline-block flex-shrink-0 w-screen sm:w-auto">
          <Image
            src="/images/reviewer5.jpg"
            width={80}
            height={80}
            alt="Отзыв 5"
            className="rounded-full mx-auto object-cover w-[80px] h-[80px]"
          />
          <p className="mt-2 font-bold">Елена Д.</p>
          <p className="text-gray-700">
            "Лучший тур! Никаких проблем, только радость и эмоции!"
          </p>
        </div>
      </div>
    </div>
  );
}
