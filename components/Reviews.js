"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useHorizontalScroll } from "../hooks/useHorizontalScroll";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';


export default function Reviews() {
  const scrollRef = useHorizontalScroll();
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  useEffect(() => {
    const scrollEl = scrollRef.current;
    if (!scrollEl) return;

    const handleScroll = () => {
      setShowLeftArrow(scrollEl.scrollLeft > 0);
      setShowRightArrow(
        scrollEl.scrollLeft < scrollEl.scrollWidth - scrollEl.clientWidth
      );
    };

    handleScroll();
    scrollEl.addEventListener("scroll", handleScroll);
    return () => {
      scrollEl.removeEventListener("scroll", handleScroll);
    };
  }, [scrollRef]);

  const scrollByAmount = (amount) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  return (
    <div className="relative">
      {showLeftArrow && (
        <button
          onClick={() => scrollByAmount(-400)}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white hover:bg-gray-100 p-3 rounded-full shadow-lg transition-colors"
          aria-label="Прокрутить влево"
        >
          <ChevronLeftIcon className="w-6 h-6 text-gray-700" />
        </button>
      )}
      {showRightArrow && (
        <button
          onClick={() => scrollByAmount(400)}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white hover:bg-gray-100 p-3 rounded-full shadow-lg transition-colors"
          aria-label="Прокрутить вправо"
        >
          <ChevronRightIcon className="w-6 h-6 text-gray-700" />
        </button>
      )}

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
    </div>
  );
}
