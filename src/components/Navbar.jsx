export default function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-blue-700 text-white px-6 py-3 shadow-md">
      <h1 className="text-2xl font-bold">CricStar</h1>
      <div className="space-x-6">
        <a href="#" className="hover:text-gray-300">Home</a>
        {/* More links later */}
      </div>
    </nav>
  );
}
