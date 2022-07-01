import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: '03a8877s',
    dataset: 'production',
    apiVersion: '2022-05-10',
    useCdn: true,
    token: process.env.NEXTPUBLICSANITYTOKEN
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
