"use client";
import { useState } from "react";
export default function Form() {
  const [addName, setAddname] = useState("");
  const [addEmail, setAddEmail] = useState("");
  const [addTel, setAddTel] = useState("");
  const [addText, setAddText] = useState("");
  const [submitng, setSubmitting] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!addName || !addEmail || !addTel || !addText) return;
    const newCostumer = {
      addName,
      addEmail,
      addTel,
      addText,
    };
    console.log(newCostumer);
    setAddname("");
    setAddEmail("");
    setAddTel("");
    setAddText("");
  }
  function handleSubmitting() {
    if (!addName || !addEmail || !addTel || !addText) return;
    setSubmitting(true);
  }

  return (
    <div className="bg-black lg:flex h-[600px] ">
      <div className="lg:w-1/2 py-24 px-16">
        <h2 className="text-white text-2xl font-bold">
          پیام های خود را از طریق فرم زیر ارسال کنید
        </h2>
        <div className="w-12 h-1 bg-[#ffcc00] mt-4"></div>
        <form onSubmit={handleSubmit} onClick={handleSubmitting}>
          <label className="text-white block pt-5 pb-1">نام شما</label>
          <input
            className="w-full p-1"
            type="text"
            value={addName}
            onChange={(e) => setAddname(e.target.value)}
          />
          <label className="text-white block pt-5 pb-1">ایمیل شما</label>
          <input
            className="w-full p-1"
            type="email"
            value={addEmail}
            onChange={(e) => setAddEmail(e.target.value)}
          />
          <label className="text-white block pt-5 pb-1">شماره تماس</label>
          <input
            className="w-full p-1"
            type="tel"
            value={addTel}
            onChange={(e) => setAddTel(e.target.value)}
          />
          <label className="text-white block pt-5 pb-1">پیام شما</label>
          <textarea
            className="w-full p-1"
            row="10"
            value={addText}
            onChange={(e) => setAddText(e.target.value)}
          ></textarea>
          <button className="text-white m-3 py-3 px-6 hover:bg-[#ffcc00] hover:text-black transition-all delay-200">
            ثبت
          </button>
        </form>
        {submitng && (
          <div className="border-4 border-green-900 p-4">
            <p className="text-white">درخواست شما با موفقیت ثبت شد</p>
          </div>
        )}
      </div>
    </div>
  );
}
