import Link from "next/link";

function Page() {
  return (
    <div className="py-7">
      {/* البيانات الأساسية */}
      <div className="py-4 px-5 border border-gray-100 rounded-xl mb-4">
        <h2 className="font-semibold mb-6 text-md">البيانات الأساسية</h2>
        <div className="md:flex gap-5 items-end mb-7">
          <div className="flex flex-col mb-5 md:mb-0">
            <label className="mb-2 text-gray-600 text-md">كود الجهة</label>
            <p className="rounded-lg py-3 px-12 border border-gray-200">
              031326548616
            </p>
          </div>
        </div>

        <div className="md:flex gap-x-28 mb-16">
          <div className="flex items-center gap-3">
            <input name="importance" type="checkbox" />
            <label htmlFor="importance" className="text-gray-600 text-md">
              الأهمية
            </label>
          </div>

          <div className="flex items-center gap-3 my-4 md:my-0">
            <input name="linked" type="checkbox" />
            <label htmlFor="linked" className="text-gray-600 text-md">
              مرتبطة بمعاملة
            </label>
          </div>

          <div className="flex items-center gap-3">
            <input name="announcement" type="checkbox" />
            <label htmlFor="announcement" className="text-gray-600 text-md">
              تعميم
            </label>
          </div>
        </div>

        <div className="md:flex gap-5 items-end mb-7">
          <div className="flex flex-col mb-5 md:mb-0">
            <label htmlFor="name" className="mb-2 text-gray-600 text-md">
              تصنيف المعاملة
            </label>
            <input
              name="name"
              type="text"
              placeholder="اختر"
              className="h-12 bg-gray-100 rounded-lg py-1 px-2 border border-gray-200 focus:outline-0"
            />
          </div>
          <div className="flex flex-col mb-5 md:mb-0">
            <label htmlFor="identity" className="mb-2 text-gray-600 text-md">
              نوع المعاملة
            </label>
            <input
              name="identity"
              type="text"
              placeholder="0"
              className="h-12 bg-gray-100 rounded-lg py-1 px-2 border border-gray-200 focus:outline-0"
            />
          </div>
          <div className="flex flex-col mb-4 md:mb-0">
            <label htmlFor="phone" className="mb-2 text-gray-600 text-md">
              الرد خلال
            </label>
            <input
              name="phone"
              type="text"
              placeholder="0"
              className="h-12 bg-gray-100 rounded-lg py-1 px-2 border border-gray-200 focus:outline-0"
            />
          </div>
          <div className="flex flex-col mb-4 md:mb-0">
            <label htmlFor="phone" className="mb-2 text-gray-600 text-md">
              تاريخ المعاملة
            </label>
            <input
              name="phone"
              type="text"
              placeholder="0"
              className="h-12 bg-gray-100 rounded-lg py-1 px-2 border border-gray-200 focus:outline-0"
            />
          </div>
        </div>

        <div className="md:flex gap-5 items-end mb-7">
          <div className="flex flex-col mb-4 md:mb-0">
            <label htmlFor="name" className="mb-2 text-gray-600 text-md">
              الأهمية
            </label>
            <input
              name="name"
              type="text"
              placeholder="اختر"
              className="h-12 bg-gray-100 rounded-lg py-1 px-2 border border-gray-200 focus:outline-0"
            />
          </div>
          <div className="flex flex-col mb-4 md:mb-0">
            <label htmlFor="identity" className="mb-2 text-gray-600 text-md">
              القسم / الإدارة
            </label>
            <input
              name="identity"
              type="text"
              placeholder="0"
              className="h-12 bg-gray-100 rounded-lg py-1 px-2 border border-gray-200 focus:outline-0"
            />
          </div>
          <div className="flex flex-col mb-4 md:mb-0">
            <label htmlFor="phone" className="mb-2 text-gray-600 text-md">
              صورة الي
            </label>
            <input
              name="phone"
              type="text"
              placeholder="0"
              className="h-12 bg-gray-100 rounded-lg py-1 px-2 border border-gray-200 focus:outline-0"
            />
          </div>
        </div>

        <div className="md:grid grid-cols-2 gap-5 items-end">
          <div className="flex flex-col mb-4 md:mb-0">
            <label htmlFor="name" className="mb-2 text-gray-600 text-md">
              موضوع المعاملة
            </label>
            <input
              name="name"
              type="text"
              className="h-12 bg-gray-100 rounded-lg py-1 px-2 border border-gray-200 focus:outline-0"
            />
          </div>
          <div className="flex flex-col mb-4 md:mb-0">
            <label htmlFor="identity" className="mb-2 text-gray-600 text-md">
              ملاحظات
            </label>
            <input
              name="identity"
              type="text"
              className="h-12 bg-gray-100 rounded-lg py-1 px-2 border border-gray-200 focus:outline-0"
            />
          </div>
        </div>
      </div>

      {/* بيانات الأشخاص */}
      <div className="py-4 px-5 border border-gray-100 rounded-xl mb-4">
        <h2 className="font-bold mb-6 text-md">بيانات الأشخاص</h2>
        <form className="md:flex gap-5 items-end">
          <div className="flex flex-col mb-4 md:mb-0">
            <label htmlFor="name" className="mb-2 text-gray-600 text-md">
              الأسم
            </label>
            <input
              name="name"
              type="text"
              placeholder="الأسم"
              className="h-12 bg-gray-100 rounded-lg py-1 px-2 border border-gray-200 focus:outline-0"
            />
          </div>
          <div className="flex flex-col mb-4 md:mb-0">
            <label htmlFor="identity" className="mb-2 text-gray-600 text-md">
              الهوية
            </label>
            <input
              name="identity"
              type="text"
              placeholder="0"
              className="h-12 bg-gray-100 rounded-lg py-1 px-2 border border-gray-200 focus:outline-0"
            />
          </div>
          <div className="flex flex-col mb-4 md:mb-0">
            <label htmlFor="phone" className="mb-2 text-gray-600 text-md">
              رقم الجوال
            </label>
            <input
              name="phone"
              type="text"
              placeholder="0"
              className="h-12 bg-gray-100 rounded-lg py-1 px-2 border border-gray-200 focus:outline-0"
            />
          </div>

          <button className="px-10 py-1 bg-orange-100 border border-main text-main rounded-md md:mr-6">
            أضاف
          </button>
        </form>
      </div>

      {/* المرفقات */}
      <div className="py-4 px-5 border border-gray-100 rounded-xl mb-4">
        <h2 className="font-bold mb-6 text-md">المرفقات</h2>
        <form className="md:flex items-center gap-5">
          <div className="flex flex-col mb-4 md:mb-0">
            <label htmlFor="number" className="mb-2 text-gray-600 text-md">
              عدد المرفقات
            </label>
            <input
              name="number"
              type="text"
              className="h-12 bg-gray-100 rounded-lg py-1 px-2 border border-gray-200 focus:outline-0"
            />
          </div>
          <div className="flex flex-col mb-4 md:mb-0">
            <label htmlFor="type" className="mb-2 text-gray-600 text-md">
              نوع المرفقات
            </label>
            <input
              name="type"
              type="text"
              className="h-12 bg-gray-100 rounded-lg py-1 px-2 border border-gray-200 focus:outline-0"
            />
          </div>
          <div className="flex flex-col mb-4 md:mb-0 flex-1">
            <label htmlFor="details" className="mb-2 text-gray-600 text-md">
              وصف المرفقات
            </label>
            <input
              name="details"
              type="text"
              className="h-12 bg-gray-100 rounded-lg py-1 px-2 border border-gray-200 focus:outline-0"
            />
          </div>
        </form>
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-4 items-center">
        <button className="rounded-lg text-white bg-main px-10 py-1 cursor-pointer">
          إنشاء
        </button>
        <Link href="/transactions">
          <button className="rounded-lg bg-gray-200 px-10 py-1 cursor-pointer">
            إلغاء
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Page;
