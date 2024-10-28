export default function Cover({ header }) {
  return (
    <div className="bg-[url('/brd.jpg')] object-cover h-[300px] w-full ">
      <h1 className="text-white text-center text-[42px] pt-[226px] font-bold ">
        {header}
      </h1>
    </div>
  );
}
