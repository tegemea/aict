<template>
    <VRow class="py-10">
        <VCol cols="12 my-5"><VDivider /></VCol>
        <VCol cols="12" md="3">
            <VImg cover src="src/assets/images/logo.svg" />
            <p class="mt-5 text-justify">Group of ICT enthusiasts in Arusha to join members for their betterment in skills, living standards and more</p>
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
            <h3 class="mb-3">AICTS Activities & Media</h3>
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
            <div>
                <h3 class="mb-3">Arusha ICT Society</h3>
                <div>
                    P. O. Box 13340 Arusha, TZ <br>
                    <VIcon icon="mdi-whatsapp" class="me-2 text-green" />+255 787 880087 <br>
                    <VIcon icon="mdi-phone" class="me-2 text-blue-lighten-1" />+255 782 481744 <br>
                    <VIcon icon="mdi-email" class="me-2 text-red-accent-2" />info@arushaictsociety.or.tz
                </div>
            </div>
        </VCol>
    </VRow>
</template>