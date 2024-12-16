import { InlineCode } from "@/once-ui/components";

const person = {
    location:  'Europe/Bucharest',       // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
}

const home = {
    label: 'Home',
    title: `Melany's Birthday`,
    description: `Portfolio website showcasing my work}`
}


const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection`,
    images: [
        {
            src: '/images/gallery/gallery-11.jpeg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/gallery-1.jpeg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/gallery-12.jpeg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/gallery-8.jpeg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/gallery-6.jpeg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/gallery-7.jpeg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/gallery-9.jpeg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/gallery-2.jpeg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/gallery-3.jpeg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/gallery-5.jpeg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/gallery-4.jpeg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/gallery-15.jpeg',
            alt: 'image',
            orientation: 'horizontal'
        }
    ]
}

export { home, gallery, person };