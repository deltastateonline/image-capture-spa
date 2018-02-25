<template id="page-home">
    <!-- Main View -->   
      <f7-page>
	  <!--Top Menu -->
        <f7-navbar>          
          <f7-nav-title>
			<img class="img-responsive center-block logo-img" src="static/images/adjustit-plus.svg?v=20171116" alt="ADJUSTit+">
			<!--<img class="img-responsive center-block logo-img" src="/images/aamc.png" alt="AAMC">-->
		  </f7-nav-title>
          <f7-nav-right>
            <f7-link icon-if-ios="f7:help" icon-if-md="material:help" panel-open="right"></f7-link>
          </f7-nav-right>
        </f7-navbar>		
		<!-- claim Details -->
		
		<f7-card>
			<f7-card-header>
				Claim Details - {{page.yourInsurer}} <i class="f7-icons">person</i>
			</f7-card-header>
			<f7-card-content card-content-padding>
				<f7-row>
					<f7-col width="30">Claim #</f7-col>
					<f7-col width="70">: {{page.claimNumber}}
					</f7-col>
				</f7-row>				
				<f7-row>
					<f7-col width="30">Policy #</f7-col>
					<f7-col width="70">: {{page.policyNumber}}
					</f7-col>
				</f7-row>						
			</f7-card-content>	
		</f7-card>
		<!-- /Claim Details -->
		<!-- Vehicle Details -->
		<f7-card>
			<f7-card-header>
				Vehicle Details <i class="fa fa-car"></i>
			</f7-card-header>
			<f7-card-content card-content-padding>
				<f7-row>
					<f7-col width="30">Rego #</f7-col>
					<f7-col width="70">: {{page.regoNumber}}
					</f7-col>
				</f7-row>				
				<f7-row>
					<f7-col width="30">Rego State</f7-col>
					<f7-col width="70">: {{page.regoState}}
					</f7-col>
				</f7-row>	
				<f7-row>
					<f7-col width="30">Make/Model</f7-col>
					<f7-col width="70">: {{page.make}} / {{page.model}}
					</f7-col>
				</f7-row>							
			</f7-card-content>	
		</f7-card>
		<!-- /Vehicle Details -->       
        
        
        <f7-block strong>
          <f7-row>
            <f7-col width="50">
              <f7-button raised fill color="green" href="/sorry/">Not My Vehicle</f7-button>
            </f7-col>
            <f7-col width="50">
              <f7-button raised fill href="/images/"><i class="fa fa-camera"></i>&nbsp;&nbsp;Add Images</f7-button>
            </f7-col>
          </f7-row>
        </f7-block>	
		
      </f7-page>
 
</template>
<script>
export default {

	data(){	
		return {		
			page:{
				yourInsurer:"Allianz Australia Brisbane",
				claimNumber:"1420122327",
				policyNumber:"142A067999CMP",
				regoNumber:"WLL829",
				regoState:"SA",
				make:"HOLDEN",
				model:"CALAIS"
				
			},
			claimRequest:{
				claimKey:"",			
			}
		}
	}

}
</script>
<style>
 .logo-img{
	height:33px;  
  }

</style>
