-- Database: simplon

-- DROP DATABASE simplon;

CREATE DATABASE simplon
    WITH 
    OWNER = admin
    ENCODING = 'UTF8'
    LC_COLLATE = 'en_US.utf8'
    LC_CTYPE = 'en_US.utf8'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;

-- Table: public.Cours

-- DROP TABLE public."Cours";

-- CREATE TABLE IF NOT EXISTS public."cours"
-- (
--     "created_at" text COLLATE pg_catalog."default",
--     "estimated_time" integer NOT NULL,
--     "id" integer NOT NULL,
--     "materials" text COLLATE pg_catalog."default",
--     "Title" text COLLATE pg_catalog."default" NOT NULL,
--     "updated_at" text COLLATE pg_catalog."default",
--     CONSTRAINT "Cours_pkey" PRIMARY KEY ("id")
-- )

-- TABLESPACE pg_default;

-- ALTER TABLE public."Cours"
--     OWNER to admin;


-- -- Sample Data

-- INSERT INTO public."Cours" (
-- "Id", "Materials", "Title", "Modified_date", "E_time", "Creation_date") VALUES (
-- '01'::integer, 'Daddy, Issues
-- '::text, 'How to be a good boy
-- '::text, '17/08/2021/17:11'::text, '1400'::integer, '17/08/2021/17:11'::text)
--  returning "Id";


--  --- Table USERS --- 

--  CREATE TABLE IF NOT EXISTS public."users"
-- (
--     creation_date date,
--     email text NOT NULL,
--     first_name text,
--     id text NOT NULL,
--     info text,
--     last_name text,
--     password text NOT NULL,
--     role text,
--     update_at date,
--     PRIMARY KEY (id)
-- );