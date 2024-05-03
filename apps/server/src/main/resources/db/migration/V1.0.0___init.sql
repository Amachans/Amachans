CREATE TABLE test (
    id varchar(256) NOT NULL,
    description varchar(256),
    PRIMARY KEY (id)
);

INSERT INTO test(id, description) values(
    'id',
    'test description'
);