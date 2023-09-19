import Link from "next/link";

const UserTrending = () => {
  return (
    <div>
      <Link href="/books/1">
        <div>
          <div className="relative">{/* <Image src="" alt="" fill/> */}</div>
          <div className="grid grid-row gap-2">
            <span className="">Title</span>
            <p>Author</p>
          </div>
        </div>
      </Link>
    </div>
    //   <div>
    //     {schema.map((data, i) => (
    //       <Link key={i} href="/books/1">
    //         <div className="grid grid-rows-[1fr_0.5fr_auto] w-40 border border-[#48494B] rounded-md">
    //           <div className="relative h-40 w-full">
    //             <Image src={data.image} alt={data.title} fill />
    //           </div>

    //           <div className="px-2 pt-2">
    //             <div className="flex text-xs gap-1">
    //               <ImBooks />
    //               <p className="font-light">{data.type}</p>
    //             </div>
    //             <h4 className="font-semibold text-sm">
    //               <CropText text={data.title} />
    //             </h4>
    //           </div>

    //           <div className="self-start px-2">
    //             <p className="text-sm">{data.author}</p>
    //           </div>
    //         </div>
    //       </Link>
    //     ))}
    //   </div>
  );
};

export default UserTrending;
