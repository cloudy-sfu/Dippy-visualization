# Dippy Visualization

![](https://shields.io/badge/dependencies-Python_3.7-blue)

## Usage

1.   Run `pip install -r requirements.txt`.

2.   Denote Python virtual environment is at `$venv`, replace `$venv/Lib/site-packages/coinor/dippy/dippy.py` with `dippy.py` in this repository.

3.   When defining `DipProblem` class, use:
     ```python
     DipProblem(..., display_mode='node-web', json_path='*.json')
     ```

     where `json_path` is the file path to save the visualization configuration.

4.   Visit https://cloudy-sfu.github.io/Dippy-Visualization in browser, and click file upload button to load the JSON file, which is exported in step 3.
