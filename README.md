#DEV

python -m venv venv

docker-compose build --no-cache
docker-compose up

docker system prune
docker prune system -a

docker build -t current_folder_name (frontend, backend, db) .

docker run -it iamp-frontend /bin/sh

docker run -e "ACCEPT_EULA=Y" -e "MSSQL_SA_PASSWORD=yourStrong(!)Password" -p 1433:1433 -d mcr.microsoft.com/mssql/server:2022-latest


pip install -r requirements.txt
pip freeze > requirements.txt


python manage.py dbshell
python manage.py createsuperuser


https://github.com/django-extensions/django-extensions

https://medium.com/@analyticscodeexplained/running-microsoft-sql-server-in-docker-a8dfdd246e45



reset password
add your email and YOU get the mail with the link to the interface for adding the password and uses the AD logic
password strength
email check





MAIL


Welcome Antonio Delivuk.
Identifier bs-jv5Xuy8HjNlZ.

1. mail

To activate your account and verify your e-mail address, please click on the following link:

https://iam.srb.europa.eu/registration/self_reg_res.htm?LPF_TOKEN_ID=M0UKKDfLilS4PgNMtZfoYMALO9KV0&lpfSelfRegNonce=QOCisaERBooeqa4tBg1hC7KlQUxCb

If you have received this message in error, it’s likely that another user entered your e-mail address, trying to create an account for a different e-mail address.

If you do not click on the validation link, the account will not be activated.

Cordially.





show message after user confirms the link in the mail

Congratulation, Antonio Delivuk, the creation of your primary account is successful.


PENDING, not confirmed




2nd mail

Antonio Delivuk, we are pleased to confirm the creation of your personal account. See you soon.
PLS wait 4 sponser


3. mail
it comes directly


FOR passowrd reset



no-reply@srb.europa.eu
15:46 (0 minutes ago)
to me

Hello,
This is the last step of your enrolment process.

Please see below your password:
EV2ow&Zo$j8V

PLEASE CHANGE YOUR PASSWORD NOW:

Connect to https://iam.srb.europa.eu authenticate (in the top right part of the screen) with the password above, and then in PROFILE section use END USER SELF-ADMINISTRATION SERVICE in order to change your password to one known only by you

This new password will be valid for 60 days and will be used to connect to all SRB applications you might have access to.

If the password is expired, you'll be prompted to change it when you first try to login to our applications. Please make sure that your new password should be at least 9 characters long, and has at least one of these:

-1 upper letter

-1 lower letter

- 1 sign

- 1 figure

Localized characters are not supported in the password, so please use only english ones.

Do not use any of the old 10 passwords, as they will not be accepted

If you forgot or lost this password, please go to https://iam.srb.europa.eu and choose the password reset option.


Regards, the SRB Team



The password must not contain two consecutive identical characters .
 - remove


 https://stackoverflow.com/questions/37847042/changing-active-directory-user-password-in-python-3-x

 dc, pass, search base, filter ping M