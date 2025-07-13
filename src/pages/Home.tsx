interface Props {
  user: string;
}

export default function Home({ user }: Props) {
  return (
    <div className="lg:mx-20">
      <div className="flex flex-col lg:flex-row justify-between mt-12 px-8">
        <h1 className="font-bold text-3xl font-sans">Our Products</h1>
        <div className="flex gap-5 justify-between mt-5 lg:mt-0">
          <input className="border-[#E5E5E5] border-2 rounded-[30px] py-3 px-5 lg:w-full focus:outline-none focus:border-[#FFC736]" type="text" placeholder="Search product by name" />
          <div className="w-14 h-14 border-[#E5E5E5] border-2 flex shrink-0 rounded-full items-center justify-center p-2 lg:hidden">
            <img src="/filter.png" alt="" />
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="border-[#E5E5E5] border-2 rounded-[30px] m-8 p-7 w-1/4 hidden lg:block">
          <h1 className="font-bold text-3xl font-sans">Filters</h1>
          <div className="flex flex-col gap-5 mt-5">
            <h1 className="font-bold flex items-center gap-3 font-sans text-xl">Category</h1>
            <div className="flex flex-col items-start gap-5">
              <label htmlFor="desktop" className="font-semibold flex items-center gap-3 font-sans text-xl">
                <input
                  className="w-6 h-6 flex appearance-none checked:border-[3px] checked:border-solid checked:border-white rounded-md checked:bg-[#0D5CD7] ring-1 ring-[#0D5CD7]"
                  type="radio"
                  id="desktop"
                  name="category"
                  value="Desktop"
                />
                <span>Desktop</span>
              </label>
              <label htmlFor="smartphone" className="font-semibold flex items-center gap-3 font-sans text-xl">
                <input
                  className="w-6 h-6 flex appearance-none checked:border-[3px] checked:border-solid checked:border-white rounded-md checked:bg-[#0D5CD7] ring-1 ring-[#0D5CD7]"
                  type="radio"
                  id="smartphone"
                  name="category"
                  value="Smartphone"
                />
                <span>Smartphone</span>
              </label>
            </div>
          </div>
        </div>
        <div className="border-[#E5E5E5] border-2 rounded-[30px] m-8 p-7 lg:w-3/4 w-full">
          <h1 className="font-bold text-3xl font-sans">Products</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] mt-12">
            <div className="border-[#E5E5E5] border-2 rounded-[30px] p-8 hover:border-[#FFC736]">
              <div className="w-40 h-40 flex items-center mx-auto">
                <img src="/color_back_green__buxxfjccqjzm_large_2x-Photoroom 1.png" alt="" />
              </div>
              <div className="gap-2 flex flex-col">
                <h1 className="font-bold text-xl">Imac Green Energy</h1>
                <p className="text-gray-600 text-xl">Desktops</p>
                <p className="font-bold text-blue-700 text-xl">Rp. 24.000.000</p>
              </div>
            </div>
            <div className="border-[#E5E5E5] border-2 rounded-[30px] p-8 hover:border-[#FFC736]">
              <div className="w-40 h-40 flex items-center mx-auto">
                <img src="/color_back_green__buxxfjccqjzm_large_2x-Photoroom 1.png" alt="" />
              </div>
              <div className="gap-2 flex flex-col">
                <h1 className="font-bold text-xl">Imac Green Energy</h1>
                <p className="text-gray-600 text-xl">Desktops</p>
                <p className="font-bold text-blue-700 text-xl">Rp. 24.000.000</p>
              </div>
            </div>
            <div className="border-[#E5E5E5] border-2 rounded-[30px] p-8 hover:border-[#FFC736]">
              <div className="w-40 h-40 flex items-center mx-auto">
                <img src="/color_back_green__buxxfjccqjzm_large_2x-Photoroom 1.png" alt="" />
              </div>
              <div className="gap-2 flex flex-col">
                <h1 className="font-bold text-xl">Imac Green Energy</h1>
                <p className="text-gray-600 text-xl">Desktops</p>
                <p className="font-bold text-blue-700 text-xl">Rp. 24.000.000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-2 justify-center m-5 text-lg">
        <div className="border-[#E5E5E5] border-2 rounded-lg font-bold text-2xl px-4 py-2 hover:bg-[#0d5cd7] hover:text-white">{`<`}</div>
        <div className="border-[#E5E5E5] border-2 rounded-lg px-4 py-2 hover:bg-[#0d5cd7] hover:text-white font-bold text-xl">1</div>
        <div className="border-[#E5E5E5] border-2 rounded-lg px-4 py-2 hover:bg-[#0d5cd7] hover:text-white font-bold text-xl">2</div>
        <div className="border-[#E5E5E5] border-2 rounded-lg px-4 py-2 hover:bg-[#0d5cd7] hover:text-white font-bold text-xl">...</div>
        <div className="border-[#E5E5E5] border-2 rounded-lg px-4 py-2 hover:bg-[#0d5cd7] hover:text-white font-bold text-xl">8</div>
        <div className="border-[#E5E5E5] border-2 rounded-lg font-bold text-2xl px-4 py-2 hover:bg-[#0d5cd7] hover:text-white">{`>`}</div>
      </div>
    </div>
  );
}
