<template>
  <Banner/>
  <BenefitCards/>
  <Offer/>
</template>

<script>
import Banner from "../components/pages/Banner.vue";
import BenefitCards from "../components/pages/BenefitCards.vue";
import Offer from "../components/pages/Offer.vue";

export default {
  name: "Home",
  components: {BenefitCards, Banner, Offer}
}
</script>

<style scoped>

</style>
