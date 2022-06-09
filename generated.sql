SELECT
  "zipcode_location".zip "zipcode_location__zip_code",
  count(distinct "estimated_opportunity".npi) "estimated_opportunity__hcp_count",
  count(distinct "estimated_opportunity".soc_id) "estimated_opportunity__soc_count",
  sum(coalesce(opp_value, 0)) "estimated_opportunity__opportunity_value"
FROM
  (
    SELECT
      zip,
      city,
      state
    FROM
      zipcode_location
  ) AS "zipcode_location"
  LEFT JOIN (
    SELECT
      site_of_care_parent.*
    FROM
      site_of_care_parent
  ) AS "soc_zipcode" ON "zipcode_location".zip = "soc_zipcode".postal_code
  LEFT JOIN public.utilization_opportunity_materialized_value AS "estimated_opportunity" ON "estimated_opportunity".soc_id = "soc_zipcode".soc_id
WHERE
  (
    "estimated_opportunity".product_id IN ('5')
    OR "estimated_opportunity".product_id IS NULL
  )
  AND ("zipcode_location".state = 'NY')
GROUP BY
  1
LIMIT
  10000