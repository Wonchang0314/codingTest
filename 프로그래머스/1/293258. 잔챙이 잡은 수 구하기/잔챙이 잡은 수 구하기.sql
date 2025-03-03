-- 코드를 작성해주세요
select count(ID) as FISH_COUNT
from FISH_INFO 
where LENGTH <= 10 OR LENGTH is NULL