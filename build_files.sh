#!/bin/bash

# Install dependencies
pip3 install -r requirements.txt

# Collect static files (skip database migrations for prototype)
python3 manage.py collectstatic --noinput --clear