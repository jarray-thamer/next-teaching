"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
const SearchBar = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = (search: string) => {
    const params = new URLSearchParams(searchParams);
    if (search) {
      params.set("q", search);
    } else {
      params.delete("q");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="relative max-w-md mb-6">
      <label htmlFor="search" className="sr-only">
        Search members
      </label>
      <input
        type="text"
        id="search"
        placeholder="Search by name, role, or technology..."
        className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm"
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get("q")?.toString()}
      />
    </div>
  );
};

export default SearchBar;
