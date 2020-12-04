select "customers"."firstName" as "First Name",
  "customers"."lastName" as "Last Name",
  sum("amount") as "Rental Total Amount"
from "customers"
join "payments" using ("customerId")
group by "customerId"
order by "Rental Total Amount" desc;
