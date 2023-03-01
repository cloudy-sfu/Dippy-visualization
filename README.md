# Dippy Visualization

![](https://shields.io/badge/dependencies-Python_3.7-blue)

## Usage

1.   Run `pip install -r requirements.txt`.

2.   Denote Python virtual environment is at `$venv`, replace `$venv/Lib/site-packages/coinor/dippy/dippy.py` with `graphviz/dippy.py`.

3.   Add one argument when defining `DipProblem` class:
     ```python
     DipProblem(..., json_path='*.json')
     ```

     where `json_path` is the file path to save the visualization configuration.

4.   Open `graphviz/index.html` in browser, and click file upload button to load the JSON file in step 3.
