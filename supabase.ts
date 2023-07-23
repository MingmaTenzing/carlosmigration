export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      Blogs: {
        Row: {
          article_img: string | null
          author: string | null
          author_img: string | null
          created_at: string | null
          id: string
          para: string[] | null
          subtitle: string | null
          title: string | null
          youtube_url: string | null
        }
        Insert: {
          article_img?: string | null
          author?: string | null
          author_img?: string | null
          created_at?: string | null
          id?: string
          para?: string[] | null
          subtitle?: string | null
          title?: string | null
          youtube_url?: string | null
        }
        Update: {
          article_img?: string | null
          author?: string | null
          author_img?: string | null
          created_at?: string | null
          id?: string
          para?: string[] | null
          subtitle?: string | null
          title?: string | null
          youtube_url?: string | null
        }
        Relationships: []
      }
      countries: {
        Row: {
          continent: Database["public"]["Enums"]["continents"] | null
          id: number
          iso2: string
          iso3: string | null
          local_name: string | null
          name: string | null
        }
        Insert: {
          continent?: Database["public"]["Enums"]["continents"] | null
          id?: number
          iso2: string
          iso3?: string | null
          local_name?: string | null
          name?: string | null
        }
        Update: {
          continent?: Database["public"]["Enums"]["continents"] | null
          id?: number
          iso2?: string
          iso3?: string | null
          local_name?: string | null
          name?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      continents:
        | "Africa"
        | "Antarctica"
        | "Asia"
        | "Europe"
        | "Oceania"
        | "North America"
        | "South America"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
