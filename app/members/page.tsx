import Link from "next/link";

export default function MembersPage() {
  return (
    <div className="w-full bg-slate-100 min-h-screen">
      <div className="lg:max-w-7xl mx-auto py-16 px-4">
        <div className="pt-16"> {/* Add top padding here */}
          <h1 className="text-slate-800 font-bold text-4xl mb-12 uppercase border-b-2 border-slate-800 pb-4">
            Members
          </h1>
          <p className="text-slate-600 mb-8">
            Welcome to the members section. Explore our galleries and more!
          </p>
          <div className="mt-8">
            <ul className="space-y-4">
              <li>
                <Link href="/members/gallery" className="block bg-white text-black p-4 rounded-lg shadow-md hover:bg-gray-100 transition-colors">
                  <div className="text-lg font-semibold mb-2">Events Gallery</div>
                  <p className="text-sm text-gray-600">
                    Discover highlights from our past events, featuring photos and updates. Stay connected and see what we've been up to!
                  </p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
