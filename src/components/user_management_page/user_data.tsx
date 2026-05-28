// export type User = {
//   id: number;

//   name: string;

//   initials: string;

//   role: string;

//   status: "Active" | "Inactive";

//   userType: string;

//   email: string;

//   phone: string;

//   gender: string;

//   age: number;

//   bloodGroup: string;

//   dob: string;

//   joined: string;

//   lastActive: string;

//   appointments: number;

//   totalOrders: number;

//   totalSpent: number;

//   totalFamilyMembers: number;

//   isPrime: boolean;

//   avatarColor: string;
// };




export type Address = {
  id: number;

  type: string;

  isDefault: boolean;

  addressLine: string;

  city: string;

  state: string;

  country: string;

  pincode: string;
};

export type Activity = {
  id: number;

  title: string;

  subtitle: string;

  date: string;

  type:
    | "consultation"
    | "medicine"
    | "lab";
};

export type FamilyMember = {
  id: number;

  name: string;

  relation: string;

  phone: string;

  dob: string;
};

export type Payment = {
  id: number;

  title: string;

  amount: number;

  status:
    | "Completed"
    | "Pending";

  date: string;
};

export type Booking = {
  id: number;

  title: string;

  doctor: string;

  date: string;

  time: string;

  amount: number;

  status:
    | "Confirmed"
    | "Scheduled"
    | "Completed";
};

export type Order = {
  id: number;

  medicine: string;

  quantity: string;

  amount: number;

  status:
    | "Delivered"
    | "Pending";

  date: string;
};

export type User = {
  id: number;

  name: string;

  initials: string;

  role: string;

  status:
    | "Active"
    | "Inactive";

  userType: string;

  email: string;

  phone: string;

  gender: string;

  age: number;

  dob: string;

  bloodGroup: string;

  joined: string;

  lastActive: string;

  avatarColor: string;

  isPrime: boolean;

  appointments: number;

  totalOrders: number;

  totalFamilyMembers: number;

  totalSpent: number;

  addresses: Address[];

  activities: Activity[];

  familyMembers: FamilyMember[];

  payments: Payment[];

  bookings: Booking[];

  orders: Order[];
};



export const users: User[] = [
  {
    id: 1,

    name: "Eva Lopez",

    initials: "EL",

    role: "Patient",

    status: "Active",

    userType: "Normal User",

    email: "eva.lopez@email.com",

    phone: "+1 (555) 555-5555",

    gender: "Female",

    age: 28,

    bloodGroup: "O+",

    dob: "1997-05-12",

    joined: "2025-07-18",

    lastActive: "2026-03-21",

    appointments: 8,

    totalOrders: 12,

    totalSpent: 24000,

    totalFamilyMembers: 3,

    isPrime: true,

    avatarColor: "bg-blue-600",
    addresses: [],
    activities: [],
    familyMembers: [],
    payments: [],
    bookings: [],
    orders: [],
  },

  {
    id: 2,

    name: "Cecilia Smith",

    initials: "CS",

    role: "Patient",

    status: "Inactive",

    userType: "Normal User",

    email: "cecilia.smith@email.com",

    phone: "+1 (555) 333-3333",

    gender: "Female",

    age: 34,

    bloodGroup: "A+",

    dob: "1991-11-20",

    joined: "2024-05-22",

    lastActive: "2025-12-30",

    appointments: 5,

    totalOrders: 8,

    totalSpent: 12000,

    totalFamilyMembers: 2,

    isPrime: false,

    avatarColor: "bg-blue-600",
    addresses: [],
    activities: [],
    familyMembers: [],
    payments: [],
    bookings: [],
    orders: [],
  },

  {
    id: 3,

    name: "David Kim",

    initials: "DK",

    role: "Nurse",

    status: "Active",

    userType: "Support Staff",

    email: "david.kim@hospital.org",

    phone: "+1 (555) 444-4444",

    gender: "Male",

    age: 41,

    bloodGroup: "B+",

    dob: "1984-02-11",

    joined: "2022-11-03",

    lastActive: "2026-03-22",

    appointments: 30,

    totalOrders: 21,

    totalSpent: 52000,

    totalFamilyMembers: 4,

    isPrime: true,

    avatarColor: "bg-blue-600",
    addresses: [],
    activities: [],
    familyMembers: [],
    payments: [],
    bookings: [],
    orders: [],
  },
];
