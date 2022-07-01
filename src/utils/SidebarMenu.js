import {
  IconBankFill,
  IconBriefcase,
  IconChartBar,
  IconClipboardList,
  IconCogPercent,
  IconCoins,
  IconGroup,
  IconHandshake,
  IconMoneybag,
  IconMoneyHand24Regular,
  IconPiggyBank,
  IconScript,
  IconServices,
  IconSliders2,
  Icontransfer,
  IconUserCheck,
  IconUsers,
  IconUserSettingsVariant,
  IconUserX,
} from "./icons";

export const menuList = [
  {
    category: "CUSTOMERS",
    menu: [
      {
        title: "Users",
        link: "/users",
        icon: <IconUsers />,
      },
      {
        title: "Guarantors",
        icon: <IconGroup />,
      },
      {
        title: "Loans",
        icon: <IconMoneybag />,
      },
      {
        title: "Decision Models",
        icon: <IconHandshake />,
      },
      {
        title: "Savings",
        icon: <IconPiggyBank />,
      },
      {
        title: "Loan Requests",
        icon: <IconMoneyHand24Regular />,
      },
      {
        title: "Whitelist",
        icon: <IconUserCheck />,
      },
      {
        title: "Karma",
        icon: <IconUserX />,
      },
    ],
  },
  {
    category: "BUSINESSES",
    menu: [
      {
        title: "Organization",
        icon: <IconBriefcase />,
      },
      {
        title: "Loan Products",
        icon: <IconMoneyHand24Regular />,
      },
      {
        title: "Savings Products",
        icon: <IconBankFill />,
      },
      {
        title: "Fees and Charges",
        icon: <IconCoins />,
      },
      {
        title: "Transactions",
        icon: <Icontransfer />,
      },
      {
        title: "Services",
        icon: <IconServices />,
      },
      {
        title: "Service Account",
        icon: <IconUserSettingsVariant />,
      },
      {
        title: "Settlements",
        icon: <IconScript />,
      },
      {
        title: "Reports",
        icon: <IconChartBar />,
      },
    ],
  },
  {
    category: "SETTINGS",
    menu: [
      {
        title: "Preferences",
        icon: <IconSliders2 />,
      },
      {
        title: "Fees and Pricing",
        icon: <IconCogPercent />,
      },
      {
        title: "Audit Logs",
        icon: <IconClipboardList />,
      },
    ],
  },
];
