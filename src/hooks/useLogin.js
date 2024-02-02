import { doc, getDoc } from "firebase/firestore";
import useShowToast from "./useShowToast";
import { firestore } from "../firebase/firebase";

const useLogin = () => {
  const showToast = useShowToast();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const login = async (inputs) => {
    if (!inputs.email || !inputs.password) {
      return showToast("Error", "Please fill all the fields", "error");
    }
    try {
      const userCred = await signInWithEmailAndPassword(
        inputs.email,
        inputs.password
      );

      if (userCred) {
        const docRef = doc(firestore, "users", userCred.user.uid);
        const docSnap = await getDoc(docRef);
        localStorage.setItem("user-info", JSON.stringify(docSnap.data()))
      }
    } catch (error) {
      showToast("Error", error.message, "error");
    }
  };
};

export default useLogin;
