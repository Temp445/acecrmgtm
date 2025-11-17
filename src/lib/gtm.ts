// lib/gtm.ts   Next.js Google Tag Manager integration

export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || '';

export const pageview = (url: string) => {
    if (typeof window !== 'undefined' && window.dataLayer) {
        window.dataLayer.push({
            event: 'pageview',
            page: url,
        });
    }
};

export const eventTracking = ({
    eventName,
    formName,
    formId,
    leadType,
}: {
    eventName: string;
    formName: string;
    formId: string;
    leadType: string;
}) => {
    if (typeof window !== 'undefined' && window.dataLayer) {
        window.dataLayer.push({
            event: eventName,
            formName,
            formId,
            leadType,
        });
    }
};
