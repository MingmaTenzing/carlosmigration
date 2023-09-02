import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
    projectId: 'mmdbn27q',
    dataset: 'production',
    apiVersion: "2023-09-02"
}

const client = createClient(config);

export default client;