import { useEffect, useState } from "react"
import initializeAuthentication from '../Firebase/firebase.init';
import { getAuth, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [admin, setAdmin] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const handleNameChange = e => {
    setName(e.target.value);
  }

  const handleEmailChange = e => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = e => {
    setPassword(e.target.value)
  }

  const processLogin = (email, password, location, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then(result => {
        setUser(result.user);
        const url = location.state?.from || "/home"
        history.push(url)
        setError('');
      })
      .catch(error => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));

  }

  const registerNewUser = (email, password, location, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        const newUser = { email, displayName: name }
        setUser(newUser);
        setError('');
        saveUser(email, name);
        updateProfile(auth.currentUser, { displayName: name })
          .then(result => { })
        const url = location.state?.from || "/home"
        history.push(url)
      })
      .catch(error => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  }

  const signInUsingGoogle = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider)
  }

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .finally(() => setIsLoading(false));
  }



  useEffect(() => {
    fetch(`https://aqueous-reef-20295.herokuapp.com/users/${user.email}`)
      .then(res => res.json())
      .then(data => setAdmin(data.admin))
  }, [user.email])

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user);
      }
      else {
        setUser({})
      }
      setIsLoading(false);
    })
    return () => unsubscribed;
  }, [auth]);

  const saveUser = (email, displayName) => {
    const user = { email, displayName }
    user.status = 'Normal'
    fetch('https://aqueous-reef-20295.herokuapp.com/users', {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(user)
    })
      .then()

  }
  const updateUser = (email, displayName) => {
    const user = { email, displayName }
    fetch('https://aqueous-reef-20295.herokuapp.com/users', {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(user)
    })
      .then()

  }


  return {
    user,
    admin,
    setUser,
    updateUser,
    name,
    email,
    password,
    error,
    setError,
    isLoading,
    setIsLoading,
    signInUsingGoogle,
    logOut,
    handleEmailChange,
    handlePasswordChange,
    processLogin,
    registerNewUser,
    handleNameChange

  }
}

export default useFirebase;