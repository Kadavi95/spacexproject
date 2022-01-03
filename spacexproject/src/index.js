import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./reset.css";
import "./globalStyles.css";
// import {
//   ApolloClient,
//   InMemoryCache,
//   ApolloProvider,
//   useQuery,
//   gql,
// } from "@apollo/client";

// const client = new ApolloClient({
//   uri: 'https://api.spacex.land/',
//   cache: new InMemoryCache(),
// });

// export const querySpaceX = gql`
//   query Results {
//     launchesPast(limit: 5) {
//       mission_name
//       launch_date_local
//       launch_site {
//         site_name_long
//       }
//       links {
//         article_link
//         video_link
//       }
//       rocket {
//         rocket_name
//         first_stage {
//           cores {
//             flight
//             core {
//               reuse_count
//               status
//             }
//           }
//         }
//         second_stage {
//           payloads {
//             payload_type
//             payload_mass_kg
//             payload_mass_lbs
//           }
//         }
//       }
//       ships {
//         name
//         home_port
//         image
//       }
//     }
//   }
// `;


ReactDOM.render(
  <React.StrictMode>
    {/* <ApolloProvider client={client}> */}
      <App />
    {/* </ApolloProvider> */}
  </React.StrictMode>,
  document.getElementById("root")
);
