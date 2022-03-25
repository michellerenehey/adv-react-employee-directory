# _APP PLAN_

# **Layout**

## HEADER

- acme name
- 'you are signed in as {user email}' (if signed in)

### Will want separate comp. for handling signin link or signout button.

- sign in (if signed out)
- sign out (if signed in)

## MAIN

## FOOTER

# **HOME (/)**

- filler content
- if user: link to sign in
- if no user: link to create account

# **LOGIN (/login)**

- form with:
  - email: `<input type="email">` required
  - password: required; needs to be 8+ characters

# **CREATE ACCOUNT (/register)**

- form with:
  - email: `<input type="email">` required
  - password: required; needs to be 8+ characters

# CREATE PROFILE

- 'you need to create a profile'
- form with:

  - name: string
  - email: string
  - birthday: `<input type="date">`
  - bio: text `<textarea>`

# PROFILE

- private route! redirect to login.
- displays their profile information
- link to edit (same as 'create profile' view but no 'you need to create a profile' message)

# CONTEXT

- user
