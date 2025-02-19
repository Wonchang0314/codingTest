-- 코드를 작성해주세요
with second_gen as (
    select ID 
    from ECOLI_DATA
    where PARENT_ID in (select ID from ECOLI_DATA where PARENT_ID is null)
)
select ID from ECOLI_DATA
where PARENT_ID in (select ID from second_gen)
order by ID asc