import type { GatsbyConfig } from "gatsby";

const strapiConfig = {
  apiURL: 'http://45.79.101.19:1345/',
  accessToken: '42c5de252ebc8e014d233f4ce2657ed8fe2499eca085e1737bfcc1004c6d58a4f7a56fc832a02204bc39889bb6cc2385e15a191d951d86261a2b9e7221cd98d2568f21d44e2eda98c8facd11f403bd66f84cfce6ab14219474fc9fa3de8065c3d9738489f9e3e5e60ebbe2a8fcae3d8243cda3aecb734f6a913829ae4a048766',
  collectionTypes: ["image"],
  singleTypes: [],
  remoteFileHeaders: {
    /**
     * Customized request headers
     * For http request with a image or other files need authorization
     * For expamle: Fetch a CDN file which has a security config when gatsby building needs
     */
    Referer: "http://45.79.101.19:1345/",
    // Authorization: "Bearer eyJhabcdefg_replace_it_with_your_own_token",
  },
};

const config: GatsbyConfig = {
  siteMetadata: {
    title: `strapi-bug`,
    siteUrl: `https://www.yourdomain.tld`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
  },
  {
    resolve: `gatsby-source-strapi`,
    options: strapiConfig,
  },
]
};

export default config;
