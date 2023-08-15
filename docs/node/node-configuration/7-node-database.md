---
sidebar_position: 7
---
# 7. cMix Node Database Configuration
In this step you will add a PostgreSQL user, set the user's password and create the node database. 

## Create the PostgreSQL user named `cmix`
```jsx title="Copy and run ..."
sudo -u postgres createuser --createdb --pwprompt cmix
```
### Set the password for the user named `cmix`.
```jsx title="Sample Output"
Enter password for new role: 
Enter it again: 
```
:warning: Make a note of this password. It will be required in a later step, *[cMix Options](node-config#set-the-database-password)*
## Create the `cmix_node` database
```jsx title="Copy and run ..."
sudo -u postgres createdb -O cmix cmix_node --encoding='utf-8' --locale='C.UTF-8' --template='template0'
```
## Verify the `cmix_node` database
### Connect to the database
```jsx title="Copy and run ..."
psql -U cmix -d cmix_node -h 0.0.0.0 -p 5432
```
```jsx title="Sample Output"
Password for user cmix: 
psql (12.13 (Ubuntu 12.13-0ubuntu0.20.04.1))
SSL connection (protocol: TLSv1.3, cipher: TLS_AES_256_GCM_SHA384, bits: 256, compression: off)
Type "help" for help.

cmix_node=>
```
You are now connected to the `cmix_node` database as `cmix`. Note the command-line prompt, `cmix_node=>`
### View the database
```jsx title="Copy and run ..."
\l
```
You can see the presence of `cmix_node`.
```jsx title="Sample Output"
                                  List of databases
   Name    |  Owner   | Encoding |   Collate   |    Ctype    |   Access privileges   
-----------+----------+----------+-------------+-------------+-----------------------
 cmix_node | cmix     | UTF8     | C.UTF-8     | C.UTF-8     | 
 postgres  | postgres | UTF8     | en_US.UTF-8 | en_US.UTF-8 | 
 template0 | postgres | UTF8     | en_US.UTF-8 | en_US.UTF-8 | =c/postgres          +
           |          |          |             |             | postgres=CTc/postgres
 template1 | postgres | UTF8     | en_US.UTF-8 | en_US.UTF-8 | =c/postgres          +
           |          |          |             |             | postgres=CTc/postgres
(4 rows)

cmix_node=> 
```
### Disconnect from the database
```jsx title="Copy and run ..."
\quit
```
You are now disconnected from the database and should see the terminal command prompt
```jsx title="Sample Output"
ubuntu@node:~$ 
```
