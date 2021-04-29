export default function typography() {
  return (
    <>
      {/* spacing to be used between sections
    space-y-20 sm:space-y-32 md:space-y-40 lg:space-y-44 */}
      <section className="w-10/12 mx-auto  overflow-hidden">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl leading-none font-extrabold tracking-tight text-gray-900 mt-10 mb-8 sm:mt-14 sm:mb-10">
          H1: text-4xl sm:text-6xl lg:text-7xl leading-none font-extrabold
          tracking-tight text-gray-900 mt-10 mb-8 sm:mt-14 sm:mb-10
        </h1>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl leading-none font-extrabold text-gray-900 tracking-tight mb-8">
          H2: text-3xl sm:text-5xl lg:text-6xl leading-none font-extrabold
          text-gray-900 tracking-tight mb-8
        </h2>

        <p className=" text-lg sm:text-2xl font-medium sm:leading-10 space-y-6 max-w-4xl mx-auto mb-6">
          text-lg sm:text-2xl font-medium sm:leading-10 space-y-6 max-w-4xl
          mx-auto mb-6{' '}
          <a
            href="https://adamwathan.me/css-utility-classes-and-separation-of-concerns/"
            className="text-blue-400 font-semibold"
          >
            text-blue-400 font-semibold
          </a>
        </p>

        <a
          href="/#"
          className="w-full sm:w-auto flex-none bg-gray-900 hover:bg-gray-700 text-white text-lg leading-6 font-semibold py-3 px-6 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none transition-colors duration-200"
        >
          Get started
        </a>

        <div className="flex items-baseline mt-4 mb-6">
          <div className="space-x-2 flex">
            <label>
              <input
                className="w-9 h-9 flex items-center justify-center bg-gray-100 rounded-lg"
                name="size"
                type="radio"
                value="xs"
                checked
              />
              XS
            </label>
            <label>
              <input
                className="w-9 h-9 flex items-center justify-center"
                name="size"
                type="radio"
                value="s"
              />
              S
            </label>
            <label>
              <input
                className="w-9 h-9 flex items-center justify-center"
                name="size"
                type="radio"
                value="m"
              />
              M
            </label>
            <label>
              <input
                className="w-9 h-9 flex items-center justify-center"
                name="size"
                type="radio"
                value="l"
              />
              L
            </label>
            <label>
              <input
                className="w-9 h-9 flex items-center justify-center"
                name="size"
                type="radio"
                value="xl"
              />
              XL
            </label>
          </div>
          <div className="ml-auto text-sm text-gray-500 underline">
            Size Guide
          </div>
        </div>

        <div className="flex w-2/3">
          {' '}
          <div className="flex-none w-48 relative">
            <img
              src="/classic-utility-jacket.jpg"
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <form className="flex-auto p-6">
            <div className="flex flex-wrap">
              <h1 className="flex-auto text-xl font-semibold">
                Classic Utility Jacket
              </h1>
              <div className="text-xl font-semibold text-gray-500">$110.00</div>
              <div className="w-full flex-none text-sm font-medium text-gray-500 mt-2">
                In stock
              </div>
            </div>
            <div className="flex items-baseline mt-4 mb-6">
              <div className="space-x-2 flex">
                <label>
                  <input
                    className="w-9 h-9 flex items-center justify-center bg-gray-100 rounded-lg"
                    name="size"
                    type="radio"
                    value="xs"
                    checked
                  />
                  XS
                </label>
                <label>
                  <input
                    className="w-9 h-9 flex items-center justify-center"
                    name="size"
                    type="radio"
                    value="s"
                  />
                </label>
                <label>
                  <input
                    className="w-9 h-9 flex items-center justify-center"
                    name="size"
                    type="radio"
                    value="m"
                  />
                  M
                </label>
                <label>
                  <input
                    className="w-9 h-9 flex items-center justify-center"
                    name="size"
                    type="radio"
                    value="l"
                  />
                  L
                </label>
                <label>
                  <input
                    className="w-9 h-9 flex items-center justify-center"
                    name="size"
                    type="radio"
                    value="xl"
                  />
                  XL
                </label>
              </div>
              <div className="ml-auto text-sm text-gray-500 underline">
                Size Guide
              </div>
            </div>
            <div className="flex space-x-3 mb-4 text-sm font-medium">
              <div className="flex-auto flex space-x-3">
                <button
                  className="w-1/2 flex items-center justify-center rounded-md bg-black text-white"
                  type="submit"
                >
                  Buy now
                </button>
                <button
                  className="w-1/2 flex items-center justify-center rounded-md border border-gray-300"
                  type="button"
                >
                  Add to bag
                </button>
              </div>
              <button
                className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-gray-400 border border-gray-300"
                type="button"
                aria-label="like"
              >
                <svg width="20" height="20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  />
                </svg>
              </button>
            </div>
            <p className="text-sm text-gray-500">
              Free shipping on all continental US orders.
            </p>
          </form>
        </div>
      </section>
    </>
  );
}
