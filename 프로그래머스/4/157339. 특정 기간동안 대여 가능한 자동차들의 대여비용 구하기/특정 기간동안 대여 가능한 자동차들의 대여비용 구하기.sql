-- 코드를 입력하세요
with RENTABLE_CARS as (
    SELECT distinct c1.CAR_ID, c1.CAR_TYPE, c1.DAILY_FEE
    from CAR_RENTAL_COMPANY_CAR c1
    left join CAR_RENTAL_COMPANY_RENTAL_HISTORY c2 
    on c1.CAR_ID = c2.CAR_ID
    and (
        (c2.START_DATE <= '2022-11-30' AND c2.END_DATE >= '2022-11-01')
    )
    where c1.CAR_TYPE in ('세단', 'SUV')
    group by c1.CAR_ID, c1.CAR_TYPE, c1.DAILY_FEE
    having count(c2.CAR_ID) = 0
)
select 
r.CAR_ID, 
r.CAR_TYPE, 
FLOOR((r.DAILY_FEE * 30) * (1 - c3.DISCOUNT_RATE / 100.0)) as FEE
from RENTABLE_CARS r
join CAR_RENTAL_COMPANY_DISCOUNT_PLAN c3
on r.CAR_TYPE = c3.CAR_TYPE
where c3.DURATION_TYPE = '30일 이상' 
and (r.DAILY_FEE * 30) * (1 - c3.DISCOUNT_RATE / 100) >= 500000
and (r.DAILY_FEE * 30) * (1 - c3.DISCOUNT_RATE / 100) < 2000000
order by FEE desc, r.CAR_TYPE asc, r.CAR_ID

