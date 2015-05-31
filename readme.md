
# OpenGender

This repository is an attempt to make the complexities of gender easier for developers.

It's a work in progress and there are some proof of concepts.


## Files

* [html-templates/gender-complex.en.html](html-templates/gender-complex.en.html) this template has similar elements websites like Google and Facebook have, where you can enter a custom text for gender and select a preferred pronoun.
* [html-templates/gender-title.en.html](html-templates/gender-title.en.html) title selection test


## Enums

### Gender

0 do not wish to disclose
1 male
2 female
3 X (indeterminate gender)
4 custom


### Pronoun

1  he/him
2  she/her
3  they/them


### Titles - Enum

0 none
1 Mr
2 reserved
3 Miss
4 Mrs
5 Mx
6 reserved 


## Custom gender suggestions

*should always be able to enter a custom field, but you can suggest these in a lookup*
*can be fit into Gender field if suggested option is selected*
*you can modulo 10 these option values to suggest pronoun*

11 Trans f2m
12 Trans m2f
33 Agender
43 Genderqueer
53 Non-binary
63 Genderfluid
73 Questioning
