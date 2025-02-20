-- 코드를 입력하세요
select count(USER_ID) as USERS from 
USER_INFO
where AGE between 20 and 29 
and JOINED between '2021-01-01' and '2021-12-31'