<script setup>
// 
</script>

<template>
  <VRow class="py-12 align-center">
    <VCol cols="12" md="6">
      <h1>Arusha ICT Society</h1>
      <p>Arusha ICT Society is a group of ICT enthusiasts currently in Arusha, with aim to join members for their skills betterment, living standards & the surrounding Tanzania community at large. It’s a non-governmental Organization, not affiliated to any Religious or Political entity..</p>
      <RouterLink to="/register" class="d-inline-block mt-12 text-decoration-none">
        <VBtn variant="outlined" size="x-large">
          <VIcon class="me-3">mdi-chevron-right-circle</VIcon>
          Register
        </VBtn>
      </RouterLink>
    </VCol>
    <VCol cols="12" md="6">
      <VImg cover src="./src/assets/images/robot-banner.png" />
    </VCol>
  </VRow>
  <VRow class="py-12 align-center">
    <VCol cols="12" md="6">
      <VImg cover src="./src/assets/images/people.png" />
    </VCol>
    <VCol cols="12" md="6">
      <VExpansionPanels>
        <VExpansionPanel title="Who should join AICT?" text="Individual Proffessionals, Companies, Freelancers, Students..." value="opened" />
        <VExpansionPanel title="Why should one join?" text="Access to reliable network of fellow proffessionals, capacity building trainings, knowledge exchanges, expriences sharing, public acknowledgement of your skills based on clear & trusted reference" />
        <VExpansionPanel title="Is there a fee to join?" :text="`Yes, this is a society driven and we have an annual fee for society administration cost of TSh 24,000 per year. More details on why this amount coming.`" />
      </VExpansionPanels>
    </VCol>
  </VRow>
</template>
