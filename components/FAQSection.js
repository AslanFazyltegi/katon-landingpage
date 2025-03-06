"use client";
import { useState } from "react";

const faqs = [
  {
    question: "Что такое ваш сервис?",
    answer:
      "Наш сервис предоставляет возможность бронирования экскурсий и туров с профессиональными гидами.",
  },
  {
    question: "Как мне забронировать тур?",
    answer:
      "Для бронирования тура выберите интересующую вас экскурсию, укажите дату и заполните форму заявки.",
  },
  {
    question: "Какие способы оплаты вы принимаете?",
    answer:
      "Мы принимаем оплату банковскими картами, через PayPal и другие электронные кошельки.",
  },
  {
    question: "Могу ли я изменить или отменить бронирование?",
    answer:
      "Да, вы можете изменить или отменить бронирование за 48 часов до начала тура без штрафных санкций.",
  },
  {
    question: "Как происходит встреча с гидом?",
    answer:
      "Гид встретит вас в заранее оговоренном месте, после чего начнётся экскурсия согласно программе.",
  },
  {
    question: "Что входит в стоимость тура?",
    answer:
      "Стоимость тура включает услуги гида, транспорт и входные билеты в музеи и достопримечательности.",
  },
  {
    question: "Есть ли скидки для групп?",
    answer:
      "Да, для групп более 5 человек предусмотрены специальные условия и скидки.",
  },
  {
    question: "Как долго длится экскурсия?",
    answer:
      "Продолжительность экскурсии варьируется от 2 до 6 часов, в зависимости от выбранного маршрута.",
  },
  {
    question: "Можно ли заказать индивидуальную экскурсию?",
    answer:
      "Да, мы предлагаем индивидуальные экскурсии, которые можно адаптировать под ваши интересы.",
  },
  {
    question: "Куда обращаться за дополнительной информацией?",
    answer:
      "Вы можете связаться с нашей службой поддержки по телефону или через форму обратной связи на сайте.",
  },
];

export default function FAQSection() {
  const [isSectionOpen, setIsSectionOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  const toggleSection = () => {
    setIsSectionOpen((prev) => !prev);
    // При закрытии секции закрываем все открытые вопросы
    if (isSectionOpen) setOpenIndex(null);
  };

  const toggleQuestion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="max-w-3xl mx-auto my-8 px-4 rounded-lg">
      <button
        onClick={toggleSection}
        className="w-full flex justify-between items-center p-4 focus:outline-none"
      >
        <h2 className="text-2xl font-bold">Часто задаваемые вопросы:</h2>
        <span className="text-2xl">{isSectionOpen ? "−" : "+"}</span>
      </button>
      {isSectionOpen && (
        <div className="divide-y divide-gray-200">
          {faqs.map((faq, index) => (
            <div key={index} className="py-4">
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full text-left flex justify-between items-center focus:outline-none"
              >
                <span className="text-lg font-medium">{faq.question}</span>
                <span className="ml-2 text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div className="mt-2 text-gray-700">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
