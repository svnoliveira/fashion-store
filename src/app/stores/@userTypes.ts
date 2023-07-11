export interface IUser{
    email: string,
    name: string,
    id: number
};

export interface IUserData{
    accessToken: string;
    user: IUser
};

export interface IUserState {
    userData: null | IUserData
    loginUser: (userRequestedData:IUserData) => void
    logoutUser: () => void
}