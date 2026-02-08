export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      // 공지사항
      notices: {
        Row: {
          id: number;
          title: string;
          content: string;
          is_published: boolean;
          view_count: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: number;
          title: string;
          content: string;
          is_published?: boolean;
          view_count?: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: number;
          title?: string;
          content?: string;
          is_published?: boolean;
          view_count?: number;
          created_at?: string;
          updated_at?: string;
        };
      };

      // 문의하기
      inquiries: {
        Row: {
          id: number;
          name: string;
          email: string;
          phone: string | null;
          message: string;
          attachment_url: string | null;
          is_read: boolean;
          is_replied: boolean;
          created_at: string;
        };
        Insert: {
          id?: number;
          name: string;
          email: string;
          phone?: string | null;
          message: string;
          attachment_url?: string | null;
          is_read?: boolean;
          is_replied?: boolean;
          created_at?: string;
        };
        Update: {
          id?: number;
          name?: string;
          email?: string;
          phone?: string | null;
          message?: string;
          attachment_url?: string | null;
          is_read?: boolean;
          is_replied?: boolean;
          created_at?: string;
        };
      };

      // 연구원
      researchers: {
        Row: {
          id: number;
          name: string;
          specialty: string;
          qualifications: string[];
          bio: string | null;
          image_url: string | null;
          order: number;
          is_active: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: number;
          name: string;
          specialty: string;
          qualifications?: string[];
          bio?: string | null;
          image_url?: string | null;
          order?: number;
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: number;
          name?: string;
          specialty?: string;
          qualifications?: string[];
          bio?: string | null;
          image_url?: string | null;
          order?: number;
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
      };

      // 프로그램
      programs: {
        Row: {
          id: number;
          category: "healasoma" | "somatic-lab" | "daily-art" | "business";
          slug: string;
          title: string;
          subtitle: string | null;
          description: string;
          features: string[];
          image_url: string | null;
          order: number;
          is_active: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: number;
          category: "healasoma" | "somatic-lab" | "daily-art" | "business";
          slug: string;
          title: string;
          subtitle?: string | null;
          description: string;
          features?: string[];
          image_url?: string | null;
          order?: number;
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: number;
          category?: "healasoma" | "somatic-lab" | "daily-art" | "business";
          slug?: string;
          title?: string;
          subtitle?: string | null;
          description?: string;
          features?: string[];
          image_url?: string | null;
          order?: number;
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
      };

      // 인증/수상
      certifications: {
        Row: {
          id: number;
          category: "trademark" | "copyright" | "certification" | "award";
          title: string;
          issuer: string | null;
          issue_date: string | null;
          image_url: string | null;
          order: number;
          is_active: boolean;
          created_at: string;
        };
        Insert: {
          id?: number;
          category: "trademark" | "copyright" | "certification" | "award";
          title: string;
          issuer?: string | null;
          issue_date?: string | null;
          image_url?: string | null;
          order?: number;
          is_active?: boolean;
          created_at?: string;
        };
        Update: {
          id?: number;
          category?: "trademark" | "copyright" | "certification" | "award";
          title?: string;
          issuer?: string | null;
          issue_date?: string | null;
          image_url?: string | null;
          order?: number;
          is_active?: boolean;
          created_at?: string;
        };
      };

      // 연혁 (타임라인)
      timeline: {
        Row: {
          id: number;
          year: number;
          month: number | null;
          title: string;
          description: string | null;
          order: number;
          is_active: boolean;
          created_at: string;
        };
        Insert: {
          id?: number;
          year: number;
          month?: number | null;
          title: string;
          description?: string | null;
          order?: number;
          is_active?: boolean;
          created_at?: string;
        };
        Update: {
          id?: number;
          year?: number;
          month?: number | null;
          title?: string;
          description?: string | null;
          order?: number;
          is_active?: boolean;
          created_at?: string;
        };
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: {
      program_category: "healasoma" | "somatic-lab" | "daily-art" | "business";
      certification_category:
        | "trademark"
        | "copyright"
        | "certification"
        | "award";
    };
  };
}

// 타입 헬퍼
export type Tables<T extends keyof Database["public"]["Tables"]> =
  Database["public"]["Tables"][T]["Row"];

export type InsertTables<T extends keyof Database["public"]["Tables"]> =
  Database["public"]["Tables"][T]["Insert"];

export type UpdateTables<T extends keyof Database["public"]["Tables"]> =
  Database["public"]["Tables"][T]["Update"];

// 개별 타입 export
export type Notice = Tables<"notices">;
export type Inquiry = Tables<"inquiries">;
export type Researcher = Tables<"researchers">;
export type Program = Tables<"programs">;
export type Certification = Tables<"certifications">;
export type Timeline = Tables<"timeline">;
