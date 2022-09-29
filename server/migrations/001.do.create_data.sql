CREATE TABLE IF NOT EXISTS "user"
(
 id    integer NOT NULL GENERATED BY DEFAULT AS IDENTITY (
 ),
 email  character varying(150) NOT NULL,
 first_name  character varying(150) NOT NULL,
 last_name   character varying(150) NOT NULL,
 zip_code   character varying(150) NOT NULL,
 CONSTRAINT PK_users PRIMARY KEY ( id )
);