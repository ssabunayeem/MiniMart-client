import Link from "next/link";
import {
  FadeInUp,
  StaggerContainer,
  FadeInItem,
} from "../../components/AnimationWrapper";

async function getItems() {
  const res = await fetch("https://minimart-server-f7td.onrender.com/items", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch items");
  }
  return res.json();
}

export default async function ItemsPage() {
  const items = await getItems();

  const localImages = {
    1: "/assets/headphones.jpg",
    2: "/assets/chair.jpg",
    3: "/assets/keyboard.jpg",
    4: "/assets/Smar-Watch.jpg",
    5: "/assets/4K-Monitor.jpg",
    6: "/assets/Docker.jpg",
  };

  return (
    <div className="container mx-auto px-6 my-10">
      <FadeInUp>
        <h1 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-heading">
          Our Catalog
        </h1>
      </FadeInUp>
      <StaggerContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <FadeInItem key={item.id} className="h-full">
              <div className="group rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-cyan-400/50 hover:bg-white/10 transition-all duration-300 p-6 flex flex-col shadow-lg hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] h-full">
                <div className="h-64 bg-slate-800/50 rounded-xl mb-6 flex items-center justify-center overflow-hidden relative group-hover:scale-[1.02] transition-transform duration-500">
                  <img
                    src={localImages[item.id] || item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-2xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors font-heading">
                  {item.name}
                </h2>
                <p className="text-gray-400 mb-6 grow line-clamp-2">
                  {item.description}
                </p>
                <div className="flex justify-between items-center mt-auto border-t border-white/10 pt-4">
                  <span className="text-3xl font-bold text-cyan-400">
                    ${item.price}
                  </span>
                  <Link
                    href={`/items/${item.id}`}
                    className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-full hover:shadow-[0_0_10px_rgba(6,182,212,0.6)] hover:scale-105 transition-all duration-300 font-medium"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </FadeInItem>
          ))}
        </div>
      </StaggerContainer>
    </div>
  );
}
