import {
  useRef,
} from "react";

import type {
  Dispatch,
  SetStateAction,
} from "react";




import { X } from "lucide-react";

import type { User } from "./user_data";

type Props = {
  setIsOpen: Dispatch<
    SetStateAction<boolean>
  >;

  users: User[];

  isOpen: boolean;

  setUsers: Dispatch<
    SetStateAction<User[]>
  >;
};

export const AddUserModal = ({
  setIsOpen,
  isOpen,
  users,
  setUsers,
}: Props) => {

  const overlayRef =
    useRef<HTMLDivElement>(null);

  const handleOverlayClick = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {

    if (
      e.target === overlayRef.current
    ) {
      setIsOpen(false);
    }
  };

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {

    e.preventDefault();

    const formData = new FormData(
      e.currentTarget
    );

    const fullName =
      formData.get("fullName") as string;

    const email =
      formData.get("email") as string;

    const phone =
      formData.get("phone") as string;

    const gender =
      formData.get("gender") as string;

    const age = Number(
      formData.get("age")
    );

    const newUser: User = {
      id: users.length + 1,

      name: fullName,

      initials: fullName
        .split(" ")
        .map((word) => word[0])
        .join("")
        .toUpperCase(),

      role: "Patient",

      status: "Active",

      userType: "Normal User",

      email,

      phone,

      gender,

      age,

      bloodGroup: "O+",

      dob: "1995-05-15",

      joined: "2026-05-28",

      lastActive: "2026-05-28",

      appointments: 0,

      totalOrders: 0,

      totalSpent: 0,

      totalFamilyMembers: 0,

      isPrime: false,

      avatarColor: "bg-blue-600",
    };

    setUsers((prev) => [
      newUser,
      ...prev,
    ]);

    setIsOpen(false);
  };

  

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="
        fixed
        inset-0
        bg-black/40
        z-50
        flex
        items-center
        justify-center
        p-3
      "
    >

      <div
        className="
          w-full
          max-w-xl
          bg-white
          rounded-2xl
          p-6
        "
      >

        {/* HEADER */}
        <div className="flex items-start justify-between">

          <div>

            <h1 className="text-3xl font-semibold">
              Add New User
            </h1>

            <p className="text-gray-500 mt-1">
              Create a new user account
            </p>
          </div>

          <button
            onClick={() =>
              setIsOpen(false)
            }
          >
            <X size={30} />
          </button>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="mt-1 space-y-0"
        >

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <Input
              label="Full Name"
              name="fullName"
              placeholder="John Smith"
            />

            <Input
              label="Email"
              name="email"
              placeholder="john@email.com"
            />

            <Input
              label="Phone"
              name="phone"
              placeholder="+91 9876543210"
            />

            <Input
              label="Age"
              name="age"
              placeholder="25"
              type="number"
            />

            <Select
              label="Gender"
              name="gender"
              options={[
                "Male",
                "Female",
              ]}

            />



<Input
  label="Date of Birth"
  name="dob"
  type="date"
/>

<Select
  label="Blood Group"
  name="bloodGroup"
  options={[
    "A+",
    "A-",
    "B+",
    "B-",
    "AB+",
    "AB-",
    "O+",
    "O-",
  ]}
/>

<Input
  label="Area Detail"
  name="address"
  placeholder="House/Flat No."
/>

<Input
  label="Pin Code"
  name="pincode"
/>

<Input
  label="City"
  name="city"
/>

<Select
  label="State"
  name="state"
  options={[
    "Delhi",
    "Maharashtra",
    "Karnataka",
    "West Bengal",
  ]}
/>

<Input
  label="Country"
  name="country"
  placeholder="India"
/>


          </div>

          {/* BUTTONS */}
          <div className="flex justify-end gap-4 pt-5">

            <button
              type="button"
              onClick={() =>
                setIsOpen(false)
              }
              className="
                h-12
                px-6
                rounded-2xl
                border
              "
            >
              Cancel
            </button>

            <button
              type="submit"
              className="
                h-12
                px-6
                rounded-2xl
                bg-[#1F2937]
                text-white
              "
            >
              Add User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

type InputProps = {
  label: string;

  name: string;

  placeholder?: string;

  type?: string;
};

const Input = ({
  label,
  name,
  placeholder,
  type = "text",
}: InputProps) => {
  return (
    <div>

      <label className="block mb-2 text-lg">
        {label}
      </label>

      <input
        required
        name={name}
        type={type}
        placeholder={placeholder}
        className="
          w-full
          h-10
          rounded-2xl
          border
          border-gray-200
          px-4
          outline-none
          focus:ring-2
          focus:ring-green-500
        "
      />
    </div>
  );
};

type SelectProps = {
  label: string;

  name: string;

  options: string[];
};

const Select = ({
  label,
  name,
  options,
}: SelectProps) => {
  return (
    <div>

      <label className="block mb-2 text-lg">
        {label}
      </label>

      <select
        required
        name={name}
        className="
          w-full
          h-10
          rounded-2xl
          border
          border-gray-200
          px-4
          outline-none
          focus:ring-2
          focus:ring-green-500
        "
      >

        <option value="">
          Select
        </option>

        {options.map((option) => (
          <option
            key={option}
            value={option}
          >
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default AddUserModal;