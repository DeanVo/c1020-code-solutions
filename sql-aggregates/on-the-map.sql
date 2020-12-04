select count(*) as "Cities per Country",
  "countries"."name" as "Country"
from "countries"
join "cities" using ("countryId")
group by "Country";
