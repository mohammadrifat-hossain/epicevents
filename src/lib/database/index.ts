import mongoose from 'mongoose'
const MONGODB_URI = process.env.MONGODB_URI

let cached = (global as any).mongoose || { conn: null , promise: null}

export const connectToDatabase = async () =>{
    // if(cached.conn) return cached.conn

    // if(!MONGODB_URI) throw new Error('MONGODB_URI is missing')

    // cached.promise = cached.promise || mongoose.connect(MONGODB_URI,{
    //     bufferCommands:false,
    // })

    // cached.conn = await cached.promise

    // console.log("db connected");
    
    // return cached.conn
    try {
        const dbUrl = MONGODB_URI;
        if (!dbUrl) {
            console.error("DB_URL is not defined in the environment variables.");
            return;
        }

        await mongoose.connect(dbUrl);

        console.log("DB CONNECTED");
    } catch (error) {
        console.error("Failed to connect to the database:", error);
        throw error;
    }
}