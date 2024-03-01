import { arrayRemove, arrayUnion, collection, deleteDoc, doc, getDoc, getDocs, setDoc, updateDoc } from "firebase/firestore";
import { dataBase } from "../ConfingFirebase/ConfingFirebase";
import { typesPublications } from "../types/types";
import { getAuth } from "firebase/auth";

// ----------------- CREATE ------------------ //

export const actionCreatePublicationAsync = (payload: object) => {
    return async (dispatch: any) => {
        try {
            const publicationDocRef = doc(dataBase, "Publications", crypto.randomUUID());
            const newPublication = {
                ...payload,
                Id: publicationDocRef.id,
            };
            await setDoc(publicationDocRef, newPublication);
            dispatch(actionCreatePublicationSyn(newPublication));
        } catch (error) {
            console.error("Error al crear la publicación:", error);
        }
    };
};

const actionCreatePublicationSyn = (payload: any) => {
    return {
        type: typesPublications.add,
        payload,
    };
};

// ----------------- DELETE A PUBLICATION ------------------ //

export const actionDeletePublicationAsync = (payload: string) => {
    return async (dispatch: any) => {
        try {
            const publicationDocRef = doc(dataBase, "Publications", payload);
            await deleteDoc(publicationDocRef);
            dispatch(actionDeletePublicationSyn(payload));
        } catch (error) {
            console.error("Error al eliminar la publicación:", error);
        }
    };
};
const actionDeletePublicationSyn = (payload: any) => {
    return {
        type: typesPublications.delete,
        payload,
    };
};

// ----------------- READ ONE PUBLICATION ------------------ //

export const actionReadPublicationAsync = (payload: string) => {
    return async (dispatch: any) => {
        try {
            const publicationDocRef = doc(dataBase, "Publications", payload);
            const publicationDocSnap = await getDoc(publicationDocRef);

            if (publicationDocSnap.exists()) {
                const publicationData = publicationDocSnap.data();
                dispatch(actionReadPublicationSyn(publicationData));
                return publicationData;
            } else {
                console.warn("No se encontró la publicación.");
            }
        } catch (error) {
            console.error("Error al leer la publicación:", error);
        }
    };
};

const actionReadPublicationSyn = (payload: any) => {
    return {
        type: typesPublications.list,
        payload,
    };
};

// ----------------- READ ALL PUBLICATION ------------------ //

export const actionListPublicationsAsync = () => {
    return async (dispatch: any) => {
        try {
            const querySnapshot = await getDocs(collection(dataBase, "Publications"));
            const publications: object[] = [];

            querySnapshot.forEach((doc) => {
                publications.push({
                    Id: doc.id,
                    ...doc.data(),
                });
            });
            dispatch(actionListPublicationsSyn(publications));
            return publications;
        } catch (error) {
            console.error("Error al obtener las publicaciones:", error);
        }
    };
};

const actionListPublicationsSyn = (payload: any) => {
    return {
        type: typesPublications.list,
        payload,
    };
};

// ----------------- UPDATE A PUBLICATION ------------------ //

export const actionUpdatePublicationAsync = (payload: any) => {
    return async (dispatch: any) => {
        try {
            const publicationDocRef = doc(dataBase, "Publications", payload.id);
            const publicationDocSnap = await getDoc(publicationDocRef);

            if (!publicationDocSnap.exists()) {
                console.warn("No se encontró la publicación.");
                return;
            }

            await updateDoc(publicationDocRef, payload);
            dispatch(actionUpdatePublicationSyn(payload));
        } catch (error) {
            console.error("Error al actualizar la publicación:", error);
        };
    };
}

const actionUpdatePublicationSyn = (payload: any) => {
    return {
        type: typesPublications.edit,
        payload,
    };
};



// ----------------- ADD COMMENT ------------------------- //
export const actionAddCommentAsync = (publicationId: string, comment: string) => {
    return async (dispatch: any) => {
        try {
            const auth = getAuth();
            const currentUser = auth.currentUser;
            if (currentUser) {
                const userUid = currentUser.uid;
                const publicationDocRef = doc(dataBase, "Publications", publicationId);
                const publicationDocSnap = await getDoc(publicationDocRef);
                if (publicationDocSnap.exists()) {
                    const publicationData = publicationDocSnap.data();
                    const newComment = {
                        UID: userUid,
                        comment: comment,
                    };
                    await updateDoc(publicationDocRef, {
                        Comments: arrayUnion([newComment], publicationData.Comments),
                    });
                    dispatch(actionAddCommentSyn(newComment));
                } else {
                    console.warn("No se encontró la publicación.");
                }
            } else {
                console.warn("No se encontró el usuario actual.");
            }
        } catch (error) {
            console.error("Error al añadir el comentario:", error);
        }
    };
};

const actionAddCommentSyn = (payload: any) => {
    return {
        type: typesPublications.addComent,
        payload,
    };
};

// ------------------ REMOVE COMMENT ------------------ //

export const actionRemoveCommentAsync = (publicationId: string, commentId: string) => {
    return async (dispatch: any) => {
        try {
            const auth = getAuth();
            const currentUser = auth.currentUser;
            if (currentUser) {
                const userUid = currentUser.uid;
                const publicationDocRef = doc(dataBase, "Publications", publicationId);
                const publicationDocSnap = await getDoc(publicationDocRef);
                if (publicationDocSnap.exists()) {
                    const publicationData = publicationDocSnap.data();
                    const commentIndex = publicationData.Comments.findIndex(
                        (comment: any) => comment.UID === userUid && comment.commentId === commentId
                    );
                    if (commentIndex !== -1) {
                        await updateDoc(publicationDocRef, {
                            Comments: arrayRemove(publicationData.Comments[commentIndex]),
                        });
                        const pay = {
                            IdPublication: publicationId,
                            CommentId: commentId
                        }
                        dispatch(actionRemoveCommentSyn(pay));
                    } else {
                        console.warn("No se encontró el comentario.");
                    }
                } else {
                    console.warn("No se encontró la publicación.");
                }
            } else {
                console.warn("No se encontró el usuario actual.");
            }
        } catch (error) {
            console.error("Error al eliminar el comentario:", error);
        }
    };
};

const actionRemoveCommentSyn = (payload: object) => {
    return {
        type: typesPublications.deleteComent,
        payload,
    };
};

// --------------------- SHARED ----------------- //

export const actionSharePublicationAsync = (publicationId: string, uid: string) => {
    return async (dispatch: any) => {
        try {
            const publicationDocRef = doc(dataBase, "Publications", publicationId);
            const publicationDocSnap = await getDoc(publicationDocRef);
            if (publicationDocSnap.exists()) {
                const publicationData = publicationDocSnap.data();
                const updatedShared = arrayUnion(publicationData.Shared, [uid]);
                await updateDoc(publicationDocRef, {
                    Shared: updatedShared,
                });
                const obj = {
                    publicationId: publicationId,
                    uid: uid
                }
                dispatch(actionSharePublicationSyn(obj));
            } else {
                console.warn("No se encontró la publicación.");
            }
        } catch (error) {
            console.error("Error al compartir la publicación:", error);
        }
    };
};

const actionSharePublicationSyn = (payload: object) => {
    return {
        type: typesPublications.share,
        payload,
    };
};