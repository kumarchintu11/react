import { useState, useCallback, useEffect, useRef } from 'react'
import image from './assets/hacking.jpg'


function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charactersAllowed, setCharactersAllowed] = useState(false)
  const [password, setPassword] = useState("")


  //useRef:  kisi bhi chij se jb reference bnana ho to then we use this hook.
  const passwordRef = useRef(null)



  /*useCallback is a React Hook that lets you cache a function definition between re-renders.
  Syntax: const cachedFn = useCallback(fn, dependencies)
  fn: the function which is to be called
  dependencies: on which the execution of function depends. 
  for example on clicking the checkbox of number the function need to run ans also while unchecking th box.
  */
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charactersAllowed) str += "!@#$%^&*-_+=[]{}~`"


    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char);
    }

    setPassword(pass)
  }, [length, numberAllowed, charactersAllowed, setPassword])
  // }, [length, numberAllowed, charactersAllowed])



  // use callback memorises i.e stores at the memory
  const copyPasswordToCopyOnClipboard = useCallback(() => {
    passwordRef.current?.select() //  to add effect after selecting
    passwordRef.current?.setSelectionRange(0,99)//  to add the rangr of char to be selected. it is optional
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charactersAllowed, passwordGenerator])


  return (
    <>
    <div className='w-full h-full '
    style={{
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>

    
      <div className='w-full max-w-md mx-auto shadow-md  
        rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='Password'
            readOnly
            ref={passwordRef} />
          <button
            onClick={copyPasswordToCopyOnClipboard}
            className='outline-none bg-blue-700 text-white
            px-3 py-0.5 shrink-0'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type='range'
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }} />
            <label>Length: {length}</label>

          </div>
          <div className='flex items-center fap-x-1'>
            <input
              type='checkbox'
              defaultChecked={numberAllowed}
              id='numberInput'
              onChange={() => {
                setNumberAllowed((prev) => !prev)
              }} />
            <label htmlFor='numberInput'>Numbers</label>

          </div>
          <div className='flex items-center fap-x-1'>
            <input
              type='checkbox'
              defaultChecked={charactersAllowed}
              id='characterInput'
              onChange={() => {
                setCharactersAllowed((prev) => !prev)
              }} />
            <label htmlFor='CharacterInput'>Characters</label>

          </div>
        </div>

      </div>
      </div>
    </>
  )
}

export default App
