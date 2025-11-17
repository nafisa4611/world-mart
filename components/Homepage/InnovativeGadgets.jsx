import Image from "next/image"

const blogPosts = [
  {
    id: 1,
    title: "Collar brings back coffee brewing ritual",
    excerpt:
      "Aliquet parturient scelerisque nibh pretium parturient suspendisse platea sapien torquent feugiat.",
    date: "23 JUL",
    category: "Design Trends, Inspiration",
    author: "S. Rogers",
    image: "/blogs/blog1.jpg",
  },
  {
    id: 2,
    title: "Exterior ideas: 10 colored garden seats",
    excerpt:
      "A sed a risus luctus et anibh rhoncus hendrerit blandit nam rutrum sit amet.",
    date: "23 JUL",
    category: "Design Trends, Furniture",
    author: "S. Rogers",
    image: "/blogs/blog2.jpg",
  },
  {
    id: 3,
    title: "Exploring Atlanta’s modern homes",
    excerpt:
      "Vivamus enim sagittis aptent hac mi dui a per aptent suspendisse cras odio bibendum.",
    date: "23 JUL",
    category: "Design Trends, Hand Made",
    author: "S. Rogers",
    image: "/blogs/blog3.jpg",
  },
]

export default function InnovativeGadgets() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold uppercase">
          Innovative Gadgets
        </h2>
        <div className="mt-3 flex flex-col items-center">
          <div className="h-[2px] w-48 sm:w-64 bg-blue-600 mb-1"></div>
          <div className="border-t border-b border-gray-200 w-full"></div>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white border rounded-lg shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden flex flex-col"
          >
            {/* Thumbnail with date & category */}
            <div className="relative w-full h-56 sm:h-60 md:h-64">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
              {/* Date Badge */}
              <div className="absolute top-3 left-3 bg-white text-gray-800 text-center shadow-md px-2 sm:px-3 py-1 rounded">
                <p className="text-base sm:text-lg font-bold leading-none">
                  {post.date.split(" ")[0]}
                </p>
                <p className="text-[10px] sm:text-xs uppercase">
                  {post.date.split(" ")[1]}
                </p>
              </div>
              {/* Category Tag */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs sm:text-sm font-semibold px-2 sm:px-3 py-1 rounded">
                {post.category}
              </div>
            </div>

            {/* Blog Content */}
            <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-1">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-500 text-sm mb-2">
                Posted by <span className="font-medium">{post.author}</span>
              </p>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {post.excerpt}
              </p>
              <a
                href="#"
                className="mt-auto text-blue-600 font-semibold hover:underline text-sm sm:text-base"
              >
                CONTINUE READING
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
