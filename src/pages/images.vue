<template>
  <f7-page>
      <f7-navbar  back-link="Back">
		<f7-nav-title>
			<img class="img-responsive center-block logo-img" src="https://aamc.adjustit.com.au/assets/img/logo/adjustit-plus.svg?v=20171116" alt="ADJUSTit+">
			<!--<img class="logo-img" src="/images/aamc.png" alt="AAMC">-->
		</f7-nav-title>			
			<div class="right">
				<a class="link icon-only">
				  <i class="icon f7-icons ios-only">camera<span class="badge color-red">{{imageCount}}</span></i>
				  <i class="icon material-icons md-only">camera<span class="badge color-red">{{imageCount}}</span></i>
				</a>
			</div>	  
	  </f7-navbar>
      <f7-block-title >
		<div class="left">
			 <i class="icon f7-icons ios-only">camera</i>
			 <i class="icon material-icons md-only">camera</i>
			 <span class="text">Add Images</span>
		</div>
	  </f7-block-title>
      <f7-block>
			<f7-swiper pagination navigation scrollbar class="aamc-swiper" >		
				<f7-swiper-slide v-for="anImage in imagesList" :key="anImage.id">	
					<div :photoTitle="anImage.photoTitle" :overlayUrl="anImage.overlayUrl">						
							<div class="swiper-text" >{{anImage.photoTitle}}</div>
						<label>
							<div class="swiper-image">	
								<img style="height:150px;" :src="anImage.overlayUrl" :title="anImage.photoTitle" /><br/>
								<input  type="file" accept="image/*" style="display:none;" @change="fileUploaded(anImage,$event)" /><br >							
							</div>
						</label>							
					</div>					
				</f7-swiper-slide>			
			</f7-swiper>

		<f7-progressbar infinite color="green" v-if="processing"></f7-progressbar>			
			<!--<f7-block-title >{{imageCount}} Images Added</f7-block-title>-->
        </f7-block>
	  
	  
	  <f7-block strong>
		  <f7-row>            
			<f7-col width="100">
			  <f7-button raised fill href="/thanku/">Submit Images</f7-button>
			</f7-col>
		  </f7-row>
	</f7-block>	  
    </f7-page>
</template>

<script>
export default {

 data(){
	  return {
		processing : false,
		imagesList:[
			{id:1,photoTitle:'Registration Plate', overlayUrl:'/static/images/overlays/registration_plate.svg', overlayScale: '1'},
			{id:2,photoTitle:'Odometer', overlayUrl:'/static/images/overlays/odometer.svg', overlayScale: '1'},
			{id:3,photoTitle:'Front Left', overlayUrl:'/static/images/overlays/sedan_front_left.svg', overlayScale: '1.5'},
			{id:4,photoTitle:'Front Right', overlayUrl:'/static/images/overlays/sedan_front_right.svg', overlayScale: '1.5'},
			{id:5,photoTitle:'Rear Left', overlayUrl:'/static/images/overlays/sedan_rear_left.svg', overlayScale: '1.3'},
			{id:6,photoTitle:'Rear Right', overlayUrl:'/static/images/overlays/sedan_rear_right.svg', overlayScale: '1.3'},
			{id:7,photoTitle:'Add More', overlayUrl:'/static/images/add.more.png', overlayScale: '1.3',lastImage:true} 			
		  ],
		imagesAdded:[]
	  }
  },
  methods:{
	fileUploaded(anImage, el){		
		
		var self = this;
		self.processing = true;
		var eTarget = el.target;
		if(eTarget.files && eTarget.files[0]){			
			var file = eTarget.files[0]
			var reader = new FileReader();
			reader.onloadend = function() {
				 anImage.overlayUrl = reader.result;
				 
				 if(anImage.lastImage != undefined && anImage.lastImage){	
				 anImage.lastImage = false;
					var id = self.imagesList.length + 1;
					 self.imagesList.push(
						{id:id, photoTitle:'Add More', overlayUrl:'/static/images/add.more.png', overlayScale: '1.3',lastImage:true}
					 );				
				 }
				self.imagesAdded.push(1);
				self.processing = false;
			}
			reader.readAsDataURL(file);
			
		}
		
	}
  },
  computed:{
		
		imageCount(){
			//return "#"+this.name.toLowerCase().replace(/ /g,'-');
			return this.imagesAdded.length;
		}
		
	}
}
</script>
<style>	  
	.aamc-swiper .swiper-slide .swiper-image{
	  font-size: 15px;
	  font-weight: 300;
	  display: flex;
	  justify-content: center;
	  align-items: center;
	  background: #fff;
	  color: #000;
	}
	
	.aamc-swiper .swiper-slide .swiper-text {
	  font-size: 15px;
	  font-weight: 300; 
	  display: flex;
	  justify-content: center;
	  align-items: center;
	  color: #000;
	  height:32px;
	}
	.aamc-swiper .swiper-slide {
	  box-sizing: border-box;
	  border: 1px solid #ddd;
	  background: #fff;
	}
	.aamc-swiper {
	  margin: 0px 0 35px;
	  font-size: 18px;
	  height: 200px;
	} 
	  
</style>