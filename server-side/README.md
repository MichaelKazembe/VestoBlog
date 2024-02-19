# Backend Development Directory

## Initialisation
* Create a Python virtual environment in directory base, 
	- Run `sudo apt install python3-virtualenv` to install virtual environment
	  package 
	- Run `virtualenv venv --prompt="(vestoblog) "` (include trailing space) to
	  create a virtual environment for the project
	- Run `source venv/bin/activate` to start virtual environment created
	- Continue with other installations and work on project files
	- Run `deactivate` when you are done working on project files and need to close
	  the virtual environment to return to your normal terminal

* Install flask and other dependencies
	- Install pip for python `sudo apt install python3-pip`
	- If requirements.txt file present, run `pip install -r requirements.txt`

* Start and control flask app
	* Execute app.py file using `python3 app.py` or `./app.py`
