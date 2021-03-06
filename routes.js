// Global
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

// Users
const USERS = "/users";
const EDIT_PROFILE = "/editProfile";
const CHANGE_PASSWORD = "/changePassword";
const USER_DETAIL = "/:id";  //:를 사용함으로 값이 변함을 인식
const ME= "/me";

// Videos
const VIDEOS = "/videos";
const UPLOAD = "/upload";
const VIDEOS_DETAIL ="/:id";
const EDIT_VIDEO = "/:id/edit";
const DELETE_VIDEO = "/:id/delete";

// Github
const GITHUB = "/auth/github";
const GITHUB_CALLBACK = "/auth/github/callback";

//Google
const GOOGLE = "/auth/google";
const GOOGLE_CALLBACK = "/auth/google/callback";

const routes = {
    home: HOME,
    join: JOIN,
    login: LOGIN,
    logout: LOGOUT,
    search: SEARCH,
    users: USERS,
    editProfile: EDIT_PROFILE,
    changePassword: CHANGE_PASSWORD,
    userDetail: (id) => {
        if(id) {
            return `/users/${id}`;
        } else {
            return USER_DETAIL;
        }
    },
    videos: VIDEOS,
    upload: UPLOAD,
    videosDetail: (id) => {
        if(id){
            return `/videos/${id}`;
        }else{
            return VIDEOS_DETAIL;
        }
    },
    editVideo:(id) => {
        if(id){
            return `/videos/${id}/edit`;
        }else{
            return EDIT_VIDEO;
        }
    },
    deleteVideo:(id) => {
        if(id){
            return `/videos/${id}/delete`;
        }
        else{
            return DELETE_VIDEO;
        }
    },
    gitHub: GITHUB,
    githubCallback: GITHUB_CALLBACK,
    me: ME,
    google: GOOGLE,
    googleCallback: GOOGLE_CALLBACK
};

export default routes;