"use client";

import Image from "next/image";
// icons
import { IoIosCloseCircleOutline } from "react-icons/io";
import { PiIdentificationCard } from "react-icons/pi";
import { BsBookmarkStar } from "react-icons/bs";
import { LuFileKey2 } from "react-icons/lu";
import { SlLocationPin } from "react-icons/sl";
import { PiDoorOpen } from "react-icons/pi";
import { CiLogout } from "react-icons/ci";

export default function UserInfoSidebar({ isOpen, onClose }) {
  return (
    <>
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-80"
        }`}
      >
        <div>
          {/* Header */}
          <div className="flex items-center justify-between mb-3 border-b-1 border-gray-200 p-4">
            <h2>بيانات المستخدم</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <IoIosCloseCircleOutline className="w-6 h-6" />
            </button>
          </div>

          {/* Menu Sections */}
          <div className="space-y-4 border-1 border-gray-100 rounded-xl mx-3">
            {/* Name */}
            <div className="flex items-center gap-3 p-4 border-b border-gray-100">
              <div className="border border-amber-600 rounded-full overflow-hidden">
                <Image
                  width={60}
                  height={60}
                  src="/images/profile.png"
                  alt="profile picture"
                  className="scale-125 translate-y-1.5"
                />
              </div>
              <div>
                <h2 className="font-bold text-gray-800 text-md mb-1">الأسم</h2>
                <p className="text-gray-500">مديرة إدارة النظم والبرامج</p>
              </div>
            </div>

            {/* Info */}
            <div className="border border-gray-100 rounded-xl p-4 mx-3 mb-4">
              <div className="flex gap-8 items-center mb-3">
                <p className="text-gray-500 flex items-center gap-3">
                  <span className="text-xl">
                    <PiIdentificationCard />
                  </span>
                  الهوية
                </p>
                <p className="text-gray-700">421665164</p>
              </div>
              <div className="flex gap-8 items-center mb-4">
                <p className="text-gray-500 flex items-center gap-3">
                  <span className="text-xl">
                    <BsBookmarkStar />
                  </span>
                  الرتبة
                </p>
                <p className="text-gray-700">مقدم</p>
              </div>
              <div className="flex gap-8 items-center mb-4">
                <p className="text-gray-500 flex items-center gap-3">
                  <span className="text-xl">
                    <LuFileKey2 />
                  </span>
                  الحالة
                </p>
                <p className="text-gray-700">مدير</p>
              </div>
              <div className="flex gap-8 items-center mb-4">
                <p className="text-gray-500 flex items-center gap-3">
                  <span className="text-xl">
                    <SlLocationPin />
                  </span>
                  المقر
                </p>
                <p className="text-gray-700">الجهاز الرئيسي</p>
              </div>
              <div className="flex gap-8 items-center mb-4">
                <p className="text-gray-500 flex items-center gap-3">
                  <span className="text-xl">
                    <PiDoorOpen />
                  </span>
                  الجهه
                </p>
                <p className="text-gray-700">إدارة النظم والبرامج</p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="absolute bottom-5 w-full p-5">
            <button
              onClick={onClose}
              className="flex items-center gap-4 w-full py-2 px-4 rounded-lg transition-colors bg-red-100 cursor-pointer"
            >
              <CiLogout className="w-5 h-5 mr-2 text-red-500" />
              <span>تسجيل الخروج</span>
            </button>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-gray-600/50 z-30"
          onClick={onClose}
        ></div>
      )}
    </>
  );
}
