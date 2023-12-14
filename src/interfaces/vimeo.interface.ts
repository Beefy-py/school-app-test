export interface Folder {
  name: string;
  uri: string;
  metadata: {
    connections: {
      videos: {
        uri: string;
        options: string[];
        total: number;
      };
      ancestor_path: {
        uri: string;
        name: string;
        can_upload: boolean;
      }[];
    };
  };
}

export interface Paging {
  next: string | null;
  previous: string | null;
  first: string;
  last: string;
}

export interface AllUserFolderResponse {
  total: number;
  page: number;
  per_page: number;
  paging: Paging;
  data: Folder[];
}

export interface AllItemsInFolderResponse {
  total: number;
  page: number;
  per_page: number;
  paging: Paging;
  data: { folder: Folder }[];
}
