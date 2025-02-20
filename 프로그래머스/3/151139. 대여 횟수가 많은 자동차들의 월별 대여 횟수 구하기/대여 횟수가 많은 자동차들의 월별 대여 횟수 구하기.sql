-- 코드를 입력하세요
with rentalCount as (
    select CAR_ID
    from CAR_RENTAL_COMPANY_RENTAL_HISTORY
    where START_DATE between '2022-08-01' and '2022-10-31'
    group by CAR_ID
    having count(*) >= 5
)
select MONTH(START_DATE) as MONTH, CAR_ID, count(*) AS RECORDS
from CAR_RENTAL_COMPANY_RENTAL_HISTORY
where START_DATE between '2022-08-01' and '2022-10-31'
AND CAR_ID IN (SELECT CAR_ID FROM rentalCount)
GROUP BY MONTH(START_DATE), CAR_ID
ORDER BY MONTH ASC, CAR_ID DESC;
