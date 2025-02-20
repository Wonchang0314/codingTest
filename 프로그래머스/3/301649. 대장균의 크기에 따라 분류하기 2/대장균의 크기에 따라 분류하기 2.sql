-- 코드를 작성해주세요
with RANKED_ECOLI as (
    select ID, SIZE_OF_COLONY,
    NTILE(4) over (order by SIZE_OF_COLONY desc) as RANK_GROUP
    from ECOLI_DATA
)
select ID,
case 
when RANK_GROUP = 1 then 'CRITICAL'
when RANK_GROUP = 2 then 'HIGH'
when RANK_GROUP = 3 then 'MEDIUM'
else 'LOW'
end as COLONY_NAME
from RANKED_ECOLI
order by ID
