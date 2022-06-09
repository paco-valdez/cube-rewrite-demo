
cube(`EstimatedOpportunity`, {
  rewriteQueries: true,
  sql: `SELECT * FROM utilization_opportunity_materialized_value WHERE product_id IS NOT NULL`, //`  where ${FILTER_PARAMS.EstimatedOpportunity.productId.filter("product_id")}`,
  // refreshKey: {
  //   every: PRODUCT_REFRESH_INTERVAL,
  //   sql: `SELECT MAX(updated_at) from public.product where ${FILTER_PARAMS.EstimatedOpportunity.orgId.filter(
  //     "org_id"
  //   )}`,
  // },
  preAggregations: {},
  joins: {
  },
  segments: {},
  measures: {
    volume: {
      sql: `coalesce(volume, 0)`,
      type: `sum`,
    },
    opportunityValue: {
      sql: `coalesce(opp_value, 0)`,
      type: `sum`,
      format: `currency`,
    },
    hcpCount: {
      sql: `npi`,
      type: "countDistinct",
    },
    socCount: {
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
    npi: {
      sql: `npi`,
      type: `number`,
      primaryKey: true,
      shown: true,
    },
    productId: {
      sql: `product_id`,
      type: `number`,
      primaryKey: true,
      shown: true,
      //subQuery: true,
      //propagateFiltersToSubQuery: true,
    },
    orgId: {
      sql: `org_id`,
      type: `number`,
    },
  },
});
