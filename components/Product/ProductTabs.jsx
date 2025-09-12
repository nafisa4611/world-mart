

import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs"

export default function ProductTabs({ description, reviews, brand, shipping }) {
  return (
    <div className="mt-12 bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
      <Tabs defaultValue="description" className="w-full">
        <TabsList className="flex border-b border-gray-200 mb-6 space-x-2 overflow-x-auto scrollbar-none">
          {["description", "reviews", "brand", "shipping"].map((tab) => (
            <TabsTrigger
              key={tab}
              value={tab}
              className="flex-1 text-sm font-semibold rounded-t-lg px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-50 transition-all data-[state=active]:bg-teal-600 data-[state=active]:text-white data-[state=active]:shadow-lg"
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1).replace("-", " & ")}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="description">
          <div className="prose max-w-none text-gray-700 leading-relaxed transition-all duration-300">
            {description}
          </div>
        </TabsContent>

        <TabsContent value="reviews">
          <div className="space-y-4 transition-all duration-300">
            {reviews.length === 0 ? (
              <p className="text-gray-500 italic">No reviews yet.</p>
            ) : (
              reviews.map((r, i) => (
                <div key={i} className="border-b border-gray-100 pb-4">
                  <p className="font-semibold text-gray-800">{r.author}</p>
                  <p className="text-gray-600 text-sm">{r.text}</p>
                </div>
              ))
            )}
          </div>
        </TabsContent>

        <TabsContent value="brand">
          <p className="text-gray-600 text-sm leading-relaxed transition-all duration-300">
            {brand}
          </p>
        </TabsContent>

        <TabsContent value="shipping">
          <ul className="list-disc list-inside text-gray-600 text-sm space-y-1 transition-all duration-300">
            {shipping.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        </TabsContent>
      </Tabs>
    </div>
  )
}
