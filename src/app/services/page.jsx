"use client";
import React, { useEffect, useState } from "react";

const ServicesPage = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch("http://localhost:3000/services/api");
      const data = await res.json();
      setServices(data.res);
    };
    loadData();
  }, []);

  console.log(services);

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {services?.map((service) => (
          <div key={service._id} className="card bg-base-100 w-full shadow-sm">
            <figure className="px-10 pt-10">
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{service.title}</h2>
              <p>Price:{service.price}</p>
              <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
