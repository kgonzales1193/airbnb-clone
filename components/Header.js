import Image from 'next/image';
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UserIcon,
} from '@heroicons/react/solid';

function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-lg py-5 px-5 md:px-10">
      {/* Left-LOGO */}
      <div className="relative flex items-center h-10 my-auto cursor-pointer">
        <Image
          src="https://links.papareact.com/qd3"
          fill
          style={{ objectFit: 'contain', objectPosition: 'left' }}
          alt="airbnb logo"
        />
      </div>
      {/* Middle-SEARCH */}
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
          type="text"
          placeholder="Start your Search"
        />
        <SearchIcon className="hidden h-8 md:inline-flex  bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>
      {/* Right */}
      <div className="flex space-x-4 items-center justify-end text-gray-500">
        <p className="hidden md:inline-flex cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex border-2 p-2 rounded-full items-center space-x-2">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  );
}
export default Header;
