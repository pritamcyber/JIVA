import {
  LayoutDashboard,
  Building2,
  Users,
  BriefcaseMedical,
  Stethoscope,
  FlaskConical,
  Pill,
  Ambulance,
  Handshake,
  FileText,
  ShieldCheck,
  Settings,
} from "lucide-react";

export const sidebarItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
  },

  {
    title: "Organization",
    icon: Building2,
  },

  {
    title: "User Management",
    icon: Users,
    active: true,
  },

  {
    title: "Services",
    icon: BriefcaseMedical,
  },

  {
    title: "Consultation",
    icon: Stethoscope,
  },

  {
    title: "Lab test Booking",
    icon: FlaskConical,
  },

  {
    title: "Medicine Orders",
    icon: Pill,
  },

  {
    title: "Ambulance booking",
    icon: Ambulance,
  },

  {
    title: "Vendor & Partners",
    icon: Handshake,
  },

  {
    title: "Report",
    icon: FileText,
  },

  {
    title: "User Access",
    icon: ShieldCheck,
  },

  {
    title: "Setting",
    icon: Settings,
  },
];