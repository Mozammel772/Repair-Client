import React from "react";

const Whatsapps = () => {
  const phoneNumber = "+8801775775772"; // আপনার WhatsApp নম্বর এখানে দিন
  const message = "Hi, I need assistance"; // প্রি-ফিল্ড মেসেজ
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;
  return (
    <div className="fixed z-50 top-[81%] right-5 transform -translate-y-1/2">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center bg-green-500 p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300 ease-in-out"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="w-12 h-12"
        />
      </a>
    </div>
  );
};

export default Whatsapps;
