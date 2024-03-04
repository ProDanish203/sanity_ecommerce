import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
    projectId: "t7oxrx5h",
    dataset: "production",
    apiVersion: "2023-03-25",
    useCdn: true
})

const builder = imageUrlBuilder(client);

export const urlFor = (source: any) => {
    return builder.image(source)
}