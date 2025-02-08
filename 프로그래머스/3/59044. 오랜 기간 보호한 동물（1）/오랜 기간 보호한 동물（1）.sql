-- 코드를 입력하세요
SELECT a1.NAME, a1.DATETIME 
from ANIMAL_INS a1 
left join ANIMAL_OUTS a2 on a1.ANIMAL_ID = a2.ANIMAL_ID
where a2.ANIMAL_ID is null
order by a1.DATETIME asc
limit 3