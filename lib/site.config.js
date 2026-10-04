// Edit these before going live — every contact link on the site reads from here.
export const site = {
  name: "Code Molecule",
  domain: "codemolecule.com",
  // WhatsApp number in international format, digits only (e.g. 8801712345678)
  whatsapp: "8801XXXXXXXXX",
  // Facebook page username, used for https://m.me/<username>
  messenger: "codemolecule",
  facebook: "https://facebook.com/codemolecule",
  instagram: "https://instagram.com/codemolecule",
  email: "hello@codemolecule.com",
};

export const whatsappLink = (text = "") =>
  `https://wa.me/${site.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

export const messengerLink = `https://m.me/${site.messenger}`;
