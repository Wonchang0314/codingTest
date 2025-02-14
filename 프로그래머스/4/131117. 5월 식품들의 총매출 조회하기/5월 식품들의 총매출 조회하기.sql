-- 코드를 입력하세요
SELECT fp.PRODUCT_ID, fp.PRODUCT_NAME, 
sum(fo.AMOUNT) * fp.PRICE as TOTAL_SALES
from FOOD_PRODUCT fp
join FOOD_ORDER fo
on fp.PRODUCT_ID = fo.PRODUCT_ID
where fo.PRODUCE_DATE between '2022-05-01' and '2022-05-31'
group by fp.PRODUCT_ID, fp.PRODUCT_NAME, fp.PRICE
order by TOTAL_SALES desc, fp.PRODUCT_ID asc;