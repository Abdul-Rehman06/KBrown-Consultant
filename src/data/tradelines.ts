export interface Tradeline {
  id: string;
  name: string;
  type: string;
  dateOpened: string;
  creditLimitBefore: string;
  currentCreditLimit: string;
  addAuthorizedUsers: string;
  howMany: string;
  statementClosingDate: string;
  bureausReportingTo: string;
  monthlyPricing: string;
  sixMonthsPricing: string;
}

export const tradelinesData: Tradeline[] = [
  {
    id: "1",
    name: "American Express (Platinum)",
    type: "Amex",
    dateOpened: "9/13/1988",
    creditLimitBefore: "Not specified",
    currentCreditLimit: "Not specified",
    addAuthorizedUsers: "Yes",
    howMany: "No Limit",
    statementClosingDate: "13th",
    bureausReportingTo: "Major 3",
    monthlyPricing: "$125",
    sixMonthsPricing: "$675"
  },
  {
    id: "2",
    name: "American Express (Everyday Card)",
    type: "Amex",
    dateOpened: "3/6/2020",
    creditLimitBefore: "$10,000",
    currentCreditLimit: "$12,300",
    addAuthorizedUsers: "Yes",
    howMany: "No Limit",
    statementClosingDate: "7th",
    bureausReportingTo: "Major 3",
    monthlyPricing: "$125",
    sixMonthsPricing: "$675"
  },
  {
    id: "3",
    name: "Apple Card",
    type: "Mastercard",
    dateOpened: "8/8/2019",
    creditLimitBefore: "$9,000",
    currentCreditLimit: "$9,250",
    addAuthorizedUsers: "Yes",
    howMany: "5",
    statementClosingDate: "1st",
    bureausReportingTo: "Major 3 + Factor Trust & Sage Stream",
    monthlyPricing: "$250",
    sixMonthsPricing: "$1,350"
  },
  {
    id: "4",
    name: "Barclays Bank (Juniper)",
    type: "Mastercard",
    dateOpened: "12/14/2006",
    creditLimitBefore: "$5,700",
    currentCreditLimit: "$17,100",
    addAuthorizedUsers: "Yes",
    howMany: "24",
    statementClosingDate: "5th",
    bureausReportingTo: "Major 3 + Innovis",
    monthlyPricing: "$400",
    sixMonthsPricing: "$2,160"
  },
  {
    id: "5",
    name: "Capital One (Quicksilver)",
    type: "Mastercard",
    dateOpened: "9/29/2005",
    creditLimitBefore: "$3,850",
    currentCreditLimit: "$3,850",
    addAuthorizedUsers: "Yes",
    howMany: "10",
    statementClosingDate: "27th",
    bureausReportingTo: "Major 3",
    monthlyPricing: "$400",
    sixMonthsPricing: "$2,160"
  },
  {
    id: "6",
    name: "Capital One (Platinum)",
    type: "Mastercard",
    dateOpened: "10/16/2004",
    creditLimitBefore: "$3,300",
    currentCreditLimit: "$3,300",
    addAuthorizedUsers: "Yes",
    howMany: "10",
    statementClosingDate: "27th",
    bureausReportingTo: "Major 3",
    monthlyPricing: "$250",
    sixMonthsPricing: "$2,160"
  },
  {
    id: "7",
    name: "CitiBank (Citi Rewards)",
    type: "Mastercard",
    dateOpened: "3/6/2020",
    creditLimitBefore: "$13,000",
    currentCreditLimit: "$15,000",
    addAuthorizedUsers: "Yes",
    howMany: "10",
    statementClosingDate: "23rd",
    bureausReportingTo: "Major 3",
    monthlyPricing: "$300",
    sixMonthsPricing: "$1,620"
  },
  {
    id: "8",
    name: "Discover Card (It)",
    type: "Discover",
    dateOpened: "2/10/2013",
    creditLimitBefore: "$6,800",
    currentCreditLimit: "$6,800",
    addAuthorizedUsers: "Yes",
    howMany: "5",
    statementClosingDate: "24th",
    bureausReportingTo: "Major 3",
    monthlyPricing: "$400",
    sixMonthsPricing: "$2,160"
  },
  {
    id: "9",
    name: "JPMCB (Freedom Unlimited)",
    type: "Visa",
    dateOpened: "3/6/2020",
    creditLimitBefore: "$23,000",
    currentCreditLimit: "$26,800",
    addAuthorizedUsers: "Yes",
    howMany: "No Limit",
    statementClosingDate: "1st",
    bureausReportingTo: "Major 3",
    monthlyPricing: "$400",
    sixMonthsPricing: "$2,700"
  },
  {
    id: "10",
    name: "US Bank (Platinum)",
    type: "Visa",
    dateOpened: "3/6/2020",
    creditLimitBefore: "$15,500",
    currentCreditLimit: "$15,500",
    addAuthorizedUsers: "Yes",
    howMany: "8",
    statementClosingDate: "17th",
    bureausReportingTo: "Major 3",
    monthlyPricing: "$400",
    sixMonthsPricing: "$2,160"
  },
  {
    id: "11",
    name: "WFBNA (Cash Wise)",
    type: "Visa",
    dateOpened: "3/6/2020",
    creditLimitBefore: "$11,500",
    currentCreditLimit: "$11,500",
    addAuthorizedUsers: "Yes",
    howMany: "6",
    statementClosingDate: "28th",
    bureausReportingTo: "Major 3 + Innovis",
    monthlyPricing: "$350",
    sixMonthsPricing: "$1,890"
  }
];
