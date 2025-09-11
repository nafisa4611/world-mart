

import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs"

export default function ProductTabs({ description, reviews, brand, shipping }) {
  return (
    <div className="mt-12">
      <Tabs defaultValue="description" className="w-full">
        <TabsList className="border-b mb-6">
          <TabsTrigger value="description">Description</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
          <TabsTrigger value="brand">About Brand</TabsTrigger>
          <TabsTrigger value="shipping">Shipping & Delivery</TabsTrigger>
        </TabsList>

        <TabsContent value="description">
          <div className="prose max-w-none text-gray-700">{description}</div>
        </TabsContent>

        <TabsContent value="reviews">
          <div className="space-y-4">
            {reviews.length === 0 ? (
              <p className="text-gray-500">No reviews yet.</p>
            ) : (
              reviews.map((r, i) => (
                <div key={i} className="border-b pb-3">
                  <p className="font-medium">{r.author}</p>
                  <p className="text-gray-600">{r.text}</p>
                </div>
              ))
            )}
          </div>
        </TabsContent>

        <TabsContent value="brand">
          <p className="text-gray-600">{brand}</p>
        </TabsContent>

        <TabsContent value="shipping">
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            {shipping.map((s, i) => <li key={i}>{s}</li>)}
          </ul>
        </TabsContent>
      </Tabs>
    </div>
  )
}
