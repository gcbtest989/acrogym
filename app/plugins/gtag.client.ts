declare global {
  interface Window {
    dataLayer: any[]
    gtag: (...args: any[]) => void
  }
}

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  const gtagId = config.public.gtagId as string

  if (!gtagId) {
    console.warn('Google Analytics ID not configured')
    return {
      provide: {
        gtag: () => {}
      }
    }
  }

  // Initialize dataLayer immediately
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || []
  }

  // Load Google Analytics script
  useHead({
    script: [
      {
        src: `https://www.googletagmanager.com/gtag/js?id=${gtagId}`,
        async: true
      },
      {
        innerHTML: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gtagId}', {
            page_path: window.location.pathname,
            send_page_view: true
          });
          console.log('GA: ${gtagId}');
        `,
        type: 'text/javascript'
      }
    ]
  })

  // Create gtag function that uses window.gtag if available, or pushes to dataLayer
  const gtag = (...args: any[]) => {
    if (typeof window !== 'undefined') {
      if (window.gtag) {
        // Use native gtag if available
        window.gtag(...args)
        // console.log('GA Event (via window.gtag):', args)
      } else if (window.dataLayer) {
        // Fallback to dataLayer
        window.dataLayer.push(args)
        // console.log('GA Event (via dataLayer):', args)
      }
    }
  }

  // Provide gtag function globally
  return {
    provide: {
      gtag
    }
  }
})
