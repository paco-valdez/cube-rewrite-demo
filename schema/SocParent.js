

const BaseSocParent = cube({
  rewriteQueries: true,
  sql: `SELECT site_of_care_parent.*
    FROM site_of_care_parent 
  `,
  // refreshKey: {
  //   every: ADMIN2_SOURCE_REFRESH_INTERVAL,
  // },
  preAggregations: {},
  joins: {
  },
  segments: {},
  measures: {
    count: {
      sql: `soc_id`,
      type: "countDistinct",
    },
  },
  dimensions: {
    socId: {
      sql: `soc_id`,
      type: `string`,
      primaryKey: true,
      shown: true,
    },
    name: {
      sql: `name`,
      type: `string`,
    },
    socType: {
      sql: `soc_type`,
      type: `string`,
    },
    postalCode: {
      sql: `postal_code`,
      type: `string`,
    },
    state: {
      sql: `state`,
      type: `string`,
    },
    annualUtilizations: {
      sql: `annual_utilizations`,
      type: `number`,
    },
    latitude: {
      sql: `latitude`,
      type: `number`,
    },
    longitude: {
      sql: `longitude`,
      type: `number`,
    },
  },
});

cube(`SocParent`, {
  extends: BaseSocParent,
});

cube(`SocZipcode`, {
  extends: BaseSocParent,
  joins: {
    EstimatedOpportunity: {
      relationship: `hasMany`,
      sql: `${EstimatedOpportunity}.soc_id = ${CUBE}.soc_id`,
    },
  },
});
