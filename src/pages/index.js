/* @title: <<gatsby-004-source-graphql>> program written in Gatsby-JS.
 * @desc: A simple webapp starter using an external graphql as a source.
 * @author: Mustapha Benmbarek.
 * @Copyright © 2019 All rights reserved.
 * @version: 1.0.
 */

import React from "react";
import { graphql, useStaticQuery } from "gatsby";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      swapi {
        allVehicles {
          model
          name
          class
        }
      }
    }
  `);

  return (
    <div>
      <h1>Source GraphQL</h1>
      <h2>by Mustapha Benmbarek</h2>
      <p>
        This page renders all data fetched from an external graphQL source
        (https://api.graphcms.com/simple/v1/swapi).
      </p>

      <p>
        <table width="100%">
          <tr>
            <td className="bold">Name</td>
            <td className="bold">Model</td>
            <td className="bold">Class</td>
          </tr>

          {data.swapi.allVehicles.map(vehicle => {
            return (
              <tr>
                <td>{vehicle.name}</td>
                <td>{vehicle.model}</td>
                <td>{vehicle.class}</td>
              </tr>
            );
          })}
        </table>
      </p>
    </div>
  );
};

export default IndexPage;
