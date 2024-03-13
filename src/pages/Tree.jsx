import Calculator from "../components/organism/Calculator";
function Tree() {
  return (
    <>
      <div className="w-full h-[100vh] bg-gray-800 flex">
        <div className="w-1/2  h-[100%] p-2 flex justify-center items-center ">
          <Calculator />
        </div>
        <div className="w-1/2 h-screen p-1">
          <span>
            {/* !HERE GOES THE EXPRESION LEXICA DEL INPUT */}
          </span>
        </div>
      </div>

    </>
  );
}

export default Tree;