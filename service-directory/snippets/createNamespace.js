// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//

'use strict';

async function main(
  projectId = 'my-project',
  locationId = 'us-central1',
  namespaceId = 'my-namespace'
) {
  // [START servicedirectory_create_namespace]
  //
  // TODO(developer): Uncomment these variables before running the sample.
  //
  // const projectId = 'my-project';
  // const locationId = 'us-central1';
  // const namespaceId = 'my-namespace';

  // Imports the Google Cloud client library
  const {
    RegistrationServiceClient,
  } = require('@google-cloud/service-directory');

  // Creates a client
  const registrationServiceClient = new RegistrationServiceClient();

  // Build the location name
  const locationName = registrationServiceClient.locationPath(
    projectId,
    locationId
  );

  async function createNamespace() {
    const [namespace] = await registrationServiceClient.createNamespace({
      parent: locationName,
      namespaceId: namespaceId,
    });

    console.log(`Created namespace: ${namespace.name}`);
    return namespace;
  }

  return createNamespace();
  // [END servicedirectory_create_namespace]
}

const args = process.argv.slice(2);
main(...args).catch(console.error);
