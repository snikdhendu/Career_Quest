import { Document, model, Schema, Types } from 'mongoose';

interface IUser extends Document {
    clerkUserId: string;
    firstName: string;
    lastName?: string;
    dob?: string;
    gender?:string;
    fatherName?:string;
    location?:string;
    mobileNumber?:string;
    year?: string;
    profileUrl?: string;
    email: string;
    collegeName?: string;

     
  }
const UserSchema=new Schema<IUser>({
    clerkUserId: { type: String, required: true, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String, default: '' },
    dob:{type:String, default:''},
    gender:{type:String, default:'',required:true},
    fatherName:{type:String, default:''},
    location:{type:String, default:''},
    mobileNumber:{type:String, default:''},
    year:{type:String, default:''},
    email: { type: String, required: true, unique: true, match: /.+\@.+\..+/ },
    collegeName: { type: String, default: '' },

},{
    timestamps: true,
})

export const User = model<IUser>('User', UserSchema);
export type{IUser};