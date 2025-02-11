-- 코드를 입력하세요
SELECT ai.ANIMAL_ID, ai.ANIMAL_TYPE, ai.NAME 
from ANIMAL_INS ai
join ANIMAL_OUTS ao
on ai.ANIMAL_ID = ao.ANIMAL_ID
where (ai.SEX_UPON_INTAKE not in ('Neutered Male', 'Spayed Female'))
and (ao.SEX_UPON_OUTCOME in ('Neutered Male', 'Spayed Female'))
order by ai.ANIMAL_ID asc