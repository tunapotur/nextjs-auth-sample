//ryn-dungel-next-ecom
import mongoose from 'mongoose';

const dbConnect = async () => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }
  // DB_URI_LOCAL for local connection
  mongoose.connect(process.env.DB_URI_LOCAL, {
    dbName: 'ryan-dhungel-next-ecom',
  });
};

export default dbConnect;

// https://stackoverflow.com/questions/48917591/fail-to-connect-mongoose-to-atlas/48917626#48917626
/*
//**************************************************************
import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "SuccessTubitakDB",
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};

export default connectMongoDB;

//**************************************************************
Step-by-Step Guide: Create a Next.js 13 CRUD App with MongoDB from Scratch
samples/CRUD_MongoDB-main
https://www.youtube.com/watch?v=wNWyMsrpbz0&list=PL-F_CAUJfW9USHP05FhyaknziRDBcovXf&index=42&t=1495s

import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB.");
  } catch (error) {
    console.log(error);
  }
};

export default connectMongoDB;


//**************************************************************
https://www.youtube.com/watch?v=6N3Rumo-c3s
sample/Google-Authentication-main
Providers.js
/// bu şekilde sessionprovider ile sarmak bence daha güzel
"use client";

import { SessionProvider } from "next-auth/react";

export const NextAuthProvider = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};


//**************************************************************
https://www.youtube.com/watch?v=PEMfsqZ2-As&t=3s
sample/auth-with-credentials-main


//**************************************************************
tailwind merge isimli bir araç var işe yarayabilir bir bak
https://github.com/dcastil/tailwind-merge
*/
