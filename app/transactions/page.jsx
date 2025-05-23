import Link from "next/link";
// icons
import { CiSearch } from "react-icons/ci";
import { FaArrowUpWideShort } from "react-icons/fa6";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
// data
import { transactions } from "@/data/transactions";

export default function TransactionsPage() {
  return (
    <>
      {/* create button */}
      <div className="flex justify-end">
        <Link href="/add">
          <button className="text-white bg-main py-2 px-12 rounded-xl my-7 cursor-pointer">
            إنشاء
          </button>
        </Link>
      </div>

      {/* Table Container */}
      <div className="border border-gray-100 rounded-lg p-4">
        {/* search */}
        <div className="bg-gray-100 border border-gray-200 rounded-2xl p-2 w-full sm:w-1/4 flex items-center gap-1 mb-5">
          <CiSearch className="text-2xl" />

          <input
            type="text"
            placeholder="بحث"
            className="h-6 w-full px-3 focus:outline-0"
          />
        </div>

        {/* table */}
        <div className="overflow-x-auto rounded-xl">
          <table className="min-w-full divide-y-2 divide-gray-200 border border-gray-200 text-sm">
            <thead className="bg-gray-100">
              <tr className="*:text-gray-700 divide-x divide-gray-200">
                <th className="px-3 py-2 whitespace-nowrap">
                  <div className="flex items-center justify-center gap-3">
                    <p>رقم</p>
                    <FaArrowUpWideShort />
                  </div>
                </th>

                <th className="px-3 py-2 whitespace-nowrap">
                  <div className="flex items-center justify-center gap-3">
                    <p>موضوع المعاملة</p>
                    <FaArrowUpWideShort />
                  </div>
                </th>

                <th className="px-3 py-2 whitespace-nowrap">
                  <div className="flex items-center justify-center gap-3">
                    <p>الجهة الوارد منها</p>
                    <FaArrowUpWideShort />
                  </div>
                </th>

                <th className="px-3 py-2 whitespace-nowrap">
                  <div className="flex items-center justify-center gap-3">
                    <p>داخلي / خارجي</p>
                    <FaArrowUpWideShort />
                  </div>
                </th>

                <th className="px-3 py-2 whitespace-nowrap">
                  <div className="flex items-center justify-center gap-3">
                    <p>تاريخ الوارد</p>
                    <FaArrowUpWideShort />
                  </div>
                </th>

                <th className="px-3 py-2 whitespace-nowrap">
                  <div className="flex items-center justify-center gap-3">
                    <p>عدد المرفقات</p>
                    <FaArrowUpWideShort />
                  </div>
                </th>

                <th className="px-3 py-2 whitespace-nowrap">أختر</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {transactions.map((item) => (
                <tr
                  key={item.id}
                  className="*:text-gray-900 *:first:font-medium divide-x divide-gray-200 text-center"
                >
                  <td className="px-3 py-2 whitespace-nowrap">{item.id}</td>
                  <td className="px-3 py-2 whitespace-nowrap">
                    {item.subject}
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap">{item.source}</td>
                  <td className="px-3 py-2 whitespace-nowrap">{item.type}</td>
                  <td className="px-3 py-2 whitespace-nowrap">{item.date}</td>
                  <td className="px-3 py-2 whitespace-nowrap">
                    {item.attachments}
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap">
                    <input type="checkbox" className="accent-main" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* pagination */}
        <div className="flex items-center justify-end mt-5 space-x-2">
          <button className="px-3 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">
            <MdKeyboardDoubleArrowRight />
          </button>
          <button className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300">
            1
          </button>
          <button className="px-3 py-1 bg-main text-white rounded-lg hover:bg-amber-700">
            2
          </button>
          <button className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300">
            3
          </button>
          <button className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300">
            ...
          </button>
          <button className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300">
            10
          </button>
          <button className="px-3 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">
            <MdKeyboardDoubleArrowLeft />
          </button>
        </div>
      </div>
    </>
  );
}
