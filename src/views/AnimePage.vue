 <script setup></script>

<template>
	<div class="main-background">
		<div class="info-background">

        </div>
	</div>
</template>

<style scoped>
    .main-background {
        background: var(--secondary-background);
        height: calc(100vh - 60px);
        display: flex;
        flex-direction: row;
        margin: 25px;
        border-radius: 25px;
    }

    .info-background {
        background: var(--fourthiary-background);
        float: left;
        margin-left: 5px;
        margin-top: 5px;
        border-radius: 25px;
        display: flex;
	    flex-direction: column;

    }
</style>