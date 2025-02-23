import React from "react";

const ContactForm = () => {
  return (
    <div className="max-w-xl w-full bg-Putih p-8 rounded-xl shadow-lg text-Hiaju ">
      <h2 className="text-3xl font-bold text-center mb-6">Contact</h2>
      <form className="space-y-3">
        <div>
          <label className="block text-sm font-medium mb-1">Your Name</label>
          <input
            type="text"
            className="w-full p-3 bg-Abu rounded-lg border border-Putih focus:outline-none focus:ring-2 focus:ring-kuning"
            placeholder="Your Name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">
            Email Address
          </label>
          <input
            type="email"
            className="w-full p-3 bg-Abu rounded-lg border border-Putih focus:outline-none focus:ring-2 focus:ring-kuning"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Message</label>
          <textarea
            className="w-full p-3 bg-Abu rounded-lg border border-Putih focus:outline-none focus:ring-2 focus:ring-kuning"
            rows="4"
            placeholder="Write your message..."
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-kuning hover:bg-Hiaju transition-all hover:text-white text-Hiaju font-bold py-3 rounded-lg"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
