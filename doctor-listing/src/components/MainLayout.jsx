const MainLayout = ({ sidebar, children }) => (
  <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto mt-6 px-2 gap-6">
    <aside className="w-full md:w-1/3 lg:w-1/4 mb-4 md:mb-0">{sidebar}</aside>
    <main className="w-full md:w-2/3 lg:w-3/4">{children}</main>
  </div>
);

export default MainLayout;
