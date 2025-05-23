import React from "react";

function Footer() {
  return (
    <div className="sm:flex justify-between items-center bg-gray-100 py-5 px-10">
      <div className="mb-3 md:m-0">
        <ul className="flex gap-5 mb-4 text-[15px] text-gray-800">
          <li>النماذج</li>
          <li>عن النظام</li>
          <li>البوابة الداخلية</li>
          <li>البوابة الخارجية</li>
        </ul>

        <div className="sm:flex items-center gap-3 text-sm">
          <p className="text-gray-500">
            © التقنية والذكاء الأصطناعي بالمديرية العامة للسجون
          </p>
          <p>الإصدار 3.1.2</p>
        </div>
      </div>
      <div className="flex justify-center sm:m-0">
        <img src="/images/2030.png" alt="" className="w-1/3 sm:w-auto" />
      </div>
    </div>
  );
}

export default Footer;
