import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import {Accounts} from 'meteor/accounts-base';

export const validateNewUser = (user)=>{
  const email = user.emails[0].address;
  try{
    new SimpleSchema({
        email:{
          type:String,
          regEx: SimpleSchema.RegEx.Email
        }
      }).validate({email})
  }catch(e){
    console.log('e',e,e.message);
    throw new Meteor.Error(400, e.message)
  }

  return true;
}
if(Meteor.isServer){
  Accounts.validateNewUser(validateNewUser)
}
