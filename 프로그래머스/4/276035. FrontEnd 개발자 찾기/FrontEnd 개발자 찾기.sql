-- 코드를 작성해주세요
select distinct d.ID, d.EMAIL, d.FIRST_NAME, d.LAST_NAME 
from DEVELOPERS d
join SKILLCODES s 
on s.CATEGORY = 'Front End'
WHERE d.SKILL_CODE & s.CODE 
order by d.ID asc;