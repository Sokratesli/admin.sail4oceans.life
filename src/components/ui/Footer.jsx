export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto px-2 py-2 md:flex md:items-end md:justify-between lg:px-4">
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-gray-500">
            &copy;{new Date().getFullYear()} admin.sail4oceans.life made by{" "}
            <a
              className="hover:text-pink-800"
              href="https://www.web-stek.ch"
              target="_blank"
            >
              web|stek
            </a>{" "}
            sàrl. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
