import React, { useState } from "react";
import Select from "react-select";
import options from "./Searchable";

const Getquote = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [weight, setWeight] = useState(""); // State for the weight input
  const [selectedShipment, setSelectedShipment] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedStateto, setSelectedStateto] = useState(null);
  const [selectedCityto, setSelectedCityto] = useState(null);

  const handleSelectChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  const handleCityChange = (selectedCity) => {
    setSelectedCity(selectedCity);
  };

  const handleCitytoChange = (selectedCityto) => {
    setSelectedCityto(selectedCityto);
  };

  const handleShipmentChange = (selectedShipment) => {
    setSelectedShipment(selectedShipment);
  };

  const handleStateto = (selectedStateto) => {
    setSelectedStateto(selectedStateto);
  };

  const handleWeightChange = (e) => {
    setWeight(e.target.value); // Update the weight state on input change
  };

  const City = [
    { value: "Umuahia", label: "Umuahia" },
    { value: "Yola", label: "Yola" },
    { value: "Uyo", label: "Uyo" },
    { value: "Awka", label: "Awka" },
    { value: "Bauchi", label: "Bauchi" },
    { value: "Yenagoa", label: "Yenagoa" },
    { value: "Makurdi ", label: "Makurdi " },
    { value: "Maiduguri ", label: "Maiduguri " },
    { value: "Calabar ", label: "Calabar" },
    { value: "Asaba", label: "Asaba" },
    { value: "Abakaliki", label: "Abakaliki" },
    { value: "Benin City ", label: "Benin City " },
    { value: "Ado-Ekiti ", label: "Ado-Ekiti " },
    { value: "Enugu ", label: "Enugu " },
    { value: "Gombe ", label: "Gombe " },
    { value: "Owerri ", label: "Owerri " },
    { value: "Dutse", label: "Dutse" },
    { value: "Kaduna ", label: "Kaduna " },
    { value: "Kano ", label: "Kano " },
    { value: "Katsina ", label: "Katsina " },
    { value: "Birnin Kebbi ", label: "Birnin Kebbi " },
    { value: "Lokoja ", label: "Lokoja " },
    { value: "Ilorin", label: "Ilorin" },
    { value: "Ikeja ", label: "Ikeja " },
    { value: "Lafia ", label: "Lafia " },
    { value: "Minna ", label: "Minna " },
    { value: "Abeokuta ", label: "Abeokuta " },
    { value: "Akure ", label: "Akure " },
    { value: "Osogbo ", label: "Osogbo " },
    { value: "Ibadan  ", label: "Ibadan  " },
    { value: "Jos  ", label: "Jos  " },
    { value: "Port Harcourt  ", label: "Port Harcourt  " },
    { value: "Sokoto  ", label: "Sokoto  " },
    { value: "Jalingo  ", label: "Jalingo  " },
    { value: "Damaturu  ", label: "Damaturu " },
    { value: "Guasau   ", label: "Guasau" },
    { value: "FCT   ", label: "FCT  " },
  ];

  const Stateto = [
    { value: "Abia", label: "Abia" },
    { value: "Adamawa", label: "Adamawa" },
    { value: "Akwa Ibom", label: "Akwa Ibom" },
    { value: "Anambra", label: "Anambra" },
    { value: "Bauchi", label: "Bauchi" },
    { value: "Bayelsa", label: "Bayelsa" },
    { value: "Benue ", label: "Benue " },
    { value: "Borno ", label: "Borno " },
    { value: "Cross River", label: "Cross River" },
    { value: "Benin", label: "Benin" },
    { value: "Delta", label: "Delta" },
    { value: "Ebonyi ", label: "Ebonyi " },
    { value: "Edo ", label: "Edo " },
    { value: "Ekiti ", label: "Ekiti " },
    { value: "Enugu ", label: "Enugu " },
    { value: "Gombe ", label: "Gombe " },
    { value: "Imo ", label: "Imo " },
    { value: "Jigawa", label: "Jigawa" },
    { value: "Kaduna ", label: "Kaduna " },
    { value: "Kano ", label: "Kano " },
    { value: "Katsina ", label: "Katsina " },
    { value: "Kebbi ", label: "Kebbi " },
    { value: "Kogi ", label: "Kogi " },
    { value: "Ogun", label: "Ogun" },
    { value: "Kwara", label: "Kwara" },
    { value: "Lagos ", label: "Lagos " },
    { value: "Nasarawa ", label: "Nasarawa " },
    { value: "Niger ", label: "Niger " },
    { value: "Ogun ", label: "Ogun " },
    { value: "Ondo ", label: "Ondo " },
    { value: "Osun ", label: "Osun " },
    { value: "Oyo  ", label: "Oyo  " },
    { value: "Plateau  ", label: "Plateau  " },
    { value: "Rivers  ", label: "Rivers  " },
    { value: "Sokoto  ", label: "Sokoto  " },
    { value: "Taraba  ", label: "Taraba  " },
    { value: "Yobe  ", label: "Yobe " },
    { value: "Zamfara   ", label: "Zamfara" },
    { value: "FCT   ", label: "FCT  " },
  ];

  const Cityto = [
    { value: "Umuahia", label: "Umuahia" },
    { value: "Yola", label: "Yola" },
    { value: "Uyo", label: "Uyo" },
    { value: "Awka", label: "Awka" },
    { value: "Bauchi", label: "Bauchi" },
    { value: "Yenagoa", label: "Yenagoa" },
    { value: "Makurdi ", label: "Makurdi " },
    { value: "Maiduguri ", label: "Maiduguri " },
    { value: "Calabar ", label: "Calabar" },
    { value: "Asaba", label: "Asaba" },
    { value: "Abakaliki", label: "Abakaliki" },
    { value: "Benin City ", label: "Benin City " },
    { value: "Ado-Ekiti ", label: "Ado-Ekiti " },
    { value: "Enugu ", label: "Enugu " },
    { value: "Gombe ", label: "Gombe " },
    { value: "Owerri ", label: "Owerri " },
    { value: "Dutse", label: "Dutse" },
    { value: "Kaduna ", label: "Kaduna " },
    { value: "Kano ", label: "Kano " },
    { value: "Katsina ", label: "Katsina " },
    { value: "Birnin Kebbi ", label: "Birnin Kebbi " },
    { value: "Lokoja ", label: "Lokoja " },
    { value: "Ilorin", label: "Ilorin" },
    { value: "Ikeja ", label: "Ikeja " },
    { value: "Lafia ", label: "Lafia " },
    { value: "Minna ", label: "Minna " },
    { value: "Abeokuta ", label: "Abeokuta " },
    { value: "Akure ", label: "Akure " },
    { value: "Osogbo ", label: "Osogbo " },
    { value: "Ibadan  ", label: "Ibadan  " },
    { value: "Jos  ", label: "Jos  " },
    { value: "Port Harcourt  ", label: "Port Harcourt  " },
    { value: "Sokoto  ", label: "Sokoto  " },
    { value: "Jalingo  ", label: "Jalingo  " },
    { value: "Damaturu  ", label: "Damaturu " },
    { value: "Guasau   ", label: "Guasau" },
    { value: "FCT   ", label: "FCT  " },
  ];

  const shipmenttype = [
    { value: "Regular Shipment", label: "Regular Shipment" },
    { value: "Express Shipment", label: "Express Shipment" },
  ];

  return (
    <div className="max-w-[1640px] mx-auto bg-gray-950 py-16 h-auto flex flex-col justify-center items-center ">
      <div className=" w-[90vw] ">
        <div className=" flex flex-col items-center justify-center text-center">
          <h1 className=" text-2xl font-semibold text-white mb-2">GET QUOTE</h1>
          <p className=" text-white mb-4">
            Use State, and City Details to get your shipping rates and save
            valuable time.
          </p>
          <hr className=" h-10  w-[100%] " />
        </div>
        {/* Buttons */}
        <div className="mt-1 text-center">
          <button className="bg-gray-400 text-lg ">Local</button>
        </div>
        {/* GET QUOTE FORMS */}
        <div className="">
          {/* FROM */}
          <div className="">
            <label
              htmlFor="from-state"
              className="block text-sm font-medium text-white mb-3 mt-8"
            >
              From:
            </label>

            <div className="max-w-[350px] mb-4">
              <Select
                placeholder="Select State"
                options={options}
                value={selectedOption}
                onChange={handleSelectChange}
                isSearchable={false}
              />
            </div>
            <div className="max-w-[350px] mb-4">
              <Select
                placeholder="Select City"
                options={City}
                value={selectedCity}
                onChange={handleCityChange}
                isSearchable={false}
              />
            </div>
          </div>
          {/* TO */}
          <div>
            <label
              htmlFor="to-state"
              className="block text-sm font-medium text-white mb-3 mt-8"
            >
              To:
            </label>
            <div className="max-w-[350px] mb-4">
              <Select
                placeholder="Select State"
                options={Stateto}
                value={selectedStateto}
                onChange={handleStateto}
                isSearchable={false}
              />
            </div>
            <div className="max-w-[350px] mb-4">
              <Select
                placeholder="Select City"
                options={Cityto}
                value={selectedCityto}
                onChange={handleCitytoChange}
                isSearchable={false}
              />
            </div>
          </div>
          {/* WEIGHT */}
          <div>
            <div className="max-w-[350px] mb-4">
              <input
                type="text"
                id="weight"
                name="weight"
                value={weight}
                onChange={handleWeightChange}
                placeholder="Enter Weight"
                className="w-full px-3 py-2 text-gray-800 rounded"
                required
              />
            </div>
          </div>
          {/* SHIPMENT TYPE */}
          <div>
            <div className="max-w-[350px] mb-4">
              <Select
                placeholder="Shipment Type"
                options={shipmenttype}
                value={selectedShipment}
                onChange={handleShipmentChange}
                isSearchable={false}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Getquote;
