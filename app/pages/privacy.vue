<template>
    <div class="privacy">
        <header class="privacy__bar">
            <a href="/" class="privacy__home" aria-label="AcroGym home">
                <img src="/img/acro-logo-simple-light.png" alt="AcroGym" class="privacy__logo">
            </a>
            <a href="/" class="privacy__back">&larr; Back to site</a>
        </header>

        <main class="privacy__content">
            <h1>Privacy Policy</h1>
            <p class="privacy__updated">Last updated: 13 June 2026</p>

            <p>
                This Privacy Policy explains how <strong>AcroGym FZCO</strong> (&ldquo;AcroGym&rdquo;,
                &ldquo;we&rdquo;, &ldquo;us&rdquo;) handles information when you use our website
                <a href="https://www.acrogym.org">acrogym.org</a>. AcroGym is a children&rsquo;s
                gymnastics centre based in The Pearl, Doha, Qatar.
            </p>

            <h2>1. Information we collect</h2>
            <p><strong>Information you give us.</strong> When you submit our booking / contact form,
                we collect the details you enter: the parent&rsquo;s name, phone number, and
                (optionally) the child&rsquo;s age. The form is intended to be completed by a parent
                or guardian.</p>
            <p><strong>Information collected automatically.</strong> When you visit the site we use
                Google Analytics, which collects standard usage data such as pages viewed, approximate
                location (country/city), device and browser type, and how you reached the site (for
                example, from Instagram or a search engine). This is done using cookies.</p>

            <h2>2. How we use your information</h2>
            <ul>
                <li>To contact you about your enquiry and to arrange classes or bookings.</li>
                <li>To understand how visitors use our site so we can improve it.</li>
            </ul>

            <h2>3. Cookies &amp; analytics</h2>
            <p>We use Google Analytics to measure website traffic. When you first visit, a banner lets
                you <strong>Accept</strong> or <strong>Decline</strong> analytics cookies. If you
                decline, analytics is turned off for you. You can also clear or block cookies in your
                browser settings at any time. Learn more in
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Google&rsquo;s
                    Privacy Policy</a>.</p>

            <h2>4. How your information is shared</h2>
            <p>We do <strong>not</strong> sell your personal information. We only share it with trusted
                service providers that help us operate the website and respond to enquiries (for
                example, our website host and the analytics and messaging tools we use to manage and
                reply to your message). We may also disclose information if required by law.</p>

            <h2>5. Children&rsquo;s privacy</h2>
            <p>Our services are for children, but our forms are designed to be completed by a parent or
                guardian. We collect only the minimal child information a parent chooses to provide (the
                child&rsquo;s age). We do not knowingly collect personal information directly from
                children.</p>

            <h2>6. Keeping your information</h2>
            <p>We keep enquiry details only for as long as needed to respond to you and for our normal
                business records, after which they are deleted.</p>

            <h2>7. Your choices</h2>
            <p>You can ask us to access, correct, or delete the information you have given us, or opt out
                of marketing contact, at any time — just contact us using the details below. You can
                decline analytics via the cookie banner.</p>

            <h2>8. Changes to this policy</h2>
            <p>We may update this Privacy Policy from time to time. Any changes will appear on this page
                with a new &ldquo;Last updated&rdquo; date.</p>

            <h2>9. Contact us</h2>
            <p>
                <strong>AcroGym FZCO</strong><br>
                The Pearl, Doha, Qatar<br>
                Email: <a href="mailto:info@acrogym.org">info@acrogym.org</a><br>
                Phone: <a href="tel:+97470859382">+974 7085 9382</a>
            </p>
        </main>

        <footer class="privacy__footer">
            &copy; {{ new Date().getFullYear() }} AcroGym FZCO. All rights reserved.
        </footer>
    </div>
</template>

<script setup lang="ts">
useHead({
    title: 'Privacy Policy — AcroGym',
    meta: [
        { name: 'description', content: 'How AcroGym handles your information on acrogym.org.' }
    ],
    htmlAttrs: { lang: 'en' }
})
</script>

<style scoped lang="scss">
.privacy {
    min-height: 100vh;
    background: #121225;
    color: rgba(255, 255, 255, 0.85);
    font-family: "Montserrat", system-ui, -apple-system, sans-serif;
    line-height: 1.65;
}

.privacy__bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 820px;
    margin: 0 auto;
    padding: 20px 24px;
}

.privacy__logo {
    height: 48px;
    width: auto;
    display: block;
}

.privacy__back {
    color: rgba(255, 255, 255, 0.7);
    text-decoration: none;
    font-size: 14px;
    font-weight: 600;
    transition: color 0.18s ease;
}
.privacy__back:hover {
    color: #F37021;
}

.privacy__content {
    max-width: 820px;
    margin: 0 auto;
    padding: 16px 24px 56px;

    h1 {
        font-size: 34px;
        font-weight: 800;
        color: #FFFFFF;
        margin: 16px 0 6px;
    }

    h2 {
        font-size: 19px;
        font-weight: 700;
        color: #FFFFFF;
        margin: 34px 0 10px;
    }

    p {
        margin: 0 0 14px;
        font-size: 15.5px;
    }

    ul {
        margin: 0 0 14px;
        padding-left: 22px;
    }
    li {
        margin: 0 0 8px;
        font-size: 15.5px;
    }

    strong {
        color: #FFFFFF;
        font-weight: 700;
    }

    a {
        color: #F8A06A;
        text-decoration: underline;
        text-underline-offset: 2px;
    }
    a:hover {
        color: #F37021;
    }
}

.privacy__updated {
    color: rgba(255, 255, 255, 0.5);
    font-size: 13.5px;
    margin: 0 0 24px !important;
}

.privacy__footer {
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    text-align: center;
    padding: 24px;
    color: rgba(255, 255, 255, 0.5);
    font-size: 13px;
}

@media (max-width: 560px) {
    .privacy__content h1 { font-size: 27px; }
}
</style>
