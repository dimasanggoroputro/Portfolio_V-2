import { FaInstagram, FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa";

const quickLinks = [
  { id: 1, name: "Home", href: "#home" },
  { id: 2, name: "About", href: "#about" },
  { id: 3, name: "Projects", href: "#project" },
  { id: 4, name: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    id: 1,
    icon: <FaInstagram />,
    url: "https://www.instagram.com/dimm.angg_/",
  },
  {
    id: 2,
    icon: <FaDiscord />,
    url: "https://discord.com/users/629899371852595200",
  },
  { id: 3, icon: <FaGithub />, url: "https://github.com/dimasanggoroputro" },
  {
    id: 4,
    icon: <FaLinkedin />,
    url: "https://linkedin.com/in/dimas-anggoro-putro-688998329",
  },
];

export default function Footer() {
  return (
    <footer className="bg-Hiaju text-white py-8 px-4 md:px-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Branding */}
        <div>
          <h2 className="text-2xl font-bold">Dimas Portfolio</h2>
          <p className="mt-2">Creating digital experiences with passion.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            {quickLinks.map((link) => (
              <li key={link.id}>
                <a href={link.href} className="text-kuning hover:text-white">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold">Follow Me</h3>
          <div className="flex justify-center md:justify-start mt-2 space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-kuning hover:text-white text-xl"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center text-sm mt-8">
        © 2025 Dimas Anggoro Putro. All rights reserved.
      </div>
    </footer>
  );
}
