# Python Backend

- Our project structure is as follows: One folder for housing the temp json from the user and a temp file for compiling the resume with the user provided details
- We will read input from the json file
- Based on the json file, we will make a copy of the required template as a temp file that we can write to
- We will use jinja to substitute blocks and values into the temp file.
- Once the substitution is done, the temp file is then converted to a pdf and served to the user with the help of the Python latex library
