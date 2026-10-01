// Edit these before going live — every contact link on the site reads from here.
export const site = {
  name: "ScriptVillage",
  domain: "scriptvillage.com",
  // WhatsApp number in international format, digits only (e.g. 8801712345678)
  whatsapp: "8801XXXXXXXXX",
  // Facebook page username, used for https://m.me/<username>
  messenger: "scriptvillage",
  facebook: "https://facebook.com/scriptvillage",
  instagram: "https://instagram.com/scriptvillage",
  email: "hello@scriptvillage.com",
};

export const whatsappLink = (text = "") =>
  `https://wa.me/${site.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

export const messengerLink = `https://m.me/${site.messenger}`;
