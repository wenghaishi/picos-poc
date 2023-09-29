import ethLogo from "../assets/eth.png";
import usdcLogo from "../assets/usdc.png";

function Trade() {
  return (
    <div className="h-96 w-96 flex flex-col items-center justify-evenly bg-[#ecffbe] rounded-md">
      <div className="w-80 bg-[#d6f788] rounded-xl h-7"></div>
      <div className="w-80 bg-[#d6f788] rounded-xl h-32 flex justify-between flex-row">
        <input
          type="number"
          className="h-full w-56 rounded-xl bg-[#d6f788] outline-none text-5xl p-6"
          placeholder="0"
        />
        <button className="mr-4">
          <img src={ethLogo} alt="crypto logo" className="h-20 w-20" />
        </button>
      </div>
      <div className="w-80 bg-[#d6f788] rounded-xl h-32 flex items-center justify-between flex-row">
        <input
          type="number"
          className="h-full w-56 rounded-xl bg-[#d6f788] outline-none text-5xl p-6"
          placeholder="0"
        />
        <button className="mr-4">
          <img src={usdcLogo} alt="crypto logo" className="h-20 w-20" />
        </button>
      </div>
    </div>
  );
}
export default Trade;
