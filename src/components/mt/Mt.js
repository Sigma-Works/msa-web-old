import React from "react";

const Mt = () => {
  return (
    <>
      <div className="mx-auto max-w-7xl">
        <div className="text-lg w-full">
          <div className="mt-6 text-gray-700 markdown">
            <iframe
              src={`https://timing.athanplus.com/masjid/widgets/embed?theme=3&masjid_id=RKxwXOdO&color=000000`}
              width="100%"
              height="500"
              frameBorder="0"
              allowtransparency="true"
              title="Prayer Times"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mt;
