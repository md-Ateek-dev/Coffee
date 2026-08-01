import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaXTwitter,
  FaArrowRight,
} from "react-icons/fa6";

import useReveal from "../../Hooks/UseReveal";
import useStaggerReveal from "../../Hooks/useStaggerReveal";

const socialLinks = [
  {
    id: 1,
    name: "Instagram",
    username: "@AuraCoffee",
    icon: FaInstagram,
    color: "hover:bg-pink-500",
    link: "#",
  },
  {
    id: 2,
    name: "Facebook",
    username: "Aura Coffee",
    icon: FaFacebookF,
    color: "hover:bg-blue-600",
    link: "#",
  },
  {
    id: 3,
    name: "X (Twitter)",
    username: "@AuraCoffee",
    icon: FaXTwitter,
    color: "hover:bg-black",
    link: "#",
  },
  {
    id: 4,
    name: "LinkedIn",
    username: "Aura Coffee",
    icon: FaLinkedinIn,
    color: "hover:bg-blue-700",
    link: "#",
  },
  {
    id: 5,
    name: "YouTube",
    username: "Aura Coffee",
    icon: FaYoutube,
    color: "hover:bg-red-600",
    link: "#",
  },
];

const SocialLinks = () => {
  useReveal(".social-section");
  useStaggerReveal(".social-section", ".social-card");

  return (
    <section className="social-section py-24 bg-[#0F0E0D]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <span className="uppercase tracking-[5px] text-amber-500">
            Stay Connected
          </span>

          <h2 className="mt-4 text-5xl font-bold">
            Follow Aura Coffee
          </h2>

          <p className="mt-6 text-zinc-400 leading-8">
            Join our community to discover new coffee recipes,
            behind-the-scenes stories, café updates and exclusive offers.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-5">

          {socialLinks.map((social) => {
            const Icon = social.icon;

            return (
              <a
                key={social.id}
                href={social.link}
                className={`
                  social-card
                  group
                  rounded-3xl
                  border
                  border-zinc-800
                  bg-[#181715]
                  p-8
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-amber-500
                  ${social.color}
                `}
              >
                <div className="flex justify-between items-center">

                  <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center">

                    <Icon className="text-3xl text-amber-500 group-hover:text-white transition" />

                  </div>

                  <FaArrowRight className="opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition" />

                </div>

                <h3 className="mt-8 text-2xl font-semibold">
                  {social.name}
                </h3>

                <p className="mt-3 text-zinc-400">
                  {social.username}
                </p>

              </a>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default SocialLinks;