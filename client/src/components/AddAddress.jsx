import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { assets } from "../Dummydata";
import { useAppContext } from "../context/AppContext";
const InputField = ({ type, placeholder, name, handleChange, address }) => (
  <input
    className="w-full px-2 py-2.5 border border-gray-700/30 rounded outline-none text-gray-600 focus:border-primary transition"
    type={type}
    placeholder={placeholder}
    onChange={handleChange}
    name={name}
    value={address[name]}
    required
  />
);

const AddAddress = () => {
  const { axios, user, navigate } = useAppContext();
  const [address, setAddress] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const handleChange = (e) => {
    //object destructing
    const { name, value } = e.target; //object
    setAddress((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault(); //prevents from reloading of page
    try {
      const { data } = await axios.post("/api/address/add", { address });
      if (data.success) {
        toast.success(data.message);
        navigate("/cart");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  useEffect(() => {
    if (!user) {
      navigate("/cart");
    }
  }, [user, navigate]); //if user is not available then cart page will get open
  return (
    <div className="mt-16 pb-16">
      <p className="text-2xl md:text-3xl text-gray-500">
        Add Shipping <span className="font-semibold text-primary">Address</span>
      </p>

      <div className="flex flex-col-reverse md:flex-row justify-between mt-10">
        <div className="flex-1 max-w-md">
          <form onSubmit={onSubmitHandler} className="space-y-3 mt-6 text-sm">
            <div className="grid grid-cols-2 gap-4">
              <InputField
                {...{
                  handleChange,
                  address,
                  name: "firstName",
                  type: "text",
                  placeholder: "First Name",
                }}
              />
              <InputField
                {...{
                  handleChange,
                  address,
                  name: "lastName",
                  type: "text",
                  placeholder: "Last Name",
                }}
              />
              <InputField
                {...{
                  handleChange,
                  address,
                  name: "email",
                  type: " email",
                  placeholder: "Email address",
                }}
              />
              <InputField
                {...{
                  handleChange,
                  address,
                  name: "street",
                  type: "text",
                  placeholder: "Street",
                }}
              />
              <InputField
                {...{
                  handleChange,
                  address,
                  name: "city",
                  type: "text",
                  placeholder: "City",
                }}
              />
              <InputField
                {...{
                  handleChange,
                  address,
                  name: "state",
                  type: "text",
                  placeholder: "State",
                }}
              />
              <InputField
                {...{
                  handleChange,
                  address,
                  name: "zipcode",
                  type: "number",
                  placeholder: "Zip code",
                }}
              />
              <InputField
                {...{
                  handleChange,
                  address,
                  name: "country",
                  type: "text",
                  placeholder: "Country",
                }}
              />
              <InputField
                {...{
                  handleChange,
                  address,
                  name: "phone",
                  type: "text",
                  placeholder: "Phone Number",
                }}
              />
            </div>

            <button
              type="submit"
              className="bg-primary w-full mt-6 text-white px-4 py-2 rounded  hover:bg-primary-dark transition cursor-pointer uppercase"
            >
              Save Address
            </button>
          </form>
        </div>
        <img
          className="md:mr-76 mb-16 md:mt-0 max-h-60"
          src={assets.shipping}
          alt="AddAddress"
        />
      </div>
    </div>
  );
};

export default AddAddress;
