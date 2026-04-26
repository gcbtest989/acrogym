<template>
    <a
        :href="whatsappLink"
        target="_blank"
        class="whatsapp-button"
    >
        <v-img src="/img/whatsapp-icon.png" alt="WhatsApp" />
    </a>
</template>

<script>
export default {
    props: {
        message: {
            type: String,
            default: 'Hello! I have a question.'
        }
    },
    computed: {
        whatsappLink() {
            const encodedMessage = encodeURIComponent(this.message);
            return `https://wa.me/+97470859382?text=${encodedMessage}`;
        }
    }
}
</script>

<style scoped>
.whatsapp-button {
    position: fixed;
    bottom: 22px;
    right: 22px;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
}
.whatsapp-button img {
    width: 60px;
    height: 60px;
}

</style>