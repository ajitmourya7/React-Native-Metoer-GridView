import { Meteor } from 'meteor/meteor';
import {products} from './collections';
Meteor.startup(() => {
  // code to run on server at startup
  //   console.log(Accountsdata.find({}).fetch())
});
Meteor.publish('products', function () {
    console.log(products.find({}).count());
    return products.find({})
});