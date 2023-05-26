<template>
    <VRow class="py-10">
        <VCol cols="12 my-5"><VDivider /></VCol>
        <VCol cols="12" md="3">
            <VImg cover src="src/assets/images/logo.svg" />
            <p class="mt-5 text-justify">a group of ICT enthusiasts currently in Arusha, with aim to join members for their skills betterment, living standards</p>
        </VCol>
        <VCol cols="12" md="3">
            <h3 class="mb-3">Quick Links</h3>
            <div>
                <RouterLink to="/who-we-are" class="text-grey text-decoration-none">Who We Are</RouterLink>
            </div>
            <div>
                <RouterLink to="/members" class="text-grey text-decoration-none">Members</RouterLink>
            </div>
            <div>
                <RouterLink to="#" class="text-grey text-decoration-none">Login</RouterLink>
                <span class="ms-3 text-grey-darken-3 font-italic">--- coming soon</span>
            </div>
        </VCol>
        <VCol cols="12" md="3">
            <h3 class="mb-3">AICT Activities</h3>
            <div>
                <RouterLink to="#" class="text-grey text-decoration-none">Our Events</RouterLink>
                <span class="ms-3 text-grey-darken-3 font-italic" danger>--- coming soon</span>
            </div>
            <div>
                <RouterLink to="#" class="text-grey text-decoration-none">Our Projects</RouterLink>
                <span class="ms-3 text-grey-darken-3 font-italic" danger>--- coming soon</span>
            </div>
            <div>
                <RouterLink to="#" class="text-grey text-decoration-none">News & Articles</RouterLink>
                <span class="ms-3 text-grey-darken-3 font-italic">--- coming soon</span>
            </div>
            <div>
                <RouterLink to="#" class="text-grey text-decoration-none">Press Releases</RouterLink>
                <span class="ms-3 text-grey-darken-3 font-italic">--- coming soon</span>
            </div>
        </VCol>
        <VCol cols="12" md="3">
            <address class="text-grey">
                <h3>Arusha ICT Society</h3>
                <div>
                    Box 13340 Arusha <br>
                    Tel : +255 787 880087
                    Email : info@arushaictsociety.or.tz
                </div>
            </address>
        </VCol>
    </VRow>
</template>