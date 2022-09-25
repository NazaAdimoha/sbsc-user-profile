import React from 'react'

const AuthForm = ({ onSubmit, children }) => {
  return (
    <form onSubmit={onSubmit}>
        {children}
    </form>
  )
}

export default AuthForm