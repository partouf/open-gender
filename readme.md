
# OpenGender

This repository is an attempt to make the complexities of gender easier for developers.

It's a work in progress and there are some proof of concepts.

Go to http://partouf.github.io/open-gender for some previews.


## Goals

- [x] Standarize enumerations

- [ ] Develop drop-in easy-to-use controls to select gender

- [ ] Develop helper libraries for various programming languages

- [ ] Develop new ways of selecting gender that uses less CIS defaults


## Enums

### Gender

0 do not wish to disclose

1 male

2 female

3 X (indeterminate gender)

4 custom


### Pronoun

1 he/him/his

2 she/her/hers

3 they/them/their

4 use name only



### Titles - Enum

0 none

1 Mr

2 reserved

3 Miss

4 Mrs

5 Mx

6 reserved 


## Custom gender suggestions

*Should always be able to enter a custom field, but you can suggest these in a lookup.*
*Can be fit into Gender field if suggested option is selected.*
*You can modulo 10 these option values to suggest pronoun.*

11 Trans f2m

12 Trans m2f

33 Agender

43 Genderqueer

53 Non-binary

63 Genderfluid

73 Questioning
