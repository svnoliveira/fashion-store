export interface IUser{
    email: string;
    name: string;
    id: number;
};

export interface IUserData{
    accessToken: string;
    user: IUser;
};

export interface ILoginData{
    email: string;
    password: string;
}

export interface IRegisterData{
    email: string;
    password: string;
    name: string;
}

export interface IUserState {
    loading: boolean;
    error: string;
    message: string;
    userData: null | IUserData;
    logoutUser: () => void;
    loginUser: ({ email, password }:ILoginData) => Promise<void>;
    loadUser: () => void;
    registerUser: ({ email, password, name }: IRegisterData) => Promise<true | undefined>
}