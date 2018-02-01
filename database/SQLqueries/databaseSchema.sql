
DROP TABLE IF EXISTS "Companies";
DROP TABLE IF EXISTS "Jobs";
DROP TABLE IF EXISTS "Users";
DROP TABLE IF EXISTS "Cars";

create table "Companies" (
    "id" integer primary key,
    "name" character varying(255) NOT NULL,
    "country" character varying(255) NOT NULL,
    "createdAt" timestamp with time zone,
    "updatedAt" timestamp with time zone 
);

create table "Jobs" (
    "id" integer primary key,
    "function" character varying(100) NOT NULL,
    "department" character varying(100) NOT NULL,
    "companyId" integer references "Companies" ("id") NOT NULL,
    "createdAt" timestamp with time zone,
    "updatedAt" timestamp with time zone 
);

create table "Users" (
    "id" integer primary key,
    "name" character varying(255) NOT NULL,
    "email" character varying(100) NOT NULL,
    "idade" integer,
    "jobId" integer references "Jobs" ("id") NOT NULL,
    "createdAt" timestamp with time zone,
    "updatedAt" timestamp with time zone
);

create table "Cars" (
    "id" integer primary key,
    "model" character varying(100) NOT NULL,
    "brand" character varying(100) NOT NULL,
    "userId" integer references "Users" ("id") NOT NULL,
    "createdAt" timestamp with time zone,
    "updatedAt" timestamp with time zone 
);