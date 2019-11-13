export interface Team {
  isNBAFranchise: boolean;
  isAllStar: boolean;
  city: string;
  altCityName: string;
  fullName: string;
  tricode: string;
  teamID: string;
  nickname: string;
  urlName: string;
  teamShortName: string;
  confName: ConfName;
  divName: string;
}

export enum ConfName {
  East = 'East',
    West = 'West',
}
