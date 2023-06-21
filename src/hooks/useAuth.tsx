import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import useAppStore from "../store";

type AuthUser = {
  displayName: string;
  email: string;
  photoURL: string;
  uid: string;
  createdAt: string
}

const useAuth = () => {
  const [authUser, setAuthUser] = useState<AuthUser | undefined>()
  const [authError, setAuthError] = useState<Error | undefined>()
  const { updateUser } = useAppStore()
  const auth = getAuth()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      try {
        if (user) {
          setAuthUser({
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
            uid: user.uid,
            createdAt: user.metadata.creationTime
          } as AuthUser)
          updateUser(true, user.uid)
        } else {
          setAuthUser(undefined)
          updateUser(false, '')
          console.log("No User Logged In")
        }
        return () => {
          unsubscribe
        }
      } catch (error) {
        if (error instanceof Error) {
          setAuthError(error)
          setAuthUser(undefined)
          updateUser(false, '')
        }
        console.log(error)
      }
    })

  }, [auth, updateUser])
  return [authUser, authError]
}

export default useAuth
