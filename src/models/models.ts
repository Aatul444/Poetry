export interface ContentfulEntry {
    sys: {
      id: string;
      createdAt: string;
      updatedAt: string;
    };
    fields: {
      title: string;
      slug: string;
      content: string;
      [key: string]: any; // Optional for dynamic fields
    };
  }