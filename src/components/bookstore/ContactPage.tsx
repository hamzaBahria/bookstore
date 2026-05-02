import { MapPin, Phone, Mail, Clock, MessageCircle, Globe, Share2, Rss } from "lucide-react";
import { Header, Footer } from "./SharedComponents";
import { useNavigate } from "react-router-dom";

export function ContactPage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Header />

      <div className="max-w-[1200px] mx-auto px-4 py-6">
        <p className="text-sm text-gray-500 italic mb-4">
          <button onClick={() => navigate("/")} className="hover:text-amber-600">Home</button>
          {" > "} Contact Us
        </p>

        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Get In Touch</h1>
          <p className="text-gray-500 max-w-xl mx-auto">
            We'd love to hear from you. Fill in the form and we'll get back to you within 24 hours.
          </p>
        </div>
        <hr className="mb-8" />

        <div className="flex gap-6">
          <div className="flex-1 bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-5">Send Us a Message</h2>

            <div className="grid grid-cols-2 gap-4 mb-4">
              {[["First Name", "John"], ["Last Name", "Doe"]].map(([label, val]) => (
                <div key={label}>
                  <label className="block text-xs font-bold text-gray-700 mb-1">{label}</label>
                  <input defaultValue={val} className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:border-amber-400" />
                </div>
              ))}
            </div>

            {[
              ["Email Address", "john@email.com", "email"],
              ["Phone (optional)", "+1 (555) 000-0000", "tel"],
            ].map(([label, val, type]) => (
              <div key={label} className="mb-4">
                <label className="block text-xs font-bold text-gray-700 mb-1">{label}</label>
                <input type={type} defaultValue={val} className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:border-amber-400" />
              </div>
            ))}

            <div className="mb-4">
              <label className="block text-xs font-bold text-gray-700 mb-1">Subject</label>
              <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:border-amber-400">
                <option>Order Inquiry</option>
                <option>Return Request</option>
                <option>Technical Issue</option>
                <option>Partnership</option>
                <option>Other</option>
              </select>
            </div>

            <div className="mb-5">
              <label className="block text-xs font-bold text-gray-700 mb-1">Message</label>
              <textarea
                rows={5}
                defaultValue="Describe your question or issue here..."
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none resize-none focus:border-amber-400"
              />
            </div>

            <button className="w-full bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-md font-semibold transition-colors">
              Send Message
            </button>
          </div>

          <aside className="w-80 flex-shrink-0 bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-5">Contact Information</h2>

            <div className="space-y-5">
              {[
                { Icon: MapPin, title: "Our Address", text: "832 Thompson Drive\nSan Francisco, CA 94107, US" },
                { Icon: Phone, title: "Phone Numbers", text: "+1 (123) 345-1235\n+1 (123) 345-1236" },
                { Icon: Mail, title: "Email Addresses", text: "support@mybook.com\ninfo@mybook.com" },
                { Icon: Clock, title: "Business Hours", text: "Mon–Fri: 9am – 6pm PST\nSat–Sun: 10am – 4pm PST" },
              ].map(({ Icon, title, text }) => (
                <div key={title}>
                  <div className="flex items-center gap-3 mb-1">
                    <Icon size={16} className="text-amber-500" />
                    <span className="font-bold text-sm text-gray-800">{title}</span>
                  </div>
                  <p className="text-sm text-gray-600 ml-7 whitespace-pre-line">{text}</p>
                </div>
              ))}
            </div>

            <hr className="my-5" />
            <h3 className="font-bold text-sm text-gray-800 mb-3">Follow Us</h3>
            <div className="flex gap-3">
              {[Globe, Share2, MessageCircle, Rss].map((Icon, i) => (
                <button key={i} className="text-gray-400 hover:text-amber-500 transition-colors">
                  <Icon size={20} />
                </button>
              ))}
            </div>
          </aside>
        </div>
      </div>

      <Footer />
    </div>
  );
}
