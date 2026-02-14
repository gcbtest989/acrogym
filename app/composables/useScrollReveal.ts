import { onUnmounted } from 'vue'

export const useScrollReveal = () => {
    let observer: IntersectionObserver | null = null

    const initReveal = () => {
        // Disconnect existing if any
        if (observer) observer.disconnect()

        const options = {
            root: null,
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        }

        observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible')
                    observer?.unobserve(entry.target)
                }
            })
        }, options)

        const elements = document.querySelectorAll('.reveal')
        elements.forEach(el => observer?.observe(el))
    }

    onUnmounted(() => {
        if (observer) observer.disconnect()
    })

    return {
        initReveal
    }
}
