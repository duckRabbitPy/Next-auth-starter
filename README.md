# NextJs auth starter

Quickstart for Next.js project includes functions and files for sign up, log-in, retrieving sid cookie, retrieving user_id in getServerSide props for db queries and log-out


## Set up 

+ npm install 
+ Set up a postgres database (supabase reccomended to avoid connection pooling issue)
+ Add connection string to DATABASE_URL environmental variable in .env.local
+ populate db with the sql commands in /database/init.sql file from command line or in supabase dashboard
```npm run dev```

You should now have a working basic auth flow and access to user_id (id in the user table) serverside for all server rendered pages.


