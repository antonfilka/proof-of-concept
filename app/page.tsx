export default function Home() {
  return (
    <div className="grid grid-cols-[1fr_1fr] grid-rows-[auto_1fr_1fr] items-baseline justify-items-baseline min-h-screen gap-16 p-10 font-[family-name:var(--font-geist-sans)]">
      <div className="col-span-2 text-center">
        <h1 className="text-3xl font-bold">Proof of concept</h1>
      </div>
      <div className="grid gap-2">
        <h2 className="text-3xl font-bold">Grids</h2>
        <a
          className="text-lg hover:text-[#31152a]"
          href="/grid/responsive-layout"
        >
          Responsive layout
        </a>
        <a className="text-lg hover:text-[#31152a]" href="/grid/cards-layout">
          Cards layout
        </a>
        <a className="text-lg hover:text-[#31152a]" href="/grid/messenger">
          Messenger
        </a>
      </div>
      {/* <div className="">
        <h2 className="text-3xl font-bold">Flex</h2>
      </div> */}
    </div>
  );
}
