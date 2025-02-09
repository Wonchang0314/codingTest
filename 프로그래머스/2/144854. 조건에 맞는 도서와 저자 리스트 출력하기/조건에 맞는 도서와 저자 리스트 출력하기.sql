-- 코드를 입력하세요
select book.BOOK_ID, author.AUTHOR_NAME, DATE_FORMAT(book.PUBLISHED_DATE, "%Y-%m-%d") as PUBLISHED_DATE
from BOOK book 
join AUTHOR author 
on book.AUTHOR_ID = author.AUTHOR_ID 
where book.CATEGORY = '경제'
order by book.PUBLISHED_DATE asc