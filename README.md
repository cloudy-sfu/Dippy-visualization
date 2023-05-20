# Dippy Visualization

![](https://shields.io/badge/dependencies-Python_3.8-blue)

## Usage

Denote Python virtual environment is at `$venv`.

1.   Run `pip install -r requirements.txt`.

2.   Replace `$venv/Lib/site-packages/coinor/dippy/dippy.py` with `dippy.py` in this repository.

3.   When initializing a `DipProblem` instance, please pass the argument`display_mode='node-web'`. By default, it generates GraphViz code at the same file path as Python main script, but with the extension name `.json`. To customize, please pass the file path to keyword `json_path` (optional parameter).

4.   Visit https://cloudy-sfu.github.io/Dippy-visualization in browser, and click file upload button to load the JSON file, which is exported in step 3.

If coming across the error like the following, please install [VC++ runtime](https://learn.microsoft.com/en-US/cpp/windows/latest-supported-vc-redist?view=msvc-170) and reboot the computer.

```
ImportError: DLL load failed: the specified module could not be found.
```

