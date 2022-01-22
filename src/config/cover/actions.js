export const actions = {
  "purchase": {
    title: "Purchase Policy",
    description: "to get protection from hacks & exploits",
    getHref: (coverKey) => `/cover/${coverKey}/purchase`,
  },
  "add-liquidity": {
    title: "Provide Liquidity",
    description: "to pool risks and receive rewards",
    getHref: (coverKey) => `/cover/${coverKey}/add-liquidity`,
  },
  "report": {
    title: "Report Incident",
    description: "to notify other users about the cover event",
    getHref: (coverKey) => `/cover/${coverKey}/report/details`,
  },
  "claim": {
    title: "Claim Cover",
    description: "to receive payout by claiming cxTokens",
    getHref: (_coverKey) => `/my-policies/active`,
  },
};
