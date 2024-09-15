import people1 from "@/app/images/peopls/people-1.png";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
const Reviews = () => {
  return (
    <div className="bg-slate-100 w-full flex justify-center  items-center">
      <div className="bg-white px-8 py-4 border border-slate-300 rounded-2xl flex items-center flex-wrap gap-x-4">
        <>
          <div className="flex items-center -space-x-2">
            {Array.from({ length: 6 }).map((_, i) => (
              <Image key={i} src={people1} alt="star" width={36} height={36} />
            ))}
          </div>
        </>
        <div>
          <p>
            <span className="text-text font-semibold">5.0</span> Based On{" "}
            <span className="text-text font-semibold">145</span> Reviews
          </p>
          <p className="flex items-center gap-x-1 text-orange-500">
            {Array.from({ length: 5 }).map((_, i) => (
              <FaStar key={i} />
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
