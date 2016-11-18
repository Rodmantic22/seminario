import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
  	UploadServer.init({
    	tmpDir: process.env.PWD + '/.uploads/tmp',
    	uploadDir: process.env.PWD + '/.uploads/',
    	checkCreateDirectories: true,
    	finished: function(fileInfo, formFields) {
    		
    	},

  	});
});
