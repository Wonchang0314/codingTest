-- 코드를 작성해주세요
select count(*) as FISH_COUNT
from FISH_INFO 
where LENGTH IS NULL or LENGTH <= 10