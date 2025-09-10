

import Image from "next/image"

const blogPosts = [
  {
    id: 1,
    title: "Collar brings back coffee brewing ritual",
    excerpt:
      "Aliquet parturient scele risqué scelerisque nibh pretium parturient suspendisse platea sapien torquent feugiat.",
    date: "23 JUL",
    category: "Design Trends, Inspiration",
    author: "S. Rogers",
    image: "/blogs/blog1.jpg",
  },
  {
    id: 2,
    title: "Exterior ideas: 10 colored garden seats",
    excerpt:
      "A sed a risusat luctus esta anibh rhoncus hendrerit blandit nam rutrum sitmiad hac. Crass a vestibulum.",
    date: "23 JUL",
    category: "Design Trends, Furniture",
    author: "S. Rogers",
    image: "/blogs/blog2.jpg",
  },
  {
    id: 3,
    title: "Exploring Atlanta’s modern homes",
    excerpt:
      "Vivamus enim sagittis aptent hac mi dui a per aptent suspendisse cras odio bibendum augue rhoncus laoreet dui.",
    date: "23 JUL",
    category: "Design Trends, Hand Made",
    author: "S. Rogers",
    image: "/blogs/blog3.jpg",
  },
]

export default function InnovativeGadgets() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      {/* Section Title with Long Bar */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold uppercase">Innovative Gadgets</h2>
        <div>
          <div className="mt-3 h-[2px] w-64 bg-blue-600 mx-auto "></div>
          <div className="border-t border-b border-gray-200 "></div>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white border rounded-lg shadow-2xl hover:shadow-lg transition duration-300 overflow-hidden flex flex-col"
          >
            {/* Thumbnail with date & category */}
            <div className="relative">
              <div className="relative w-full h-56">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Date Badge */}
              <div className="absolute top-3 left-3 bg-white text-gray-800 text-center shadow-md px-3 py-1">
                <p className="text-lg font-bold leading-none">
                  {post.date.split(" ")[0]}
                </p>
                <p className="text-xs uppercase">{post.date.split(" ")[1]}</p>
              </div>

              {/* Category Tag Centered */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-semibold px-3 py-1">
                {post.category}
              </div>
            </div>

            {/* Blog Content Centered */}
            <div className="p-6 flex flex-col items-center text-center flex-1">
              <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-500 text-sm mb-3">
                Posted by <span className="font-medium">{post.author}</span>
              </p>
              <p className="text-gray-600 text-sm mb-6 line-clamp-3">
                {post.excerpt}
              </p>

              {/* Continue Reading */}
              <div className="mt-auto">
                <a
                  href="#"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  CONTINUE READING
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
