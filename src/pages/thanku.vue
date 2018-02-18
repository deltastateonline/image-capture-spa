<template>
	<f7-page>
      <f7-navbar title="Request Submitted"></f7-navbar>
      <f7-block-title>Request Submitted , Thank You</f7-block-title>
      <f7-block strong>
        <p>Here is your reference number for this transaction <b>{{newRefNumber}}</b></p>        
      </f7-block>
    </f7-page>
</template>

<script>
export default {

 data(){
	  return {
		  refNumber : "REQ2018-0000001"
	  }
  },
  computed:{
	  
	newRefNumber(){
		var d = new Date();
		return "RFI-"+d.getFullYear()+""+d.getMonth()+""+d.getDate()+""+d.getMilliseconds();
	}	
  }

}
</script>