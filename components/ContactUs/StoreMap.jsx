export default function StoreMap() {
  return (
    <section className="relative w-full h-[500px] overflow-hidden">
      {/* Google Map Embed */}
      <iframe
        title="Store Location"
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d48376.66493208093!2d-73.31534720493661!3d40.728107571331606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1757671830246!5m2!1sen!2sbd"
        className="w-full h-full border-0"
        style={{ filter: "grayscale(20%) contrast(95%) brightness(95%)" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      {/* Overlay Gradient for premium feel */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/30 pointer-events-none"></div>

      {/* Floating Info Card */}
      <div className="absolute top-8 left-8 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-6 max-w-sm">
        <h3 className="text-xl font-bold text-gray-900">
          Visit our New Store in New York
        </h3>
        <p className="mt-2 text-gray-600 leading-relaxed">
          294 Bay Meadows Ave.<br /> NY 11706
        </p>
        <a
          href="https://maps.google.com?q=294+Bay+Meadows+Ave+NY+11706"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block px-5 py-2 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition"
        >
          See more about
        </a>
      </div>

      {/* Optional Zoom Buttons */}
      <div className="absolute top-8 right-8 flex flex-col space-y-2">
        <button className="w-10 h-10 flex items-center justify-center bg-white/90 rounded-lg shadow hover:bg-gray-100">
          +
        </button>
        <button className="w-10 h-10 flex items-center justify-center bg-white/90 rounded-lg shadow hover:bg-gray-100">
          −
        </button>
      </div>
    </section>
  )
}
