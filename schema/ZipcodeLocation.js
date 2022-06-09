cube("ZipcodeLocation", {
  rewriteQueries: true,
  sql: `SELECT zip, city, state FROM zipcode_location`,

  preAggregations: {
    // salesByProductZip: {
    //   measures: [Sales.amount],
    //   dimensions: [CUBE.zipCode, Sales.productId],
    //   refreshKey: {
    //     every: CORE_ETL_SOURCE_REFRESH_INTERVAL,
    //     sql: `SELECT MAX(updated_at) from public.product`,
    //   },
    // },
    // utilizationsByProductZip: {
    //   measures: [EstimatedOpportunity.volume],
    //   dimensions: [CUBE.zipCode, EstimatedOpportunity.productId],
    //   refreshKey: {
    //     every: GLOBAL_PRODUCT_REFRESH_INTERVAL,
    //     sql: `SELECT MAX(updated_at) from public.product`,
    //   },
    //   indexes: {
    //     zipIndex: {
    //       columns: [CUBE.zipCode],
    //     },
    //   },
    // },
    // salesByProductState: {
    //   measures: [Sales.amount],
    //   dimensions: [CUBE.state, Sales.productId],
    //   refreshKey: {
    //     every: CORE_ETL_SOURCE_REFRESH_INTERVAL,
    //     sql: `SELECT MAX(updated_at) from public.product`,
    //   },
    //   indexes: {
    //     stateIndex: {
    //       columns: [CUBE.state],
    //     },
    //   },
    // },
    // utilizationsByProductState: {
    //   measures: [EstimatedOpportunity.volume],
    //   dimensions: [CUBE.state, EstimatedOpportunity.productId],
    //   refreshKey: {
    //     every: GLOBAL_PRODUCT_REFRESH_INTERVAL,
    //     sql: `SELECT MAX(updated_at) from public.product`,
    //   },
    // },
  },

  joins: {
    SocZipcode: {
      relationship: `hasMany`,
      sql: `${CUBE}.zip = ${SocZipcode}.postal_code`,
    },
  },

  measures: {
    count: {
      sql: `zip`,
      type: "countDistinct",
    },
  },

  dimensions: {
    zipCode: {
      sql: `zip`,
      type: `string`,
      primaryKey: true,
      shown: true,
    },
    city: {
      sql: `city`,
      type: `string`,
    },
    state: {
      sql: `state`,
      type: `string`,
    },
  },
});
