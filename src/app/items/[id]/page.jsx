import Image from "next/image";

async function getItem(id) {
  const res = await fetch(`http://localhost:4000/items/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    return null;
  }
  return res.json();
}

export default async function ItemDetailPage({ params }) {
  const { id } = await params; // Next.js 15+ async params
  const item = await getItem(id);

  if (!item) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold text-white mb-4">Item Not Found</h1>
        <p className="text-gray-400">
          The item you are looking for does not exist.
        </p>
        <a
          href="/items"
          className="text-cyan-400 hover:text-cyan-300 mt-4 inline-block font-medium"
        >
          Back to Items
        </a>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row mt-10">
      <div className="md:w-1/2 p-8 bg-black/20 flex items-center justify-center">
        <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
      <div className="md:w-1/2 p-8 flex flex-col">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-4">
          {item.name}
        </h1>
        <p className="text-gray-300 text-lg mb-6 leading-relaxed">
          {item.description}
        </p>
        <div className="mt-auto">
          <p className="text-4xl font-bold text-cyan-400 mb-8">${item.price}</p>
          <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold py-4 rounded-xl hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:scale-[1.02] transition-all duration-300">
            Add to Cart
          </button>
          <a
            href="/items"
            className="block text-center mt-6 text-gray-500 hover:text-white transition-colors"
          >
            &larr; Continue Shopping
          </a>
        </div>
      </div>
    </div>
  );
}
