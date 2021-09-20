CREATE TABLE IF NOT EXISTS liability_insurees(
  id BIGSERIAL NOT NULL PRIMARY KEY,
  company_name varchar(30) NOT NULL,
  primary_email varchar(40) NOT NULL,
  company_website varchar,
  years_in_business smallint NOT NULL,
  project_name varchar(100),
  project_description text,
  project_start_date date NOT NULL,
  project_expected_completion date NOT NULL,
  project_address_street varchar,
  project_address_city varchar(80),
  project_address_zip varchar(10),
  mailing_address_street varchar,
  mailing_address_city varchar(80),
  mailing_address_zip varchar(10) NOT NULL
);

CREATE TABLE IF NOT EXISTS builders_risk_insurees(
  id BIGSERIAL NOT NULL PRIMARY KEY,
  company_name varchar(30) NOT NULL,
  primary_email varchar(40) NOT NULL,
  company_website varchar,
  years_in_business smallint NOT NULL,
  project_name varchar(100),
  project_description text,
  project_start_date date NOT NULL,
  project_expected_completion date NOT NULL,
  project_address_street varchar,
  project_address_city varchar(80),
  project_address_zip varchar(10) NOT NULL,
  mailing_address_street varchar,
  mailing_address_city varchar(80),
  mailing_address_zip varchar(10) NOT NULL
);

-- from root directory, run:
-- psql -d test -a -f ./database/schema.sql
-- to create database and tables