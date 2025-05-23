"use client";

import { useState } from "react";
import Link from "next/link";

import Card from "@/components/ui/Card";
import { cardData } from "@/data/cards";

export default function Home() {
  const [activeTab, setActiveTab] = useState("general");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const currentCards = cardData[activeTab];

  return (
    <>
      <div className="mb-20 border-2 border-gray-100 rounded-xl p-3 md:p-6 my-4">
        {/* Switch */}
        <div className="bg-gray-100 text-gray-500 rounded-xl mb-6 mx-auto sm:mx-0 w-fit p-1 flex justify-evenly">
          <button
            onClick={() => handleTabClick("general")}
            className={`px-4 md:px-11 py-3 cursor-pointer rounded-lg text-md ${
              activeTab === "general" ? "bg-white text-main" : ""
            }`}
          >
            المعاملات العادية
          </button>
          <button
            onClick={() => handleTabClick("secret")}
            className={`px-4 md:px-11 py-3 cursor-pointer rounded-lg text-md ${
              activeTab === "secret" ? "bg-white text-main" : ""
            }`}
          >
            المعاملات السرية
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-fr">
          {currentCards.map((card) => (
            <Link href="/transactions" key={card.id}>
              <Card
                name={card.name}
                number={card.number}
                bgColor={card.bgColor}
                icon={card.icon}
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
