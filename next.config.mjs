import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['ts', 'tsx'],
    trailingSlash: true,
    skipTrailingSlashRedirect: true
};

export default withNextIntl(nextConfig);