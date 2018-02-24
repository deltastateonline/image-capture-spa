// Import Vue
import Vue from 'vue';

// Import F7
import Framework7 from 'framework7/dist/framework7.esm.bundle.js';

// Import F7 Vue Plugin
import Framework7Vue from 'framework7-vue/dist/framework7-vue.esm.bundle.js';

// Import F7 Styles
import Framework7Styles from 'framework7/dist/css/framework7.css';

// Import Icons and App Custom Styles
import IconsStyles from './css/icons.css';
import AppStyles from './css/app.css';

// Import Routes
import Routes from './routes.js'

// Import App Component
import App from './app';

// import entire SDK
import AWS from 'aws-sdk';

// Init F7 Vue Plugin
Vue.use(Framework7Vue, Framework7)


// Init App
var mainApp = new Vue({
	el: '#app',
	template: '<app/>',
	// Init Framework7 by passing parameters here
	framework7: {
		id: 'io.framework7.imagecapture', // App bundle ID
		name: 'AAMC Image Capture', // App name
		theme: 'auto', // Automatic theme detection
		// App routes
		routes: Routes,
	},
	// Register App Component
	components: {
		app: App
	},
	data : {		
		awsObject:{
			albumBucketName:'deltastateonline-imageuploaded',
			bucketRegion : 'ap-southeast-2',
			IdentityPoolId : 'ap-southeast-2:77986df0-8003-44dc-b856-de5209c78add',
		},
		s3Object:{},
		appData:{},
	},
	mounted(){	
		
		AWS.config.update({
		  region: this.awsObject.bucketRegion,
		  credentials: new AWS.CognitoIdentityCredentials({
			IdentityPoolId: this.awsObject.IdentityPoolId
		  })
		});
		
		this.s3Object = new AWS.S3({
		  apiVersion: '2006-03-01',
		  params: {Bucket: this.awsObject.albumBucketName}
		});		
		
	}	
});
