export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} ShopDemo. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            Dummy e-commerce site for demonstration purposes.
          </p>
        </div>
      </div>
    </footer>
  );
}
