FROM postgres:10.3

ADD /tables/ /docker-entrypoint-initdb.d/tables/
ADD deploy_schema.sql /docker-entrypoint-initdb.d/
