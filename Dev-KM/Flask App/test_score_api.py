import pandas as pd
import requests
import json
from sqlalchemy import create_engine

# API URLs
ela_all_url = 'https://data.cityofnewyork.us/resource/mi8r-ff2q.json'
math_all_url = 'https://data.cityofnewyork.us/resource/qjx7-9mep.json'

def get_data():

    # all scores
    ela_all = requests.get(ela_all_url).json()
    math_all = requests.get(math_all_url).json()

    # create dictionary of dataframes
    score_dictionary = {
    "ela_all": ela_all,
    "math_all": math_all}

    # Return results
    return score_dictionary