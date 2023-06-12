export const summaryData = {
  metrics: [
    {
      id: "sales",
      title: "Sales",
      metricId: "totalSales",
      tip: "Sales = Gross Sales - Discounts + Taxes + Shipping",
      services: ["shopify"],
      type: "currency",
      delta: -62,
      values: {
        current: 473.09000000000003,
        previous: 1259.42,
      },
      charts: {
        current: [
          {
            x: 162,
            y: 473.09000000000003,
          },
          {
            x: 163,
            y: 0,
          },
        ],
        previous: [
          {
            x: 161,
            y: 786.33,
          },
          {
            x: 162,
            y: 473.09000000000003,
          },
        ],
      },
    },
    {
      id: "newCustomerSales",
      title: "New Customer Revenue",
      metricId: "newCustomerSales",
      tip: "Amount of sales derived from new customers",
      services: ["shopify"],
      type: "currency",
      delta: -52,
      values: {
        current: 222.67000000000002,
        previous: 464.08000000000004,
      },
      charts: {
        current: [
          {
            x: 162,
            y: 222.67000000000002,
          },
          {
            x: 163,
            y: 0,
          },
        ],
        previous: [
          {
            x: 161,
            y: 241.41,
          },
          {
            x: 162,
            y: 222.67000000000002,
          },
        ],
      },
    },
    {
      id: "netSales",
      title: "Net Sales",
      metricId: "netSales",
      tip: "Sales - Refunds",
      services: ["shopify"],
      type: "currency",
      delta: -62,
      values: {
        current: 473.09000000000003,
        previous: 1259.42,
      },
      charts: {
        current: [
          {
            x: 162,
            y: 473.09000000000003,
          },
          {
            x: 163,
            y: 0,
          },
        ],
        previous: [
          {
            x: 161,
            y: 786.33,
          },
          {
            x: 162,
            y: 473.09000000000003,
          },
        ],
      },
    },
    {
      id: "rcRevenue",
      title: "Returning Customer Revenue",
      metricId: "rcRevenue",
      tip: "Amount of sales derived from returning customers",
      services: ["shopify"],
      type: "currency",
      delta: -68,
      values: {
        current: 250.42000000000002,
        previous: 795.34,
      },
      charts: {
        current: [
          {
            x: 162,
            y: 250.42000000000002,
          },
          {
            x: 163,
            y: 0,
          },
        ],
        previous: [
          {
            x: 161,
            y: 544.9200000000001,
          },
          {
            x: 162,
            y: 250.42000000000002,
          },
        ],
      },
    },
    {
      id: "paymentGateways",
      title: "Payment Gateways",
      metricId: "totalPaymentGatewayCosts",
      tip: "Payment processing fees. Edit these in: Store > Gateway Costs",
      services: ["shopify"],
      type: "currency",
      delta: -62,
      values: {
        current: 14.27,
        previous: 38.05,
      },
      charts: {
        current: [
          {
            x: 162,
            y: 14.27,
          },
          {
            x: 163,
            y: 0,
          },
        ],
        previous: [
          {
            x: 161,
            y: 23.779999999999998,
          },
          {
            x: 162,
            y: 14.27,
          },
        ],
      },
    },
    {
      id: "cogs",
      title: "COGS",
      metricId: "totalProductCosts",
      tip: "Cost of goods sold. Imported from Shopify, or edit these in: Store > Cost of Goods",
      services: ["shopify"],
      type: "currency",
      delta: -78,
      values: {
        current: 27.16,
        previous: 126.94999999999999,
      },
      charts: {
        current: [
          {
            x: 162,
            y: 27.16,
          },
          {
            x: 163,
            y: 0,
          },
        ],
        previous: [
          {
            x: 161,
            y: 99.78999999999999,
          },
          {
            x: 162,
            y: 27.16,
          },
        ],
      },
    },
    {
      id: "handlingFees",
      title: "Handling Fees",
      metricId: "totalHandlingFees",
      tip: "Cost of boxing, packaging, or “pick & pack” services. Edit these in: Store > Cost of Goods",
      services: ["shopify"],
      type: "currency",
      delta: -72,
      values: {
        current: 56,
        previous: 203,
      },
      charts: {
        current: [
          {
            x: 162,
            y: 18,
          },
          {
            x: 163,
            y: 0,
          },
        ],
        previous: [
          {
            x: 161,
            y: 58.5,
          },
          {
            x: 162,
            y: 18,
          },
        ],
      },
    },
    {
      id: "customSpends",
      title: "Custom Expenses",
      metricId: "totalCustomSpends",
      tip: "Any additional expenses you'd like to see deducted from your Net Profit. Edit these in: Store > Custom Expenses",
      services: ["shopify"],
      type: "currency",
      delta: 0,
      values: {
        current: 706.6763333333333,
        previous: 705.2688333333333,
      },
      charts: {
        current: [
          {
            x: 0,
            y: 706.6763333333333,
          },
        ],
        previous: [
          {
            x: 0,
            y: 705.2688333333333,
          },
        ],
      },
    },
    {
      id: "inventoryItems",
      title: "Items",
      metricId: "totalInventoryItems",
      tip: "Number of total items you have in stock",
      services: ["shopify"],
      type: "decimal",
      delta: 0,
      values: {
        current: 625588,
        previous: 625588,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "inventoryItemsMissing",
      title: "Missing Items",
      metricId: "totalInventoryItemsMissing",
      tip: "Number of back order items",
      services: ["shopify"],
      type: "decimal",
      delta: 0,
      values: {
        current: 147,
        previous: 147,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "totalInventoryCost",
      title: "Cost",
      metricId: "totalInventoryCost",
      tip: "How much did the items cost",
      services: ["shopify"],
      type: "currency",
      delta: 0,
      values: {
        current: 144649.27000000002,
        previous: 144649.27000000002,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "totalInventoryValue",
      title: "Value",
      metricId: "totalInventoryValue",
      tip: "Retail value of items in stock",
      services: ["shopify"],
      type: "currency",
      delta: 0,
      values: {
        current: 794724.76,
        previous: 794724.76,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "shopifyAov",
      title: "AOV",
      metricId: "shopifyAov",
      tip: "Average Order Value. Sales / Orders>$0",
      services: ["shopify"],
      type: "currency",
      delta: -1,
      values: {
        current: 59.136250000000004,
        previous: 59.97238095238096,
      },
      charts: {
        current: [
          {
            x: 162,
            y: 59.136250000000004,
          },
          {
            x: 163,
            y: 0,
          },
        ],
        previous: [
          {
            x: 161,
            y: 37.44428571428572,
          },
          {
            x: 162,
            y: 59.136250000000004,
          },
        ],
      },
    },
    {
      id: "aov",
      title: "AOV",
      metricId: "averageGaRevenuePerTransaction",
      tip: "Average Order Value",
      services: ["GOOGLE_ANALYTICS"],
      type: "currency",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 1,
            y: 0,
          },
          {
            x: 2,
            y: 0,
          },
          {
            x: 3,
            y: 0,
          },
          {
            x: 4,
            y: 0,
          },
          {
            x: 5,
            y: 0,
          },
          {
            x: 6,
            y: 0,
          },
          {
            x: 7,
            y: 0,
          },
          {
            x: 8,
            y: 0,
          },
          {
            x: 9,
            y: 0,
          },
          {
            x: 10,
            y: 0,
          },
          {
            x: 11,
            y: 0,
          },
          {
            x: 12,
            y: 0,
          },
          {
            x: 13,
            y: 0,
          },
          {
            x: 14,
            y: 0,
          },
          {
            x: 15,
            y: 0,
          },
        ],
        previous: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 1,
            y: 0,
          },
          {
            x: 2,
            y: 0,
          },
          {
            x: 3,
            y: 0,
          },
          {
            x: 4,
            y: 0,
          },
          {
            x: 5,
            y: 0,
          },
          {
            x: 6,
            y: 0,
          },
          {
            x: 7,
            y: 0,
          },
          {
            x: 8,
            y: 0,
          },
          {
            x: 9,
            y: 0,
          },
          {
            x: 10,
            y: 0,
          },
          {
            x: 11,
            y: 0,
          },
          {
            x: 12,
            y: 0,
          },
          {
            x: 13,
            y: 0,
          },
          {
            x: 14,
            y: 0,
          },
          {
            x: 15,
            y: 0,
          },
        ],
      },
    },
    {
      id: "facebookAds",
      title: "Facebook Ads",
      metricId: "fb_ads_spend",
      tip: "Ad spend",
      services: ["facebook-ads"],
      type: "currency",
      delta: -39,
      values: {
        current: 304.15000000000003,
        previous: 501.57000000000005,
      },
      charts: {
        current: [
          {
            x: 162,
            y: 264.86,
          },
          {
            x: 163,
            y: 39.29,
          },
        ],
        previous: [
          {
            x: 161,
            y: 236.71,
          },
          {
            x: 162,
            y: 264.86,
          },
        ],
      },
    },
    {
      id: "googleAds",
      title: "Google Ads",
      metricId: "ga_adCost",
      tip: "Google Ad Spend",
      services: ["OLD_GOOGLE_ADS", "google-ads"],
      type: "currency",
      delta: -33,
      values: {
        current: 50.492042,
        previous: 75.425815,
      },
      charts: {
        current: [
          {
            x: 162,
            y: 48.844338,
          },
          {
            x: 163,
            y: 1.647704,
          },
        ],
        previous: [
          {
            x: 161,
            y: 26.581477,
          },
          {
            x: 162,
            y: 48.844338,
          },
        ],
      },
    },
    {
      id: "googleAllCpa",
      title: "Google CPA",
      metricId: "googleAllCpa",
      tip: "Cost Per Acquisition",
      services: ["OLD_GOOGLE_ADS", "google-ads"],
      type: "currency",
      delta: 73,
      values: {
        current: 20.178373766377533,
        previous: 11.599893729665803,
      },
      charts: {
        current: [
          {
            x: 162,
            y: 0.05122978634698662,
          },
          {
            x: 163,
            y: 0,
          },
        ],
        previous: [
          {
            x: 161,
            y: 0.150480727613443,
          },
          {
            x: 162,
            y: 0.05122978634698662,
          },
        ],
      },
    },
    {
      id: "googleBounceRate",
      title: "Bounce Rate",
      metricId: "googleBounceRate",
      tip: "Percentage of visitors to the website that leave before any action or visiting other pages",
      services: ["GOOGLE_ANALYTICS"],
      type: "percent",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "googleConversionValue",
      title: "Google Conversion Value",
      metricId: "googleConversionValue",
      tip: "Recorded revenue from Google Ads",
      services: ["OLD_GOOGLE_ADS", "google-ads"],
      type: "currency",
      delta: -64,
      values: {
        current: 168.16189430000003,
        previous: 479.5018943,
      },
      charts: {
        current: [
          {
            x: 162,
            y: 168.16189430000003,
          },
          {
            x: 163,
            y: 0,
          },
        ],
        previous: [
          {
            x: 161,
            y: 311.34,
          },
          {
            x: 162,
            y: 168.16189430000003,
          },
        ],
      },
    },
    {
      id: "snapchatAds",
      title: "Snapchat Ads",
      metricId: "totalSnapchatSpend",
      tip: "Snapchat Ad Spend",
      services: ["snapchat-ads"],
      type: "currency",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "snapchatRoas",
      title: "Snapchat ROAS",
      metricId: "totalSnapchatRoas",
      tip: "Return on Ad Spend",
      services: ["snapchat-ads"],
      type: "decimal",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "snapchatImpressions",
      title: "Snapchat Impressions",
      metricId: "snapchatImpressions",
      services: ["snapchat-ads"],
      type: "decimal",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "snapchatSwipes",
      title: "Snapchat Swipes",
      metricId: "snapchat_swipes",
      services: ["snapchat-ads"],
      type: "decimal",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "snapchatCpm",
      title: "Snapchat CPM",
      metricId: "snapchatCpm",
      tip: "Cost Per 1000 Impressions",
      services: ["snapchat-ads"],
      type: "currency",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "snapchatCpa",
      title: "Snapchat CPA",
      metricId: "snapchatCpa",
      tip: "Cost Per Acquisition",
      services: ["snapchat-ads"],
      type: "currency",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "snapchatConversionValue",
      title: "Snapchat Conversion Value",
      metricId: "totalSnapchatConversionPurchasesValue",
      services: ["snapchat-ads"],
      type: "currency",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "googleConversionRate",
      title: "Conversion Rate",
      metricId: "averageGaTransactionsPerSession",
      tip: "Google Analytics reported conversion rate",
      services: ["GOOGLE_ANALYTICS"],
      type: "percent",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 1,
            y: 0,
          },
          {
            x: 2,
            y: 0,
          },
          {
            x: 3,
            y: 0,
          },
          {
            x: 4,
            y: 0,
          },
          {
            x: 5,
            y: 0,
          },
          {
            x: 6,
            y: 0,
          },
          {
            x: 7,
            y: 0,
          },
          {
            x: 8,
            y: 0,
          },
          {
            x: 9,
            y: 0,
          },
          {
            x: 10,
            y: 0,
          },
          {
            x: 11,
            y: 0,
          },
          {
            x: 12,
            y: 0,
          },
          {
            x: 13,
            y: 0,
          },
          {
            x: 14,
            y: 0,
          },
          {
            x: 15,
            y: 0,
          },
        ],
        previous: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 1,
            y: 0,
          },
          {
            x: 2,
            y: 0,
          },
          {
            x: 3,
            y: 0,
          },
          {
            x: 4,
            y: 0,
          },
          {
            x: 5,
            y: 0,
          },
          {
            x: 6,
            y: 0,
          },
          {
            x: 7,
            y: 0,
          },
          {
            x: 8,
            y: 0,
          },
          {
            x: 9,
            y: 0,
          },
          {
            x: 10,
            y: 0,
          },
          {
            x: 11,
            y: 0,
          },
          {
            x: 12,
            y: 0,
          },
          {
            x: 13,
            y: 0,
          },
          {
            x: 14,
            y: 0,
          },
          {
            x: 15,
            y: 0,
          },
        ],
      },
    },
    {
      id: "googleSessions",
      title: "Sessions",
      metricId: "totalGoogleAnalyticsSessions",
      services: ["GOOGLE_ANALYTICS"],
      type: "decimal",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 1,
            y: 0,
          },
          {
            x: 2,
            y: 0,
          },
          {
            x: 3,
            y: 0,
          },
          {
            x: 4,
            y: 0,
          },
          {
            x: 5,
            y: 0,
          },
          {
            x: 6,
            y: 0,
          },
          {
            x: 7,
            y: 0,
          },
          {
            x: 8,
            y: 0,
          },
          {
            x: 9,
            y: 0,
          },
          {
            x: 10,
            y: 0,
          },
          {
            x: 11,
            y: 0,
          },
          {
            x: 12,
            y: 0,
          },
          {
            x: 13,
            y: 0,
          },
          {
            x: 14,
            y: 0,
          },
          {
            x: 15,
            y: 0,
          },
        ],
        previous: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 1,
            y: 0,
          },
          {
            x: 2,
            y: 0,
          },
          {
            x: 3,
            y: 0,
          },
          {
            x: 4,
            y: 0,
          },
          {
            x: 5,
            y: 0,
          },
          {
            x: 6,
            y: 0,
          },
          {
            x: 7,
            y: 0,
          },
          {
            x: 8,
            y: 0,
          },
          {
            x: 9,
            y: 0,
          },
          {
            x: 10,
            y: 0,
          },
          {
            x: 11,
            y: 0,
          },
          {
            x: 12,
            y: 0,
          },
          {
            x: 13,
            y: 0,
          },
          {
            x: 14,
            y: 0,
          },
          {
            x: 15,
            y: 0,
          },
        ],
      },
    },
    {
      id: "shopifyOrders",
      title: "Shopify Orders",
      metricId: "totalOrders",
      services: ["shopify"],
      type: "decimal",
      delta: -72,
      values: {
        current: 8,
        previous: 29,
      },
      charts: {
        current: [
          {
            x: 162,
            y: 8,
          },
          {
            x: 163,
            y: 0,
          },
        ],
        previous: [
          {
            x: 161,
            y: 21,
          },
          {
            x: 162,
            y: 8,
          },
        ],
      },
    },
    {
      id: "totalNetProfit",
      title: "Net Profit",
      metricId: "totalNetProfit",
      tip: "Sales - Returns - Expenses (COGS, Shipping, Handling, Payment Gateways, Taxes, Custom Expenses) - Blended Ad Spend",
      services: ["triple-whale"],
      type: "currency",
      delta: -48,
      values: {
        current: -711.6583753333333,
        previous: -479.0646483333331,
      },
      charts: {
        current: [
          {
            x: 162,
            y: -632.7206713333333,
          },
          {
            x: 163,
            y: -40.937704,
          },
        ],
        previous: [
          {
            x: 161,
            y: -426.5203103333332,
          },
          {
            x: 162,
            y: 73.95566200000003,
          },
        ],
      },
    },
    {
      id: "cashTurnover",
      title: "Cash Turnover",
      metricId: "cashTurnover",
      tip: "Sales - Shipping - Taxes - Blended Ad Spend - Returns",
      services: ["triple-whale"],
      type: "currency",
      delta: -321,
      values: {
        current: -628.4983753333333,
        previous: -149.11464833333312,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "totalNetMargin",
      title: "Net Margin",
      metricId: "totalNetMargin",
      tip: "Net Profit / Sales x 100. In other words: Percentage of Sales that is Net Profit. Answers the question of: “What percentage of my [Sales] is my [Net Profit]?”",
      services: ["triple-whale"],
      type: "percent",
      delta: -295,
      values: {
        current: -150.4276935325907,
        previous: -38.038513627966296,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "totalCpa",
      title: "Blended CPA",
      metricId: "totalCpa",
      tip: "Cost Per Acquisition. Ad Spend/Google Analytics Transaction",
      services: ["shopify", "facebook-ads", "google-ads", "snapchat-ads", "tiktok-ads", "pinterest-ads", "bing"],
      type: "currency",
      delta: 61,
      values: {
        current: 44.33025525000001,
        previous: 27.47599119047619,
      },
      charts: {
        current: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 162,
            y: 39.21304225,
          },
          {
            x: 163,
            y: 0,
          },
        ],
        previous: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 161,
            y: 20.25319053846154,
          },
          {
            x: 162,
            y: 39.21304225,
          },
        ],
      },
    },
    {
      id: "googleRps",
      title: "RPS",
      metricId: "totalRevenuePerSession",
      tip: "Revenue Per Session. Sales / Web Sessions",
      services: ["shopify"],
      type: "currency",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "totalRefunds",
      title: "Refunds",
      metricId: "totalRefunds",
      tip: "The amount refunded during the selected timeframe",
      services: ["shopify"],
      type: "currency",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [
          {
            x: 162,
            y: 0,
          },
          {
            x: 163,
            y: 0,
          },
        ],
        previous: [
          {
            x: 161,
            y: 0,
          },
          {
            x: 162,
            y: 0,
          },
        ],
      },
    },
    {
      id: "facebookRoas",
      title: "Facebook ROAS",
      metricId: "fb_ads_purchase_roas",
      tip: "Return on Ad Spend",
      services: ["facebook-ads"],
      type: "decimal",
      delta: -49,
      values: {
        current: 0.5243136610225217,
        previous: 1.0434435871363916,
      },
      charts: {
        current: [
          {
            x: 162,
            y: 0.48316091520048327,
          },
          {
            x: 163,
            y: 0.8017307202850599,
          },
        ],
        previous: [
          {
            x: 161,
            y: 1.6703561319758353,
          },
          {
            x: 162,
            y: 0.48316091520048327,
          },
        ],
      },
    },
    {
      id: "googleRoas",
      title: "Google ROAS",
      metricId: "ga_ROAS",
      tip: "Return on Ad Spend",
      services: ["OLD_GOOGLE_ADS", "google-ads"],
      type: "decimal",
      delta: -47,
      values: {
        current: 3.3304633292509744,
        previous: 6.357265006682394,
      },
      charts: {
        current: [
          {
            x: 162,
            y: 3.4428124361108146,
          },
          {
            x: 163,
            y: 0,
          },
        ],
        previous: [
          {
            x: 161,
            y: 11.712667433792335,
          },
          {
            x: 162,
            y: 3.4428124361108146,
          },
        ],
      },
    },
    {
      id: "totalGoogleAdsCtr",
      title: "Google CTR",
      metricId: "totalGoogleAdsCtr",
      tip: "Click Through Rate. Percentage of people clicking the ad",
      services: ["google-ads"],
      type: "decimal",
      delta: 12,
      values: {
        current: 1.2952210808396605,
        previous: 1.155137676292814,
      },
      charts: {
        current: [
          {
            x: 162,
            y: 1.2098765432098766,
          },
          {
            x: 163,
            y: 2.102803738317757,
          },
        ],
        previous: [
          {
            x: 161,
            y: 1.0898379970544918,
          },
          {
            x: 162,
            y: 1.2098765432098766,
          },
        ],
      },
    },
    {
      id: "totalGoogleAdsCpm",
      title: "Google CPM",
      metricId: "totalGoogleAdsCpm",
      tip: "Cost Per 1000 Impressions",
      services: ["google-ads"],
      type: "decimal",
      delta: 11,
      values: {
        current: 11.275578829834748,
        previous: 10.131069845533915,
      },
      charts: {
        current: [
          {
            x: 162,
            y: 12.060330370370371,
          },
          {
            x: 163,
            y: 3.8497757009345794,
          },
        ],
        previous: [
          {
            x: 161,
            y: 7.829595581737849,
          },
          {
            x: 162,
            y: 12.060330370370371,
          },
        ],
      },
    },
    {
      id: "googleCpc",
      title: "Google CPC",
      metricId: "googleCpc",
      tip: "Cost Per Click",
      services: ["google-ads"],
      type: "decimal",
      delta: 0,
      values: {
        current: 0.870552448275862,
        previous: 0.8770443604651162,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "totalGoogleAdsClicks",
      title: "Google Clicks",
      metricId: "totalGoogleAdsClicks",
      services: ["google-ads"],
      type: "decimal",
      delta: -32,
      values: {
        current: 58,
        previous: 86,
      },
      charts: {
        current: [
          {
            x: 162,
            y: 49,
          },
          {
            x: 163,
            y: 9,
          },
        ],
        previous: [
          {
            x: 161,
            y: 37,
          },
          {
            x: 162,
            y: 49,
          },
        ],
      },
    },
    {
      id: "totalGoogleAdsImpressions",
      title: "Google Impressions",
      metricId: "totalGoogleAdsImpressions",
      services: ["google-ads"],
      type: "decimal",
      delta: -39,
      values: {
        current: 4478,
        previous: 7445,
      },
      charts: {
        current: [
          {
            x: 162,
            y: 4050,
          },
          {
            x: 163,
            y: 428,
          },
        ],
        previous: [
          {
            x: 161,
            y: 3395,
          },
          {
            x: 162,
            y: 4050,
          },
        ],
      },
    },
    {
      id: "ga_transactions_adGroup",
      title: "Google All Conversions",
      metricId: "ga_transactions_adGroup",
      services: ["google-ads"],
      type: "decimal",
      delta: -58,
      values: {
        current: 15.586169000000002,
        previous: 37.586169,
      },
      charts: {
        current: [
          {
            x: 162,
            y: 15.586169000000002,
          },
          {
            x: 163,
            y: 0,
          },
        ],
        previous: [
          {
            x: 161,
            y: 22,
          },
          {
            x: 162,
            y: 15.586169000000002,
          },
        ],
      },
    },
    {
      id: "ga_all_transactionsRevenue_adGroup",
      title: "Google All Conversions Value",
      metricId: "ga_all_transactionsRevenue_adGroup",
      services: ["google-ads"],
      type: "decimal",
      delta: -59,
      values: {
        current: 618.1557783,
        previous: 1512.3957783,
      },
      charts: {
        current: [
          {
            x: 162,
            y: 618.1557783,
          },
          {
            x: 163,
            y: 0,
          },
        ],
        previous: [
          {
            x: 161,
            y: 894.24,
          },
          {
            x: 162,
            y: 618.1557783,
          },
        ],
      },
    },
    {
      id: "ga_all_transactions_adGroup",
      title: "Google Conversions",
      metricId: "ga_all_transactions_adGroup",
      services: ["google-ads"],
      type: "decimal",
      delta: -61,
      values: {
        current: 2.5022849999999996,
        previous: 6.502285,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "totalAllRoas",
      title: "Google All Roas",
      metricId: "totalAllRoas",
      services: ["google-ads"],
      type: "decimal",
      delta: -38,
      values: {
        current: 12.24263772695111,
        previous: 20.051434357056667,
      },
      charts: {
        current: [
          {
            x: 162,
            y: 12.655628136468959,
          },
          {
            x: 163,
            y: 0,
          },
        ],
        previous: [
          {
            x: 161,
            y: 33.64147146526132,
          },
          {
            x: 162,
            y: 12.655628136468959,
          },
        ],
      },
    },
    {
      id: "googleCpa",
      title: "Google All CPA",
      metricId: "googleCpa",
      tip: "Cost Per All Conversions",
      services: ["google-ads"],
      type: "currency",
      delta: 61,
      values: {
        current: 3.2395415448145077,
        previous: 2.0067438902858123,
      },
      charts: {
        current: [
          {
            x: 162,
            y: 0.31909878684403503,
          },
          {
            x: 163,
            y: 0,
          },
        ],
        previous: [
          {
            x: 161,
            y: 0.8276440018739365,
          },
          {
            x: 162,
            y: 0.31909878684403503,
          },
        ],
      },
    },
    {
      id: "facebookCpc",
      title: "Facebook CPC",
      metricId: "averageFacebookCpc",
      tip: "Cost Per Click",
      services: ["facebook-ads"],
      type: "currency",
      delta: -2,
      values: {
        current: 0.6526824034334765,
        previous: 0.6669813829787234,
      },
      charts: {
        current: [
          {
            x: 162,
            y: 0.6572208436724566,
          },
          {
            x: 163,
            y: 0.6236507936507937,
          },
        ],
        previous: [
          {
            x: 161,
            y: 0.6782521489971347,
          },
          {
            x: 162,
            y: 0.6572208436724566,
          },
        ],
      },
    },
    {
      id: "facebookViewThrough",
      title: "Facebook View Conversion Value",
      metricId: "facebookViewThrough",
      tip: "Facebook View Conversion Value",
      services: ["facebook-ads"],
      type: "currency",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [
          {
            x: 162,
            y: 0,
          },
          {
            x: 163,
            y: 0,
          },
        ],
        previous: [
          {
            x: 161,
            y: 0,
          },
          {
            x: 162,
            y: 0,
          },
        ],
      },
    },
    {
      id: "facebookViewThroughRoas",
      title: "Facebook View ROAS",
      metricId: "facebookViewThroughRoas",
      tip: "Facebook View Return on Ad Spend",
      services: ["facebook-ads"],
      type: "decimal",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [
          {
            x: 162,
            y: 0,
          },
          {
            x: 163,
            y: 0,
          },
        ],
        previous: [
          {
            x: 161,
            y: 0,
          },
          {
            x: 162,
            y: 0,
          },
        ],
      },
    },
    {
      id: "facebookViewThroughCpa",
      title: "Facebook View CPA",
      metricId: "facebookViewThroughCpa",
      tip: "Facebook View Cost Per Acquisition",
      services: ["facebook-ads"],
      type: "decimal",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "facebookCpm",
      title: "Facebook CPM",
      metricId: "averageFacebookCpm",
      tip: "Cost Per 1000 Impressions",
      services: ["facebook-ads"],
      type: "currency",
      delta: -3,
      values: {
        current: 27.622377622377627,
        previous: 28.51287590245012,
      },
      charts: {
        current: [
          {
            x: 162,
            y: 27.935871743486974,
          },
          {
            x: 163,
            y: 25.679738562091504,
          },
        ],
        previous: [
          {
            x: 161,
            y: 29.18742293464858,
          },
          {
            x: 162,
            y: 27.935871743486974,
          },
        ],
      },
    },
    {
      id: "facebookCtr",
      title: "Facebook CTR",
      metricId: "facebookCtr",
      tip: "Click Through Rate. Percentage of people clicking the ad",
      services: ["facebook-ads"],
      type: "percent",
      delta: -1,
      values: {
        current: 4.232131504858778,
        previous: 4.274913307941561,
      },
      charts: {
        current: [
          {
            x: 162,
            y: 4.250606476110115,
          },
          {
            x: 163,
            y: 4.117647058823529,
          },
        ],
        previous: [
          {
            x: 161,
            y: 4.303329223181258,
          },
          {
            x: 162,
            y: 4.250606476110115,
          },
        ],
      },
    },
    {
      id: "facebookCpoc",
      title: "Facebook CPOC",
      metricId: "facebookCostPerOutboundClick",
      tip: "Cost Per Outbound Click",
      services: ["facebook-ads"],
      type: "currency",
      delta: 1,
      values: {
        current: 1.3457964601769914,
        previous: 1.330424403183024,
      },
      charts: {
        current: [
          {
            x: 162,
            y: 1.351326530612245,
          },
          {
            x: 163,
            y: 1.3096666666666665,
          },
        ],
        previous: [
          {
            x: 161,
            y: 1.3077900552486188,
          },
          {
            x: 162,
            y: 1.351326530612245,
          },
        ],
      },
    },
    {
      id: "facebookConversionValue",
      title: "Facebook Conversion Value",
      metricId: "facebookConversionValue",
      tip: "Facebook-reported revenue from Purchases on your site or on Meta Shop",
      services: ["facebook-ads"],
      type: "currency",
      delta: -69,
      values: {
        current: 159.47,
        previous: 523.36,
      },
      charts: {
        current: [
          {
            x: 162,
            y: 127.97,
          },
          {
            x: 163,
            y: 31.5,
          },
        ],
        previous: [
          {
            x: 161,
            y: 395.39,
          },
          {
            x: 162,
            y: 127.97,
          },
        ],
      },
    },
    {
      id: "facebookWebConversionValue",
      title: "Facebook Web Conversion Value",
      metricId: "facebookWebConversionValue",
      tip: "Facebook-reported revenue from Purchases on your site",
      services: ["facebook-ads"],
      type: "currency",
      delta: -69,
      values: {
        current: 159.47,
        previous: 523.36,
      },
      charts: {
        current: [
          {
            x: 162,
            y: 127.97,
          },
          {
            x: 163,
            y: 31.5,
          },
        ],
        previous: [
          {
            x: 161,
            y: 395.39,
          },
          {
            x: 162,
            y: 127.97,
          },
        ],
      },
    },
    {
      id: "facebookMetaConversionValue",
      title: "Facebook Meta Conversion Value",
      metricId: "facebookMetaConversionValue",
      tip: "Facebook-reported revenue from Purchases on Meta Shop",
      services: ["facebook-ads"],
      type: "currency",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [
          {
            x: 162,
            y: 0,
          },
          {
            x: 163,
            y: 0,
          },
        ],
        previous: [
          {
            x: 161,
            y: 0,
          },
          {
            x: 162,
            y: 0,
          },
        ],
      },
    },
    {
      id: "facebookRevenuePerClick",
      title: "Revenue Per Link Click",
      metricId: "facebookRevenuePerClick",
      tip: "Conversion Value / Outbound Clicks",
      services: ["facebook-ads"],
      type: "currency",
      delta: -49,
      values: {
        current: 0.7056194690265487,
        previous: 1.3882228116710875,
      },
      charts: {
        current: [
          {
            x: 162,
            y: 0.6529081632653061,
          },
          {
            x: 163,
            y: 1.0499999999999998,
          },
        ],
        previous: [
          {
            x: 161,
            y: 2.184475138121547,
          },
          {
            x: 162,
            y: 0.6529081632653061,
          },
        ],
      },
    },
    {
      id: "facebookCpa",
      title: "Facebook CPA",
      metricId: "facebookCpa",
      tip: "Cost Per Acquisition",
      services: ["facebook-ads"],
      type: "currency",
      delta: 61,
      values: {
        current: 101.38333333333334,
        previous: 62.696250000000006,
      },
      charts: {
        current: [
          {
            x: 162,
            y: 132.43,
          },
          {
            x: 163,
            y: 39.29,
          },
        ],
        previous: [
          {
            x: 161,
            y: 39.45166666666667,
          },
          {
            x: 162,
            y: 132.43,
          },
        ],
      },
    },
    {
      id: "facebookPurchases",
      title: "Purchases",
      metricId: "facebookPurchases",
      tip: "Orders made on your site or on Meta Shop",
      services: ["facebook-ads"],
      type: "decimal",
      delta: -62,
      values: {
        current: 3,
        previous: 8,
      },
      charts: {
        current: [
          {
            x: 162,
            y: 2,
          },
          {
            x: 163,
            y: 1,
          },
        ],
        previous: [
          {
            x: 161,
            y: 6,
          },
          {
            x: 162,
            y: 2,
          },
        ],
      },
    },
    {
      id: "facebookMetaPurchases",
      title: "Meta Purchases",
      metricId: "facebookMetaPurchases",
      tip: "Orders made on Meta Shop",
      services: ["facebook-ads"],
      type: "decimal",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [
          {
            x: 162,
            y: 0,
          },
          {
            x: 163,
            y: 0,
          },
        ],
        previous: [
          {
            x: 161,
            y: 0,
          },
          {
            x: 162,
            y: 0,
          },
        ],
      },
    },
    {
      id: "facebookWebPurchases",
      title: "Web Purchases",
      metricId: "facebookWebPurchases",
      tip: "Orders made on your site",
      services: ["facebook-ads"],
      type: "decimal",
      delta: -62,
      values: {
        current: 3,
        previous: 8,
      },
      charts: {
        current: [
          {
            x: 162,
            y: 2,
          },
          {
            x: 163,
            y: 1,
          },
        ],
        previous: [
          {
            x: 161,
            y: 6,
          },
          {
            x: 162,
            y: 2,
          },
        ],
      },
    },
    {
      id: "newCustomersCpa",
      title: "New Customers CPA",
      metricId: "newCustomersCpa",
      tip: "New Customer Cost Per Acquisition. Total Ad Spend / New Customers",
      services: ["blended"],
      type: "currency",
      delta: 99,
      values: {
        current: 88.66051050000002,
        previous: 44.38429346153846,
      },
      charts: {
        current: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 162,
            y: 78.4260845,
          },
          {
            x: 163,
            y: 0,
          },
        ],
        previous: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 161,
            y: 29.254608555555553,
          },
          {
            x: 162,
            y: 78.4260845,
          },
        ],
      },
    },
    {
      id: "klaviyoSalesPercent",
      title: "Klaviyo Sales %",
      metricId: "totalKlaviyoPlacedOrderSalesPercent",
      services: ["klaviyo"],
      type: "percent",
      delta: -11,
      values: {
        current: 47.5342957999535,
        previous: 53.96611138460562,
      },
      charts: {
        current: [
          {
            x: 162,
            y: 47.5342957999535,
          },
          {
            x: 163,
            y: 0,
          },
        ],
        previous: [
          {
            x: 161,
            y: 57.83576869762059,
          },
          {
            x: 162,
            y: 47.5342957999535,
          },
        ],
      },
    },
    {
      id: "klaviyoFlowsSalesPercent",
      title: "Klaviyo Flows Sales %",
      metricId: "totalKlaviyoPlacedOrderSalesPercentFlows",
      services: ["klaviyo"],
      type: "percent",
      delta: 76,
      values: {
        current: 25.98448498171595,
        previous: 14.762350923440948,
      },
      charts: {
        current: [
          {
            x: 162,
            y: 25.98448498171595,
          },
          {
            x: 163,
            y: 0,
          },
        ],
        previous: [
          {
            x: 161,
            y: 8.01063166863785,
          },
          {
            x: 162,
            y: 25.98448498171595,
          },
        ],
      },
    },
    {
      id: "klaviyoCampaignsSalesPercent",
      title: "Klaviyo Campaigns Sales %",
      metricId: "totalKlaviyoPlacedOrderSalesPercentCampaigns",
      services: ["klaviyo"],
      type: "percent",
      delta: -45,
      values: {
        current: 21.549810818237543,
        previous: 39.20376046116466,
      },
      charts: {
        current: [
          {
            x: 162,
            y: 21.549810818237543,
          },
          {
            x: 163,
            y: 0,
          },
        ],
        previous: [
          {
            x: 161,
            y: 49.82513702898274,
          },
          {
            x: 162,
            y: 21.549810818237543,
          },
        ],
      },
    },
    {
      id: "klaviyoEmailOpenRate",
      title: "Email Open Rate",
      metricId: "klaviyoEmailOpenRate",
      tip: "Received Emails / Opened Emails. On a one day view this metric is off and in general TripleWhale's number does not match Klaviyo's number.",
      services: ["klaviyo"],
      type: "percent",
      delta: 14,
      values: {
        current: 100,
        previous: 87.69871678764996,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "klaviyoUnsubscribed",
      title: "Unsubscribed",
      metricId: "totalKlaviyoUnsubscribed",
      services: ["klaviyo"],
      type: "decimal",
      delta: -73,
      values: {
        current: 64,
        previous: 241,
      },
      charts: {
        current: [
          {
            x: 162,
            y: 62,
          },
          {
            x: 163,
            y: 2,
          },
        ],
        previous: [
          {
            x: 161,
            y: 179,
          },
          {
            x: 162,
            y: 62,
          },
        ],
      },
    },
    {
      id: "klaviyoPlacedOrderTotalPriceFlows",
      title: "Revenue Flows",
      metricId: "totalKlaviyoPlacedOrderTotalPriceFlows",
      services: ["klaviyo"],
      type: "currency",
      delta: -33,
      values: {
        current: 122.93,
        previous: 185.92000000000002,
      },
      charts: {
        current: [
          {
            x: 162,
            y: 122.93,
          },
          {
            x: 163,
            y: 0,
          },
        ],
        previous: [
          {
            x: 161,
            y: 62.99,
          },
          {
            x: 162,
            y: 122.93,
          },
        ],
      },
    },
    {
      id: "klaviyoPlacedOrderTotalPriceFlowsPercent",
      title: "Percent of Revenue Flows",
      metricId: "totalKlaviyoPlacedOrderSalesPercentFlows",
      services: ["klaviyo"],
      type: "percent",
      delta: 76,
      values: {
        current: 25.98448498171595,
        previous: 14.762350923440948,
      },
      charts: {
        current: [
          {
            x: 162,
            y: 122.93,
          },
          {
            x: 163,
            y: 0,
          },
        ],
        previous: [
          {
            x: 161,
            y: 62.99,
          },
          {
            x: 162,
            y: 122.93,
          },
        ],
      },
    },
    {
      id: "klaviyoPlacedOrderTotalPriceCampaigns",
      title: "Revenue Campaigns",
      metricId: "totalKlaviyoPlacedOrderTotalPriceCampaigns",
      services: ["klaviyo"],
      type: "currency",
      delta: -79,
      values: {
        current: 101.95,
        previous: 493.74,
      },
      charts: {
        current: [
          {
            x: 162,
            y: 101.95,
          },
          {
            x: 163,
            y: 0,
          },
        ],
        previous: [
          {
            x: 161,
            y: 391.79,
          },
          {
            x: 162,
            y: 101.95,
          },
        ],
      },
    },
    {
      id: "klaviyoPlacedOrderTotalPriceCampaignsPercent",
      title: "Percent of Revenue Campaigns",
      metricId: "totalKlaviyoPlacedOrderSalesPercentCampaigns",
      services: ["klaviyo"],
      type: "percent",
      delta: -45,
      values: {
        current: 21.549810818237543,
        previous: 39.20376046116466,
      },
      charts: {
        current: [
          {
            x: 162,
            y: 101.95,
          },
          {
            x: 163,
            y: 0,
          },
        ],
        previous: [
          {
            x: 161,
            y: 391.79,
          },
          {
            x: 162,
            y: 101.95,
          },
        ],
      },
    },
    {
      id: "klaviyoNewSubscribed",
      title: "New Subscribed",
      metricId: "totalKlaviyoSubscribedToList",
      services: ["klaviyo"],
      type: "decimal",
      delta: -42,
      values: {
        current: 4,
        previous: 7,
      },
      charts: {
        current: [
          {
            x: 162,
            y: 3,
          },
          {
            x: 163,
            y: 1,
          },
        ],
        previous: [
          {
            x: 161,
            y: 4,
          },
          {
            x: 162,
            y: 3,
          },
        ],
      },
    },
    {
      id: "klaviyoEmailsClicked",
      title: "Emails Clicked",
      metricId: "totalKlaviyoClickedEmail",
      services: ["klaviyo"],
      type: "decimal",
      delta: -64,
      values: {
        current: 88,
        previous: 250,
      },
      charts: {
        current: [
          {
            x: 162,
            y: 87,
          },
          {
            x: 163,
            y: 1,
          },
        ],
        previous: [
          {
            x: 161,
            y: 163,
          },
          {
            x: 162,
            y: 87,
          },
        ],
      },
    },
    {
      id: "klaviyoReceivedEmail",
      title: "Emails Received",
      metricId: "totalKlaviyoReceivedEmail",
      services: ["klaviyo"],
      type: "decimal",
      delta: -99,
      values: {
        current: 436,
        previous: 71773,
      },
      charts: {
        current: [
          {
            x: 162,
            y: 414,
          },
          {
            x: 163,
            y: 22,
          },
        ],
        previous: [
          {
            x: 161,
            y: 71359,
          },
          {
            x: 162,
            y: 414,
          },
        ],
      },
    },
    {
      id: "klaviyoSmsClicked",
      title: "SMS Clicked",
      metricId: "totalKlaviyoClickedSms",
      services: ["klaviyo"],
      type: "decimal",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [
          {
            x: 162,
            y: 0,
          },
          {
            x: 163,
            y: 0,
          },
        ],
        previous: [
          {
            x: 161,
            y: 0,
          },
          {
            x: 162,
            y: 0,
          },
        ],
      },
    },
    {
      id: "klaviyoCVR",
      title: "CVR",
      metricId: "klaviyoCVR",
      tip: "Conversion Rate. Purchase Number / Received Emails",
      services: ["klaviyo"],
      type: "decimal",
      delta: 4441,
      values: {
        current: 0.01834862385321101,
        previous: 0.000404051662881585,
      },
      charts: {
        current: [
          {
            x: 162,
            y: 1.932367149758454,
          },
          {
            x: 163,
            y: 0,
          },
        ],
        previous: [
          {
            x: 161,
            y: 0.02942866351826679,
          },
          {
            x: 162,
            y: 1.932367149758454,
          },
        ],
      },
    },
    {
      id: "klaviyoRevenuePerEmail",
      title: "Revenue Per Email",
      metricId: "klaviyoRevenuePerEmail",
      tip: "Sales / Received Emails",
      services: ["klaviyo"],
      type: "decimal",
      delta: 6083,
      values: {
        current: 1.0850688073394497,
        previous: 0.017547267078149166,
      },
      charts: {
        current: [
          {
            x: 162,
            y: 114.27294685990339,
          },
          {
            x: 163,
            y: 0,
          },
        ],
        previous: [
          {
            x: 161,
            y: 1.1019352849675583,
          },
          {
            x: 162,
            y: 114.27294685990339,
          },
        ],
      },
    },
    {
      id: "klaviyoNetNewSubscribers",
      title: "Net New subscribers",
      metricId: "totalKlaviyoNetNewSubscribers",
      services: ["klaviyo"],
      type: "decimal",
      delta: 74,
      values: {
        current: -60,
        previous: -234,
      },
      charts: {
        current: [
          {
            x: 162,
            y: -59,
          },
          {
            x: 163,
            y: -1,
          },
        ],
        previous: [
          {
            x: 161,
            y: -175,
          },
          {
            x: 162,
            y: -59,
          },
        ],
      },
    },
    {
      id: "klaviyoPlacedOrderSales",
      title: "Total Revenue",
      metricId: "klaviyoPlacedOrderSales",
      services: ["klaviyo"],
      type: "currency",
      delta: -66,
      values: {
        current: 224.88,
        previous: 679.6600000000001,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "attentivePlacedOrderSales",
      title: "Total Revenue",
      metricId: "attentivePlacedOrderSales",
      services: ["ATTENTIVE"],
      type: "currency",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "totalAttentivePlacedOrder",
      title: "Placed Order",
      metricId: "totalAttentivePlacedOrder",
      services: ["ATTENTIVE"],
      type: "decimal",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "attentiveNewSubscribed",
      title: "New Subscribed",
      metricId: "totalAttentiveNewSubscribed",
      services: ["ATTENTIVE"],
      type: "decimal",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 1,
            y: 0,
          },
          {
            x: 2,
            y: 0,
          },
          {
            x: 3,
            y: 0,
          },
          {
            x: 4,
            y: 0,
          },
          {
            x: 5,
            y: 0,
          },
          {
            x: 6,
            y: 0,
          },
          {
            x: 7,
            y: 0,
          },
          {
            x: 8,
            y: 0,
          },
          {
            x: 9,
            y: 0,
          },
          {
            x: 10,
            y: 0,
          },
          {
            x: 11,
            y: 0,
          },
          {
            x: 12,
            y: 0,
          },
          {
            x: 13,
            y: 0,
          },
          {
            x: 14,
            y: 0,
          },
          {
            x: 15,
            y: 0,
          },
        ],
        previous: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 1,
            y: 0,
          },
          {
            x: 2,
            y: 0,
          },
          {
            x: 3,
            y: 0,
          },
          {
            x: 4,
            y: 0,
          },
          {
            x: 5,
            y: 0,
          },
          {
            x: 6,
            y: 0,
          },
          {
            x: 7,
            y: 0,
          },
          {
            x: 8,
            y: 0,
          },
          {
            x: 9,
            y: 0,
          },
          {
            x: 10,
            y: 0,
          },
          {
            x: 11,
            y: 0,
          },
          {
            x: 12,
            y: 0,
          },
          {
            x: 13,
            y: 0,
          },
          {
            x: 14,
            y: 0,
          },
          {
            x: 15,
            y: 0,
          },
        ],
      },
    },
    {
      id: "attentiveNetNewsubscribers",
      title: "Net New subscribers",
      metricId: "totalAttentiveNetNewsubscribers",
      services: ["ATTENTIVE"],
      type: "decimal",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 1,
            y: 0,
          },
          {
            x: 2,
            y: 0,
          },
          {
            x: 3,
            y: 0,
          },
          {
            x: 4,
            y: 0,
          },
          {
            x: 5,
            y: 0,
          },
          {
            x: 6,
            y: 0,
          },
          {
            x: 7,
            y: 0,
          },
          {
            x: 8,
            y: 0,
          },
          {
            x: 9,
            y: 0,
          },
          {
            x: 10,
            y: 0,
          },
          {
            x: 11,
            y: 0,
          },
          {
            x: 12,
            y: 0,
          },
          {
            x: 13,
            y: 0,
          },
          {
            x: 14,
            y: 0,
          },
          {
            x: 15,
            y: 0,
          },
        ],
        previous: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 1,
            y: 0,
          },
          {
            x: 2,
            y: 0,
          },
          {
            x: 3,
            y: 0,
          },
          {
            x: 4,
            y: 0,
          },
          {
            x: 5,
            y: 0,
          },
          {
            x: 6,
            y: 0,
          },
          {
            x: 7,
            y: 0,
          },
          {
            x: 8,
            y: 0,
          },
          {
            x: 9,
            y: 0,
          },
          {
            x: 10,
            y: 0,
          },
          {
            x: 11,
            y: 0,
          },
          {
            x: 12,
            y: 0,
          },
          {
            x: 13,
            y: 0,
          },
          {
            x: 14,
            y: 0,
          },
          {
            x: 15,
            y: 0,
          },
        ],
      },
    },
    {
      id: "attentiveUnsubscribed",
      title: "Unsubscribed",
      metricId: "totalAttentiveUnsubscribed",
      services: ["ATTENTIVE"],
      type: "decimal",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 1,
            y: 0,
          },
          {
            x: 2,
            y: 0,
          },
          {
            x: 3,
            y: 0,
          },
          {
            x: 4,
            y: 0,
          },
          {
            x: 5,
            y: 0,
          },
          {
            x: 6,
            y: 0,
          },
          {
            x: 7,
            y: 0,
          },
          {
            x: 8,
            y: 0,
          },
          {
            x: 9,
            y: 0,
          },
          {
            x: 10,
            y: 0,
          },
          {
            x: 11,
            y: 0,
          },
          {
            x: 12,
            y: 0,
          },
          {
            x: 13,
            y: 0,
          },
          {
            x: 14,
            y: 0,
          },
          {
            x: 15,
            y: 0,
          },
        ],
        previous: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 1,
            y: 0,
          },
          {
            x: 2,
            y: 0,
          },
          {
            x: 3,
            y: 0,
          },
          {
            x: 4,
            y: 0,
          },
          {
            x: 5,
            y: 0,
          },
          {
            x: 6,
            y: 0,
          },
          {
            x: 7,
            y: 0,
          },
          {
            x: 8,
            y: 0,
          },
          {
            x: 9,
            y: 0,
          },
          {
            x: 10,
            y: 0,
          },
          {
            x: 11,
            y: 0,
          },
          {
            x: 12,
            y: 0,
          },
          {
            x: 13,
            y: 0,
          },
          {
            x: 14,
            y: 0,
          },
          {
            x: 15,
            y: 0,
          },
        ],
      },
    },
    {
      id: "attentiveSalesPercent",
      title: "Attentive Sales %",
      metricId: "totalAttentivePlacedOrderSalesPercent",
      services: ["ATTENTIVE"],
      type: "percent",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 1,
            y: 0,
          },
          {
            x: 2,
            y: 0,
          },
          {
            x: 3,
            y: 0,
          },
          {
            x: 4,
            y: 0,
          },
          {
            x: 5,
            y: 0,
          },
          {
            x: 6,
            y: 0,
          },
          {
            x: 7,
            y: 0,
          },
          {
            x: 8,
            y: 0,
          },
          {
            x: 9,
            y: 0,
          },
          {
            x: 10,
            y: 0,
          },
          {
            x: 11,
            y: 0,
          },
          {
            x: 12,
            y: 0,
          },
          {
            x: 13,
            y: 0,
          },
          {
            x: 14,
            y: 0,
          },
          {
            x: 15,
            y: 0,
          },
        ],
        previous: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 1,
            y: 0,
          },
          {
            x: 2,
            y: 0,
          },
          {
            x: 3,
            y: 0,
          },
          {
            x: 4,
            y: 0,
          },
          {
            x: 5,
            y: 0,
          },
          {
            x: 6,
            y: 0,
          },
          {
            x: 7,
            y: 0,
          },
          {
            x: 8,
            y: 0,
          },
          {
            x: 9,
            y: 0,
          },
          {
            x: 10,
            y: 0,
          },
          {
            x: 11,
            y: 0,
          },
          {
            x: 12,
            y: 0,
          },
          {
            x: 13,
            y: 0,
          },
          {
            x: 14,
            y: 0,
          },
          {
            x: 15,
            y: 0,
          },
        ],
      },
    },
    {
      id: "attentivePlacedOrderTotalPriceFlows",
      title: "Revenue Flows",
      metricId: "totalAttentivePlacedOrderTotalPriceFlows",
      services: ["ATTENTIVE"],
      type: "currency",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 1,
            y: 0,
          },
          {
            x: 2,
            y: 0,
          },
          {
            x: 3,
            y: 0,
          },
          {
            x: 4,
            y: 0,
          },
          {
            x: 5,
            y: 0,
          },
          {
            x: 6,
            y: 0,
          },
          {
            x: 7,
            y: 0,
          },
          {
            x: 8,
            y: 0,
          },
          {
            x: 9,
            y: 0,
          },
          {
            x: 10,
            y: 0,
          },
          {
            x: 11,
            y: 0,
          },
          {
            x: 12,
            y: 0,
          },
          {
            x: 13,
            y: 0,
          },
          {
            x: 14,
            y: 0,
          },
          {
            x: 15,
            y: 0,
          },
        ],
        previous: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 1,
            y: 0,
          },
          {
            x: 2,
            y: 0,
          },
          {
            x: 3,
            y: 0,
          },
          {
            x: 4,
            y: 0,
          },
          {
            x: 5,
            y: 0,
          },
          {
            x: 6,
            y: 0,
          },
          {
            x: 7,
            y: 0,
          },
          {
            x: 8,
            y: 0,
          },
          {
            x: 9,
            y: 0,
          },
          {
            x: 10,
            y: 0,
          },
          {
            x: 11,
            y: 0,
          },
          {
            x: 12,
            y: 0,
          },
          {
            x: 13,
            y: 0,
          },
          {
            x: 14,
            y: 0,
          },
          {
            x: 15,
            y: 0,
          },
        ],
      },
    },
    {
      id: "attentivePlacedOrderTotalPriceFlowsPercent",
      title: "Percent of Revenue Flows",
      metricId: "totalAttentivePlacedOrderSalesPercentFlows",
      services: ["ATTENTIVE"],
      type: "percent",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 1,
            y: 0,
          },
          {
            x: 2,
            y: 0,
          },
          {
            x: 3,
            y: 0,
          },
          {
            x: 4,
            y: 0,
          },
          {
            x: 5,
            y: 0,
          },
          {
            x: 6,
            y: 0,
          },
          {
            x: 7,
            y: 0,
          },
          {
            x: 8,
            y: 0,
          },
          {
            x: 9,
            y: 0,
          },
          {
            x: 10,
            y: 0,
          },
          {
            x: 11,
            y: 0,
          },
          {
            x: 12,
            y: 0,
          },
          {
            x: 13,
            y: 0,
          },
          {
            x: 14,
            y: 0,
          },
          {
            x: 15,
            y: 0,
          },
        ],
        previous: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 1,
            y: 0,
          },
          {
            x: 2,
            y: 0,
          },
          {
            x: 3,
            y: 0,
          },
          {
            x: 4,
            y: 0,
          },
          {
            x: 5,
            y: 0,
          },
          {
            x: 6,
            y: 0,
          },
          {
            x: 7,
            y: 0,
          },
          {
            x: 8,
            y: 0,
          },
          {
            x: 9,
            y: 0,
          },
          {
            x: 10,
            y: 0,
          },
          {
            x: 11,
            y: 0,
          },
          {
            x: 12,
            y: 0,
          },
          {
            x: 13,
            y: 0,
          },
          {
            x: 14,
            y: 0,
          },
          {
            x: 15,
            y: 0,
          },
        ],
      },
    },
    {
      id: "attentivePlacedOrderTotalPriceCampaigns",
      title: "Revenue Campaigns",
      metricId: "totalAttentivePlacedOrderTotalPriceCampaigns",
      services: ["ATTENTIVE"],
      type: "currency",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 1,
            y: 0,
          },
          {
            x: 2,
            y: 0,
          },
          {
            x: 3,
            y: 0,
          },
          {
            x: 4,
            y: 0,
          },
          {
            x: 5,
            y: 0,
          },
          {
            x: 6,
            y: 0,
          },
          {
            x: 7,
            y: 0,
          },
          {
            x: 8,
            y: 0,
          },
          {
            x: 9,
            y: 0,
          },
          {
            x: 10,
            y: 0,
          },
          {
            x: 11,
            y: 0,
          },
          {
            x: 12,
            y: 0,
          },
          {
            x: 13,
            y: 0,
          },
          {
            x: 14,
            y: 0,
          },
          {
            x: 15,
            y: 0,
          },
        ],
        previous: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 1,
            y: 0,
          },
          {
            x: 2,
            y: 0,
          },
          {
            x: 3,
            y: 0,
          },
          {
            x: 4,
            y: 0,
          },
          {
            x: 5,
            y: 0,
          },
          {
            x: 6,
            y: 0,
          },
          {
            x: 7,
            y: 0,
          },
          {
            x: 8,
            y: 0,
          },
          {
            x: 9,
            y: 0,
          },
          {
            x: 10,
            y: 0,
          },
          {
            x: 11,
            y: 0,
          },
          {
            x: 12,
            y: 0,
          },
          {
            x: 13,
            y: 0,
          },
          {
            x: 14,
            y: 0,
          },
          {
            x: 15,
            y: 0,
          },
        ],
      },
    },
    {
      id: "attentivePlacedOrderTotalPriceCampaignsPercent",
      title: "Percent of Revenue Campaigns",
      metricId: "totalAttentivePlacedOrderSalesPercentCampaigns",
      services: ["ATTENTIVE"],
      type: "percent",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 1,
            y: 0,
          },
          {
            x: 2,
            y: 0,
          },
          {
            x: 3,
            y: 0,
          },
          {
            x: 4,
            y: 0,
          },
          {
            x: 5,
            y: 0,
          },
          {
            x: 6,
            y: 0,
          },
          {
            x: 7,
            y: 0,
          },
          {
            x: 8,
            y: 0,
          },
          {
            x: 9,
            y: 0,
          },
          {
            x: 10,
            y: 0,
          },
          {
            x: 11,
            y: 0,
          },
          {
            x: 12,
            y: 0,
          },
          {
            x: 13,
            y: 0,
          },
          {
            x: 14,
            y: 0,
          },
          {
            x: 15,
            y: 0,
          },
        ],
        previous: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 1,
            y: 0,
          },
          {
            x: 2,
            y: 0,
          },
          {
            x: 3,
            y: 0,
          },
          {
            x: 4,
            y: 0,
          },
          {
            x: 5,
            y: 0,
          },
          {
            x: 6,
            y: 0,
          },
          {
            x: 7,
            y: 0,
          },
          {
            x: 8,
            y: 0,
          },
          {
            x: 9,
            y: 0,
          },
          {
            x: 10,
            y: 0,
          },
          {
            x: 11,
            y: 0,
          },
          {
            x: 12,
            y: 0,
          },
          {
            x: 13,
            y: 0,
          },
          {
            x: 14,
            y: 0,
          },
          {
            x: 15,
            y: 0,
          },
        ],
      },
    },
    {
      id: "tiktokAds",
      title: "TikTok Ads",
      metricId: "tiktok_spend",
      services: ["tiktok-ads"],
      type: "currency",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "tiktokRoas",
      title: "TikTok ROAS",
      metricId: "tiktok_complete_payment_roas",
      tip: "Return on Ad Spend",
      services: ["tiktok-ads"],
      type: "decimal",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "tiktokImpressions",
      title: "TikTok Impressions",
      metricId: "tiktokImpressions",
      services: ["tiktok-ads"],
      type: "decimal",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "tiktokCpm",
      title: "TikTok CPM",
      metricId: "averageTiktokCpm",
      tip: "Cost Per 1000 Impressions",
      services: ["tiktok-ads"],
      type: "currency",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "tiktokCpc",
      title: "TikTok CPC",
      metricId: "averageTiktokCpc",
      tip: "Cost Per Click",
      services: ["tiktok-ads"],
      type: "decimal",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "tiktokCtr",
      title: "TikTok CTR",
      metricId: "tiktokCtr",
      services: ["tiktok-ads"],
      type: "percent",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "tiktokCpa",
      title: "TikTok CPA",
      metricId: "tiktokCpa",
      tip: "Cost Per Acquisition",
      services: ["tiktok-ads"],
      type: "currency",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "tiktokConversionValue",
      title: "TikTok Conversion Value",
      metricId: "tiktokConversionValue",
      services: ["tiktok-ads"],
      type: "currency",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "tiktokPurchases",
      title: "TikTok Purchases",
      metricId: "tiktokPurchases",
      services: ["tiktok-ads"],
      type: "decimal",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "uniqueCustomerSales",
      title: "LTV",
      metricId: "uniqueCustomerLifetimeValue",
      tip: "Lifetime Value. Sales / Unique Customers",
      services: ["shopify"],
      type: "currency",
      delta: 36,
      values: {
        current: 59.136250000000004,
        previous: 43.428275862068965,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "customerFrequency",
      title: "Frequency",
      metricId: "customerFrequency",
      tip: "The average number of times Unique Customers place a purchase",
      services: ["shopify"],
      type: "decimal",
      delta: 38,
      values: {
        current: 1,
        previous: 0.7241379310344828,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "ltvCpa",
      title: "LTV/CPA",
      metricId: "ltvCpa",
      tip: "Lifetime Value / Cost Per Acquisition",
      services: ["shopify"],
      type: "decimal",
      delta: -15,
      values: {
        current: 1.3339929956753407,
        previous: 1.580589961650672,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "mer",
      title: "MER",
      metricId: "mer",
      tip: "Marketing Efficiency Ratio. Percentage of Sales spent on Ads",
      services: ["facebook-ads", "google-ads", "snapchat-ads", "tiktok-ads"],
      type: "percent",
      delta: 63,
      values: {
        current: 74.96291234226047,
        previous: 45.81440782264852,
      },
      charts: {
        current: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 162,
            y: 66.30965313153945,
          },
          {
            x: 163,
            y: 0,
          },
        ],
        previous: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 161,
            y: 33.48358539035773,
          },
          {
            x: 162,
            y: 66.30965313153945,
          },
        ],
      },
    },
    {
      id: "totalReturns",
      title: "Returns %",
      metricId: "totalReturns",
      tip: "Refunds / Sales. The percentage of your returns relative to your sales",
      services: ["shopify"],
      type: "percent",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [
          {
            x: 162,
            y: 0,
          },
          {
            x: 163,
            y: 0,
          },
        ],
        previous: [
          {
            x: 161,
            y: 0,
          },
          {
            x: 162,
            y: 0,
          },
        ],
      },
    },
    {
      id: "orders",
      title: "Orders",
      metricId: "totalOrders",
      tip: "Number of Orders within the selected timeframe",
      services: ["shopify"],
      type: "decimal",
      delta: -72,
      values: {
        current: 8,
        previous: 29,
      },
      charts: {
        current: [
          {
            x: 162,
            y: 8,
          },
          {
            x: 163,
            y: 0,
          },
        ],
        previous: [
          {
            x: 161,
            y: 21,
          },
          {
            x: 162,
            y: 8,
          },
        ],
      },
    },
    {
      id: "taxes",
      title: "Taxes",
      metricId: "totalTaxes",
      tip: "Amount customers paid in taxes",
      services: ["shopify"],
      type: "currency",
      delta: -45,
      values: {
        current: 3.36,
        previous: 6.15,
      },
      charts: {
        current: [
          {
            x: 162,
            y: 3.36,
          },
          {
            x: 163,
            y: 0,
          },
        ],
        previous: [
          {
            x: 161,
            y: 2.79,
          },
          {
            x: 162,
            y: 3.36,
          },
        ],
      },
    },
    {
      id: "newCustomersPercent",
      title: "New Customers",
      metricId: "newCustomersPercent",
      tip: "Percentage of orders placed by New Customers",
      services: ["shopify"],
      type: "percent",
      delta: 11,
      values: {
        current: 50,
        previous: 44.827586206896555,
      },
      charts: {
        current: [
          {
            x: 162,
            y: 50,
          },
          {
            x: 163,
            y: 0,
          },
        ],
        previous: [
          {
            x: 161,
            y: 42.857142857142854,
          },
          {
            x: 162,
            y: 50,
          },
        ],
      },
    },
    {
      id: "oldCustomersPercent",
      title: "Returning Customers",
      metricId: "oldCustomersPercent",
      tip: "Percentage of orders placed by Returning Customers",
      services: ["shopify"],
      type: "percent",
      delta: -9,
      values: {
        current: 50,
        previous: 55.172413793103445,
      },
      charts: {
        current: [
          {
            x: 162,
            y: 15.449491640068487,
          },
          {
            x: 163,
            y: 0,
          },
        ],
        previous: [
          {
            x: 161,
            y: -14.455762847659372,
          },
          {
            x: 162,
            y: 15.449491640068487,
          },
        ],
      },
    },
    {
      id: "newCustomersOrders",
      title: "New Customer Orders",
      metricId: "newCustomersOrders",
      tip: "Number of orders placed by New Customers",
      services: ["shopify"],
      type: "decimal",
      delta: -69,
      values: {
        current: 4,
        previous: 13,
      },
      charts: {
        current: [
          {
            x: 162,
            y: 4,
          },
          {
            x: 163,
            y: 0,
          },
        ],
        previous: [
          {
            x: 161,
            y: 9,
          },
          {
            x: 162,
            y: 4,
          },
        ],
      },
    },
    {
      id: "uniqueCustomers",
      title: "Unique Customers",
      metricId: "getUniqueCustomerCount",
      tip: "Number of Unique Customers within the selected timeframe",
      services: ["shopify"],
      type: "decimal",
      delta: -72,
      values: {
        current: 8,
        previous: 29,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "shipping",
      title: "Shipping",
      metricId: "totalShippingCosts",
      tip: "Amount the store paid in shipping costs for fulfilling orders within the select timeframe. Edit these in: Store > Shipping",
      services: ["shopify"],
      type: "currency",
      delta: -72,
      values: {
        current: 22.64,
        previous: 82.07,
      },
      charts: {
        current: [
          {
            x: 162,
            y: 22.64,
          },
          {
            x: 163,
            y: 0,
          },
        ],
        previous: [
          {
            x: 161,
            y: 59.43,
          },
          {
            x: 162,
            y: 22.64,
          },
        ],
      },
    },
    {
      id: "googleAnalyticsUsers",
      title: "Sessions",
      metricId: "totalGoogleAnalyticsUsers",
      services: ["GOOGLE_ANALYTICS"],
      type: "decimal",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 1,
            y: 0,
          },
          {
            x: 2,
            y: 0,
          },
          {
            x: 3,
            y: 0,
          },
          {
            x: 4,
            y: 0,
          },
          {
            x: 5,
            y: 0,
          },
          {
            x: 6,
            y: 0,
          },
          {
            x: 7,
            y: 0,
          },
          {
            x: 8,
            y: 0,
          },
          {
            x: 9,
            y: 0,
          },
          {
            x: 10,
            y: 0,
          },
          {
            x: 11,
            y: 0,
          },
          {
            x: 12,
            y: 0,
          },
          {
            x: 13,
            y: 0,
          },
          {
            x: 14,
            y: 0,
          },
          {
            x: 15,
            y: 0,
          },
        ],
        previous: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 1,
            y: 0,
          },
          {
            x: 2,
            y: 0,
          },
          {
            x: 3,
            y: 0,
          },
          {
            x: 4,
            y: 0,
          },
          {
            x: 5,
            y: 0,
          },
          {
            x: 6,
            y: 0,
          },
          {
            x: 7,
            y: 0,
          },
          {
            x: 8,
            y: 0,
          },
          {
            x: 9,
            y: 0,
          },
          {
            x: 10,
            y: 0,
          },
          {
            x: 11,
            y: 0,
          },
          {
            x: 12,
            y: 0,
          },
          {
            x: 13,
            y: 0,
          },
          {
            x: 14,
            y: 0,
          },
          {
            x: 15,
            y: 0,
          },
        ],
      },
    },
    {
      id: "gorgiasTotalTicketsCreated",
      title: "Tickets Created",
      metricId: "totalGorgiasTicketsCreated",
      services: ["GORGIAS"],
      type: "decimal",
      delta: 11,
      values: {
        current: 10,
        previous: 9,
      },
      charts: {
        current: [
          {
            x: 0,
            y: 1,
          },
          {
            x: 1,
            y: 1,
          },
          {
            x: 2,
            y: 1,
          },
          {
            x: 3,
            y: 1,
          },
          {
            x: 4,
            y: 1,
          },
          {
            x: 5,
            y: 1,
          },
          {
            x: 6,
            y: 1,
          },
          {
            x: 7,
            y: 1,
          },
          {
            x: 8,
            y: 1,
          },
          {
            x: 9,
            y: 1,
          },
          {
            x: 10,
            y: 0,
          },
          {
            x: 11,
            y: 0,
          },
          {
            x: 12,
            y: 0,
          },
          {
            x: 13,
            y: 0,
          },
          {
            x: 14,
            y: 0,
          },
          {
            x: 15,
            y: 0,
          },
        ],
        previous: [
          {
            x: 0,
            y: 1,
          },
          {
            x: 1,
            y: 1,
          },
          {
            x: 2,
            y: 1,
          },
          {
            x: 3,
            y: 1,
          },
          {
            x: 4,
            y: 1,
          },
          {
            x: 5,
            y: 1,
          },
          {
            x: 6,
            y: 1,
          },
          {
            x: 7,
            y: 1,
          },
          {
            x: 8,
            y: 1,
          },
          {
            x: 9,
            y: 0,
          },
          {
            x: 10,
            y: 0,
          },
          {
            x: 11,
            y: 0,
          },
          {
            x: 12,
            y: 0,
          },
          {
            x: 13,
            y: 0,
          },
          {
            x: 14,
            y: 0,
          },
          {
            x: 15,
            y: 0,
          },
        ],
      },
    },
    {
      id: "gorgiasTotalTicketsReplied",
      title: "Tickets Replied",
      metricId: "totalGorgiasTicketsReplied",
      services: ["GORGIAS"],
      type: "decimal",
      delta: -100,
      values: {
        current: 0,
        previous: 1,
      },
      charts: {
        current: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 1,
            y: 0,
          },
          {
            x: 2,
            y: 0,
          },
          {
            x: 3,
            y: 0,
          },
          {
            x: 4,
            y: 0,
          },
          {
            x: 5,
            y: 0,
          },
          {
            x: 6,
            y: 0,
          },
          {
            x: 7,
            y: 0,
          },
          {
            x: 8,
            y: 0,
          },
          {
            x: 9,
            y: 0,
          },
          {
            x: 10,
            y: 0,
          },
          {
            x: 11,
            y: 0,
          },
          {
            x: 12,
            y: 0,
          },
          {
            x: 13,
            y: 0,
          },
          {
            x: 14,
            y: 0,
          },
          {
            x: 15,
            y: 0,
          },
        ],
        previous: [
          {
            x: 0,
            y: 1,
          },
          {
            x: 1,
            y: 0,
          },
          {
            x: 2,
            y: 0,
          },
          {
            x: 3,
            y: 0,
          },
          {
            x: 4,
            y: 0,
          },
          {
            x: 5,
            y: 0,
          },
          {
            x: 6,
            y: 0,
          },
          {
            x: 7,
            y: 0,
          },
          {
            x: 8,
            y: 0,
          },
          {
            x: 9,
            y: 0,
          },
          {
            x: 10,
            y: 0,
          },
          {
            x: 11,
            y: 0,
          },
          {
            x: 12,
            y: 0,
          },
          {
            x: 13,
            y: 0,
          },
          {
            x: 14,
            y: 0,
          },
          {
            x: 15,
            y: 0,
          },
        ],
      },
    },
    {
      id: "gorgiasAverageResponseTime",
      title: "Response Time",
      metricId: "averageGorgiasResponseTime",
      services: ["GORGIAS"],
      type: "decimal",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [
          {
            x: 0,
            y: 0,
          },
        ],
        previous: [
          {
            x: 0,
            y: 0,
          },
        ],
      },
    },
    {
      id: "gorgiasAverageResolutionTime",
      title: "Resolution Time",
      metricId: "averageGorgiasResolutionTime",
      services: ["GORGIAS"],
      type: "decimal",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [
          {
            x: 0,
            y: 0,
          },
        ],
        previous: [
          {
            x: 0,
            y: 0,
          },
        ],
      },
    },
    {
      id: "totalVariantsSold",
      title: "Items Sold",
      metricId: "totalVariantsSold",
      tip: "Number of items sold within the selected timeframe",
      services: ["shopify"],
      type: "decimal",
      delta: -76,
      values: {
        current: 12,
        previous: 51,
      },
      charts: {
        current: [
          {
            x: 162,
            y: 12,
          },
          {
            x: 163,
            y: 0,
          },
        ],
        previous: [
          {
            x: 161,
            y: 39,
          },
          {
            x: 162,
            y: 12,
          },
        ],
      },
    },
    {
      id: "blendedAds",
      title: "Blended Ad Spend",
      metricId: "blendedAds",
      tip: "Total Ad Spend. This includes the reported ad spend of each marketing channel connected to Triple Whale, plus any Custom Expenses marked as Ad Spend",
      services: ["shopify", "facebook-ads", "google-ads", "snapchat-ads", "tiktok-ads", "pinterest-ads", "bing"],
      type: "currency",
      delta: -38,
      values: {
        current: 354.64204200000006,
        previous: 576.995815,
      },
      charts: {
        current: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 162,
            y: 313.704338,
          },
          {
            x: 163,
            y: 40.937704,
          },
        ],
        previous: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 161,
            y: 263.291477,
          },
          {
            x: 162,
            y: 313.704338,
          },
        ],
      },
    },
    {
      id: "roas",
      title: "Blended ROAS",
      metricId: "totalRoas",
      tip: "Blended Return on Ad Spend. Sales / Blended Ads",
      services: ["shopify", "facebook-ads", "google-ads", "snapchat-ads", "tiktok-ads", "pinterest-ads", "bing"],
      type: "decimal",
      delta: -38,
      values: {
        current: 1.33,
        previous: 2.18,
      },
      charts: {
        current: [
          {
            x: 162,
            y: 1.508076053446223,
          },
          {
            x: 163,
            y: 0,
          },
        ],
        previous: [
          {
            x: 161,
            y: 2.9865379956830127,
          },
          {
            x: 162,
            y: 1.508076053446223,
          },
        ],
      },
    },
    {
      id: "newCustomersRoas",
      title: "New Customer ROAS",
      metricId: "newCustomersRoas",
      tip: "New Customer Return on Ad Spend. Sales from New Customers / Blended Ad Spend",
      services: ["shopify", "facebook-ads", "google-ads", "snapchat-ads", "tiktok-ads", "pinterest-ads", "bing"],
      type: "decimal",
      delta: -21,
      values: {
        current: "0.63",
        previous: "0.80",
      },
      charts: {
        current: [
          {
            x: 162,
            y: 0.7098084821511139,
          },
          {
            x: 163,
            y: 0,
          },
        ],
        previous: [
          {
            x: 161,
            y: 0.9168925737767045,
          },
          {
            x: 162,
            y: 0.7098084821511139,
          },
        ],
      },
    },
    {
      id: "blendedAttributedRoas",
      title: "Blended Attributed ROAS",
      metricId: "blendedAttributedRoas",
      tip: "Blended-Attributed Return on Ad Spend. Total Blended Conversion Value / Blended Ad Spend",
      services: ["facebook-ads", "google-ads", "snapchat-ads", "tiktok-ads"],
      type: "decimal",
      delta: -47,
      values: {
        current: "0.92",
        previous: "1.74",
      },
      charts: {
        current: [
          {
            x: 162,
            y: 0.9439840589644635,
          },
          {
            x: 163,
            y: 0.769461814468149,
          },
        ],
        previous: [
          {
            x: 161,
            y: 2.684211460441616,
          },
          {
            x: 162,
            y: 0.9439840589644635,
          },
        ],
      },
    },
    {
      id: "poas",
      title: "Profit on Ad Spend",
      metricId: "poas",
      tip: "Profit on Ad Spend. Gross Profit/Total Ad Spend",
      services: ["shopify", "facebook-ads", "google-ads", "snapchat-ads", "tiktok-ads", "pinterest-ads", "bing"],
      type: "decimal",
      delta: -29,
      values: {
        current: 0.9859519137327772,
        previous: 1.3920378261322401,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "shopifyCpa",
      title: "Blended CPA",
      metricId: "shopifyCpa",
      tip: "Cost Per Acquisition. Blended Ad Spend / Orders > $0",
      services: ["shopify", "facebook-ads", "google-ads", "snapchat-ads", "tiktok-ads", "pinterest-ads", "bing"],
      type: "currency",
      delta: 61,
      values: {
        current: 44.33025525000001,
        previous: 27.47599119047619,
      },
      charts: {
        current: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 162,
            y: 39.21304225,
          },
          {
            x: 163,
            y: 0,
          },
        ],
        previous: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 161,
            y: 20.25319053846154,
          },
          {
            x: 162,
            y: 39.21304225,
          },
        ],
      },
    },
    {
      id: "pinterestAds",
      title: "Pinterest Ads",
      metricId: "pinterestSpend",
      services: ["pinterest-ads"],
      type: "currency",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "pinterestRoas",
      title: "Pinterest ROAS",
      metricId: "pinterestRoas",
      tip: "Return on Ad Spend",
      services: ["pinterest-ads"],
      type: "decimal",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "pinterestCpc",
      title: "Pinterest CPC",
      metricId: "pinterestCpc",
      tip: "Cost Per Click",
      services: ["pinterest-ads"],
      type: "decimal",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "pinterestCpm",
      title: "Pinterest CPM",
      metricId: "pinterestCpm",
      tip: "Cost Per 1000 Impressions",
      services: ["pinterest-ads"],
      type: "currency",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "pinterestConversionValue",
      title: "Pinterest Conversion Value",
      metricId: "pinterestConversionValue",
      services: ["pinterest-ads"],
      type: "currency",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "pinterestPurchases",
      title: "Pinterest Purchases",
      metricId: "pinterestPurchases",
      services: ["pinterest-ads"],
      type: "decimal",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "pinterestImpressions",
      title: "Pinterest Impressions",
      metricId: "pinterestImpressions",
      services: ["pinterest-ads"],
      type: "decimal",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "pinterestCtr",
      title: "Pinterest CTR",
      metricId: "pinterestCtr",
      services: ["pinterest-ads"],
      type: "percent",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "benchmarksCPM",
      title: "Peer Facebook CPM",
      metricId: "totalBenchmarksCPM",
      tip: "Average Facebook Cost Per 1000 Impressions",
      services: ["benchmarks"],
      type: "currency",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "benchmarksCPC",
      title: "Peer Facebook CPC",
      metricId: "totalBenchmarksCPC",
      tip: "Average Facebook Cost Per Click",
      services: ["benchmarks"],
      type: "currency",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "benchmarksCTR",
      title: "Peer Facebook CTR",
      metricId: "totalBenchmarksCTR",
      tip: "Average Facebook Click Through Rate",
      services: ["benchmarks"],
      type: "percent",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "benchmarksNCROAS",
      title: "Peer New Customer Blended ROAS",
      metricId: "totalBenchmarksNCROAS",
      tip: "Average New Customers Blended Return On Ad Spend",
      services: ["benchmarks"],
      type: "decimal",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "benchmarksNCPA",
      title: "Peer New Customer Blended CPA",
      metricId: "totalBenchmarksNCPA",
      tip: "Average New Customers Blended Cost Per Acquisition",
      services: ["benchmarks"],
      type: "currency",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "benchmarksBlendedROAS",
      title: "Peer Blended ROAS",
      metricId: "totalBenchmarksBlendedROAS",
      tip: "Average Blended Return On Ad Spend",
      services: ["benchmarks"],
      type: "decimal",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "benchmarksTotalSpendAvg",
      title: "Peer Facebook Spend",
      metricId: "totalBenchmarksTotalSpendAvg",
      tip: "Average Facebook Spend",
      services: ["benchmarks"],
      type: "currency",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "benchmarksNewCustomersAvg",
      title: "Peer Facebook New Customers",
      metricId: "totalBenchmarksNewCustomersAvg",
      tip: "Average Facebook Number of New Customers",
      services: ["benchmarks"],
      type: "decimal",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "benchmarksSize",
      title: "Peer Group Size",
      metricId: "totalBenchmarksSize",
      services: ["benchmarks"],
      type: "decimal",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "benchmarksOrdersAvg",
      title: "Peer Facebook Number Of Orders",
      metricId: "totalBenchmarksOrdersAvg",
      tip: "Average Facebook Number of Orders",
      services: ["benchmarks"],
      type: "decimal",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "benchmarksNewCustomersTotalPriceAvg",
      title: "Peer New Customers Conversion Value",
      metricId: "totalBenchmarksNewCustomersTotalPriceAvg",
      tip: "Average New Customers Conversion Value",
      services: ["benchmarks"],
      type: "currency",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "benchmarksTotalPriceUSDAvg",
      title: "Peer Facebook Conversion Value",
      metricId: "totalBenchmarksTotalPriceUSDAvg",
      tip: "Average Facebook Conversion Value in USD",
      services: ["benchmarks"],
      type: "currency",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "benchmarksFBAdsSpendAvg",
      title: "Peer Facebook Ads Spend",
      metricId: "totalBenchmarksFBAdsSpendAvg",
      tip: "Average Facebook Spend",
      services: ["benchmarks"],
      type: "currency",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "benchmarksFBAdsImpressionsAvg",
      title: "Peer Facebook Impressions",
      metricId: "totalBenchmarksFBAdsImpressionsAvg",
      tip: "Average Facebook Impressions",
      services: ["benchmarks"],
      type: "decimal",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "benchmarksFBAdsClicksAvg",
      title: "Peer Facebook Clicks",
      metricId: "totalBenchmarksFBAdsClicksAvg",
      tip: "Average Facebook Clicks",
      services: ["benchmarks"],
      type: "decimal",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "benchmarksFacebookRoas",
      title: "Peer Facebook ROAS",
      metricId: "benchmarksFacebookRoas",
      tip: "Average Facebook Return On Ad Spend",
      services: ["benchmarks"],
      type: "decimal",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "benchmarksGoogleRoas",
      title: "Peer Google ROAS",
      metricId: "benchmarksGoogleRoas",
      tip: "Average Google Return On Ad Spend",
      services: ["benchmarks"],
      type: "decimal",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "totalBenchmarksCPCGoogle",
      title: "Peer Google CPC",
      metricId: "totalBenchmarksCPCGoogle",
      tip: "Average Google Cost Per Click",
      services: ["benchmarks"],
      type: "currency",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "totalBenchmarksCPMGoogle",
      title: "Peer Google CPM",
      metricId: "totalBenchmarksCPMGoogle",
      tip: "Average Google Cost Per Thousand Impressions",
      services: ["benchmarks"],
      type: "currency",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "totalBenchmarksCTRGoogle",
      title: "Peer Google CTR",
      metricId: "totalBenchmarksCTRGoogle",
      tip: "Average Google Click Through Rate",
      services: ["benchmarks"],
      type: "percent",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "web",
      title: "web",
      metricId: "sources",
      tip: "Source from Shopify",
      services: ["SHOPIFY"],
      type: "currency",
      delta: 0,
      values: {},
      charts: {},
    },
    {
      id: "pos",
      title: "pos",
      metricId: "sources",
      tip: "Source from Shopify",
      services: ["SHOPIFY"],
      type: "decimal",
      delta: 0,
      values: {},
      charts: {},
    },
    {
      id: "shopify_draft_order",
      title: "shopify_draft_order",
      metricId: "sources",
      tip: "Source from Shopify",
      services: ["SHOPIFY"],
      type: "currency",
      delta: 0,
      values: {},
      charts: {},
    },
    {
      id: "iphone",
      title: "iphone",
      metricId: "sources",
      tip: "Source from Shopify",
      services: ["SHOPIFY"],
      type: "decimal",
      delta: 0,
      values: {},
      charts: {},
    },
    {
      id: "android",
      title: "android",
      metricId: "sources",
      tip: "Source from Shopify",
      services: ["SHOPIFY"],
      type: "currency",
      delta: 0,
      values: {},
      charts: {},
    },
    {
      id: "totalFacebookEnq",
      title: "From facebook",
      metricId: "totalFacebookEnq",
      services: ["enquirelabs"],
      type: "percent",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "totalGoogleEnq",
      title: "From Google",
      metricId: "totalGoogleEnq",
      services: ["enquirelabs"],
      type: "percent",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "totalSnapchatEnq",
      title: "From Snapchat",
      metricId: "totalSnapchatEnq",
      services: ["enquirelabs"],
      type: "percent",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "totalTiktokEnq",
      title: "From TikTok",
      metricId: "totalTiktokEnq",
      services: ["enquirelabs"],
      type: "percent",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "totalPinterestEnq",
      title: "From Pinterest",
      metricId: "totalPinterestEnq",
      services: ["enquirelabs"],
      type: "percent",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "totalInstagramEnq",
      title: "From Instagram",
      metricId: "totalInstagramEnq",
      services: ["enquirelabs"],
      type: "percent",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "responsesPrecent",
      title: "% Responses",
      metricId: "responsesPrecent",
      tip: "% responses from total orders",
      services: ["enquirelabs"],
      type: "percent",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "totalFacebookKno",
      title: "From facebook",
      metricId: "totalFacebookKno",
      services: ["kno"],
      type: "percent",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "totalGoogleKno",
      title: "From Google",
      metricId: "totalGoogleKno",
      services: ["kno"],
      type: "percent",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "totalSnapchatKno",
      title: "From Snapchat",
      metricId: "totalSnapchatKno",
      services: ["kno"],
      type: "percent",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "totalTiktokKno",
      title: "From TikTok",
      metricId: "totalTiktokKno",
      services: ["kno"],
      type: "percent",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "totalPinterestKno",
      title: "From Pinterest",
      metricId: "totalPinterestKno",
      services: ["kno"],
      type: "percent",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "totalInstagramKno",
      title: "From Instagram",
      metricId: "totalInstagramKno",
      services: ["kno"],
      type: "percent",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "responsesPrecentKno",
      title: "% Responses",
      metricId: "responsesPrecentKno",
      tip: "% responses from total orders",
      services: ["kno"],
      type: "percent",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "rechargeNewSub",
      title: "Total New Active Subscriptions",
      metricId: "rechargeNewSub",
      services: ["RECHARGE"],
      type: "decimal",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 1,
            y: 0,
          },
          {
            x: 2,
            y: 0,
          },
          {
            x: 3,
            y: 0,
          },
          {
            x: 4,
            y: 0,
          },
          {
            x: 5,
            y: 0,
          },
          {
            x: 6,
            y: 0,
          },
          {
            x: 7,
            y: 0,
          },
          {
            x: 8,
            y: 0,
          },
          {
            x: 9,
            y: 0,
          },
          {
            x: 10,
            y: 0,
          },
          {
            x: 11,
            y: 0,
          },
          {
            x: 12,
            y: 0,
          },
          {
            x: 13,
            y: 0,
          },
          {
            x: 14,
            y: 0,
          },
          {
            x: 15,
            y: 0,
          },
        ],
        previous: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 1,
            y: 0,
          },
          {
            x: 2,
            y: 0,
          },
          {
            x: 3,
            y: 0,
          },
          {
            x: 4,
            y: 0,
          },
          {
            x: 5,
            y: 0,
          },
          {
            x: 6,
            y: 0,
          },
          {
            x: 7,
            y: 0,
          },
          {
            x: 8,
            y: 0,
          },
          {
            x: 9,
            y: 0,
          },
          {
            x: 10,
            y: 0,
          },
          {
            x: 11,
            y: 0,
          },
          {
            x: 12,
            y: 0,
          },
          {
            x: 13,
            y: 0,
          },
          {
            x: 14,
            y: 0,
          },
          {
            x: 15,
            y: 0,
          },
        ],
      },
    },
    {
      id: "rechargeTotalNewSubscriptions",
      title: "New Subscriptions",
      metricId: "rechargeTotalNewSubscriptions",
      services: ["RECHARGE"],
      type: "decimal",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 1,
            y: 0,
          },
          {
            x: 2,
            y: 0,
          },
          {
            x: 3,
            y: 0,
          },
          {
            x: 4,
            y: 0,
          },
          {
            x: 5,
            y: 0,
          },
          {
            x: 6,
            y: 0,
          },
          {
            x: 7,
            y: 0,
          },
          {
            x: 8,
            y: 0,
          },
          {
            x: 9,
            y: 0,
          },
          {
            x: 10,
            y: 0,
          },
          {
            x: 11,
            y: 0,
          },
          {
            x: 12,
            y: 0,
          },
          {
            x: 13,
            y: 0,
          },
          {
            x: 14,
            y: 0,
          },
          {
            x: 15,
            y: 0,
          },
        ],
        previous: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 1,
            y: 0,
          },
          {
            x: 2,
            y: 0,
          },
          {
            x: 3,
            y: 0,
          },
          {
            x: 4,
            y: 0,
          },
          {
            x: 5,
            y: 0,
          },
          {
            x: 6,
            y: 0,
          },
          {
            x: 7,
            y: 0,
          },
          {
            x: 8,
            y: 0,
          },
          {
            x: 9,
            y: 0,
          },
          {
            x: 10,
            y: 0,
          },
          {
            x: 11,
            y: 0,
          },
          {
            x: 12,
            y: 0,
          },
          {
            x: 13,
            y: 0,
          },
          {
            x: 14,
            y: 0,
          },
          {
            x: 15,
            y: 0,
          },
        ],
      },
    },
    {
      id: "rechargeCanceledSub",
      title: "Canceled Subscriptions",
      metricId: "rechargeCanceledSub",
      services: ["RECHARGE"],
      type: "decimal",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 1,
            y: 0,
          },
          {
            x: 2,
            y: 0,
          },
          {
            x: 3,
            y: 0,
          },
          {
            x: 4,
            y: 0,
          },
          {
            x: 5,
            y: 0,
          },
          {
            x: 6,
            y: 0,
          },
          {
            x: 7,
            y: 0,
          },
          {
            x: 8,
            y: 0,
          },
          {
            x: 9,
            y: 0,
          },
          {
            x: 10,
            y: 0,
          },
          {
            x: 11,
            y: 0,
          },
          {
            x: 12,
            y: 0,
          },
          {
            x: 13,
            y: 0,
          },
          {
            x: 14,
            y: 0,
          },
          {
            x: 15,
            y: 0,
          },
        ],
        previous: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 1,
            y: 0,
          },
          {
            x: 2,
            y: 0,
          },
          {
            x: 3,
            y: 0,
          },
          {
            x: 4,
            y: 0,
          },
          {
            x: 5,
            y: 0,
          },
          {
            x: 6,
            y: 0,
          },
          {
            x: 7,
            y: 0,
          },
          {
            x: 8,
            y: 0,
          },
          {
            x: 9,
            y: 0,
          },
          {
            x: 10,
            y: 0,
          },
          {
            x: 11,
            y: 0,
          },
          {
            x: 12,
            y: 0,
          },
          {
            x: 13,
            y: 0,
          },
          {
            x: 14,
            y: 0,
          },
          {
            x: 15,
            y: 0,
          },
        ],
      },
    },
    {
      id: "rechargeExpiredSub",
      title: "Expired Subscriptions",
      metricId: "rechargeExpiredSub",
      services: ["RECHARGE"],
      type: "decimal",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 1,
            y: 0,
          },
          {
            x: 2,
            y: 0,
          },
          {
            x: 3,
            y: 0,
          },
          {
            x: 4,
            y: 0,
          },
          {
            x: 5,
            y: 0,
          },
          {
            x: 6,
            y: 0,
          },
          {
            x: 7,
            y: 0,
          },
          {
            x: 8,
            y: 0,
          },
          {
            x: 9,
            y: 0,
          },
          {
            x: 10,
            y: 0,
          },
          {
            x: 11,
            y: 0,
          },
          {
            x: 12,
            y: 0,
          },
          {
            x: 13,
            y: 0,
          },
          {
            x: 14,
            y: 0,
          },
          {
            x: 15,
            y: 0,
          },
        ],
        previous: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 1,
            y: 0,
          },
          {
            x: 2,
            y: 0,
          },
          {
            x: 3,
            y: 0,
          },
          {
            x: 4,
            y: 0,
          },
          {
            x: 5,
            y: 0,
          },
          {
            x: 6,
            y: 0,
          },
          {
            x: 7,
            y: 0,
          },
          {
            x: 8,
            y: 0,
          },
          {
            x: 9,
            y: 0,
          },
          {
            x: 10,
            y: 0,
          },
          {
            x: 11,
            y: 0,
          },
          {
            x: 12,
            y: 0,
          },
          {
            x: 13,
            y: 0,
          },
          {
            x: 14,
            y: 0,
          },
          {
            x: 15,
            y: 0,
          },
        ],
      },
    },
    {
      id: "rechargeTotalActiveSubsribers",
      title: "Active Subscriptions",
      metricId: "rechargeTotalActiveSubsribers",
      services: ["RECHARGE"],
      type: "decimal",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 1,
            y: 0,
          },
          {
            x: 2,
            y: 0,
          },
          {
            x: 3,
            y: 0,
          },
          {
            x: 4,
            y: 0,
          },
          {
            x: 5,
            y: 0,
          },
          {
            x: 6,
            y: 0,
          },
          {
            x: 7,
            y: 0,
          },
          {
            x: 8,
            y: 0,
          },
          {
            x: 9,
            y: 0,
          },
          {
            x: 10,
            y: 0,
          },
          {
            x: 11,
            y: 0,
          },
          {
            x: 12,
            y: 0,
          },
          {
            x: 13,
            y: 0,
          },
          {
            x: 14,
            y: 0,
          },
          {
            x: 15,
            y: 0,
          },
        ],
        previous: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 1,
            y: 0,
          },
          {
            x: 2,
            y: 0,
          },
          {
            x: 3,
            y: 0,
          },
          {
            x: 4,
            y: 0,
          },
          {
            x: 5,
            y: 0,
          },
          {
            x: 6,
            y: 0,
          },
          {
            x: 7,
            y: 0,
          },
          {
            x: 8,
            y: 0,
          },
          {
            x: 9,
            y: 0,
          },
          {
            x: 10,
            y: 0,
          },
          {
            x: 11,
            y: 0,
          },
          {
            x: 12,
            y: 0,
          },
          {
            x: 13,
            y: 0,
          },
          {
            x: 14,
            y: 0,
          },
          {
            x: 15,
            y: 0,
          },
        ],
      },
    },
    {
      id: "rechargeTotalNetSales",
      title: "Net Sales",
      metricId: "rechargeTotalNetSales",
      services: ["RECHARGE"],
      type: "currency",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 1,
            y: 0,
          },
          {
            x: 2,
            y: 0,
          },
          {
            x: 3,
            y: 0,
          },
          {
            x: 4,
            y: 0,
          },
          {
            x: 5,
            y: 0,
          },
          {
            x: 6,
            y: 0,
          },
          {
            x: 7,
            y: 0,
          },
          {
            x: 8,
            y: 0,
          },
          {
            x: 9,
            y: 0,
          },
          {
            x: 10,
            y: 0,
          },
          {
            x: 11,
            y: 0,
          },
          {
            x: 12,
            y: 0,
          },
          {
            x: 13,
            y: 0,
          },
          {
            x: 14,
            y: 0,
          },
          {
            x: 15,
            y: 0,
          },
        ],
        previous: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 1,
            y: 0,
          },
          {
            x: 2,
            y: 0,
          },
          {
            x: 3,
            y: 0,
          },
          {
            x: 4,
            y: 0,
          },
          {
            x: 5,
            y: 0,
          },
          {
            x: 6,
            y: 0,
          },
          {
            x: 7,
            y: 0,
          },
          {
            x: 8,
            y: 0,
          },
          {
            x: 9,
            y: 0,
          },
          {
            x: 10,
            y: 0,
          },
          {
            x: 11,
            y: 0,
          },
          {
            x: 12,
            y: 0,
          },
          {
            x: 13,
            y: 0,
          },
          {
            x: 14,
            y: 0,
          },
          {
            x: 15,
            y: 0,
          },
        ],
      },
    },
    {
      id: "rechargeItemsCount",
      title: "Total Items",
      metricId: "rechargeItemsCount",
      services: ["RECHARGE"],
      type: "decimal",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 1,
            y: 0,
          },
          {
            x: 2,
            y: 0,
          },
          {
            x: 3,
            y: 0,
          },
          {
            x: 4,
            y: 0,
          },
          {
            x: 5,
            y: 0,
          },
          {
            x: 6,
            y: 0,
          },
          {
            x: 7,
            y: 0,
          },
          {
            x: 8,
            y: 0,
          },
          {
            x: 9,
            y: 0,
          },
          {
            x: 10,
            y: 0,
          },
          {
            x: 11,
            y: 0,
          },
          {
            x: 12,
            y: 0,
          },
          {
            x: 13,
            y: 0,
          },
          {
            x: 14,
            y: 0,
          },
          {
            x: 15,
            y: 0,
          },
        ],
        previous: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 1,
            y: 0,
          },
          {
            x: 2,
            y: 0,
          },
          {
            x: 3,
            y: 0,
          },
          {
            x: 4,
            y: 0,
          },
          {
            x: 5,
            y: 0,
          },
          {
            x: 6,
            y: 0,
          },
          {
            x: 7,
            y: 0,
          },
          {
            x: 8,
            y: 0,
          },
          {
            x: 9,
            y: 0,
          },
          {
            x: 10,
            y: 0,
          },
          {
            x: 11,
            y: 0,
          },
          {
            x: 12,
            y: 0,
          },
          {
            x: 13,
            y: 0,
          },
          {
            x: 14,
            y: 0,
          },
          {
            x: 15,
            y: 0,
          },
        ],
      },
    },
    {
      id: "rechargeTransactionCount",
      title: "Total Orders",
      metricId: "rechargeTransactionCount",
      services: ["RECHARGE"],
      type: "decimal",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 1,
            y: 0,
          },
          {
            x: 2,
            y: 0,
          },
          {
            x: 3,
            y: 0,
          },
          {
            x: 4,
            y: 0,
          },
          {
            x: 5,
            y: 0,
          },
          {
            x: 6,
            y: 0,
          },
          {
            x: 7,
            y: 0,
          },
          {
            x: 8,
            y: 0,
          },
          {
            x: 9,
            y: 0,
          },
          {
            x: 10,
            y: 0,
          },
          {
            x: 11,
            y: 0,
          },
          {
            x: 12,
            y: 0,
          },
          {
            x: 13,
            y: 0,
          },
          {
            x: 14,
            y: 0,
          },
          {
            x: 15,
            y: 0,
          },
        ],
        previous: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 1,
            y: 0,
          },
          {
            x: 2,
            y: 0,
          },
          {
            x: 3,
            y: 0,
          },
          {
            x: 4,
            y: 0,
          },
          {
            x: 5,
            y: 0,
          },
          {
            x: 6,
            y: 0,
          },
          {
            x: 7,
            y: 0,
          },
          {
            x: 8,
            y: 0,
          },
          {
            x: 9,
            y: 0,
          },
          {
            x: 10,
            y: 0,
          },
          {
            x: 11,
            y: 0,
          },
          {
            x: 12,
            y: 0,
          },
          {
            x: 13,
            y: 0,
          },
          {
            x: 14,
            y: 0,
          },
          {
            x: 15,
            y: 0,
          },
        ],
      },
    },
    {
      id: "rechargeChurnRate",
      title: "Customers Churn Rate",
      metricId: "rechargeChurnRate",
      services: ["RECHARGE"],
      type: "percent",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 1,
            y: 0,
          },
          {
            x: 2,
            y: 0,
          },
          {
            x: 3,
            y: 0,
          },
          {
            x: 4,
            y: 0,
          },
          {
            x: 5,
            y: 0,
          },
          {
            x: 6,
            y: 0,
          },
          {
            x: 7,
            y: 0,
          },
          {
            x: 8,
            y: 0,
          },
          {
            x: 9,
            y: 0,
          },
          {
            x: 10,
            y: 0,
          },
          {
            x: 11,
            y: 0,
          },
          {
            x: 12,
            y: 0,
          },
          {
            x: 13,
            y: 0,
          },
          {
            x: 14,
            y: 0,
          },
          {
            x: 15,
            y: 0,
          },
        ],
        previous: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 1,
            y: 0,
          },
          {
            x: 2,
            y: 0,
          },
          {
            x: 3,
            y: 0,
          },
          {
            x: 4,
            y: 0,
          },
          {
            x: 5,
            y: 0,
          },
          {
            x: 6,
            y: 0,
          },
          {
            x: 7,
            y: 0,
          },
          {
            x: 8,
            y: 0,
          },
          {
            x: 9,
            y: 0,
          },
          {
            x: 10,
            y: 0,
          },
          {
            x: 11,
            y: 0,
          },
          {
            x: 12,
            y: 0,
          },
          {
            x: 13,
            y: 0,
          },
          {
            x: 14,
            y: 0,
          },
          {
            x: 15,
            y: 0,
          },
        ],
      },
    },
    {
      id: "rechargeMRR",
      title: "MRR",
      metricId: "rechargeMRR",
      services: ["RECHARGE"],
      type: "currency",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 1,
            y: 0,
          },
          {
            x: 2,
            y: 0,
          },
          {
            x: 3,
            y: 0,
          },
          {
            x: 4,
            y: 0,
          },
          {
            x: 5,
            y: 0,
          },
          {
            x: 6,
            y: 0,
          },
          {
            x: 7,
            y: 0,
          },
          {
            x: 8,
            y: 0,
          },
          {
            x: 9,
            y: 0,
          },
          {
            x: 10,
            y: 0,
          },
          {
            x: 11,
            y: 0,
          },
          {
            x: 12,
            y: 0,
          },
          {
            x: 13,
            y: 0,
          },
          {
            x: 14,
            y: 0,
          },
          {
            x: 15,
            y: 0,
          },
        ],
        previous: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 1,
            y: 0,
          },
          {
            x: 2,
            y: 0,
          },
          {
            x: 3,
            y: 0,
          },
          {
            x: 4,
            y: 0,
          },
          {
            x: 5,
            y: 0,
          },
          {
            x: 6,
            y: 0,
          },
          {
            x: 7,
            y: 0,
          },
          {
            x: 8,
            y: 0,
          },
          {
            x: 9,
            y: 0,
          },
          {
            x: 10,
            y: 0,
          },
          {
            x: 11,
            y: 0,
          },
          {
            x: 12,
            y: 0,
          },
          {
            x: 13,
            y: 0,
          },
          {
            x: 14,
            y: 0,
          },
          {
            x: 15,
            y: 0,
          },
        ],
      },
    },
    {
      id: "rechargeTotalActiveCustomers",
      title: "Active Customers",
      metricId: "rechargeTotalActiveCustomers",
      services: ["RECHARGE"],
      type: "decimal",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 1,
            y: 0,
          },
          {
            x: 2,
            y: 0,
          },
          {
            x: 3,
            y: 0,
          },
          {
            x: 4,
            y: 0,
          },
          {
            x: 5,
            y: 0,
          },
          {
            x: 6,
            y: 0,
          },
          {
            x: 7,
            y: 0,
          },
          {
            x: 8,
            y: 0,
          },
          {
            x: 9,
            y: 0,
          },
          {
            x: 10,
            y: 0,
          },
          {
            x: 11,
            y: 0,
          },
          {
            x: 12,
            y: 0,
          },
          {
            x: 13,
            y: 0,
          },
          {
            x: 14,
            y: 0,
          },
          {
            x: 15,
            y: 0,
          },
        ],
        previous: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 1,
            y: 0,
          },
          {
            x: 2,
            y: 0,
          },
          {
            x: 3,
            y: 0,
          },
          {
            x: 4,
            y: 0,
          },
          {
            x: 5,
            y: 0,
          },
          {
            x: 6,
            y: 0,
          },
          {
            x: 7,
            y: 0,
          },
          {
            x: 8,
            y: 0,
          },
          {
            x: 9,
            y: 0,
          },
          {
            x: 10,
            y: 0,
          },
          {
            x: 11,
            y: 0,
          },
          {
            x: 12,
            y: 0,
          },
          {
            x: 13,
            y: 0,
          },
          {
            x: 14,
            y: 0,
          },
          {
            x: 15,
            y: 0,
          },
        ],
      },
    },
    {
      id: "rechargeTotalChurnedCustomers",
      title: "Churned Customers",
      metricId: "rechargeTotalChurnedCustomers",
      services: ["RECHARGE"],
      type: "decimal",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 1,
            y: 0,
          },
          {
            x: 2,
            y: 0,
          },
          {
            x: 3,
            y: 0,
          },
          {
            x: 4,
            y: 0,
          },
          {
            x: 5,
            y: 0,
          },
          {
            x: 6,
            y: 0,
          },
          {
            x: 7,
            y: 0,
          },
          {
            x: 8,
            y: 0,
          },
          {
            x: 9,
            y: 0,
          },
          {
            x: 10,
            y: 0,
          },
          {
            x: 11,
            y: 0,
          },
          {
            x: 12,
            y: 0,
          },
          {
            x: 13,
            y: 0,
          },
          {
            x: 14,
            y: 0,
          },
          {
            x: 15,
            y: 0,
          },
        ],
        previous: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 1,
            y: 0,
          },
          {
            x: 2,
            y: 0,
          },
          {
            x: 3,
            y: 0,
          },
          {
            x: 4,
            y: 0,
          },
          {
            x: 5,
            y: 0,
          },
          {
            x: 6,
            y: 0,
          },
          {
            x: 7,
            y: 0,
          },
          {
            x: 8,
            y: 0,
          },
          {
            x: 9,
            y: 0,
          },
          {
            x: 10,
            y: 0,
          },
          {
            x: 11,
            y: 0,
          },
          {
            x: 12,
            y: 0,
          },
          {
            x: 13,
            y: 0,
          },
          {
            x: 14,
            y: 0,
          },
          {
            x: 15,
            y: 0,
          },
        ],
      },
    },
    {
      id: "facebookLikes",
      title: "Likes",
      metricId: "facebookLikes",
      tip: "total likes for page and posts",
      services: ["FACEBOOK_SOCIAL"],
      type: "decimal",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 1,
            y: 0,
          },
          {
            x: 2,
            y: 0,
          },
          {
            x: 3,
            y: 0,
          },
          {
            x: 4,
            y: 0,
          },
          {
            x: 5,
            y: 0,
          },
          {
            x: 6,
            y: 0,
          },
          {
            x: 7,
            y: 0,
          },
          {
            x: 8,
            y: 0,
          },
          {
            x: 9,
            y: 0,
          },
          {
            x: 10,
            y: 0,
          },
          {
            x: 11,
            y: 0,
          },
          {
            x: 12,
            y: 0,
          },
          {
            x: 13,
            y: 0,
          },
          {
            x: 14,
            y: 0,
          },
          {
            x: 15,
            y: 0,
          },
        ],
        previous: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 1,
            y: 0,
          },
          {
            x: 2,
            y: 0,
          },
          {
            x: 3,
            y: 0,
          },
          {
            x: 4,
            y: 0,
          },
          {
            x: 5,
            y: 0,
          },
          {
            x: 6,
            y: 0,
          },
          {
            x: 7,
            y: 0,
          },
          {
            x: 8,
            y: 0,
          },
          {
            x: 9,
            y: 0,
          },
          {
            x: 10,
            y: 0,
          },
          {
            x: 11,
            y: 0,
          },
          {
            x: 12,
            y: 0,
          },
          {
            x: 13,
            y: 0,
          },
          {
            x: 14,
            y: 0,
          },
          {
            x: 15,
            y: 0,
          },
        ],
      },
    },
    {
      id: "facebookComments",
      title: "Comments",
      metricId: "facebookComments",
      tip: "",
      services: ["FACEBOOK_SOCIAL"],
      type: "decimal",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 1,
            y: 0,
          },
          {
            x: 2,
            y: 0,
          },
          {
            x: 3,
            y: 0,
          },
          {
            x: 4,
            y: 0,
          },
          {
            x: 5,
            y: 0,
          },
          {
            x: 6,
            y: 0,
          },
          {
            x: 7,
            y: 0,
          },
          {
            x: 8,
            y: 0,
          },
          {
            x: 9,
            y: 0,
          },
          {
            x: 10,
            y: 0,
          },
          {
            x: 11,
            y: 0,
          },
          {
            x: 12,
            y: 0,
          },
          {
            x: 13,
            y: 0,
          },
          {
            x: 14,
            y: 0,
          },
          {
            x: 15,
            y: 0,
          },
        ],
        previous: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 1,
            y: 0,
          },
          {
            x: 2,
            y: 0,
          },
          {
            x: 3,
            y: 0,
          },
          {
            x: 4,
            y: 0,
          },
          {
            x: 5,
            y: 0,
          },
          {
            x: 6,
            y: 0,
          },
          {
            x: 7,
            y: 0,
          },
          {
            x: 8,
            y: 0,
          },
          {
            x: 9,
            y: 0,
          },
          {
            x: 10,
            y: 0,
          },
          {
            x: 11,
            y: 0,
          },
          {
            x: 12,
            y: 0,
          },
          {
            x: 13,
            y: 0,
          },
          {
            x: 14,
            y: 0,
          },
          {
            x: 15,
            y: 0,
          },
        ],
      },
    },
    {
      id: "facebookShares",
      title: "Shares",
      metricId: "facebookShares",
      tip: "",
      services: ["FACEBOOK_SOCIAL"],
      type: "decimal",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 1,
            y: 0,
          },
          {
            x: 2,
            y: 0,
          },
          {
            x: 3,
            y: 0,
          },
          {
            x: 4,
            y: 0,
          },
          {
            x: 5,
            y: 0,
          },
          {
            x: 6,
            y: 0,
          },
          {
            x: 7,
            y: 0,
          },
          {
            x: 8,
            y: 0,
          },
          {
            x: 9,
            y: 0,
          },
          {
            x: 10,
            y: 0,
          },
          {
            x: 11,
            y: 0,
          },
          {
            x: 12,
            y: 0,
          },
          {
            x: 13,
            y: 0,
          },
          {
            x: 14,
            y: 0,
          },
          {
            x: 15,
            y: 0,
          },
        ],
        previous: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 1,
            y: 0,
          },
          {
            x: 2,
            y: 0,
          },
          {
            x: 3,
            y: 0,
          },
          {
            x: 4,
            y: 0,
          },
          {
            x: 5,
            y: 0,
          },
          {
            x: 6,
            y: 0,
          },
          {
            x: 7,
            y: 0,
          },
          {
            x: 8,
            y: 0,
          },
          {
            x: 9,
            y: 0,
          },
          {
            x: 10,
            y: 0,
          },
          {
            x: 11,
            y: 0,
          },
          {
            x: 12,
            y: 0,
          },
          {
            x: 13,
            y: 0,
          },
          {
            x: 14,
            y: 0,
          },
          {
            x: 15,
            y: 0,
          },
        ],
      },
    },
    {
      id: "facebookPosts",
      title: "Posts",
      metricId: "facebookPosts",
      tip: "",
      services: ["FACEBOOK_SOCIAL"],
      type: "decimal",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 1,
            y: 0,
          },
          {
            x: 2,
            y: 0,
          },
          {
            x: 3,
            y: 0,
          },
          {
            x: 4,
            y: 0,
          },
          {
            x: 5,
            y: 0,
          },
          {
            x: 6,
            y: 0,
          },
          {
            x: 7,
            y: 0,
          },
          {
            x: 8,
            y: 0,
          },
          {
            x: 9,
            y: 0,
          },
          {
            x: 10,
            y: 0,
          },
          {
            x: 11,
            y: 0,
          },
          {
            x: 12,
            y: 0,
          },
          {
            x: 13,
            y: 0,
          },
          {
            x: 14,
            y: 0,
          },
          {
            x: 15,
            y: 0,
          },
        ],
        previous: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 1,
            y: 0,
          },
          {
            x: 2,
            y: 0,
          },
          {
            x: 3,
            y: 0,
          },
          {
            x: 4,
            y: 0,
          },
          {
            x: 5,
            y: 0,
          },
          {
            x: 6,
            y: 0,
          },
          {
            x: 7,
            y: 0,
          },
          {
            x: 8,
            y: 0,
          },
          {
            x: 9,
            y: 0,
          },
          {
            x: 10,
            y: 0,
          },
          {
            x: 11,
            y: 0,
          },
          {
            x: 12,
            y: 0,
          },
          {
            x: 13,
            y: 0,
          },
          {
            x: 14,
            y: 0,
          },
          {
            x: 15,
            y: 0,
          },
        ],
      },
    },
    {
      id: "facebookFollowers",
      title: "Followers",
      metricId: "facebookFollowers",
      tip: "",
      services: ["FACEBOOK_SOCIAL"],
      type: "decimal",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 1,
            y: 0,
          },
          {
            x: 2,
            y: 0,
          },
          {
            x: 3,
            y: 0,
          },
          {
            x: 4,
            y: 0,
          },
          {
            x: 5,
            y: 0,
          },
          {
            x: 6,
            y: 0,
          },
          {
            x: 7,
            y: 0,
          },
          {
            x: 8,
            y: 0,
          },
          {
            x: 9,
            y: 0,
          },
          {
            x: 10,
            y: 0,
          },
          {
            x: 11,
            y: 0,
          },
          {
            x: 12,
            y: 0,
          },
          {
            x: 13,
            y: 0,
          },
          {
            x: 14,
            y: 0,
          },
          {
            x: 15,
            y: 0,
          },
        ],
        previous: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 1,
            y: 0,
          },
          {
            x: 2,
            y: 0,
          },
          {
            x: 3,
            y: 0,
          },
          {
            x: 4,
            y: 0,
          },
          {
            x: 5,
            y: 0,
          },
          {
            x: 6,
            y: 0,
          },
          {
            x: 7,
            y: 0,
          },
          {
            x: 8,
            y: 0,
          },
          {
            x: 9,
            y: 0,
          },
          {
            x: 10,
            y: 0,
          },
          {
            x: 11,
            y: 0,
          },
          {
            x: 12,
            y: 0,
          },
          {
            x: 13,
            y: 0,
          },
          {
            x: 14,
            y: 0,
          },
          {
            x: 15,
            y: 0,
          },
        ],
      },
    },
    {
      id: "facebookSocialImpressions",
      title: "Impressions",
      metricId: "facebookSocialImpressions",
      tip: "",
      services: ["FACEBOOK_SOCIAL"],
      type: "decimal",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 1,
            y: 0,
          },
          {
            x: 2,
            y: 0,
          },
          {
            x: 3,
            y: 0,
          },
          {
            x: 4,
            y: 0,
          },
          {
            x: 5,
            y: 0,
          },
          {
            x: 6,
            y: 0,
          },
          {
            x: 7,
            y: 0,
          },
          {
            x: 8,
            y: 0,
          },
          {
            x: 9,
            y: 0,
          },
          {
            x: 10,
            y: 0,
          },
          {
            x: 11,
            y: 0,
          },
          {
            x: 12,
            y: 0,
          },
          {
            x: 13,
            y: 0,
          },
          {
            x: 14,
            y: 0,
          },
          {
            x: 15,
            y: 0,
          },
        ],
        previous: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 1,
            y: 0,
          },
          {
            x: 2,
            y: 0,
          },
          {
            x: 3,
            y: 0,
          },
          {
            x: 4,
            y: 0,
          },
          {
            x: 5,
            y: 0,
          },
          {
            x: 6,
            y: 0,
          },
          {
            x: 7,
            y: 0,
          },
          {
            x: 8,
            y: 0,
          },
          {
            x: 9,
            y: 0,
          },
          {
            x: 10,
            y: 0,
          },
          {
            x: 11,
            y: 0,
          },
          {
            x: 12,
            y: 0,
          },
          {
            x: 13,
            y: 0,
          },
          {
            x: 14,
            y: 0,
          },
          {
            x: 15,
            y: 0,
          },
        ],
      },
    },
    {
      id: "facebookSocialAvg",
      title: "AVG",
      metricId: "facebookSocialAvg",
      tip: "",
      services: ["FACEBOOK_SOCIAL"],
      type: "decimal",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 1,
            y: 0,
          },
          {
            x: 2,
            y: 0,
          },
          {
            x: 3,
            y: 0,
          },
          {
            x: 4,
            y: 0,
          },
          {
            x: 5,
            y: 0,
          },
          {
            x: 6,
            y: 0,
          },
          {
            x: 7,
            y: 0,
          },
          {
            x: 8,
            y: 0,
          },
          {
            x: 9,
            y: 0,
          },
          {
            x: 10,
            y: 0,
          },
          {
            x: 11,
            y: 0,
          },
          {
            x: 12,
            y: 0,
          },
          {
            x: 13,
            y: 0,
          },
          {
            x: 14,
            y: 0,
          },
          {
            x: 15,
            y: 0,
          },
        ],
        previous: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 1,
            y: 0,
          },
          {
            x: 2,
            y: 0,
          },
          {
            x: 3,
            y: 0,
          },
          {
            x: 4,
            y: 0,
          },
          {
            x: 5,
            y: 0,
          },
          {
            x: 6,
            y: 0,
          },
          {
            x: 7,
            y: 0,
          },
          {
            x: 8,
            y: 0,
          },
          {
            x: 9,
            y: 0,
          },
          {
            x: 10,
            y: 0,
          },
          {
            x: 11,
            y: 0,
          },
          {
            x: 12,
            y: 0,
          },
          {
            x: 13,
            y: 0,
          },
          {
            x: 14,
            y: 0,
          },
          {
            x: 15,
            y: 0,
          },
        ],
      },
    },
    {
      id: "facebookReach",
      title: "Reach",
      metricId: "facebookReach",
      tip: "",
      services: ["FACEBOOK_SOCIAL"],
      type: "decimal",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 1,
            y: 0,
          },
          {
            x: 2,
            y: 0,
          },
          {
            x: 3,
            y: 0,
          },
          {
            x: 4,
            y: 0,
          },
          {
            x: 5,
            y: 0,
          },
          {
            x: 6,
            y: 0,
          },
          {
            x: 7,
            y: 0,
          },
          {
            x: 8,
            y: 0,
          },
          {
            x: 9,
            y: 0,
          },
          {
            x: 10,
            y: 0,
          },
          {
            x: 11,
            y: 0,
          },
          {
            x: 12,
            y: 0,
          },
          {
            x: 13,
            y: 0,
          },
          {
            x: 14,
            y: 0,
          },
          {
            x: 15,
            y: 0,
          },
        ],
        previous: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 1,
            y: 0,
          },
          {
            x: 2,
            y: 0,
          },
          {
            x: 3,
            y: 0,
          },
          {
            x: 4,
            y: 0,
          },
          {
            x: 5,
            y: 0,
          },
          {
            x: 6,
            y: 0,
          },
          {
            x: 7,
            y: 0,
          },
          {
            x: 8,
            y: 0,
          },
          {
            x: 9,
            y: 0,
          },
          {
            x: 10,
            y: 0,
          },
          {
            x: 11,
            y: 0,
          },
          {
            x: 12,
            y: 0,
          },
          {
            x: 13,
            y: 0,
          },
          {
            x: 14,
            y: 0,
          },
          {
            x: 15,
            y: 0,
          },
        ],
      },
    },
    {
      id: "facebookProfileView",
      title: "Profile view",
      metricId: "facebookProfileView",
      tip: "",
      services: ["FACEBOOK_SOCIAL"],
      type: "decimal",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 1,
            y: 0,
          },
          {
            x: 2,
            y: 0,
          },
          {
            x: 3,
            y: 0,
          },
          {
            x: 4,
            y: 0,
          },
          {
            x: 5,
            y: 0,
          },
          {
            x: 6,
            y: 0,
          },
          {
            x: 7,
            y: 0,
          },
          {
            x: 8,
            y: 0,
          },
          {
            x: 9,
            y: 0,
          },
          {
            x: 10,
            y: 0,
          },
          {
            x: 11,
            y: 0,
          },
          {
            x: 12,
            y: 0,
          },
          {
            x: 13,
            y: 0,
          },
          {
            x: 14,
            y: 0,
          },
          {
            x: 15,
            y: 0,
          },
        ],
        previous: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 1,
            y: 0,
          },
          {
            x: 2,
            y: 0,
          },
          {
            x: 3,
            y: 0,
          },
          {
            x: 4,
            y: 0,
          },
          {
            x: 5,
            y: 0,
          },
          {
            x: 6,
            y: 0,
          },
          {
            x: 7,
            y: 0,
          },
          {
            x: 8,
            y: 0,
          },
          {
            x: 9,
            y: 0,
          },
          {
            x: 10,
            y: 0,
          },
          {
            x: 11,
            y: 0,
          },
          {
            x: 12,
            y: 0,
          },
          {
            x: 13,
            y: 0,
          },
          {
            x: 14,
            y: 0,
          },
          {
            x: 15,
            y: 0,
          },
        ],
      },
    },
    {
      id: "facebookWebsiteClicks",
      title: "Website Clicks",
      metricId: "facebookWebsiteClicks",
      tip: "",
      services: ["FACEBOOK_SOCIAL"],
      type: "decimal",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 1,
            y: 0,
          },
          {
            x: 2,
            y: 0,
          },
          {
            x: 3,
            y: 0,
          },
          {
            x: 4,
            y: 0,
          },
          {
            x: 5,
            y: 0,
          },
          {
            x: 6,
            y: 0,
          },
          {
            x: 7,
            y: 0,
          },
          {
            x: 8,
            y: 0,
          },
          {
            x: 9,
            y: 0,
          },
          {
            x: 10,
            y: 0,
          },
          {
            x: 11,
            y: 0,
          },
          {
            x: 12,
            y: 0,
          },
          {
            x: 13,
            y: 0,
          },
          {
            x: 14,
            y: 0,
          },
          {
            x: 15,
            y: 0,
          },
        ],
        previous: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 1,
            y: 0,
          },
          {
            x: 2,
            y: 0,
          },
          {
            x: 3,
            y: 0,
          },
          {
            x: 4,
            y: 0,
          },
          {
            x: 5,
            y: 0,
          },
          {
            x: 6,
            y: 0,
          },
          {
            x: 7,
            y: 0,
          },
          {
            x: 8,
            y: 0,
          },
          {
            x: 9,
            y: 0,
          },
          {
            x: 10,
            y: 0,
          },
          {
            x: 11,
            y: 0,
          },
          {
            x: 12,
            y: 0,
          },
          {
            x: 13,
            y: 0,
          },
          {
            x: 14,
            y: 0,
          },
          {
            x: 15,
            y: 0,
          },
        ],
      },
    },
    {
      id: "instagramLikes",
      title: "Likes",
      metricId: "instagramLikes",
      tip: "",
      services: ["FACEBOOK_SOCIAL"],
      type: "decimal",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 1,
            y: 0,
          },
          {
            x: 2,
            y: 0,
          },
          {
            x: 3,
            y: 0,
          },
          {
            x: 4,
            y: 0,
          },
          {
            x: 5,
            y: 0,
          },
          {
            x: 6,
            y: 0,
          },
          {
            x: 7,
            y: 0,
          },
          {
            x: 8,
            y: 0,
          },
          {
            x: 9,
            y: 0,
          },
          {
            x: 10,
            y: 0,
          },
          {
            x: 11,
            y: 0,
          },
          {
            x: 12,
            y: 0,
          },
          {
            x: 13,
            y: 0,
          },
          {
            x: 14,
            y: 0,
          },
          {
            x: 15,
            y: 0,
          },
        ],
        previous: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 1,
            y: 0,
          },
          {
            x: 2,
            y: 0,
          },
          {
            x: 3,
            y: 0,
          },
          {
            x: 4,
            y: 0,
          },
          {
            x: 5,
            y: 0,
          },
          {
            x: 6,
            y: 0,
          },
          {
            x: 7,
            y: 0,
          },
          {
            x: 8,
            y: 0,
          },
          {
            x: 9,
            y: 0,
          },
          {
            x: 10,
            y: 0,
          },
          {
            x: 11,
            y: 0,
          },
          {
            x: 12,
            y: 0,
          },
          {
            x: 13,
            y: 0,
          },
          {
            x: 14,
            y: 0,
          },
          {
            x: 15,
            y: 0,
          },
        ],
      },
    },
    {
      id: "instagramComments",
      title: "Comments",
      metricId: "instagramComments",
      tip: "",
      services: ["FACEBOOK_SOCIAL"],
      type: "decimal",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 1,
            y: 0,
          },
          {
            x: 2,
            y: 0,
          },
          {
            x: 3,
            y: 0,
          },
          {
            x: 4,
            y: 0,
          },
          {
            x: 5,
            y: 0,
          },
          {
            x: 6,
            y: 0,
          },
          {
            x: 7,
            y: 0,
          },
          {
            x: 8,
            y: 0,
          },
          {
            x: 9,
            y: 0,
          },
          {
            x: 10,
            y: 0,
          },
          {
            x: 11,
            y: 0,
          },
          {
            x: 12,
            y: 0,
          },
          {
            x: 13,
            y: 0,
          },
          {
            x: 14,
            y: 0,
          },
          {
            x: 15,
            y: 0,
          },
        ],
        previous: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 1,
            y: 0,
          },
          {
            x: 2,
            y: 0,
          },
          {
            x: 3,
            y: 0,
          },
          {
            x: 4,
            y: 0,
          },
          {
            x: 5,
            y: 0,
          },
          {
            x: 6,
            y: 0,
          },
          {
            x: 7,
            y: 0,
          },
          {
            x: 8,
            y: 0,
          },
          {
            x: 9,
            y: 0,
          },
          {
            x: 10,
            y: 0,
          },
          {
            x: 11,
            y: 0,
          },
          {
            x: 12,
            y: 0,
          },
          {
            x: 13,
            y: 0,
          },
          {
            x: 14,
            y: 0,
          },
          {
            x: 15,
            y: 0,
          },
        ],
      },
    },
    {
      id: "instagramShares",
      title: "Shares",
      metricId: "instagramShares",
      tip: "",
      services: ["FACEBOOK_SOCIAL"],
      type: "decimal",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 1,
            y: 0,
          },
          {
            x: 2,
            y: 0,
          },
          {
            x: 3,
            y: 0,
          },
          {
            x: 4,
            y: 0,
          },
          {
            x: 5,
            y: 0,
          },
          {
            x: 6,
            y: 0,
          },
          {
            x: 7,
            y: 0,
          },
          {
            x: 8,
            y: 0,
          },
          {
            x: 9,
            y: 0,
          },
          {
            x: 10,
            y: 0,
          },
          {
            x: 11,
            y: 0,
          },
          {
            x: 12,
            y: 0,
          },
          {
            x: 13,
            y: 0,
          },
          {
            x: 14,
            y: 0,
          },
          {
            x: 15,
            y: 0,
          },
        ],
        previous: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 1,
            y: 0,
          },
          {
            x: 2,
            y: 0,
          },
          {
            x: 3,
            y: 0,
          },
          {
            x: 4,
            y: 0,
          },
          {
            x: 5,
            y: 0,
          },
          {
            x: 6,
            y: 0,
          },
          {
            x: 7,
            y: 0,
          },
          {
            x: 8,
            y: 0,
          },
          {
            x: 9,
            y: 0,
          },
          {
            x: 10,
            y: 0,
          },
          {
            x: 11,
            y: 0,
          },
          {
            x: 12,
            y: 0,
          },
          {
            x: 13,
            y: 0,
          },
          {
            x: 14,
            y: 0,
          },
          {
            x: 15,
            y: 0,
          },
        ],
      },
    },
    {
      id: "instagramPosts",
      title: "Media posted",
      metricId: "instagramPosts",
      tip: "",
      services: ["FACEBOOK_SOCIAL"],
      type: "decimal",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 1,
            y: 0,
          },
          {
            x: 2,
            y: 0,
          },
          {
            x: 3,
            y: 0,
          },
          {
            x: 4,
            y: 0,
          },
          {
            x: 5,
            y: 0,
          },
          {
            x: 6,
            y: 0,
          },
          {
            x: 7,
            y: 0,
          },
          {
            x: 8,
            y: 0,
          },
          {
            x: 9,
            y: 0,
          },
          {
            x: 10,
            y: 0,
          },
          {
            x: 11,
            y: 0,
          },
          {
            x: 12,
            y: 0,
          },
          {
            x: 13,
            y: 0,
          },
          {
            x: 14,
            y: 0,
          },
          {
            x: 15,
            y: 0,
          },
        ],
        previous: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 1,
            y: 0,
          },
          {
            x: 2,
            y: 0,
          },
          {
            x: 3,
            y: 0,
          },
          {
            x: 4,
            y: 0,
          },
          {
            x: 5,
            y: 0,
          },
          {
            x: 6,
            y: 0,
          },
          {
            x: 7,
            y: 0,
          },
          {
            x: 8,
            y: 0,
          },
          {
            x: 9,
            y: 0,
          },
          {
            x: 10,
            y: 0,
          },
          {
            x: 11,
            y: 0,
          },
          {
            x: 12,
            y: 0,
          },
          {
            x: 13,
            y: 0,
          },
          {
            x: 14,
            y: 0,
          },
          {
            x: 15,
            y: 0,
          },
        ],
      },
    },
    {
      id: "instagramFollowers",
      title: "Followers",
      metricId: "instagramFollowers",
      tip: "",
      services: ["FACEBOOK_SOCIAL"],
      type: "decimal",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 1,
            y: 0,
          },
          {
            x: 2,
            y: 0,
          },
          {
            x: 3,
            y: 0,
          },
          {
            x: 4,
            y: 0,
          },
          {
            x: 5,
            y: 0,
          },
          {
            x: 6,
            y: 0,
          },
          {
            x: 7,
            y: 0,
          },
          {
            x: 8,
            y: 0,
          },
          {
            x: 9,
            y: 0,
          },
          {
            x: 10,
            y: 0,
          },
          {
            x: 11,
            y: 0,
          },
          {
            x: 12,
            y: 0,
          },
          {
            x: 13,
            y: 0,
          },
          {
            x: 14,
            y: 0,
          },
          {
            x: 15,
            y: 0,
          },
        ],
        previous: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 1,
            y: 0,
          },
          {
            x: 2,
            y: 0,
          },
          {
            x: 3,
            y: 0,
          },
          {
            x: 4,
            y: 0,
          },
          {
            x: 5,
            y: 0,
          },
          {
            x: 6,
            y: 0,
          },
          {
            x: 7,
            y: 0,
          },
          {
            x: 8,
            y: 0,
          },
          {
            x: 9,
            y: 0,
          },
          {
            x: 10,
            y: 0,
          },
          {
            x: 11,
            y: 0,
          },
          {
            x: 12,
            y: 0,
          },
          {
            x: 13,
            y: 0,
          },
          {
            x: 14,
            y: 0,
          },
          {
            x: 15,
            y: 0,
          },
        ],
      },
    },
    {
      id: "instagramImpressions",
      title: "Impressions",
      metricId: "instagramImpressions",
      tip: "",
      services: ["FACEBOOK_SOCIAL"],
      type: "decimal",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 1,
            y: 0,
          },
          {
            x: 2,
            y: 0,
          },
          {
            x: 3,
            y: 0,
          },
          {
            x: 4,
            y: 0,
          },
          {
            x: 5,
            y: 0,
          },
          {
            x: 6,
            y: 0,
          },
          {
            x: 7,
            y: 0,
          },
          {
            x: 8,
            y: 0,
          },
          {
            x: 9,
            y: 0,
          },
          {
            x: 10,
            y: 0,
          },
          {
            x: 11,
            y: 0,
          },
          {
            x: 12,
            y: 0,
          },
          {
            x: 13,
            y: 0,
          },
          {
            x: 14,
            y: 0,
          },
          {
            x: 15,
            y: 0,
          },
        ],
        previous: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 1,
            y: 0,
          },
          {
            x: 2,
            y: 0,
          },
          {
            x: 3,
            y: 0,
          },
          {
            x: 4,
            y: 0,
          },
          {
            x: 5,
            y: 0,
          },
          {
            x: 6,
            y: 0,
          },
          {
            x: 7,
            y: 0,
          },
          {
            x: 8,
            y: 0,
          },
          {
            x: 9,
            y: 0,
          },
          {
            x: 10,
            y: 0,
          },
          {
            x: 11,
            y: 0,
          },
          {
            x: 12,
            y: 0,
          },
          {
            x: 13,
            y: 0,
          },
          {
            x: 14,
            y: 0,
          },
          {
            x: 15,
            y: 0,
          },
        ],
      },
    },
    {
      id: "instagramAvg",
      title: "AVG",
      metricId: "instagramAvg",
      tip: "",
      services: ["FACEBOOK_SOCIAL"],
      type: "decimal",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 1,
            y: 0,
          },
          {
            x: 2,
            y: 0,
          },
          {
            x: 3,
            y: 0,
          },
          {
            x: 4,
            y: 0,
          },
          {
            x: 5,
            y: 0,
          },
          {
            x: 6,
            y: 0,
          },
          {
            x: 7,
            y: 0,
          },
          {
            x: 8,
            y: 0,
          },
          {
            x: 9,
            y: 0,
          },
          {
            x: 10,
            y: 0,
          },
          {
            x: 11,
            y: 0,
          },
          {
            x: 12,
            y: 0,
          },
          {
            x: 13,
            y: 0,
          },
          {
            x: 14,
            y: 0,
          },
          {
            x: 15,
            y: 0,
          },
        ],
        previous: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 1,
            y: 0,
          },
          {
            x: 2,
            y: 0,
          },
          {
            x: 3,
            y: 0,
          },
          {
            x: 4,
            y: 0,
          },
          {
            x: 5,
            y: 0,
          },
          {
            x: 6,
            y: 0,
          },
          {
            x: 7,
            y: 0,
          },
          {
            x: 8,
            y: 0,
          },
          {
            x: 9,
            y: 0,
          },
          {
            x: 10,
            y: 0,
          },
          {
            x: 11,
            y: 0,
          },
          {
            x: 12,
            y: 0,
          },
          {
            x: 13,
            y: 0,
          },
          {
            x: 14,
            y: 0,
          },
          {
            x: 15,
            y: 0,
          },
        ],
      },
    },
    {
      id: "instagramAvgImpressionsFollowers",
      title: "AVG",
      metricId: "instagramAvgImpressionsFollowers",
      tip: "",
      services: ["FACEBOOK_SOCIAL"],
      type: "decimal",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 1,
            y: 0,
          },
          {
            x: 2,
            y: 0,
          },
          {
            x: 3,
            y: 0,
          },
          {
            x: 4,
            y: 0,
          },
          {
            x: 5,
            y: 0,
          },
          {
            x: 6,
            y: 0,
          },
          {
            x: 7,
            y: 0,
          },
          {
            x: 8,
            y: 0,
          },
          {
            x: 9,
            y: 0,
          },
          {
            x: 10,
            y: 0,
          },
          {
            x: 11,
            y: 0,
          },
          {
            x: 12,
            y: 0,
          },
          {
            x: 13,
            y: 0,
          },
          {
            x: 14,
            y: 0,
          },
          {
            x: 15,
            y: 0,
          },
        ],
        previous: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 1,
            y: 0,
          },
          {
            x: 2,
            y: 0,
          },
          {
            x: 3,
            y: 0,
          },
          {
            x: 4,
            y: 0,
          },
          {
            x: 5,
            y: 0,
          },
          {
            x: 6,
            y: 0,
          },
          {
            x: 7,
            y: 0,
          },
          {
            x: 8,
            y: 0,
          },
          {
            x: 9,
            y: 0,
          },
          {
            x: 10,
            y: 0,
          },
          {
            x: 11,
            y: 0,
          },
          {
            x: 12,
            y: 0,
          },
          {
            x: 13,
            y: 0,
          },
          {
            x: 14,
            y: 0,
          },
          {
            x: 15,
            y: 0,
          },
        ],
      },
    },
    {
      id: "instagramReach",
      title: "Reach",
      metricId: "instagramReach",
      tip: "",
      services: ["FACEBOOK_SOCIAL"],
      type: "decimal",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 1,
            y: 0,
          },
          {
            x: 2,
            y: 0,
          },
          {
            x: 3,
            y: 0,
          },
          {
            x: 4,
            y: 0,
          },
          {
            x: 5,
            y: 0,
          },
          {
            x: 6,
            y: 0,
          },
          {
            x: 7,
            y: 0,
          },
          {
            x: 8,
            y: 0,
          },
          {
            x: 9,
            y: 0,
          },
          {
            x: 10,
            y: 0,
          },
          {
            x: 11,
            y: 0,
          },
          {
            x: 12,
            y: 0,
          },
          {
            x: 13,
            y: 0,
          },
          {
            x: 14,
            y: 0,
          },
          {
            x: 15,
            y: 0,
          },
        ],
        previous: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 1,
            y: 0,
          },
          {
            x: 2,
            y: 0,
          },
          {
            x: 3,
            y: 0,
          },
          {
            x: 4,
            y: 0,
          },
          {
            x: 5,
            y: 0,
          },
          {
            x: 6,
            y: 0,
          },
          {
            x: 7,
            y: 0,
          },
          {
            x: 8,
            y: 0,
          },
          {
            x: 9,
            y: 0,
          },
          {
            x: 10,
            y: 0,
          },
          {
            x: 11,
            y: 0,
          },
          {
            x: 12,
            y: 0,
          },
          {
            x: 13,
            y: 0,
          },
          {
            x: 14,
            y: 0,
          },
          {
            x: 15,
            y: 0,
          },
        ],
      },
    },
    {
      id: "instagramProfileView",
      title: "Profile view",
      metricId: "instagramProfileView",
      tip: "",
      services: ["FACEBOOK_SOCIAL"],
      type: "decimal",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 1,
            y: 0,
          },
          {
            x: 2,
            y: 0,
          },
          {
            x: 3,
            y: 0,
          },
          {
            x: 4,
            y: 0,
          },
          {
            x: 5,
            y: 0,
          },
          {
            x: 6,
            y: 0,
          },
          {
            x: 7,
            y: 0,
          },
          {
            x: 8,
            y: 0,
          },
          {
            x: 9,
            y: 0,
          },
          {
            x: 10,
            y: 0,
          },
          {
            x: 11,
            y: 0,
          },
          {
            x: 12,
            y: 0,
          },
          {
            x: 13,
            y: 0,
          },
          {
            x: 14,
            y: 0,
          },
          {
            x: 15,
            y: 0,
          },
        ],
        previous: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 1,
            y: 0,
          },
          {
            x: 2,
            y: 0,
          },
          {
            x: 3,
            y: 0,
          },
          {
            x: 4,
            y: 0,
          },
          {
            x: 5,
            y: 0,
          },
          {
            x: 6,
            y: 0,
          },
          {
            x: 7,
            y: 0,
          },
          {
            x: 8,
            y: 0,
          },
          {
            x: 9,
            y: 0,
          },
          {
            x: 10,
            y: 0,
          },
          {
            x: 11,
            y: 0,
          },
          {
            x: 12,
            y: 0,
          },
          {
            x: 13,
            y: 0,
          },
          {
            x: 14,
            y: 0,
          },
          {
            x: 15,
            y: 0,
          },
        ],
      },
    },
    {
      id: "instagramWebsiteClicks",
      title: "Website Clicks",
      metricId: "instagramWebsiteClicks",
      tip: "",
      services: ["FACEBOOK_SOCIAL"],
      type: "decimal",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 1,
            y: 0,
          },
          {
            x: 2,
            y: 0,
          },
          {
            x: 3,
            y: 0,
          },
          {
            x: 4,
            y: 0,
          },
          {
            x: 5,
            y: 0,
          },
          {
            x: 6,
            y: 0,
          },
          {
            x: 7,
            y: 0,
          },
          {
            x: 8,
            y: 0,
          },
          {
            x: 9,
            y: 0,
          },
          {
            x: 10,
            y: 0,
          },
          {
            x: 11,
            y: 0,
          },
          {
            x: 12,
            y: 0,
          },
          {
            x: 13,
            y: 0,
          },
          {
            x: 14,
            y: 0,
          },
          {
            x: 15,
            y: 0,
          },
        ],
        previous: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 1,
            y: 0,
          },
          {
            x: 2,
            y: 0,
          },
          {
            x: 3,
            y: 0,
          },
          {
            x: 4,
            y: 0,
          },
          {
            x: 5,
            y: 0,
          },
          {
            x: 6,
            y: 0,
          },
          {
            x: 7,
            y: 0,
          },
          {
            x: 8,
            y: 0,
          },
          {
            x: 9,
            y: 0,
          },
          {
            x: 10,
            y: 0,
          },
          {
            x: 11,
            y: 0,
          },
          {
            x: 12,
            y: 0,
          },
          {
            x: 13,
            y: 0,
          },
          {
            x: 14,
            y: 0,
          },
          {
            x: 15,
            y: 0,
          },
        ],
      },
    },
    {
      id: "influencerConversionValue",
      title: "Affluencer Conversion Value",
      metricId: "influencerConversionValue",
      tip: "Conversion Value",
      services: ["influencers"],
      type: "currency",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [
          {
            x: 162,
            y: 0,
          },
          {
            x: 163,
            y: 0,
          },
        ],
        previous: [
          {
            x: 161,
            y: 0,
          },
          {
            x: 162,
            y: 0,
          },
        ],
      },
    },
    {
      id: "influencerSpend",
      title: "Affluencer Spend",
      metricId: "influencerSpend",
      services: ["influencers"],
      type: "currency",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [
          {
            x: 162,
            y: 0,
          },
          {
            x: 163,
            y: 0,
          },
        ],
        previous: [
          {
            x: 161,
            y: 0,
          },
          {
            x: 162,
            y: 0,
          },
        ],
      },
    },
    {
      id: "influencerRoas",
      title: "Affluencer Roas",
      metricId: "influencerRoas",
      tip: "Return on Ad Spend",
      services: ["influencers"],
      type: "decimal",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [
          {
            x: 162,
            y: 0,
          },
          {
            x: 163,
            y: 0,
          },
        ],
        previous: [
          {
            x: 161,
            y: 0,
          },
          {
            x: 162,
            y: 0,
          },
        ],
      },
    },
    {
      id: "influencerPurchases",
      title: "Affluencer Purchases",
      metricId: "influencerPurchases",
      services: ["influencers"],
      type: "decimal",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [
          {
            x: 162,
            y: 0,
          },
          {
            x: 163,
            y: 0,
          },
        ],
        previous: [
          {
            x: 161,
            y: 0,
          },
          {
            x: 162,
            y: 0,
          },
        ],
      },
    },
    {
      id: "influencerNcPurchases",
      title: "Affluencer New Customer Purchases",
      metricId: "influencerNcPurchases",
      services: ["influencers"],
      type: "decimal",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [
          {
            x: 162,
            y: 0,
          },
          {
            x: 163,
            y: 0,
          },
        ],
        previous: [
          {
            x: 161,
            y: 0,
          },
          {
            x: 162,
            y: 0,
          },
        ],
      },
    },
    {
      id: "influencerNcConversionValue",
      title: "Affluencer New Customer Conversion Value",
      metricId: "influencerNcConversionValue",
      tip: "New Customer Conversion Value",
      services: ["influencers"],
      type: "currency",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [
          {
            x: 162,
            y: 0,
          },
          {
            x: 163,
            y: 0,
          },
        ],
        previous: [
          {
            x: 161,
            y: 0,
          },
          {
            x: 162,
            y: 0,
          },
        ],
      },
    },
    {
      id: "totalCustomAdSpends",
      title: "Custom Expense Ad Spend",
      metricId: "totalCustomAdSpends",
      services: [],
      type: "currency",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [
          {
            x: 0,
            y: 0,
          },
        ],
        previous: [
          {
            x: 0,
            y: 0,
          },
        ],
      },
    },
    {
      id: "amazonSales",
      title: "Amazon Sales",
      metricId: "totalAmazonSales",
      tip: "Gross sales value. What the customer paid for the order including shipping, taxes, discounts",
      services: ["amazon"],
      type: "currency",
      delta: -51,
      values: {
        current: 99.63999999999999,
        previous: 206.96999999999997,
      },
      charts: {
        current: [
          {
            x: 162,
            y: 99.63999999999999,
          },
          {
            x: 163,
            y: 0,
          },
        ],
        previous: [
          {
            x: 161,
            y: 107.33,
          },
          {
            x: 162,
            y: 99.63999999999999,
          },
        ],
      },
    },
    {
      id: "amazonProductItemPrice",
      title: "Amazon Product Sales",
      metricId: "totalAmazonProductItemPrice",
      tip: "Ordered product sales. This is what Amazon shows in the financial report",
      services: ["amazon"],
      type: "currency",
      delta: -58,
      values: {
        current: 94.85000000000001,
        previous: 229.65000000000003,
      },
      charts: {
        current: [
          {
            x: 162,
            y: 94.85000000000001,
          },
          {
            x: 163,
            y: 0,
          },
        ],
        previous: [
          {
            x: 161,
            y: 134.8,
          },
          {
            x: 162,
            y: 94.85000000000001,
          },
        ],
      },
    },
    {
      id: "amazonSalesTaxes",
      title: "Amazon Taxes",
      metricId: "totalAmazonSalesTaxes",
      tip: "Amount customers paid in taxes. ",
      services: ["amazon"],
      type: "currency",
      delta: -60,
      values: {
        current: 4.79,
        previous: 12.27,
      },
      charts: {
        current: [
          {
            x: 162,
            y: 4.79,
          },
          {
            x: 163,
            y: 0,
          },
        ],
        previous: [
          {
            x: 161,
            y: 7.48,
          },
          {
            x: 162,
            y: 4.79,
          },
        ],
      },
    },
    {
      id: "amazonOrders",
      title: "Amazon Orders",
      metricId: "totalAmazonOrders",
      tip: "Number of orders placed",
      services: ["amazon"],
      type: "decimal",
      delta: -50,
      values: {
        current: 3,
        previous: 6,
      },
      charts: {
        current: [
          {
            x: 162,
            y: 3,
          },
          {
            x: 163,
            y: 0,
          },
        ],
        previous: [
          {
            x: 161,
            y: 3,
          },
          {
            x: 162,
            y: 3,
          },
        ],
      },
    },
    {
      id: "amazonItems",
      title: "Amazon Items Sold",
      metricId: "totalAmazonItems",
      tip: "Number of items sold",
      services: ["amazon"],
      type: "decimal",
      delta: -50,
      values: {
        current: 3,
        previous: 6,
      },
      charts: {
        current: [
          {
            x: 162,
            y: 3,
          },
          {
            x: 163,
            y: 0,
          },
        ],
        previous: [
          {
            x: 161,
            y: 3,
          },
          {
            x: 162,
            y: 3,
          },
        ],
      },
    },
    {
      id: "amazonFees",
      title: "Amazon Estimated Fees",
      metricId: "totalAmazonFees",
      tip: "Estimated fees based on products purchased. This amount is an estimate and is not final until Amazon reports on actual fees",
      services: ["amazon"],
      type: "currency",
      delta: -46,
      values: {
        current: 21.939999999999998,
        previous: 40.769999999999996,
      },
      charts: {
        current: [
          {
            x: 162,
            y: 21.939999999999998,
          },
          {
            x: 163,
            y: 0,
          },
        ],
        previous: [
          {
            x: 161,
            y: 18.83,
          },
          {
            x: 162,
            y: 21.939999999999998,
          },
        ],
      },
    },
    {
      id: "amazonSalesAFN",
      title: "FBA Amazon Sales",
      metricId: "totalAmazonSalesAFN",
      tip: "Gross sales value sold in Amazon fulfillment network. What the customer paid for the order including shipping, taxes, discounts",
      services: ["amazon"],
      type: "currency",
      delta: -36,
      values: {
        current: 67.52,
        previous: 106.05,
      },
      charts: {
        current: [
          {
            x: 162,
            y: 67.52,
          },
          {
            x: 163,
            y: 0,
          },
        ],
        previous: [
          {
            x: 161,
            y: 38.53,
          },
          {
            x: 162,
            y: 67.52,
          },
        ],
      },
    },
    {
      id: "amazonProductItemPriceAFN",
      title: "FBA Amazon Product Sales",
      metricId: "totalAmazonProductItemPriceAFN",
      tip: "Ordered product sales in Amazon fulfillment network. This is what Amazon shows in the financial report",
      services: ["amazon"],
      type: "currency",
      delta: -51,
      values: {
        current: 64.9,
        previous: 134.8,
      },
      charts: {
        current: [
          {
            x: 162,
            y: 64.9,
          },
          {
            x: 163,
            y: 0,
          },
        ],
        previous: [
          {
            x: 161,
            y: 69.9,
          },
          {
            x: 162,
            y: 64.9,
          },
        ],
      },
    },
    {
      id: "amazonSalesTaxesAFN",
      title: "FBA Amazon Taxes",
      metricId: "totalAmazonSalesTaxesAFN",
      tip: "Amount customers paid in taxes on orders placed in Amazon fulfillment network",
      services: ["amazon"],
      type: "currency",
      delta: -57,
      values: {
        current: 2.62,
        previous: 6.2,
      },
      charts: {
        current: [
          {
            x: 162,
            y: 2.62,
          },
          {
            x: 163,
            y: 0,
          },
        ],
        previous: [
          {
            x: 161,
            y: 3.58,
          },
          {
            x: 162,
            y: 2.62,
          },
        ],
      },
    },
    {
      id: "amazonOrdersAFN",
      title: "FBA Amazon Orders",
      metricId: "totalAmazonOrdersAFN",
      tip: "Number of orders placed in Amazon fulfillment network",
      services: ["amazon"],
      type: "decimal",
      delta: -33,
      values: {
        current: 2,
        previous: 3,
      },
      charts: {
        current: [
          {
            x: 162,
            y: 2,
          },
          {
            x: 163,
            y: 0,
          },
        ],
        previous: [
          {
            x: 161,
            y: 1,
          },
          {
            x: 162,
            y: 2,
          },
        ],
      },
    },
    {
      id: "amazonItemsAFN",
      title: "FBA Amazon Items Sold",
      metricId: "totalAmazonItemsAFN",
      tip: "Number of items sold in Amazon fulfillment network",
      services: ["amazon"],
      type: "decimal",
      delta: -33,
      values: {
        current: 2,
        previous: 3,
      },
      charts: {
        current: [
          {
            x: 162,
            y: 2,
          },
          {
            x: 163,
            y: 0,
          },
        ],
        previous: [
          {
            x: 161,
            y: 1,
          },
          {
            x: 162,
            y: 2,
          },
        ],
      },
    },
    {
      id: "amazonFeesAFN",
      title: "FBA Amazon Estimated Fees",
      metricId: "totalAmazonFeesAFN",
      tip: "Estimated fees based on products purchased in Amazon fulfillment network. This amount is an estimate and is not final until Amazon reports on actual fees",
      services: ["amazon"],
      type: "currency",
      delta: -34,
      values: {
        current: 17.45,
        previous: 26.549999999999997,
      },
      charts: {
        current: [
          {
            x: 162,
            y: 17.45,
          },
          {
            x: 163,
            y: 0,
          },
        ],
        previous: [
          {
            x: 161,
            y: 9.1,
          },
          {
            x: 162,
            y: 17.45,
          },
        ],
      },
    },
    {
      id: "amazonSalesMFN",
      title: "FBM Amazon Sales",
      metricId: "totalAmazonSalesMFN",
      tip: "Gross sales value sold in Merchant fulfillment network. What the customer paid for the order including shipping, taxes, discounts",
      services: ["amazon"],
      type: "currency",
      delta: -68,
      values: {
        current: 32.12,
        previous: 100.91999999999999,
      },
      charts: {
        current: [
          {
            x: 162,
            y: 32.12,
          },
          {
            x: 163,
            y: 0,
          },
        ],
        previous: [
          {
            x: 161,
            y: 68.8,
          },
          {
            x: 162,
            y: 32.12,
          },
        ],
      },
    },
    {
      id: "amazonProductItemPriceMFN",
      title: "FBM Amazon Product Sales",
      metricId: "totalAmazonProductItemPriceMFN",
      tip: "Ordered product sales in Merchant fulfillment network. This is what Amazon shows in the financial report",
      services: ["amazon"],
      type: "currency",
      delta: -68,
      values: {
        current: 29.95,
        previous: 94.85000000000001,
      },
      charts: {
        current: [
          {
            x: 162,
            y: 29.95,
          },
          {
            x: 163,
            y: 0,
          },
        ],
        previous: [
          {
            x: 161,
            y: 64.9,
          },
          {
            x: 162,
            y: 29.95,
          },
        ],
      },
    },
    {
      id: "amazonSalesTaxesMFN",
      title: "FBM Amazon Taxes",
      metricId: "totalAmazonSalesTaxesMFN",
      tip: "Amount customers paid in taxes on orders placed in Merchant fulfillment network",
      services: ["amazon"],
      type: "currency",
      delta: -64,
      values: {
        current: 2.17,
        previous: 6.07,
      },
      charts: {
        current: [
          {
            x: 162,
            y: 2.17,
          },
          {
            x: 163,
            y: 0,
          },
        ],
        previous: [
          {
            x: 161,
            y: 3.9000000000000004,
          },
          {
            x: 162,
            y: 2.17,
          },
        ],
      },
    },
    {
      id: "amazonOrdersMFN",
      title: "FBM Amazon Orders",
      metricId: "totalAmazonOrdersMFN",
      tip: "Number of orders placed in Merchant fulfillment network",
      services: ["amazon"],
      type: "decimal",
      delta: -66,
      values: {
        current: 1,
        previous: 3,
      },
      charts: {
        current: [
          {
            x: 162,
            y: 1,
          },
          {
            x: 163,
            y: 0,
          },
        ],
        previous: [
          {
            x: 161,
            y: 2,
          },
          {
            x: 162,
            y: 1,
          },
        ],
      },
    },
    {
      id: "amazonItemsMFN",
      title: "FBM Amazon Items Sold",
      metricId: "totalAmazonItemsMFN",
      tip: "Number of items sold in Merchant fulfillment network",
      services: ["amazon"],
      type: "decimal",
      delta: -66,
      values: {
        current: 1,
        previous: 3,
      },
      charts: {
        current: [
          {
            x: 162,
            y: 1,
          },
          {
            x: 163,
            y: 0,
          },
        ],
        previous: [
          {
            x: 161,
            y: 2,
          },
          {
            x: 162,
            y: 1,
          },
        ],
      },
    },
    {
      id: "amazonFeesMFN",
      title: "FBM Amazon Estimated Fees",
      metricId: "totalAmazonFeesMFN",
      tip: "Estimated fees based on products purchased in Merchant fulfillment network. This amount is an estimate and is not final until Amazon reports on actual fees",
      services: ["amazon"],
      type: "currency",
      delta: -68,
      values: {
        current: 4.49,
        previous: 14.22,
      },
      charts: {
        current: [
          {
            x: 162,
            y: 4.49,
          },
          {
            x: 163,
            y: 0,
          },
        ],
        previous: [
          {
            x: 161,
            y: 9.73,
          },
          {
            x: 162,
            y: 4.49,
          },
        ],
      },
    },
    {
      id: "canceledAmazonSales",
      title: "Canceled Sales",
      metricId: "totalCanceledAmazonSales",
      tip: "Value of canceled orders",
      services: ["amazon"],
      type: "currency",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [
          {
            x: 162,
            y: 0,
          },
          {
            x: 163,
            y: 0,
          },
        ],
        previous: [
          {
            x: 161,
            y: 0,
          },
          {
            x: 162,
            y: 0,
          },
        ],
      },
    },
    {
      id: "canceledAmazonProductItemPrice",
      title: "Canceled Amazon Product Sales",
      metricId: "totalCanceledAmazonProductItemPrice",
      tip: "Canceled ordered product sales",
      services: ["amazon"],
      type: "currency",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [
          {
            x: 162,
            y: 0,
          },
          {
            x: 163,
            y: 0,
          },
        ],
        previous: [
          {
            x: 161,
            y: 0,
          },
          {
            x: 162,
            y: 0,
          },
        ],
      },
    },
    {
      id: "canceledAmazonSalesTaxes",
      title: "Canceled Taxes",
      metricId: "totalCanceledAmazonSalesTaxes",
      services: ["amazon"],
      type: "currency",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [
          {
            x: 162,
            y: 0,
          },
          {
            x: 163,
            y: 0,
          },
        ],
        previous: [
          {
            x: 161,
            y: 0,
          },
          {
            x: 162,
            y: 0,
          },
        ],
      },
    },
    {
      id: "canceledAmazonOrders",
      title: "Canceled Orders",
      metricId: "totalCanceledAmazonOrders",
      tip: "Number of canceled orders",
      services: ["amazon"],
      type: "decimal",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [
          {
            x: 162,
            y: 0,
          },
          {
            x: 163,
            y: 0,
          },
        ],
        previous: [
          {
            x: 161,
            y: 0,
          },
          {
            x: 162,
            y: 0,
          },
        ],
      },
    },
    {
      id: "canceledAmazonItems",
      title: "Canceled Items Sold",
      metricId: "totalCanceledAmazonItems",
      services: ["amazon"],
      type: "decimal",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [
          {
            x: 162,
            y: 0,
          },
          {
            x: 163,
            y: 0,
          },
        ],
        previous: [
          {
            x: 161,
            y: 0,
          },
          {
            x: 162,
            y: 0,
          },
        ],
      },
    },
    {
      id: "canceledAmazonFees",
      title: "Canceled Amazon Fees",
      metricId: "totalCanceledAmazonFees",
      services: ["amazon"],
      type: "currency",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [
          {
            x: 162,
            y: 0,
          },
          {
            x: 163,
            y: 0,
          },
        ],
        previous: [
          {
            x: 161,
            y: 0,
          },
          {
            x: 162,
            y: 0,
          },
        ],
      },
    },
    {
      id: "canceledAmazonSalesAFN",
      title: "Canceled FBA Sales",
      metricId: "totalCanceledAmazonSalesAFN",
      tip: "Value of canceled orders from Amazon fulfillment network",
      services: ["amazon"],
      type: "currency",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [
          {
            x: 162,
            y: 0,
          },
          {
            x: 163,
            y: 0,
          },
        ],
        previous: [
          {
            x: 161,
            y: 0,
          },
          {
            x: 162,
            y: 0,
          },
        ],
      },
    },
    {
      id: "canceledAmazonProductItemPriceAFN",
      title: "Canceled FBA Amazon Product Sales",
      metricId: "totalCanceledAmazonProductItemPriceAFN",
      tip: "Canceled ordered product sales in Amazon fulfillment network",
      services: ["amazon"],
      type: "currency",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [
          {
            x: 162,
            y: 0,
          },
          {
            x: 163,
            y: 0,
          },
        ],
        previous: [
          {
            x: 161,
            y: 0,
          },
          {
            x: 162,
            y: 0,
          },
        ],
      },
    },
    {
      id: "canceledAmazonSalesTaxesAFN",
      title: "Canceled FBA Taxes",
      metricId: "totalCanceledAmazonSalesTaxesAFN",
      services: ["amazon"],
      type: "currency",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [
          {
            x: 162,
            y: 0,
          },
          {
            x: 163,
            y: 0,
          },
        ],
        previous: [
          {
            x: 161,
            y: 0,
          },
          {
            x: 162,
            y: 0,
          },
        ],
      },
    },
    {
      id: "canceledAmazonOrdersAFN",
      title: "Canceled FBA Orders",
      metricId: "totalCanceledAmazonOrdersAFN",
      tip: "Number of canceled orders from Amazon fulfillment network",
      services: ["amazon"],
      type: "decimal",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [
          {
            x: 162,
            y: 0,
          },
          {
            x: 163,
            y: 0,
          },
        ],
        previous: [
          {
            x: 161,
            y: 0,
          },
          {
            x: 162,
            y: 0,
          },
        ],
      },
    },
    {
      id: "canceledAmazonItemsAFN",
      title: "Canceled FBA Items Sold",
      metricId: "totalCanceledAmazonItemsAFN",
      services: ["amazon"],
      type: "decimal",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [
          {
            x: 162,
            y: 0,
          },
          {
            x: 163,
            y: 0,
          },
        ],
        previous: [
          {
            x: 161,
            y: 0,
          },
          {
            x: 162,
            y: 0,
          },
        ],
      },
    },
    {
      id: "canceledAmazonFeesAFN",
      title: "Canceled FBA Amazon Fees",
      metricId: "totalCanceledAmazonFeesAFN",
      services: ["amazon"],
      type: "currency",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [
          {
            x: 162,
            y: 0,
          },
          {
            x: 163,
            y: 0,
          },
        ],
        previous: [
          {
            x: 161,
            y: 0,
          },
          {
            x: 162,
            y: 0,
          },
        ],
      },
    },
    {
      id: "canceledAmazonSalesMFN",
      title: "Canceled FBM Amazon Sales",
      metricId: "totalCanceledAmazonSalesMFN",
      tip: "Value of canceled orders from Merchant fulfillment network",
      services: ["amazon"],
      type: "currency",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [
          {
            x: 162,
            y: 0,
          },
          {
            x: 163,
            y: 0,
          },
        ],
        previous: [
          {
            x: 161,
            y: 0,
          },
          {
            x: 162,
            y: 0,
          },
        ],
      },
    },
    {
      id: "canceledAmazonProductItemPriceMFN",
      title: "Canceled FBM Amazon Product Sales",
      metricId: "totalCanceledAmazonProductItemPriceMFN",
      tip: "Canceled ordered product sales in Merchant fulfillment network",
      services: ["amazon"],
      type: "currency",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [
          {
            x: 162,
            y: 0,
          },
          {
            x: 163,
            y: 0,
          },
        ],
        previous: [
          {
            x: 161,
            y: 0,
          },
          {
            x: 162,
            y: 0,
          },
        ],
      },
    },
    {
      id: "canceledAmazonSalesTaxesMFN",
      title: "Canceled FBM Amazon Taxes",
      metricId: "totalCanceledAmazonSalesTaxesMFN",
      services: ["amazon"],
      type: "currency",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [
          {
            x: 162,
            y: 0,
          },
          {
            x: 163,
            y: 0,
          },
        ],
        previous: [
          {
            x: 161,
            y: 0,
          },
          {
            x: 162,
            y: 0,
          },
        ],
      },
    },
    {
      id: "canceledAmazonOrdersMFN",
      title: "Canceled FBM Amazon Orders",
      metricId: "totalCanceledAmazonOrdersMFN",
      tip: "Number of canceled orders from Merchant fulfillment network",
      services: ["amazon"],
      type: "decimal",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [
          {
            x: 162,
            y: 0,
          },
          {
            x: 163,
            y: 0,
          },
        ],
        previous: [
          {
            x: 161,
            y: 0,
          },
          {
            x: 162,
            y: 0,
          },
        ],
      },
    },
    {
      id: "canceledAmazonItemsMFN",
      title: "Canceled FBM Amazon Items Sold",
      metricId: "totalCanceledAmazonItemsMFN",
      services: ["amazon"],
      type: "decimal",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [
          {
            x: 162,
            y: 0,
          },
          {
            x: 163,
            y: 0,
          },
        ],
        previous: [
          {
            x: 161,
            y: 0,
          },
          {
            x: 162,
            y: 0,
          },
        ],
      },
    },
    {
      id: "canceledAmazonFeesMFN",
      title: "Canceled FBM Amazon Fees",
      metricId: "totalCanceledAmazonFeesMFN",
      services: ["amazon"],
      type: "currency",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [
          {
            x: 162,
            y: 0,
          },
          {
            x: 163,
            y: 0,
          },
        ],
        previous: [
          {
            x: 161,
            y: 0,
          },
          {
            x: 162,
            y: 0,
          },
        ],
      },
    },
    {
      id: "amazonAds",
      title: "Amazon Ads",
      metricId: "amazonAds",
      tip: "Ads = Ad spend",
      services: ["amazon"],
      type: "currency",
      delta: -55,
      values: {
        current: 3.6100000000000003,
        previous: 8.120000000000001,
      },
      charts: {
        current: [
          {
            x: 162,
            y: 3.6100000000000003,
          },
          {
            x: 163,
            y: 0,
          },
        ],
        previous: [
          {
            x: 161,
            y: 4.51,
          },
          {
            x: 162,
            y: 3.6100000000000003,
          },
        ],
      },
    },
    {
      id: "amazonROAS",
      title: "Amazon ROAS",
      metricId: "amazonROAS",
      tip: "Return On Ad Spend",
      services: ["amazon"],
      type: "decimal",
      delta: -100,
      values: {
        current: 0,
        previous: 4.304187192118226,
      },
      charts: {
        current: [
          {
            x: 162,
            y: 0,
          },
          {
            x: 163,
            y: 0,
          },
        ],
        previous: [
          {
            x: 161,
            y: 7.749445676274946,
          },
          {
            x: 162,
            y: 0,
          },
        ],
      },
    },
    {
      id: "amazonCPC",
      title: "Amazon CPC",
      metricId: "amazonCPC",
      tip: "Cost Per Click",
      services: ["amazon"],
      type: "currency",
      delta: 14,
      values: {
        current: 0.5157142857142858,
        previous: 0.4511111111111112,
      },
      charts: {
        current: [
          {
            x: 162,
            y: 0,
          },
          {
            x: 163,
            y: 0,
          },
        ],
        previous: [
          {
            x: 161,
            y: 3.1772727272727277,
          },
          {
            x: 162,
            y: 0,
          },
        ],
      },
    },
    {
      id: "amazonClicks",
      title: "Amazon Clicks",
      metricId: "amazonClicks",
      tip: "Total number of clicks",
      services: ["amazon"],
      type: "decimal",
      delta: -61,
      values: {
        current: 7,
        previous: 18,
      },
      charts: {
        current: [
          {
            x: 162,
            y: 7,
          },
          {
            x: 163,
            y: 0,
          },
        ],
        previous: [
          {
            x: 161,
            y: 11,
          },
          {
            x: 162,
            y: 7,
          },
        ],
      },
    },
    {
      id: "amazonPurchases",
      title: "Amazon Purchases",
      metricId: "amazonPurchases",
      tip: "Number of Amazon Orders attributed to Amazon advertising campaigns",
      services: ["amazon"],
      type: "decimal",
      delta: -100,
      values: {
        current: 0,
        previous: 1,
      },
      charts: {
        current: [
          {
            x: 162,
            y: 0,
          },
          {
            x: 163,
            y: 0,
          },
        ],
        previous: [
          {
            x: 161,
            y: 1,
          },
          {
            x: 162,
            y: 0,
          },
        ],
      },
    },
    {
      id: "amazonTACos",
      title: "Amazon TACoS",
      metricId: "amazonTACos",
      tip: "Total advertising cost of sales: (Amazon Advertising Spend / Amazon Total Revenue) x 100",
      services: ["amazon"],
      type: "percent",
      delta: -7,
      values: {
        current: 3.623042954636693,
        previous: 3.923273904430595,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "amazonAdsConversionValue",
      title: "Amazon Conversion Value",
      metricId: "amazonAdsConversionValue",
      tip: "Amazon reported revenue attributed from your ads",
      services: ["amazon"],
      type: "currency",
      delta: -100,
      values: {
        current: 0,
        previous: 34.95,
      },
      charts: {
        current: [
          {
            x: 162,
            y: 0,
          },
          {
            x: 163,
            y: 0,
          },
        ],
        previous: [
          {
            x: 161,
            y: 34.95,
          },
          {
            x: 162,
            y: 0,
          },
        ],
      },
    },
    {
      id: "amazonNetSales",
      title: "Amazon Net Sales",
      metricId: "amazonNetSales",
      tip: "Gross sales - shipping - taxes + shipping discounts",
      services: ["amazon"],
      type: "currency",
      delta: -51,
      values: {
        current: 94.84999999999998,
        previous: 194.69999999999996,
      },
      charts: {
        current: [
          {
            x: 162,
            y: 99.63999999999999,
          },
          {
            x: 163,
            y: 0,
          },
        ],
        previous: [
          {
            x: 161,
            y: 107.33,
          },
          {
            x: 162,
            y: 99.63999999999999,
          },
        ],
      },
    },
    {
      id: "amazonNetProfit",
      title: "Amazon Net Profit",
      metricId: "amazonNetProfit",
      tip: "Net sales - Expenses (COGS, handling fees, amazon estimated fees, Amazon Ad spend)",
      services: ["amazon"],
      type: "currency",
      delta: -51,
      values: {
        current: 69.29999999999998,
        previous: 143.80999999999995,
      },
      charts: {
        current: [
          {
            x: 162,
            y: 70.47999999999999,
          },
          {
            x: 163,
            y: 0,
          },
        ],
        previous: [
          {
            x: 161,
            y: 77.47999999999999,
          },
          {
            x: 162,
            y: 70.47999999999999,
          },
        ],
      },
    },
    {
      id: "amazonMER",
      title: "Amazon MER",
      metricId: "amazonMER",
      tip: "Percentage of sales spent on ads",
      services: ["amazon"],
      type: "percent",
      delta: -8,
      values: {
        current: 3.8060094886663167,
        previous: 4.170518746789934,
      },
      charts: {
        current: [
          {
            x: 162,
            y: 3.623042954636693,
          },
          {
            x: 163,
            y: 0,
          },
        ],
        previous: [
          {
            x: 161,
            y: 4.201993850740706,
          },
          {
            x: 162,
            y: 3.623042954636693,
          },
        ],
      },
    },
    {
      id: "amazonAOV",
      title: "Amazon AOV",
      metricId: "amazonAOV",
      tip: "Average Order Value. Total Sales / Number of Orders > $0",
      services: ["amazon"],
      type: "currency",
      delta: -3,
      values: {
        current: 33.21333333333333,
        previous: 34.495,
      },
      charts: {
        current: [
          {
            x: 162,
            y: 0,
          },
          {
            x: 163,
            y: 0,
          },
        ],
        previous: [
          {
            x: 161,
            y: 107.33,
          },
          {
            x: 162,
            y: 0,
          },
        ],
      },
    },
    {
      id: "amazonCPA",
      title: "Amazon CPA",
      metricId: "amazonCPA",
      tip: "Cost Per Acquisition. Ad Spend / Orders > $0",
      services: ["amazon"],
      type: "currency",
      delta: -11,
      values: {
        current: 1.2033333333333334,
        previous: 1.3533333333333335,
      },
      charts: {
        current: [
          {
            x: 162,
            y: 1.2033333333333334,
          },
          {
            x: 163,
            y: 0,
          },
        ],
        previous: [
          {
            x: 161,
            y: 1.5033333333333332,
          },
          {
            x: 162,
            y: 1.2033333333333334,
          },
        ],
      },
    },
    {
      id: "amazonExpenses",
      title: "Amazon Expenses",
      metricId: "amazonExpenses",
      tip: "Amazon estimated fees + COGs + Handling fees + Ad Spend ",
      services: ["amazon"],
      type: "currency",
      delta: -49,
      values: {
        current: 25.549999999999997,
        previous: 50.89,
      },
      charts: {
        current: [
          {
            x: 162,
            y: 25.549999999999997,
          },
          {
            x: 163,
            y: 0,
          },
        ],
        previous: [
          {
            x: 161,
            y: 25.339999999999996,
          },
          {
            x: 162,
            y: 25.549999999999997,
          },
        ],
      },
    },
    {
      id: "blendedSales",
      title: "Blended Sales",
      metricId: "blendedSales",
      tip: "Shopify sales + Amazon sales",
      services: ["amazon"],
      type: "currency",
      delta: -60,
      values: {
        current: 572.73,
        previous: 1466.39,
      },
      charts: {
        current: [
          {
            x: 162,
            y: 572.73,
          },
          {
            x: 163,
            y: 0,
          },
        ],
        previous: [
          {
            x: 161,
            y: 893.6600000000001,
          },
          {
            x: 162,
            y: 572.73,
          },
        ],
      },
    },
    {
      id: "pixelPurchases",
      title: "Pixel Purchases",
      metricId: "pixelPurchases",
      services: ["pixel"],
      type: "decimal",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "pixelUniqueAtc",
      title: "Pixel Unique Add to Carts",
      metricId: "pixelUniqueAtc",
      services: ["pixel"],
      type: "decimal",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "pixelUniqueVisitors",
      title: "Pixel Unique Visitors",
      metricId: "pixelUniqueVisitors",
      services: ["pixel"],
      type: "decimal",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "pixelConversionRate",
      title: "Pixel Conversion Rate",
      metricId: "pixelConversionRate",
      services: ["pixel"],
      type: "percent",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "twitterAds",
      title: "Twitter Ads",
      metricId: "twitter_spend",
      services: ["twitter-ads"],
      type: "currency",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "twitterRoas",
      title: "Twitter ROAS",
      metricId: "twitterRoas",
      tip: "Return on Ad Spend",
      services: ["twitter-ads"],
      type: "decimal",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "twitterImpressions",
      title: "Twitter Impressions",
      metricId: "twitterImpressions",
      services: ["twitter-ads"],
      type: "decimal",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "twitterCpm",
      title: "Twitter CPM",
      metricId: "twitterCpm",
      tip: "Cost Per 1000 Impressions",
      services: ["twitter-ads"],
      type: "currency",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "twitterCpa",
      title: "Twitter CPA",
      metricId: "twitterCpa",
      tip: "Cost Per Acquisition",
      services: ["twitter-ads"],
      type: "currency",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "twitterPurchases",
      title: "Twitter Purchases",
      metricId: "twitterPurchases",
      services: ["twitter-ads"],
      type: "decimal",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "twitterConversionValue",
      title: "Twitter Conversion Value",
      metricId: "twitterConversionValue",
      services: ["twitter-ads"],
      type: "currency",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "twitterEngagements",
      title: "Twitter Engagements",
      metricId: "twitterEngagements",
      services: ["twitter-ads"],
      type: "decimal",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "twitterFollows",
      title: "Twitter Follows",
      metricId: "twitterFollows",
      services: ["twitter-ads"],
      type: "decimal",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "twitterClicks",
      title: "Twitter Clicks",
      metricId: "twitterClicks",
      services: ["twitter-ads"],
      type: "decimal",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "bingAdSpend",
      title: "Microsoft Ads Spend",
      metricId: "bingAdSpend",
      tip: "Microsoft Ad Spend",
      services: ["bing"],
      type: "currency",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "bingImpressions",
      title: "Microsoft Ads Impressions",
      metricId: "bingImpressions",
      services: ["bing"],
      type: "decimal",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "bingClicks",
      title: "Microsoft Ads Clicks",
      metricId: "bingClicks",
      services: ["bing"],
      type: "decimal",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "bingRoas",
      title: "Microsoft Ads ROAS",
      metricId: "bingRoas",
      tip: "Return on Ad Spend",
      services: ["bing"],
      type: "decimal",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "bingConversions",
      title: "Microsoft Ads Conversions",
      metricId: "bingConversions",
      services: ["bing"],
      type: "decimal",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "bingConversionValue",
      title: "Microsoft Ads Conversion Value",
      metricId: "bingConversionValue",
      services: ["bing"],
      type: "currency",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "bingCtr",
      title: "Microsoft Ads CTR",
      metricId: "bingCtr",
      tip: "Click Through Rate. Percentage of people clicking the ad",
      services: ["bing"],
      type: "decimal",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "bingCpm",
      title: "Microsoft Ads CPM",
      metricId: "bingCpm",
      tip: "Cost Per 1000 Impressions",
      services: ["bing"],
      type: "currency",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "bingCpa",
      title: "Microsoft Ads CPA",
      metricId: "bingCpa",
      tip: "Cost Per Acquisition",
      services: ["bing"],
      type: "currency",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "cashTotal",
      title: "Finance Cash Total",
      metricId: "cashTotal",
      tip: "The total amount of cash across all your business bank accounts at the end of this time period.",
      services: ["finance"],
      type: "currency",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [
          {
            x: 73,
            y: "00",
          },
        ],
        previous: [
          {
            x: 73,
            y: "00",
          },
        ],
      },
    },
    {
      id: "creditTotal",
      title: "Finance Credit Total",
      metricId: "creditTotal",
      tip: "The total outstanding balance across all your business credit cards at the end of this time period.",
      services: ["finance"],
      type: "currency",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "moneyIn",
      title: "Money In",
      metricId: "moneyInSum",
      tip: "The total amount of cash that came into your business bank account(s) during this time period.",
      services: ["finance"],
      type: "currency",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "moneyOut",
      title: "Money Out",
      metricId: "moneyOutSum",
      tip: "The total amount of cash that left your business bank account(s) during this time period.",
      services: ["finance"],
      type: "currency",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "beginningCash",
      title: "Beginning Cash",
      metricId: "beginningCash",
      tip: "The total amount of cash you had in your business bank account(s) at the end of this time period.",
      services: ["finance"],
      type: "currency",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "endingCash",
      title: "Ending Cash",
      metricId: "endingCash",
      tip: "The total amount of cash you had in your business bank account(s) at the beginning of this time period.",
      services: ["finance"],
      type: "currency",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "totalChange",
      title: "Total Change",
      metricId: "totalChange",
      tip: "The difference between the amount of cash you had in your business bank account(s) at the beginning and end of this period.",
      services: ["finance"],
      type: "currency",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "inventoryCost",
      title: "Cost of Inventory in Stock",
      metricId: "totalInventoryCost",
      tip: "Cost of Units in Stock",
      services: ["finance"],
      type: "currency",
      delta: 0,
      values: {
        current: 144649.27000000002,
        previous: 144649.27000000002,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "inventoryValue",
      title: "Value of Inventory in Stock",
      metricId: "totalInventoryValue",
      tip: "Value of Units in Stock",
      services: ["finance"],
      type: "currency",
      delta: 0,
      values: {
        current: 794724.76,
        previous: 794724.76,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "cashBalance",
      title: "Cash",
      metricId: "cashTotal",
      tip: "The total amount of cash you had in your business bank account(s) at the end of this time period.",
      services: ["finance"],
      type: "currency",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [
          {
            x: 73,
            y: "00",
          },
        ],
        previous: [
          {
            x: 73,
            y: "00",
          },
        ],
      },
    },
    {
      id: "creditBalance",
      title: "Credit Card Debt",
      metricId: "creditTotal",
      tip: "The total amount of credit card debt you had at the end of this time period.",
      services: ["finance"],
      type: "currency",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "invoicesTotal",
      title: "Invoices Total",
      metricId: "invoicesTotal",
      tip: "This represents the total amount that you need to pay across all your invoices.",
      services: ["finance"],
      type: "currency",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "invoices30Total",
      title: "Total Due within 30 Days",
      metricId: "invoices30Total",
      tip: "This represents the total amount that you need to pay across all your invoices between now and 30 days from now.",
      services: ["finance"],
      type: "currency",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "invoices60Total",
      title: "Total Due within 60 Days",
      metricId: "invoices60Total",
      tip: "This represents the total amount that you need to pay across all your invoices between now and 60 days from now.",
      services: ["finance"],
      type: "currency",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "invoices90Total",
      title: "Total Due within 90 Days",
      metricId: "invoices90Total",
      tip: "This represents the total amount that you need to pay across all your invoices between now and 90 days from now.",
      services: ["finance"],
      type: "currency",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "ebitda",
      title: "EBITDA",
      metricId: "ebitda",
      tip: "Earnings before interest, taxes, depreciation and amortization.",
      services: ["finance"],
      type: "currency",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "burnRate",
      title: "Burn Rate",
      metricId: "burnRate",
      tip: "The amount of money your business lost during this time period, net of all expenses",
      services: ["finance"],
      type: "currency",
      delta: 0,
      values: {
        current: "N/A",
        previous: "N/A",
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "runway",
      title: "Runway (Days)",
      metricId: "runway",
      tip: "The amount of time you have before your business run out of cash (assuming no change in funding or business performance).",
      services: ["finance"],
      type: "decimal",
      delta: 0,
      values: {
        current: null,
        previous: null,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "valuation",
      title: "Valuation",
      metricId: "valuation",
      tip: "The value of your business.  Click this tile to edit the formula for valuation.",
      services: ["finance"],
      type: "currency",
      delta: -62,
      values: {
        current: 863389.25,
        previous: 2298441.5,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "salesPerDay",
      title: "Average Daily Sales",
      metricId: "salesPerDay",
      tip: "The amount of revenue your business generates on a typical day.",
      services: ["finance"],
      type: "currency",
      delta: -62,
      values: {
        current: 473.09000000000003,
        previous: 1259.42,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
    {
      id: "invoicesTotalNegative",
      title: "Invoices Total",
      metricId: "invoicesTotalNegative",
      tip: "This represents the total amount that you need to pay across all your invoices",
      services: ["finance"],
      type: "currency",
      delta: 0,
      values: {
        current: 0,
        previous: 0,
      },
      charts: {
        current: [],
        previous: [],
      },
    },
  ],
}
