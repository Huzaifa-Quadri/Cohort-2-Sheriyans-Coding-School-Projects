import React from "react";

const ServiceCards = () => {
  return (
    <div className="bg-yellow-600 flex flex-col text-center">
      <div className="flex gap-3 ">
        <div className="h-50 w-50 bg-green-600 border border-red-500">
          <div>
            <h2 className="text-xl font-bold py-3 ">Website Design</h2>
            <p className="text-sm font-bold">
              We can design for you a website and we can upload them.
            </p>
          </div>
        </div>
        <div className="h-50 w-50 bg-green-600 border border-red-500">
          <div>
            <h2 className="text-xl font-bold py-3 ">Mobile & Desktop App</h2>
            <p className="text-sm font-bold">
              We can create for you Mobile and Desktop app.
            </p>
          </div>
        </div>
      </div>

      <div className="flex gap-3">
        <div className="h-50 w-50 bg-green-600  border border-green-500">
          <div>
            <h2 className="text-xl font-bold py-3">UI & UX Design</h2>
            <p className="text-sm font-bold">
              We can create for you UI and UX design.
            </p>
          </div>
        </div>

        <div className="h-50 w-50 bg-green-600  border border-green-500">
          <div>
            <h2 className="text-xl font-bold py-3">Editing Photo</h2>
            <p className="text-sm font-bold">
              We can edit your photo and make it look like a professional.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCards;
