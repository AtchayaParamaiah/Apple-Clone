import { useState } from "react";

const footerGroups = [
  {
    title: "Shop and Learn",
    links: [
      "Store",
      "Mac",
      "iPad",
      "iPhone",
      "Watch",
      "AirPods",
      "TV & Home",
      "AirTag",
      "Accessories",
      "Gift Cards",
    ],
  },
  {
    title: "Apple Wallet",
    links: ["Wallet"],
  },
  {
    title: "Account",
    links: [
      "Manage Your Apple Account",
      "Apple Store Account",
      "iCloud.com",
    ],
  },
  {
    title: "Entertainment",
    links: [
      "Apple TV",
      "Apple Music",
      "Apple Arcade",
      "Apple Fitness+",
      "Apple Podcasts",
      "Apple Books",
      "App Store",
    ],
  },
  {
    title: "Apple Store",
    links: [
      "Find a Store",
      "Genius Bar",
      "Today at Apple",
      "Group Reservations",
      "Apple Camp",
      "Apple Trade In",
      "Ways to Buy",
      "Recycling Programme",
      "Order Status",
      "Shopping Help",
    ],
  },
  {
    title: "For Business",
    links: ["Apple and Business", "Shop for Business"],
  },
  {
    title: "For Education",
    links: [
      "Apple and Education",
      "Shop for Education",
      "Shop for University",
    ],
  },
  {
    title: "For Healthcare",
    links: ["Apple and Healthcare"],
  },
  {
    title: "For Government",
    links: ["Apple and Government"],
  },
  {
    title: "Apple Values",
    links: [
      "Accessibility",
      "Education",
      "Environment",
      "Privacy",
      "Supply Chain Innovation",
    ],
  },
  {
    title: "About Apple",
    links: [
      "Newsroom",
      "Apple Leadership",
      "Career Opportunities",
      "Investors",
      "Ethics & Compliance",
      "Events",
      "Contact Apple",
    ],
  },
];

const footerColumns = [
  ["Shop and Learn", "Apple Wallet"],
  ["Account", "Entertainment"],
  ["Apple Store"],
  [
    "For Business",
    "For Education",
    "For Healthcare",
    "For Government",
  ],
  ["Apple Values", "About Apple"],
];

const footerNotes = [
  "* Listed pricing is Maximum Retail Price (inclusive of all taxes).",
  "‡ Includes instant cashback and No Cost EMI.",
  "Instant cashback is available with the purchase of an eligible product with qualifying American Express, Axis Bank and ICICI Bank cards only. Minimum transaction value of ₹10001 applies. Click here to see instant cashback amounts and eligible devices. Instant cashback is available for up to two orders per rolling 90-day period with an eligible card. Card eligibility is subject to terms and conditions between you and your card issuer. Total transaction value is calculated after any trade-in credit or eligible discount is applied. Any subsequent order adjustment(s) or cancellation(s) may result in instant cashback being recalculated, and any refund may be adjusted to account for instant cashback clawback; this may result in no refund being made to you. Offer may be revised or withdrawn at any time without any prior notice. Additional terms apply. Instant cashback is not available to business customers and cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Multiple separate orders cannot be combined for instant cashback.",
  "From 11 October 2026 through 11 November 2026, No Cost EMI is available with the purchase of an eligible product made using qualifying cards on 3-, 6-, 9- and 12-month tenures from most leading card issuers. Eligible iPhone Duo, Apple Watch, AirPods and Beats products are available with No Cost EMI on 3- and 6-month tenures only. Monthly pricing is rounded to the nearest rupee. Exact pricing will be provided by your card issuer, subject to your card issuer's terms and conditions. Minimum order spend applies as per your card issuer's threshold. No Cost EMI is not available to Business customers and cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Card eligibility is subject to terms and conditions between you and your card issuer. Offer may be revised or withdrawn at any time without any prior notice. Terms apply.",
  "1. Special Edition AirPods 5 with Wireless Charging Case are available from 11 October 2026 through 11 November 2026 in India at Apple Store locations, the Apple Store Online and at 000800 040 1966, while supplies last. Not valid with any other AirPods offer. Cannot be combined with Business, Education or Corporate Employee Purchase Plans. Quantity limit of two units per customer applies. If you need to replace or repair Special Edition AirPods 5 with Wireless Charging Case, subject to supply, Apple may provide you with standard edition AirPods 5 with Wireless Charging Case for replacement or repair.",
  "A subscription is required for Apple TV.",
  "Features are subject to change. Some features, applications and services may not be available in all regions or all languages.",
  "Apple Pay is a service provided by Apple Payments Services LLC, a subsidiary of Apple Inc. Neither Apple Inc. nor Apple Payments Services LLC is a bank. Any card used in Apple Pay is offered by the card issuer.",
  "Apple Pay is not available in all markets. View Apple Pay countries and regions.",
];

const legalLinks = [
  "Privacy Policy",
  "Terms of Use",
  "Sales Policy",
  "Legal",
  "Site Map",
];

function FooterLink({ children, className = "" }) {
  return (
    <a
      href="#"
      className={`text-[#424245] hover:underline ${className}`}
    >
      {children}
    </a>
  );
}

function FooterGroup({ group }) {
  return (
    <section>
      <h3 className="mb-[18px] text-[16px] font-semibold leading-tight text-[#1d1d1f]">
        {group.title}
      </h3>

      <ul className="space-y-[13px]">
        {group.links.map((link) => (
          <li key={link} className="text-[16px] leading-[1.3]">
            <FooterLink>{link}</FooterLink>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function Footer() {
  const [openSections, setOpenSections] = useState([]);

  function toggleSection(title) {
    setOpenSections((current) =>
      current.includes(title)
        ? current.filter((item) => item !== title)
        : [...current, title]
    );
  }

  return (
    <footer className="w-full bg-[#f5f5f7] text-[#1d1d1f]">
      <div className="mx-auto max-w-[980px] px-4 sm:px-6 md:px-0">

        {/* Footer notes */}
        <section className="border-b border-[#d2d2d7] py-4">
          <ul className="space-y-3 text-[12px] leading-[1.45] text-[#6e6e73]">
            {footerNotes.map((note, index) => (
              <li key={index}>{note}</li>
            ))}
          </ul>
        </section>

        {/* Breadcrumb */}
        <div className="flex items-center gap-3 py-4 text-[12px]">
          <FooterLink>
            <span className="text-[20px]"></span>
          </FooterLink>

          <span className="text-[#86868b]">›</span>
          <span>Apple TV</span>
        </div>

        {/* Desktop footer: five columns */}
        <div className="hidden grid-cols-5 gap-x-8 pb-8 md:grid">
          {footerColumns.map((column, index) => (
            <div key={index} className="flex flex-col gap-y-10">
              {column.map((title) => {
                const group = footerGroups.find(
                  (item) => item.title === title
                );

                return group ? (
                  <FooterGroup
                    key={group.title}
                    group={group}
                  />
                ) : null;
              })}
            </div>
          ))}
        </div>

        {/* Mobile footer accordion */}
        <div className="border-t border-[#d2d2d7] md:hidden">
          {footerGroups.map((group) => {
            const isOpen = openSections.includes(group.title);

            return (
              <section
                key={group.title}
                className="border-b border-[#d2d2d7]"
              >
                <button
                  type="button"
                  onClick={() => toggleSection(group.title)}
                  aria-expanded={isOpen}
                  className="flex min-h-[38px] w-full items-center justify-between gap-4 py-2 text-left text-[12px]"
                >
                  <span>{group.title}</span>

                  <span
                    aria-hidden="true"
                    className={`text-[16px] text-[#6e6e73] transition-transform duration-200 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                {isOpen && (
                  <ul className="space-y-3 pb-4 pt-1">
                    {group.links.map((link) => (
                      <li key={link} className="text-[12px]">
                        <FooterLink>{link}</FooterLink>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            );
          })}
        </div>

        {/* More ways to shop */}
        <div className="border-b border-[#d2d2d7] py-4 text-[12px] leading-[1.5] text-[#6e6e73]">
          More ways to shop:{" "}
          <FooterLink className="text-[#06c]">
            Find an Apple Store
          </FooterLink>{" "}
          or{" "}
          <FooterLink className="text-[#06c]">
            other retailer
          </FooterLink>{" "}
          near you.
          <span className="whitespace-nowrap">
            {" "}Or call{" "}
            <FooterLink className="text-[#06c]">
              000800 040 1966
            </FooterLink>
            .
          </span>
        </div>

        {/* Country - mobile */}
        <div className="py-3 md:hidden">
          <FooterLink className="text-[12px]">
            India
          </FooterLink>
        </div>

        {/* Copyright and legal links */}
        <div className="flex flex-col gap-3 py-3 md:flex-row md:items-center md:justify-between">
          <p className="order-2 text-[12px] leading-[1.5] text-[#6e6e73] md:order-1">
            Copyright © 2026 Apple Inc. All rights reserved.
          </p>

          <ul className="order-1 flex flex-wrap items-center text-[12px] leading-[1.8] md:order-2">
            {legalLinks.map((link, index) => (
              <li
                key={link}
                className={
                  index < legalLinks.length - 1
                    ? "mr-2 border-r border-[#d2d2d7] pr-2"
                    : ""
                }
              >
                <FooterLink>{link}</FooterLink>
              </li>
            ))}
          </ul>

          {/* Country - desktop */}
          <div className="order-3 hidden md:block">
            <FooterLink className="text-[12px]">
              India
            </FooterLink>
          </div>
        </div>
      </div>
    </footer>
  );
}