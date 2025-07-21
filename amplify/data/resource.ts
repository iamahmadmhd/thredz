import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

/*== STEP 1 ===============================================================
The section below creates a Todo database table with a "content" field. Try
adding a new "isDone" field as a boolean. The authorization rule below
specifies that any unauthenticated user can "create", "read", "update", 
and "delete" any "Todo" records.
=========================================================================*/

const schema = a.schema({
    User: a
        .model({
            username: a.string().required(),
            bio: a.string(),
            avatarUrl: a.string(),
        })
        .authorization((allow) => [
            allow.owner(), // user can access their own record
            allow.guest().to(['read']), // anyone can read profiles
        ]),

    Follow: a
        .model({
            followerId: a.string().required(),
            followeeId: a.string().required(),
        })
        .authorization((allow) => [
            allow.owner(), // only the owner can create/remove follows
        ]),

    Thredz: a
        .model({
            content: a.string().required(),
            createdAt: a.datetime(),
            authorId: a.string().required(),
            parentId: a.string(), // for replies
        })
        .authorization((allow) => [
            allow.owner(), // only the author can edit/delete
            allow.guest().to(['read']), // public feed view
        ]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
    schema,
    authorizationModes: {
        defaultAuthorizationMode: 'identityPool', // uses Cognito Identity Pool (recommended for Amplify Gen 2)
    },
});

/*== STEP 2 ===============================================================
Go to your frontend source code. From your client-side code, generate a
Data client to make CRUDL requests to your table. (THIS SNIPPET WILL ONLY
WORK IN THE FRONTEND CODE FILE.)

Using JavaScript or Next.js React Server Components, Middleware, Server 
Actions or Pages Router? Review how to generate Data clients for those use
cases: https://docs.amplify.aws/gen2/build-a-backend/data/connect-to-API/
=========================================================================*/

/*
"use client"
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";

const client = generateClient<Schema>() // use this Data client for CRUDL requests
*/

/*== STEP 3 ===============================================================
Fetch records from the database and use them in your frontend component.
(THIS SNIPPET WILL ONLY WORK IN THE FRONTEND CODE FILE.)
=========================================================================*/

/* For example, in a React component, you can use this snippet in your
  function's RETURN statement */
// const { data: todos } = await client.models.Todo.list()

// return <ul>{todos.map(todo => <li key={todo.id}>{todo.content}</li>)}</ul>
