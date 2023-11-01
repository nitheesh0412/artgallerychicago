import { Ipagination } from "./pagination"
import { Ithumbnail } from "./thumbnail"
export interface IartDetails{
  id: number,
  title: string,
  artist_title: string,
  artist_id: number,
  artwork_type_title: string,
  artwork_type_id: number,
  main_reference_number: string,
  thumbnail: Ithumbnail,
  date_display: string,
  description: string,
  image_id : string,
  publication_history: string,
  exhibition_history: string

  liked? : boolean
}
export interface Iartworks {
  pagination: Ipagination
  data : IartDetails[]
  info: {
    license_text: string,
    license_links: [
      string, string
    ],
    version: string
  }

  config: {
    iiif_url: string,
    website_url: string
  }
}