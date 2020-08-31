# Schema 

### Accounts
column name | data type | details
------------|-----------|--------
id | integer (serial) | not null, primary key
name | string | not null
email | string | not null, indexed, unique
passwordDigest | string | not null
<br />

### Products
column name | data type | details
------------|-----------|--------
id | integer (serial) | not null, primary key
productName | string | not null
img | url | not null
rating | integer | 
description | text | not null
type | string | not null
<br />

### Reviews (Bonus)
column name | data type | details
------------|-----------|--------
id | integer (serial) | not null, primary key
userName | string  | not null, foreign key references Accounts(name)
productId | integer | not null, foreign key references Products(id)
review | text | not null