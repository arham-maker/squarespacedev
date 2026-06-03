export const PRIVACY_HERO = {
  titleBold: "Privacy",
  titleLight: "Policy",
} as const;

export const PRIVACY_PAGE_TITLE = "Privacy Policy Statement";

export type PrivacyContentSection = {
  id: string;
  title: string;
  paragraphs: readonly string[];
  contactLink?: boolean;
};

export const PRIVACY_SECTIONS: readonly PrivacyContentSection[] = [
  {
    id: "statement",
    title: "Privacy Policy Statement",
    paragraphs: [
      "At Squarespacedev, we prioritize your privacy and are dedicated to safeguarding your personal information. We collect only the essential data needed to process your order. Rest assured, we never share your information with anyone outside our company without your explicit consent. Your trust is important to us, and we take every measure to protect your privacy.",
    ],
  },
  {
    id: "information-collection",
    title: "Information Collection",
    paragraphs: [
      "At Squarespacedev, we gather client information through various channels, including email, phone, and our contact and order forms. Your information is safeguarded according to our privacy policy, and we never disclose, share, or sell it to third-party services.",
      "Initially, we require basic personal details such as your name, company name, billing address, email address, secondary email, phone, and fax numbers, as well as your order details and place of residence. Some information is optional.",
      "To initiate your project, we also request details in a creative brief. Additionally, we collect feedback on your experiences, including comments, complaints, and compliments about our products.",
      "For technical purposes, we record data like your IP address, browser version, operating system, and the date and time of your visit. We use Google Analytics and similar tools to gather this data, which helps us create a tailored user experience.",
    ],
  },
  {
    id: "usage",
    title: "Usage Of Collected Information",
    paragraphs: [
      "The information we collect serves multiple important purposes. Firstly, it helps us understand your specific needs and preferences, ensuring we deliver the right product for you. Your billing information is essential for processing payments securely.",
      "We use your email address to keep you updated on your order status, as well as to communicate comments and feedback. Additionally, we may send you updates about our website, promotional offers, new product launches, and industry news.",
      "This collected information also aids in refining our marketing strategies and tracking our best-selling products. Rest assured, we do not sell your information to third-party marketers or agencies, prioritizing your privacy and trust.",
    ],
  },
  {
    id: "payments",
    title: "Privacy Of Payments",
    paragraphs: [
      "We prioritize your payment privacy by offering multiple secure payment options. Our payment processor utilizes Secure Sockets Layer (SSL) technology, indicated by \"https://\" in the domain, to encrypt your billing information. This ensures that your payment details are protected throughout the transaction process. You can trust that your privacy is our top concern, and we take every measure to safeguard your financial information during every payment.",
    ],
  },
  {
    id: "confidentiality",
    title: "Confidentiality",
    paragraphs: [
      "We take confidentiality seriously and understand its importance. Your personal information, including your name, billing address, email, and phone number, is treated with the utmost care. We use this information solely for effective communication regarding your order. All data is securely stored and accessible only to authorized team members, ensuring it remains protected from theft or hacking. Rest assured, your information will never be shared with third parties unless you give consent or we are legally obligated to do so.",
    ],
  },
  {
    id: "amendments",
    title: "Amendments",
    paragraphs: [
      "Squarespacedev may update its privacy policy to enhance security measures when necessary. Any changes will be communicated in advance, along with the effective date of the updated policy, ensuring you stay informed.",
    ],
  },
  {
    id: "disclosure",
    title: "Conditions Of Information Disclosure",
    paragraphs: [
      "Our primary goal is to protect your information. Disclosure will only occur if required by law for judicial proceedings, court orders, or other legal processes, ensuring compliance with legal obligations.",
    ],
  },
  {
    id: "contact",
    title: "Contact Us",
    paragraphs: [],
    contactLink: true,
  },
] as const;
