export type ManifestProcess = {
  [key: string]: {
    description?: string;
  };
};

export type ManifestStudentArtwork = {
  [key: string]: {
    artist?: string;
    grade: number;
    materials?: string;
    description: string;
    year: number;
  };
};

export type Manifest = {
  [key: string]: {
    title?: string;
    description?: string;
  };
};
