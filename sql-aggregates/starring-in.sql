select "categories"."name" as "Film Category",
  count(*) as "Film Category Amount"
from "categories"
join "filmCategory" using ("categoryId")
join "films" using ("filmId")
join "castMembers" using ("filmId")
join "actors" using ("actorId")
  where "actors"."firstName" = 'Lisa'
  and "actors"."lastName" = 'Monroe'
group by "Film Category";
