/* @title: <<gatsby-004-source-graphql>> program written in Gatsby-JS.
 * @desc: A simple webapp starter using an external graphql as a source.
 * @author: Mustapha Benmbarek.
 * @Copyright © 2019 All rights reserved.
 * @version: 1.0.
 */

module.exports = {
  plugins: [
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "SWAPI",
        fieldName: "swapi",
        url: "https://api.graphcms.com/simple/v1/swapi",
        refetchInterval: 60
      }
    }
  ]
};
