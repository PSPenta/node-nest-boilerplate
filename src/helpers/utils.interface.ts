export interface ResponseObj {
  success: boolean;
  error: string;
  data: any;
  page?: number;
  totalDocs?: number;
  limit?: number;
  totalPages?: number;
  hasPrevPage?: boolean;
  hasNextPage?: boolean;
  prevPage?: number;
  nextPage?: number;
}
