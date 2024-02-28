import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import { google } from "../redux/ConfingFirebase/ConfingFirebase";
import { typesLogin } from "../redux/types/types";
import { Dispatch } from "redux";


// ------------Iniciando con Google-----------------------//
export const actionGoogle = () => {
    return (dispatch: Dispatch) => {
        const auth = getAuth();
        signInWithPopup(auth, google)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result)
                let token;
                if (credential) {
                    token = credential.accessToken;
                }
                console.log(token);
                const user = result.user;
                console.log(user);
                
                
            })
            .catch((error) => {
                console.log(error);
            });
    };
};

// ------------------------Logout-------------------------------//

export const actionLogoutAsyn = () => {
    return (dispatch: Dispatch) => {
        const auth = getAuth();

        signOut(auth)
            .then(() => {
                dispatch(actionLogoutSyn());
                console.log("Adios..");
            })
            .catch((error) => {
                console.warn(error);
            });
    };
};

export const actionLogoutSyn = () => {
    return {
        type: typesLogin.logout,
    };
};
