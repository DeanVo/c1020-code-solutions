select "a"."line1" as "Line 1",
  "a"."district" as "District",
  "c"."name" as "City Name",
  "countries"."name" as "Country"
from "addresses" as "a"
join "cities" as "c" using ("cityId")
join "countries" using ("countryId");
