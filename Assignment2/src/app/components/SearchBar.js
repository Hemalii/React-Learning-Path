// app/components/SearchBar.js
export default function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search games..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-4 bg-white rounded-lg shadow-sm border border-gray-200
                 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                 text-gray-800 placeholder-gray-400"
      />
      <svg
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"
        width="20"
        height="20"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </div>
  );
}
