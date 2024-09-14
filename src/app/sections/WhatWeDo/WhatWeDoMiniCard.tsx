/* eslint-disable @typescript-eslint/no-explicit-any */

const WhatWeDoMiniCard = ({ title, icon }: { title: string; icon: any }) => {
  return (
    <div className="bg-white p-8 flex flex-col gap-4 rounded-lg shadow-sm">
      <figure className="bg-slate-100 p-3 rounded-lg size-12 flex justify-center items-center text-lg">
        {icon}
      </figure>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p>
        From concept to launch, we create stunning, user-centric websites that
        elevate your brand and engage your audience.
      </p>
    </div>
  );
};

export default WhatWeDoMiniCard;
