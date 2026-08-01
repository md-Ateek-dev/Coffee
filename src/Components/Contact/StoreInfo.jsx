import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaCar,
  FaWifi,
} from "react-icons/fa";

import useReveal from "../../Hooks/UseReveal";
import useStaggerReveal from "../../Hooks/useStaggerReveal";

const storeInfo = [
  {
    id: 1,
    icon: FaMapMarkerAlt,
    title: "Visit Our Café",
    value: "245 Coffee Street, Suite 100",
    description: "New York, NY 10001 - Heart of Downtown",
  },
  {
    id: 2,
    icon: FaPhoneAlt,
    title: "Call Us Direct",
    value: "+1 (555) 123-4567",
    description: "Mon - Sun | 8:00 AM - 10:00 PM",
  },
  {
    id: 3,
    icon: FaEnvelope,
    title: "Email Us",
    value: "hello@auracoffee.com",
    description: "Instant support within 24 hours guaranteed",
  },
  {
    id: 4,
    icon: FaClock,
    title: "Opening Hours",
    value: "Everyday Open",
    description: "08:00 AM - 10:00 PM EST",
  },
  {
    id: 5,
    icon: FaCar,
    title: "Valet Parking",
    value: "Free Reserved Parking",
    description: "Complimentary space for all café guests",
  },
  {
    id: 6,
    icon: FaWifi,
    title: "High-Speed WiFi",
    value: "Gigabit Wireless Network",
    description: "Perfect workspace for remote productivity",
  },
];

const StoreInfo = () => {
  useReveal(".store-info");
  useStaggerReveal(".store-info", ".store-card");

  return (
    <section className="store-info py-24 bg-[#0B0A0A] border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="uppercase tracking-[5px] text-amber-500 font-semibold text-sm">
            Store Information
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 text-white">
            Visit Our Coffee House
          </h2>
          <p className="mt-4 text-zinc-300 leading-8 text-base">
            We'd love to welcome you. Visit our café, enjoy freshly brewed artisanal coffee, and experience a warm atmosphere crafted for coffee lovers.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {storeInfo.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="
                  store-card
                  rounded-3xl
                  border
                  border-zinc-700/70
                  bg-[#1a1815]
                  p-8
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-amber-500
                  hover:shadow-xl
                  hover:shadow-amber-500/10
                "
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/30 mb-6">
                  <Icon className="text-2xl" />
                </div>

                <h3 className="text-2xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 font-semibold text-lg text-amber-400">
                  {item.value}
                </p>

                <p className="mt-2 text-zinc-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StoreInfo;