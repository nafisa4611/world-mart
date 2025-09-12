import Link from "next/link"

export default function DashboardHeader({ customerName }) {
  return (
    <div className="mb-8 bg-white shadow-xl rounded-3xl p-6 md:p-8 relative overflow-hidden">
      {/* Gradient accent line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-t-3xl"></div>

      <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
        Hello, {customerName}.
      </h2>

      <Link 
        href="/logout"
        className="inline-block mt-1 text-sm text-blue-600 font-medium hover:text-blue-500 transition-colors"
      >
        Not {customerName}? Log out
      </Link>

      <p className="text-gray-500 mt-4 leading-relaxed md:text-lg">
        From your account dashboard you can view recent orders, manage shipping and billing addresses, and edit your password and account details.
      </p>

      {/* Optional subtle background pattern */}
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-50 rounded-full opacity-30 -z-10"></div>
      <div className="absolute top-10 left-0 w-24 h-24 bg-purple-50 rounded-full opacity-20 -z-10"></div>
    </div>
  )
}
